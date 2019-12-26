/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

//@module ProductDetails
define(
	'ProductDetails.Full.View'
,	[
		'ProductDetails.Base.View'
	,	'SC.Configuration'

	,	'ItemRelations.Related.View'
	,	'ItemRelations.Correlated.View'

	,	'ProductDetails.Information.View'

	,	'SocialSharing.Flyout.View'

	,	'product_details_full.tpl'

	,	'underscore'

	]
,	function (
		ProductDetailsBaseView
	,	Configuration

	,	ItemRelationsRelatedView
	,	ItemRelationsCorrelatedView

	,	ProductDetailsInformationView

	,	SocialSharingFlyoutView

	,	product_details_full_tpl

	,	_
	)
{
	'use strict';

	//@class ProductDetails.Full.View Handles the PDP and quick view @extend Backbone.View
	return ProductDetailsBaseView.extend({

		//@property {Function} template
		template: product_details_full_tpl

		//@property {Object} attributes List of HTML attributes applied by Backbone into the $el
	,	attributes: {
			'id': 'ProductDetails.Full.View'
		,	'class': 'view product-detail'
		}

	, events: {
			'click [name="custcol_casesize"]': 'cusSetCaseSizeOptions'
	}

	, cusSetCaseSizeOptions: function(e){
//console.log("cusSetCaseSizeOptions")
		var isSelected12 = jQuery('[name="custcol_casesize"]').is(':checked');
		var target = e.currentTarget;
		if(isSelected12)
			{	
			var caseSelected = target.getAttribute('data-label')
			,	sizeVal			= jQuery('[name=custcol_vf_bottlesize]:checked').val()
			,	sizeSelected		= jQuery('[name=custcol_vf_bottlesize]:checked').attr('data-label-'+sizeVal)
			,	soldbyVal			= jQuery('[name=custcol_vf_soldby]:checked').val()
			,	soldbySelected		= jQuery('[name=custcol_vf_soldby]:checked').attr('data-label-'+soldbyVal)
			//,	itemFields			= this.model.get('options').item.get('_optionsDetails').fields
			,   itemFields = this.model.get('options').models
			,  activeCaseOptions= []

				for(var i=0; itemFields!=null && i<itemFields.length; i++)
				{
					var attr = itemFields[i].attributes

					if(attr.cartOptionId == 'custcol_casesize')
					{
						
					//	sby=itemFields[i];
						for(var v=0; attr.values != null && v < attr.values.length; v++)
						{
							var values = attr.values[v];
							if(values.internalid){
								activeCaseOptions.push(values);
							}
						}
					}
				}

				var objMatrixItem = this.model.get('item').get('matrixchilditems_detail');

			if(!_.isEmpty(activeCaseOptions))
				{

					for(var i=0; objMatrixItem!=null && i<objMatrixItem.length; i++)
					{
						var bottleSize	= objMatrixItem[i].custitem_vf_bottlesize
						,   bottleSoldBy = objMatrixItem[i].custitemvf_sold_by
						,   bottleCase = objMatrixItem[i].custitem_owc_casesize;

						if(bottleSize == sizeSelected && bottleSoldBy == soldbySelected && bottleCase == caseSelected)
						{							
							var internalid		= objMatrixItem[i].internalid
							,	wineSource		= objMatrixItem[i].custitem_wine_source
							,	shippingMsg		= objMatrixItem[i].custitem_vf_shipping_message
							,	itemSKU			= objMatrixItem[i].itemid
							,	csoldBy			= objMatrixItem[i].custitem_owc_casesize
							,	sBy			= objMatrixItem[i].custitemvf_sold_by
							//,	isSpecialOrderItem	= objMatrixItem[i].custitem_onlinewithoutpo
							,	price			= objMatrixItem[i].onlinecustomerprice_detail.onlinecustomerprice_formatted
							,	itemLocation	= objMatrixItem[i].custitem_web_location
							,	listqtyAvailable	= objMatrixItem[i].custitem_livex_prearrival_qty
							,	caseSize		= !_.isUndefined(objMatrixItem[i].custitem_case_size) ? Number(objMatrixItem[i].custitem_case_size) : 0
							,	cartOptionId	= 'custcol_vf_soldby'

							,    salePrice = objMatrixItem[i].pricelevel3_formatted

							,    priceUnformatted = objMatrixItem[i].onlinecustomerprice_detail.onlinecustomerprice
							,    salePriceUnformatted = objMatrixItem[i].pricelevel3
							,	shipQtyStorage	= ''
							,	soldbyLabel		= (wineSource != "" && !_.isUndefined(wineSource)) ? wineSource : sBy
							,    custitem_owcpacksize = objMatrixItem[i].custitem_owc_casesize
							
							
							if(shippingMsg.indexOf('/') > -1){
								shipQtyStorage = shippingMsg.split('/');
								shipQtyStorage = shipQtyStorage[0];
							}

							// Get optionid from optionsDetails
							//-------------------------------------------------------------
							var soldby_options = _.findWhere(activeCaseOptions, {label: csoldBy})
							,	optionId		= soldby_options.internalid
							,	optionLabel		= soldby_options.label;
							//-------------------------------------------------------------
						
						var appendStr = soldbyLabel;

						if(sBy == 'LivEx')
						{
							jQuery('.case-size-'+optionId+'').parent().addClass('active').siblings().removeClass('active');
						
							var bottle_price = Number(priceUnformatted)/Number(custitem_owcpacksize);
							var fix_bottle_price = bottle_price.toFixed(2)
							var bottle_price_final = fix_bottle_price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
	

							if(listqtyAvailable<2)
							appendStr	+= ' $'+bottle_price_final+' <span class="sold-by-per-bottel-small">per bottle</span> <br/> '+listqtyAvailable+' case '+shipQtyStorage.toLowerCase();						
							else
							appendStr	+= ' $'+bottle_price_final+' <span class="sold-by-per-bottel-small">per bottle</span> <br/> '+listqtyAvailable+' cases '+shipQtyStorage.toLowerCase();						
							
							jQuery('.product-views-option-tile-price-selected').html(price+' <span class="sold-by-per-bottel-small">per case <br/>available by the case (owc)</span>' );							

							jQuery('.product-details-quantity-options-title').html('Case Qty');

							//console.log(appendStr);
							
							if(listqtyAvailable <2)
								listqtyAvailable += ' case'
							else
								listqtyAvailable += ' cases'
							
							var shpMsg = shippingMsg.toLowerCase().replace('/', " | ");
							jQuery('.productdetail-ship-in-hour').html( listqtyAvailable + ' ' + shpMsg );
							
							jQuery(".span-"+soldbyVal).html(appendStr);

							var qty = jQuery('#quantity').val()

							var itemTotal = Number(priceUnformatted)*Number(qty)
							var fixItemTotal = itemTotal.toFixed(2)
							var orderSubTotalFinal = fixItemTotal.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
		
							//console.log(orderSubTotalFinal)
							jQuery('.product-detail-total-price').html("$"+orderSubTotalFinal)
							
							var totalqty = parseFloat(qty) * parseFloat(bottleCase);
							if(totalqty<2)
							jQuery('#bottlestext').html('('+totalqty +' bottle)' );
							else
							jQuery('#bottlestext').html('('+totalqty +' bottles)' );
							
						}else
						{
							jQuery('.product-details-quantity-options-title').html('Qty');
						}
						}
					}
				}		
		
			}
	}
	
	,	bindings: _.extend({}, ProductDetailsBaseView.prototype.bindings, {})

		//@method initialize Override default method to update the url on changes in the current product
		//@param {ProductDetails.Full.View.Initialize.Options} options
		//@return {Void}
	,	initialize: function initialize ()
		{
			ProductDetailsBaseView.prototype.initialize.apply(this, arguments);

			this.model.on('change', this.updateURL, this);
		//	console.log(this.model);
		}

	,	childViews: _.extend({}, ProductDetailsBaseView.prototype.childViews, {
			'Correlated.Items': function ()
			{
				return new ItemRelationsCorrelatedView({
					itemsIds: this.model.get('item').get('internalid')
				,	application: this.application
				});

			}
		,	'Related.Items': function ()
			{
				return new ItemRelationsRelatedView({
					itemsIds: this.model.get('item').get('internalid')
				,	application: this.application
				});
			}
		,	'Product.Information': function ()
			{
				return new ProductDetailsInformationView({
					model: this.model
				});
			}
		,	'SocialSharing.Flyout': function ()
			{
				return new SocialSharingFlyoutView({});
			}
		})

		//@method destroy Override default method to detach from change event of the current product
		//@return {Void}
	,	destroy: function destroy ()
		{
			this.model.off('change');
			return this._destroy();
		}

		//@method showOptionsPusher Override parent method to allow hide/show the option's pusher on mobile depending on the configuration value: ItemOptions.maximumOptionValuesQuantityWithoutPusher
		//@return {Booelan}
	,	showOptionsPusher: function showOptionsPusher ()
		{
			var options_values_length = _.reduce(this.model.get('options').map(function (option)
												{
													if (_.isArray(option.get('values')))
													{
														var invalid_values = _.filter(option.get('values'), function (value)
															{
																return !value.internalid;
															});

														return option.get('values').length - invalid_values.length;
													}
													return 0;
												})
											,	function (memo, num)
												{
													return memo + num;
												}
											,	0);

			return options_values_length > Configuration.get('ItemOptions.maximumOptionValuesQuantityWithoutPusher',1);
		}
		, showoptiosIgift: function(){

			var modelItem=SC.Application("Shopping")._layoutInstance.currentView.model;
			   var   itemtype= modelItem.get('item').get('itemtype');	 
				 if(itemtype=="GiftCert"){
			 var	showOptions=false;
			 }else{
				 showOptions=true;
			 }
		  return showOptions
			}
		//@method getContext
		//@return {ProductDetails.Full.View.Context}
	,	getContext: function getContext ()
		{
			//@class ProductDetails.Full.View.Context @extend ProductDetails.Base.View.Context
			return _.extend(ProductDetailsBaseView.prototype.getContext.apply(this, arguments), {
				showOptions:this.showoptiosIgift()
			});
			//@class ProductDetails.Full.View
		}
	});
});

//@class ProductDetails.Full.View.Initialize.Options @extend ProductDetails.Base.View.Initialize.Options
