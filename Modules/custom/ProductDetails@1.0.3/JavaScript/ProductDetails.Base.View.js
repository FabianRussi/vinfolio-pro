/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

//@module ProductDetails
define(
	'ProductDetails.Base.View'
,	[
		'Backbone.FormView'

	,	'GlobalViews.Message.View'

	,	'Session'

	,	'Cart.AddToCart.Button.View'

	,	'ProductLine.Stock.View'
	,	'ProductViews.Price.View'
	,	'ProductLine.Sku.View'

	,	'ProductDetails.Options.Selector.View'
	,	'ProductDetails.Information.View'
	,	'ProductDetails.Quantity.View'
	,	'ProductDetails.ImageGallery.View'
	,	'ProductDetails.AddToProductList.View'
	,	'ProductLine.StockDescription.View'
	,	'Product.SCASaleTypeView.View'

	,	'Profile.Model'
	,	'Tracker'

	,	'SC.Configuration'
	,	'Backbone.CompositeView'
	,	'Backbone.Validation.callbacks'
	,	'RecentlyViewedItems.Collection'

	,	'Backbone'
	,	'jQuery'
	,	'underscore'
	,	'Utils'

	,	'UrlHelper'
	,	'jQuery.scPush'
	]
,	function (
		BackboneFormView

	,	GlobalViewsMessageView

	,	Session

	,	CartAddToCartButtonView

	,	ProductLineStockView
	,	ProductViewsPriceView
	,	ProductLineSkuView

	,	ProductDetailsOptionsSelectorView
	,	ProductDetailsInformationView
	,	ProductDetailsQuantityView
	,	ProductDetailsImageGalleryView
	,	ProductDetailsAddToProductListView
	,	ProductLineStockDescriptionView
	,	ProductSCASaleTypeView

	,	ProfileModel
	,	Tracker

	,	Configuration
	,	BackboneCompositeView
	,	BackboneValidationCallbacks
	,	RecentlyViewedItemsCollection

	,	Backbone
	,	jQuery
	,	_
	,	Utils
	)
{
	'use strict';

	//@class ProductDetails.Base.View Handles the PDP and quick view @extend Backbone.View
	var ProductDetailsBaseView = Backbone.View.extend(
		{
			//@property {String} title
			title: ''

			//@property {String} page_header
		,	page_header: ''

			//@property {String} modalClass
		,	modalClass: 'global-views-modal-large'

			//@property {Boolean} showModalPageHeader
		,	showModalPageHeader: false

			//@property {Object} baseEvents
		,	baseEvents: {
				'submit [data-action="submit-form"]': 'mainActionHandler'
			,   'click [data-action="custom-redirect"]': 'customRedirect'		
			}

		,	bindings: {
				//set quantity
				'[name="quantity"]': {
					observe: 'quantity'
				,	setOptions: {
						validate: true
					,	silent: false
					}
				,	onSet: function (quantity_str)
					{
						return parseInt(quantity_str, 10);
					}
				,	events: ['blur', 'change']
				}
				//enable/disable minus mobile quantity button
			,	'[data-type="product-details-quantity-remove"]': {
					observe: 'quantity'
				,	update: function ($el, value)
					{
						return $el.attr('disabled', value <= 1);
					}
				}
			}

			//@method initialize
			//@param {ProductDetails.Base.View.Initialize.Options} options
			//@return {Void}
		,	initialize: function initialize (options)
			{
				this.events = _.extend(this.events || {}, this.baseEvents);
				Backbone.View.prototype.initialize.apply(this, arguments);

				this.application = options.application;

				this.generateViewBindings();

				BackboneCompositeView.add(this);

				BackboneFormView.add(this, {
					noCloneModel: true
				});

				var self = this;

				//Here we wrap the areAttributesValid method of the transaction line so when child views or injected views validate the model using this method
				//this view is notified and can show the error messages.
				//This is thanks to the poor "API" Backbone.validation offer.
				this.model.areAttributesValid = _.wrap(this.model.areAttributesValid, function (fn, attributes, validators)
				{
					var are_attr_valid = fn.apply(self.model, [attributes, validators])
					,	current_validation = _.extend({}, self.model.validation)
					,	attribute_validation_result;

					_.extend(self.model.validation, validators);

					//In order to properly show the validation on message in the UI we need to validate against the temporal properties on the model
					//that are those binded to the template! (See method generateViewBindings)
					if (~_.indexOf(attributes, 'options'))
					{
						self.model.get('options').map(function (option)
						{
							attributes.push(option.get('cartOptionId'));
						});
					}

					_.each(attributes, function (attribute)
					{
						attribute_validation_result = self.model.preValidate(attribute, self.model.get(attribute));

						if (attribute_validation_result)
						{
							//Here we assume that the default selector 'name' is being used
							BackboneValidationCallbacks.invalid(self, attribute, attribute_validation_result, 'name');
						}
						else
						{
							BackboneValidationCallbacks.valid(self, attribute, 'name');
						}
					});

					self.model.validation = current_validation;

					return are_attr_valid;
				});

				if (ProductDetailsBaseView.mainActionView)
				{
					this.mainActionViewInstance = new ProductDetailsBaseView.mainActionView({
						application: this.options.application
					,	model: this.model
					});
				}
			}

			//@method mainActionHandler Handle the submit action
			//@param {jQuery.Event} e
			//@return {Boolean}
		,	mainActionHandler: function mainActionHandler (e)
			{
				if (ProductDetailsBaseView.mainActionView)
				{
					return this.mainActionViewInstance.submitHandler(e);
				}
				else
				{
					e.preventDefault();
					e.stopPropagation();
					return false;
				}
			}

			//@method showContent Override default method to track current product, add product to viewed ones and start the pusher
			//@return {jQuery.Deferred}
		,	showContent: function showContent ()
			{
				var self = this;

				return Backbone.View.prototype.showContent.apply(this, arguments).done(function ()
				{
					Tracker.getInstance().trackProductView(self.model);
					RecentlyViewedItemsCollection.getInstance().addHistoryItem(self.model.get('item'));
					self.$('[data-action="pushable"]').scPush();
				});
			}

			//@method generateViewBindings Extend the bindings properties by adding all the bindings to all the temporal option properties
			//@return {Void}
		,	generateViewBindings: function generateViewBindings ()
			{
				var self = this
				,	option_bindings = self.model.get('options').reduce(function (bindings, option)
					{
						var cart_option_id = option.get('cartOptionId');

						//Bind to set options
						bindings['[name="' + cart_option_id + '"]'] = {
								observe: option.get('cartOptionId')		// << TEMP PROPERTY TO MAKE EASY VALIDATION (READ HERE)
							,	setOptions: {
									validate: true
								,	silent: true
								}
							,	onSet: function (value, options)
								{
									var view =  options.view
									,	product_model = view.model
									,	option = product_model.get('options').findWhere({cartOptionId: options.observe})
									,	current_value = option.get('value') && option.get('value').internalid;

									if (!option.get('isMandatory') && current_value === value && view.$(options.selector).attr('type') === 'radio')
									{
										// unset value.
										value = null;
									}

									product_model.setOption(options.observe, value);

									return value;
								}
							,	events: [self.getBindingEventForOption(option)]
						};
						//Binding for the label (selected value)
						bindings['[data-value="'+ cart_option_id +'"]'] = {
								observe: option.get('cartOptionId')
							,	onGet: function ()
								{
									return option.get('value') ? option.get('value').label : '';
								}
						};

						_.each(option.get('values'), function(value)
						{
							if (value.internalid) // Exclude the " - Select -" option
							{
								//Bind for mute and active options
								bindings['[data-label="label-' + cart_option_id + '"][value="' + value.internalid + '"]'] = {
									attributes: [{
										name: 'class'
									,	observe: option.get('cartOptionId')
									,	onGet: function ()
										{
											if (!_.findWhere(option.get('values'), {internalid: value.internalid}).isAvailable)
											{
												return 'muted';
											}
											else if (value.internalid === (option.get('value') && option.get('value').internalid))
											{
												return 'active';
											}
											else
											{
												return '';
											}
										}
									}]
								};
							}

						});

						return bindings;
					}, {});

				_.extend(this.bindings, option_bindings);
			}

			//@method getBindingEventForOption Auxiliary method used to allows different bindings depending on the option type
			//@param {Transaction.Line.Option.Model} option
			//@return {String} Event name used to make the binding with stickIt
		,	getBindingEventForOption: function getBindingEventForOption (option)
			{
				return ProductDetailsBaseView.optionBindEventByType[option.get('type').toLowerCase()] || 'blur';
			}

			//@method updateURL Updates the current URL based on the selected attributes of the current line
			//@return {Void} This method does not return nothing as it only update the URL without navigating
		,	updateURL: function updateURL ()
			{
				Backbone.history.navigate(this.model.generateURL(), {replace: true});

				Tracker.getInstance().trackProductView(this.model);
			}

			// @method getBreadcrumbPages Returns the breadcrumb for the current page based on the current item
			// @return {Array<BreadcrumbPage>} breadcrumb pages
		,	getBreadcrumbPages: function getBreadcrumbPages ()
			{
				return this.model.get('item').get('_breadcrumb');
			}

			//@method render Override default render method to initialize plugins and set page title and page_header
			//@return {Void}
		,	render: function render ()
			{
				this.title = this.model.get('item').get('_pageTitle');
				this.page_header = this.model.get('item').get('_pageHeader');

				this._render();
			}

			// @method getMetaKeywords
			// @return {String}
		,	getMetaKeywords: function getMetaKeywords ()
			{
				// searchkeywords is for alternative search keywords that customers might use to find this item using your Web store's internal search
				// they are not for the meta keywords
				// return this.model.get('_keywords');
				return this.getMetaTags().filter('[name="keywords"]').attr('content') || '';
			}

			// @method getMetaTags
			// @return {Array<HTMLElement>}
		,	getMetaTags: function getMetaTags ()
			{
				return jQuery('<head/>').html(
					jQuery.trim(
						this.model.get('item').get('_metaTags')
					)
				).children('meta');
			}

			// @method getMetaDescription
			// @return {String}
		,	getMetaDescription: function getMetaDescription ()
			{
				return this.getMetaTags().filter('[name="description"]').attr('content') || '';
			}

		,	showOptionsPusher: function showOptionsPusher ()
			{
				return false;
			}

		,	contextData: {
				'product': function ()
				{
					return this.model;
				}
			,	'item': function ()
				{
					return this.model.get('item');
				}
			}

		,	validateSoldbyOptions: function (bottleSizeLabel, soldByLabel)
			{
				var viewSCASaleType = new ProductSCASaleTypeView;
				var objSCASaleTypes = viewSCASaleType.getCustomList();
				var objMatrixItem = this.model.get('item').get('matrixchilditems_detail');
				var isValidSoldBy = false;

				for(var i=0; objMatrixItem!=null && i<objMatrixItem.length; i++)
				{
					var isSpecialOrderItem	= objMatrixItem[i].custitem_onlinewithoutpo
					,	qtyAvailable	= objMatrixItem[i].quantityavailable
					,	liveExQty		= _.isUndefined( objMatrixItem[i].custitem_livex_prearrival_qty ) ? 0 : objMatrixItem[i].custitem_livex_prearrival_qty
					,	soldBy			= objMatrixItem[i].custitemvf_sold_by
					,	bottleSize		= objMatrixItem[i].custitem_vf_bottlesize
					,	scaSaleTypeText	= objMatrixItem[i].custitem_vf_scasaletype
					,	scaSaleType		= '';

					if( soldByLabel == soldBy && bottleSizeLabel == bottleSize)
					{

						if(objSCASaleTypes != null && objSCASaleTypes.length > 0)
						{
							var list = _(objSCASaleTypes).find(function(x) {
										return x.name == scaSaleTypeText;
									});
							if(list){
								scaSaleType = Number(list.id);
							}
						}

						var qty = 0;
						if( scaSaleType == 1 || scaSaleType == 4 || scaSaleType == 5 || scaSaleType == 8 ){
							qty = qtyAvailable;
						}
						else if( scaSaleType == 2 || scaSaleType == 3 || scaSaleType == 6 || scaSaleType == 7 ){
							qty = liveExQty;
						}

						if(qty > 0)	isValidSoldBy = true;
					}
				}
				return isValidSoldBy;
			}
		,	validateSoldbyOptionsNew: function (bottleSizeLabel, soldByLabel)
			{
				var viewSCASaleType = new ProductSCASaleTypeView;
				var objSCASaleTypes = viewSCASaleType.getCustomList();
				var objMatrixItem = this.model.get('item').get('matrixchilditems_detail');
				var isValidSoldBy = false;
				var price=[];
				var nobj=objMatrixItem.filter(function(item){
					var isSpecialOrderItem	= item.custitem_onlinewithoutpo
					,	qtyAvailable	= item.quantityavailable
					,	liveExQty		= _.isUndefined( item.custitem_livex_prearrival_qty ) ? 0 : item.custitem_livex_prearrival_qty
					,	soldBy			= item.custitemvf_sold_by
					,	bottleSize		= item.custitem_vf_bottlesize
					,	scaSaleTypeText	= item.custitem_vf_scasaletype
					,	scaSaleType		= '';



						if(objSCASaleTypes != null && objSCASaleTypes.length > 0)
						{
							var list = _(objSCASaleTypes).find(function(x) {
										return x.name == scaSaleTypeText;
									});
							if(list){
								scaSaleType = Number(list.id);
							}
						}

						var qty = 0;
						if( scaSaleType == 1 || scaSaleType == 4 || scaSaleType == 5 || scaSaleType == 8 ){
							qty = qtyAvailable;
						}
						else if( scaSaleType == 2 || scaSaleType == 3 || scaSaleType == 6 || scaSaleType == 7 ){
							qty = liveExQty;
						}

						if(qty > 0){
							price.push(item.onlinecustomerprice_detail.onlinecustomerprice)
							return item;
						}

				}).sort(function(a,b){
					var order=['PRODUCER','COLLECTOR']
					var aPrice=a.onlinecustomerprice_detail.onlinecustomerprice,
					bPrice=b.onlinecustomerprice_detail.onlinecustomerprice,
					aLabel=a.custitem_wine_source,
					bLabel=b.custitem_wine_source;

					var indA = order.indexOf( aLabel );
					var indB = order.indexOf( bLabel );
					if ( indA === indB ){
						return +aPrice - +bPrice
					}

					return indA - indB;
				});
//console.log("validateSoldbyOptionsNew")
				return nobj.length?nobj[0]:null;
			}


		,   filterSortedChilds: function(sorted_size_filters,sorted_child_matrix)
			{
					  for (var b = sorted_child_matrix.length - 1; b >= 0; b--) {
					    for (var c = 0; c < sorted_size_filters.length; c++) {
					    	 if (sorted_child_matrix[b].custitem_vf_bottlesize == sorted_size_filters[c]) {
						         sorted_child_matrix.splice(b, 1);
						        }
					      }
					    }
			}

			//@property {ChildViews} childViews
		,	childViews: {
				'Product.Options': function ()
				{


									var facet_page = $.cookie('facetresultspage')
					,   facet_page_session = $.cookie('selectedfacetvalue')
					,   child_matrix_items = this.model.attributes.item.get('matrixchilditems_detail')
					,   item_options = this.model.get('options').findWhere({cartOptionId: 'custcol_vf_bottlesize'})
					,   activeOptions = []
					,   default_option
					,	selected_custcol8_option = ''
					,	selected_custcol8_internalid = ''
					,   sorted_child_matrix
					,   sorted_size_filters = ''

					//sorting the child matrix items to get the items based size ascending order
					var sort_by_bottlesize = function(a,b)
					{
						var aSize = a.custitem_vf_bottlesize
						,   bSize = b.custitem_vf_bottlesize
						return (aSize-bSize);
					}

					if( !_.isUndefined(child_matrix_items) )
					sorted_child_matrix = child_matrix_items.sort(sort_by_bottlesize)


					if(facet_page_session !=null && facet_page_session !='')
					{
						var sort_by_sizefilter = function(a,b)
						{
							return (a-b);
						}
					sorted_size_filters = facet_page_session.sort(sort_by_sizefilter)
					}



					if(!_.isUndefined(item_options) && item_options.attributes.cartOptionId == 'custcol_vf_bottlesize')
					{
						for(var v=0; item_options.attributes.values != null && v < item_options.attributes.values.length; v++)
						{
							var values = item_options.attributes.values[v];
							if(values.internalid){
								activeOptions.push(values);
							}
						}
					}

				var noFilterApplied = false
				,   lowestBottleQtyAvailable = false
				,   BottleQtyAvailable = false
				,   BottleNoQtyAvailable = false
				,   flag = false
				,   lowestBottleOptionID
				,   lowestBottleOptionLabel
				,   noMultiFilteredSizeAvaiable = false
				,   multifilteredSizeAvailable = false

			//	console.log(sorted_size_filters)
			//	console.log(facet_page)

			if(facet_page !=null && facet_page !='')
			{
				if(sorted_size_filters !=null && sorted_size_filters !='')
				{
					 if(sorted_size_filters.length <= 1)
					 {
					 	var soldby_options_singlefilter = _.findWhere(activeOptions, {label: sorted_size_filters[0]})
						,	optionId		= soldby_options_singlefilter.internalid
						,	optionLabel		= soldby_options_singlefilter.label;
						selected_custcol8_option = {internalid: optionId, label: optionLabel};
					    selected_custcol8_internalid = optionId;
					 }
					 else
					 {
					 	//console.log('multi filters applied')

					 	for(var a=0;a<sorted_size_filters.length;a++)
						{
							var facet_size = sorted_size_filters[a];
							for(var i=0; sorted_child_matrix!=null && i<sorted_child_matrix.length; i++)
							{
								var bottleSize	= sorted_child_matrix[i].custitem_vf_bottlesize
								,   scaSaleType	= sorted_child_matrix[i].custitem_vf_scasaletype
								,   liveExQty	= _.isUndefined(sorted_child_matrix[i].custitem_livex_prearrival_qty ) ? 0 : sorted_child_matrix[i].custitem_livex_prearrival_qty
								,   qtyAvailable = sorted_child_matrix[i].quantityavailable
								,   isSpecialOrderItem = sorted_child_matrix[i].custitem_onlinewithoutpo

								if(facet_size == bottleSize)
								{
										var soldby_options = _.findWhere(activeOptions, {label: bottleSize})
									,	optionId		= soldby_options.internalid
									,	optionLabel		= soldby_options.label;

									var qty =0;
									if( scaSaleType == 'Retail In Stock' || scaSaleType == 'PSS Collector' || scaSaleType == 'PSS 3rd Party' || scaSaleType == 'Indirect In Stock' ){
										qty = qtyAvailable;
									 }
									 else if( scaSaleType == 'Retail Pre Arrival' || scaSaleType == 'Retail Live Ex' || scaSaleType == 'Marketplace' || scaSaleType == 'Indirect Pre Arrival' ){
										qty = liveExQty;
									 }

									// console.log('multifiltered qty '+qty)
									 if(Number(qty) > 0 || (scaSaleType == 'Retail Pre Arrival' && isSpecialOrderItem))
									 {
									 	if(bottleSize&&optionLabel != 375)
										 	{
											 selected_custcol8_option = {internalid: optionId, label: optionLabel};
											 selected_custcol8_internalid = optionId;
											 multifilteredSizeAvailable = true;
											 break;
											}
											else
											{
											console.log('375 has stock')
											}
									 }
									 else
									 {
										noMultiFilteredSizeAvaiable = true;
										//var spliced = sorted_child_matrix.splice(i,1);
									 }

								}

							}
							if(multifilteredSizeAvailable)
								break;
						}
					 }
				}
				else
				{
				 noFilterApplied = true;
				}


				if(noMultiFilteredSizeAvaiable&& (selected_custcol8_internalid == ''))
				{
					var array_sorted_size_filters = $.map(sorted_size_filters, function(value, index) {
    					return [array_sorted_size_filters];
						});
					if(array_sorted_size_filters.includes(375))
					{
						var position = array_sorted_size_filters.indexOf(375);
						array_sorted_size_filters.slice(position,1)
					}
					this.filterSortedChilds(array_sorted_size_filters,sorted_child_matrix);
				}


				//console.log(sorted_child_matrix)

				if(noFilterApplied || (noMultiFilteredSizeAvaiable&& (selected_custcol8_internalid == '')))
				{
					//console.log('2nd iteration')
					if(!_.isEmpty(activeOptions))
						{
							if(!_.isEmpty(sorted_child_matrix))
							{
							for(var i=0; sorted_child_matrix!=null && i<sorted_child_matrix.length; i++)
								{
									var bottleSize	= sorted_child_matrix[i].custitem_vf_bottlesize
									,   scaSaleType	= sorted_child_matrix[i].custitem_vf_scasaletype
									,   liveExQty	= _.isUndefined(sorted_child_matrix[i].custitem_livex_prearrival_qty ) ? 0 : sorted_child_matrix[i].custitem_livex_prearrival_qty
									,   qtyAvailable = sorted_child_matrix[i].quantityavailable
									,   isSpecialOrderItem = sorted_child_matrix[i].custitem_onlinewithoutpo
									,   child_matrix_id = sorted_child_matrix[i].itemid

									var soldby_options = _.findWhere(activeOptions, {label: bottleSize})
									,	optionId		= soldby_options.internalid
									,	optionLabel		= soldby_options.label;


										var qty =0;
										if( scaSaleType == 'Retail In Stock' || scaSaleType == 'PSS Collector' || scaSaleType == 'PSS 3rd Party' || scaSaleType == 'Indirect In Stock' ){
											qty = qtyAvailable;
										 }
										 else if( scaSaleType == 'Retail Pre Arrival' || scaSaleType == 'Retail Live Ex' || scaSaleType == 'Marketplace' || scaSaleType == 'Indirect Pre Arrival' ){
											qty = liveExQty;
										 }

										// console.log(qty)
										  if(Number(qty) > 0 || (scaSaleType == 'Retail Pre Arrival' && isSpecialOrderItem))
										 {
										 	BottleQtyAvailable = true;

										 	if(bottleSize&&optionLabel != 375)
										 	{
										 	 selected_custcol8_option = {internalid: optionId, label: optionLabel};
										     selected_custcol8_internalid = optionId;
										     flag = true;
										     break;
										 	}else
										 	{
										 		lowestBottleQtyAvailable = true;
										 		lowestBottleOptionID = optionId;
										 		lowestBottleOptionLabel = optionLabel;
										 	}
										 }else
										 {
										 	BottleNoQtyAvailable = true;
										 }
								}
							}
							if((lowestBottleQtyAvailable && BottleNoQtyAvailable) && flag == false)
								{
									selected_custcol8_option = {internalid: lowestBottleOptionID, label: lowestBottleOptionLabel};
									selected_custcol8_internalid = lowestBottleOptionID;
								}
							else if((BottleNoQtyAvailable)&& flag == false)
								{console.log('out of stock')}
						}
				}


		      this.model.set('custcol_vf_bottlesize', selected_custcol8_internalid);

			}



				var size_options = activeOptions
				,   unavailable_sizes = []
				,   available_sizes = []

				//looping through the sizes to pass on the available and unavailable sizes
				_.each(size_options, function (size_option)
				{
					var opt = size_option
					var option_size = opt.label
					
					_.each(child_matrix_items, function (child_matrix)
					{
						var bottleSize = child_matrix.custitem_vf_bottlesize
						if(option_size == bottleSize)
						{
							var available_list_qty = child_matrix.custitem_livex_prearrival_qty
							,   inventory_qty = child_matrix.quantityavailable
							if(Number(inventory_qty) > 0 || Number(available_list_qty) > 0)
							{
								if(available_sizes.indexOf(bottleSize) == -1)
								available_sizes.push(bottleSize);
							}
							else if(Number(inventory_qty) < 1 && Number(available_list_qty) < 1)
							{
								if(available_sizes.indexOf(bottleSize) == -1 && unavailable_sizes.indexOf(bottleSize) == -1)
								unavailable_sizes.push(bottleSize);
							}
						}
					});
				});
				

				  for (var i = unavailable_sizes.length - 1; i >= 0; i--) {
				    for (var j = 0; j < available_sizes.length; j++) {
				      if (unavailable_sizes[i] === available_sizes[j]) {
				        unavailable_sizes.splice(i, 1);
				        }
				      }
				    }

			console.log(available_sizes)
			console.log(unavailable_sizes)		    

			if(((BottleNoQtyAvailable)&& flag == false ) || (facet_page ==null || facet_page ==''))
			{
					// START : DEV - Set/selected the first bottle size (custcol_vf_bottlesize) & sold by (custcol_vf_soldby) option
					/* Also, set the custcol_vf_bottlesize default option in ProductViews.Option.View.js */
					var option = this.model.get('options').findWhere({cartOptionId: 'custcol_vf_bottlesize'})
					,	selected_custcol8_option = ''
					,	selected_custcol8_internalid = '';
					if( !_.isUndefined(option) && !_.isUndefined(option.get('values')) )
					{
						selected_custcol8_option = option.get('value');
						//console.log(selected_custcol8_option)
						if( _.isUndefined(selected_custcol8_option) )
						{
							for(var i=0; i<option.get('values').length; i++)
							{
								var value = option.get('values')[i]
								if (value.internalid && (value.label == available_sizes[0])) // Exclude the " - Select -" option
								{
									selected_custcol8_option = {internalid: value.internalid, label: value.label};
									selected_custcol8_internalid = value.internalid;
									break;

								}
							}
							this.model.set('custcol_vf_bottlesize', selected_custcol8_internalid);
						}
						else
						{
							//if the selected size is unavailable
							if(available_sizes.indexOf(selected_custcol8_option) == -1)
								{
									for(var ai=0; ai<option.get('values').length; ai++)
										{
											var valuea = option.get('values')[ai]
											
											if (valuea.internalid && (valuea.label == available_sizes[0])) // Exclude the " - Select -" option
											{
												selected_custcol8_option = {internalid: valuea.internalid, label: valuea.label};
												selected_custcol8_internalid = valuea.internalid;
												break;
											}
										}
									this.model.set('custcol_vf_bottlesize', selected_custcol8_internalid);	
								}
						}
					}
			}


					var option = this.model.get('options').findWhere({cartOptionId: 'custcol_vf_soldby'})
					,	selected_custcol11_option = ''
					,	selected_custcol11_internalid = '';
					if( !_.isUndefined(option) && !_.isUndefined(option.get('values')) )
					{
						selected_custcol11_option = option.get('value');

						var sortedItem=this.validateSoldbyOptionsNew();
						if( _.isUndefined(selected_custcol11_option) )
						{
							for(var i=0; i<option.get('values').length; i++)
							{
								var value = option.get('values')[i]
								if (value.internalid) // Exclude the " - Select -" option
								{
									// var isValid = this.validateSoldbyOptions(selected_custcol8_option.label, value.label);
									var isValid = sortedItem&&(sortedItem.custitem_vf_bottlesize==selected_custcol8_option.label&&sortedItem.custitemvf_sold_by==value.label);

									if(value.label.indexOf('Retail') > -1 && isValid)
									{
										selected_custcol11_option = {internalid: value.internalid, label: value.label};
										selected_custcol11_internalid = value.internalid;
										break;
									}
									else if(isValid)
									{
										selected_custcol11_option = {internalid: value.internalid, label: value.label};
										selected_custcol11_internalid = value.internalid;
										break;
									}
								}
							}
							this.model.set('custcol_vf_soldby', selected_custcol11_internalid);
						}
					}
					// END : DEV - Set/selected the first bottle size (custcol_vf_bottlesize) & sold by (custcol_vf_soldby) option
					//console.log(unavailable_sizes)
					return new ProductDetailsOptionsSelectorView({
						model: this.model
					,	application: this.application
					,	show_pusher: this.showOptionsPusher()
					,	show_required_label: this.model.get('item').get('itemtype') === 'GiftCert'
					,	default_custcol11_option: selected_custcol11_option
					,	default_custcol8_option: selected_custcol8_option
					,	origin: this.inModal ? 'PDPQUICK' : 'PDPFULL'
					,   available_sizes: available_sizes
				 	,   unavailable_sizes: unavailable_sizes
				 });

				}
			,	'Product.Price': function ()
				{
					return new ProductViewsPriceView({
						model: this.model
					,	origin: this.inModal ? 'PDPQUICK' : 'PDPFULL'
					});
				}
			,	'MainActionView': function ()
				{
					return this.mainActionViewInstance && this.mainActionViewInstance;
				}

			,	'Product.Stock.Info': function ()
				{
					return new ProductLineStockView({
						model: this.model
					});
				}

			,	'Product.Sku': function ()
				{
					return new ProductLineSkuView({
						model: this.model
					});
				}
			,	'Quantity': function ()
				{
					return new ProductDetailsQuantityView({
						model:this.model
					});
				}
			,	'Product.ImageGallery': function ()
				{
					return new ProductDetailsImageGalleryView({
						model:this.model
					});
				}
			,	'GlobalViewsMessageView.WronglyConfigureItem': function ()
				{
					return new GlobalViewsMessageView({
						message: _.translate('<b>Warning</b>: This item is not properly configured, please contact your administrator.')
					,	type: 'warning'
					});
				}
			,	'AddToProductList': function ()
				{
					return new ProductDetailsAddToProductListView({
						model: this.model
					,	application: this.options.application
					});
				}
			,	'StockDescription': function ()
				{
					return new ProductLineStockDescriptionView({
						model: this.model
					});
				}
			}

			//@method customRedirect
		//method to redirect to filter page when there are special character in custitem_producer
		,  customRedirect: function customRedirect(e)
			{
				var target = e.target
				,   hashtag = target.getAttribute('data-hashtag')
				,   redirectURL = Session.get('touchpoints.home')
			
				window.location.href = redirectURL+hashtag
			}
					
			//@method getContext
			//@return {ProductDetails.Base.View.Context}
		,	getContext: function ()
			{
				var item_model	= this.model.get('item')
				,	wine_producer_url = ''
				,	facets		= item_model.get('facets');
				if( !_.isUndefined(facets) )
				{
					var producer = _(facets).find(function(x) { return x.id == 'custitem_producer'; });
					if( !_.isUndefined(producer) ){
						if( !_.isUndefined(producer.values) ){
							var prVals = _(producer.values).find(function(x) { return x.label == item_model.get('custitem_producer'); });
							if(prVals && !_.isUndefined(prVals) && prVals.url)
							wine_producer_url = '/' + producer.url + '/' + prVals.url;
						}
					}
				}
				// console.log('url: ',wine_producer_url);


				//fix for the see all wines when there is % in the url link
				var regex = '%'
				,   redirect = false
				,   domain = window.location.hostname
				,   wine_producer_url_final = ''

				//console.log(wine_producer_url)

				if(wine_producer_url.indexOf('%') > -1)
				{
					redirect = true
					wine_producer_url_final = wine_producer_url.replace(/%/g, "%25");
				}else
				{
					wine_producer_url_final = wine_producer_url
				}

				//console.log(item_model.attributes.itemid)

				// Get other vintages
				var itemId = item_model.get('internalid');
				var other_vintages = [];
				if(item_model.get('custitem_vintage_list') != ""){
					other_vintages = JSON.parse(item_model.get('custitem_vintage_list'));
				}else{
					jQuery.ajax({
						dataType: "json",
						url: "/app/site/hosting/scriptlet.nl?script=customscript_get_item_stock&action=othervintages&deploy=1&id="+itemId,
						data: '',
						async: false,
						success: function (jData){ other_vintages = jData; }
					});
				}
				// console.log(item_model)
				var is_collector_data = false;
				if(item_model.get('custitem_item_bottles_owned') || item_model.get('custitem_item_collector') || item_model.get('custitem_item_average_collector_rating'))
					is_collector_data = true;

				// Dev - Show default price for Non-Matrix item
				var is_matrix_item	= !_.isUndefined(item_model.get('matrixchilditems_detail')) ? true : false
				,	totalPriceStr1		= '';
				if(!is_matrix_item){
					var price_container_object = this.model.getPrice();
					totalPriceStr1 = price_container_object.price_formatted;
				}else{
					var price_container_object = this.model.getPrice();
					var total_price = Number(price_container_object.price) * this.model.get('quantity');
					var formattedPrice = Utils.formatCurrency(total_price);
					totalPriceStr1 = formattedPrice;

				}

				//console.log(item_model.get('custitem_producer'))

				var showMessage = false,
				country = "",
				region = "";
				
				if(this.model.get('item'))
				{
					country = this.model.get('item').get('custitem_vf_country');
					region = this.model.get('item').get('custitem_region');
				}
				
				// Spain Germany France
				// ! Champagne !France
				
				if(country == 'Spain' || country == 'Germany' || country == 'France')
				{
					if(country == 'France' && region == 'Champagne')
					{
					showMessage = false;
					}else{
						showMessage =  true;
					}
					
				}
				//@class ProductDetails.Base.View.Context
				return {
					//@property {Transaction.Line.Model} model
					model: this.model
					//@property {String} pageHeader
				,	pageHeader: this.page_header
					//@property {String} itemUrl
				,	itemUrl: item_model.get('_url') + this.model.getQuery()
					//@property {Boolean} isItemProperlyConfigured
				,	isItemProperlyConfigured: item_model.isProperlyConfigured()
					//@property {Boolean} isPriceEnabled
				,	isPriceEnabled: !ProfileModel.getInstance().hidePrices()
					//@property {Boolean} isWA
				,	isWA: !!item_model.get('custitem_item_wa')
					//@property {Boolean} isIWC
				,	isIWC: !!item_model.get('custitem_item_iwc')
					//@property {Boolean} isWS
				,	isWS: !!item_model.get('custitem_item_ws')
					//@property {Boolean} isJR
				,	isJR: !!item_model.get('custitem_item_jr')
					//@property {Boolean} isJS
				,	isJS: !!item_model.get('custitem_item_js')
					//@property {Boolean} isOtherVintages
				,	isOtherVintages: (other_vintages!=null && other_vintages != '') ? true : false
					//@property {Array} otherVintages
				,	otherVintages: other_vintages
					//@property {Boolean} isWineProducer
				,	isWineProducer: !!item_model.get('custitem_producer')
					//@property {String} wineProducerURL
				,	wineProducerURL: wine_producer_url_final
					//@property {Boolean} isCollectorData
				,	isCollectorData: is_collector_data
					//@property {String} itemPrice
				,	itemPrice: totalPriceStr1

				, hasSpecialCharRedirect : redirect

				, appendDomain : domain

				, itemNameImage: item_model.attributes.itemid
				, prod_price : item_model.get('onlinecustomerprice_detail').onlinecustomerprice_formatted
				, prod_image : item_model.getImages().length>0?item_model.getImages()[0].url:""
				, showMessage: showMessage
				};
				//@class ProductDetails.Base.View
			}
		}
		//Static properties
	,	{
			//@property {ProductDetails.Base.View.OptionBinding} optionBindEventByType
			//@static
			optionBindEventByType: {
				//@class ProductDetails.Base.View.OptionBinding This class associated an option type with the event used to set the option's value
				// @extend Dictionary<String, String>
				'select': 'change'
			,	'text': 'blur'
			,	'date': 'change'
			}
			//@class ProductDetails.Base.View

			//@method addMainActionView Allows to add a BackboneView constructor as the view that will perform the main action.
			//@param {Backbone.View} main_action_view
			//@return {Void}
			//@static
		,	addMainActionView: function (main_action_view)
			{
				ProductDetailsBaseView.mainActionView = main_action_view;
			}

			//@method getMainActionView Allows to retrieve the current set BackboneView constructor used as the view that will perform the main action.
			//@return {Backbone.View?}
			//@static
		,	getMainActionView: function ()
			{
				return ProductDetailsBaseView.mainActionView;
			}
		}
	);

	ProductDetailsBaseView.addMainActionView(CartAddToCartButtonView);

	return ProductDetailsBaseView;
});

//@class ProductDetails.Base.View.Initialize.Options
//@property {Product} model
//@property {String} baseUrl
//@property {ApplicationSkeleton} application
