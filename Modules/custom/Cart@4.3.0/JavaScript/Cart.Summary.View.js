/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// @module Cart
define(
	'Cart.Summary.View'
,	[
		'SC.Configuration'
	,	'Cart.PromocodeForm.View'
	,	'Backbone.CompositeView'
	,	'Backbone.CollectionView'
	,	'GlobalViews.FormatPaymentMethod.View'
	,	'Profile.Model'
	,	'Cart.Promocode.List.View'
	,	'LivexResponse.View'
	,	'Session'

	,	'cart_summary.tpl'
	,	'cart_summary_gift_certificate_cell.tpl'

	,	'underscore'
	,	'Backbone'
	]
,	function (
		Configuration
	,	CartPromocodeFormView
	,	BackboneCompositeView
	,	BackboneCollectionView
	,	GlobalViewsFormatPaymentMethodView
	,	ProfileModel
	,	CartPromocodeListView
	,	LivexResponseView
	,	Session

	,	cart_summary_tpl
	,	cart_summary_gift_certificate_cell_tpl

	,	_
	,	Backbone
	)
{
	'use strict';

	// @class Cart.Summary.View @extends Backbone.View
	return Backbone.View.extend({

		// @property {Function} template
		template: cart_summary_tpl

		// @method initialize
	,	initialize: function initialize (options)
		{
			this.model = options.model;
			BackboneCompositeView.add(this);

			this.promocodeFormComponent = new CartPromocodeFormView({
				model: this.model
			,	application: this.options.application
			});
		}
	, events: {
		'click [id="btn-proceed-checkout"]': 'checkout'
	}
	, checkout: function(e){
		//Get the lines and check if there are livex issues, create a popup that prevents the users to proceed to checkout
		var lines = this.model.get('lines');
		var livExErrorMessage = "";
		var itemID = new Array();
		var itemUrl = new Array();
		var itemName = new Array();
		var itemRemLine = new Array();
		var livExError = false;
		for( var j=0; j<lines.models.length; j++){

			var line = lines.models[j];
			var item = line.get('item');
			var custitem_livex_order_guid = item.get('custitem_livex_order_guid');
			var options = line.get('options');
			var livExresponse = line.get('livexresponse');
			var isLivExItem = false;
			var livExInternalErrorCode = "";
			var livExQuantity = 0;
			var livExBottlesInCase = 0;


			var name = item.get('_name');
			var url = item.get('_url');
			var matrix_parent = item.get('matrix_parent');
			var itemInternalId = item.id;
			var imageurl = item.getThumbnail().url;
			//Try to determine if the item is a livex item
			if(options && options.models){
				if(options.models.length>0){
					for(var i=0;i<options.models.length; i++){
						if(options.models[i].get('cartOptionId') == "custcol_vf_soldby"){
							var opVal = options.models[i].get('value');
							if(opVal.label =='LivEx'){
								isLivExItem = true;
								//Get the status from the livexresponse and the quantity
								if(livExresponse){
									//"{"orderStatus":null,"error":{"code":"V056","message":"GUID is not available or does not exist"},"status":"Bad Request","httpCode":"400","message":"Request was unsuccessful.","internalErrorCode":"R000","apiInfo":{"version":"1.0","timestamp":1564662796580,"provider":"Liv-ex"}}"
									var livExresponseJSON = JSON.parse(livExresponse);
									livExInternalErrorCode = livExresponseJSON.internalErrorCode;
									if(livExInternalErrorCode == 'R001' || livExInternalErrorCode == 'R002'){
										var livExOrderStatus = livExresponseJSON.orderStatus;
										if(livExOrderStatus.status && livExOrderStatus.status.length>0){
											livExBottlesInCase = livExOrderStatus.status[0].bottlesInCase;
											livExQuantity = livExOrderStatus.status[0].quantity;
											if(parseFloat(livExQuantity)< line.get('quantity')){
												itemID.push(itemInternalId);
												itemUrl.push(imageurl);
												itemName.push(name);
												itemRemLine.push(line);
												livExErrorMessage  += '<div><div style="width: 20%;display: inline-block;text-align: center;">'+
													'<img style="height:100px;" src="'+imageurl+'" alt=""></div>'+
													'<div style="width: 80%;display: inline-block;vertical-align: top;padding:20px;font-weight:bold;">'+name+'</div></div>';
												livExError = true;
											}else{
											}
										}
									}else{
										livExError = true;
										itemID.push(itemInternalId);
										itemUrl.push(imageurl);
										itemName.push(name);
										itemRemLine.push(line);
										livExErrorMessage  += '<div><div style="width: 20%;display: inline-block;text-align: center;">'+
											'<img style="height:100px;" src="'+imageurl+'" alt=""></div>'+
											'<div style="width: 80%;display: inline-block;vertical-align: top;padding:20px;font-weight:bold;">'+name+'</div></div>';
									}
								}
							}
						}
					}
				}
			}
		}
		if(livExError){
			//console.log('line',line);
			//console.log('item',item)
			// Calling a custom created LivexResponseView
	        var view = new LivexResponseView({
	        	message: livExErrorMessage,             // passing the values to the view
	        	itemID: itemID,
	        	itemUrl: itemUrl,
	        	itemModel :this.model,
	        	itemLine :itemRemLine,
	        	itemName:itemName
	        });
	        // calling the layout to get the popup window.
	        this.options.application.getLayout().showInModal(view);
			//this.options.application.getLayout().showLivExErrorInModal(livExErrorMessage);
			return false;
		}
		return true;
	}
		// @property {Object} childViews
	,	childViews: {
			'Cart.PromocodeFrom': function ()
			{
				return this.promocodeFormComponent;
			}

		,	'CartPromocodeListView': function ()
			{
				return new CartPromocodeListView({
					model: this.model
				,	isReadOnly: false
				});
			}

		,	'GiftCertificates': function ()
			{
				var	gift_certificates = this.model.get('paymentmethods').where({type: 'giftcertificate'}) || [];

				return new BackboneCollectionView({
						collection: gift_certificates
					,	cellTemplate: cart_summary_gift_certificate_cell_tpl
					,	viewsPerRow: 1
					,	childView: GlobalViewsFormatPaymentMethodView
					,	rowTemplate: null
				});
			}
		}

		//@method getUrlLogin
		//@return {String}
	,	getUrlLogin: function getUrlLogin ()
		{
			var login = Session.get('touchpoints.login'),
				currentTouchpoint = this.model.application && this.model.application.Configuration.currentTouchpoint ? this.model.application.Configuration.currentTouchpoint : 'home';

			login += '&origin=' + currentTouchpoint;

			if (this.$el.closest('.modal-product-detail').size() > 0) //we are in the quick view
			{
				var hashtag = this.$el.closest('.modal-product-detail').find('[data-name="view-full-details"]').data('hashtag');
				login += '&origin_hash=' + encodeURIComponent(hashtag.replace('#/', ''));
			}
			else
			{
				login += '&origin_hash=' + encodeURIComponent(Backbone.history.fragment);
			}

			return login;
		}

		// @method getContext
		// @return {Cart.Summary.View.Context}
	,	getContext: function getContext ()
		{
			var	continueURL = Configuration.get('siteSettings.sitetype') === 'ADVANCED' ? Configuration.defaultSearchUrl : ''
			,	is_wsdk = false
			,	summary = this.model.get('summary')
			,	items_count = _.reduce(this.model.get('lines').pluck('quantity'), function (memo, quantity)
				{
					return memo + (parseFloat(quantity) || 1);
				}, 0)
			,	shipping_address = this.model.get('addresses').get(this.model.get('shipaddress')) || new Backbone.Model()
			,	default_country = shipping_address.get('country') || Configuration.get('siteSettings.defaultshipcountry')
			,	shipping_zip_code = shipping_address.get('zip')

			,	promocodes = this.model.get('promocodes') || []

			,	gift_certificates = this.model.get('paymentmethods').where({type: 'giftcertificate'}) || []
			,	is_single_country = _.size(Configuration.get('siteSettings.countries', [])) === 1
			,	is_zipcode_require
			,	selected_country
			,	countries_list
			,	is_estimated_shipping_valid
			,	show_estimation_form = true
			,	countries = _.clone(Configuration.get('siteSettings.countries'));

			//Determine if the Zip Code is required and just leave selected the current address
			if (countries && default_country && countries[default_country])
			{
				selected_country = _.findWhere(countries, {selected:true});
				if (selected_country)
				{
					selected_country.selected = false;
				}

				countries[default_country].selected = true;
				is_zipcode_require = countries[default_country].isziprequired !== 'F';
				selected_country = countries[default_country];
				countries_list = _.toArray(countries);
			}
			else
			{
				selected_country = _.findWhere(countries, {selected:true});
				countries_list = _.toArray(countries);

				if (!selected_country)
				{
					selected_country = _.first(countries_list);
				}
				is_zipcode_require = selected_country.isziprequired !== 'F';
			}

			//Determine if the current address is valid (complete)
			if (_.isString(shipping_address.id) && shipping_address.id !== '-------null')
			{
				is_estimated_shipping_valid = is_zipcode_require ? !!shipping_zip_code : !!shipping_address.get('country');
			}
			else
			{
				is_estimated_shipping_valid = false;
			}

			//Check if WSDK is configured
			if (Configuration.get('siteSettings.iswsdk', false) && Configuration.get('siteSettings.wsdkcancelcarturl'))
			{
				continueURL = Configuration.get('siteSettings.wsdkcancelcarturl');
				is_wsdk = true;
			}

			//Calculate if the estimation form should be rendered or not
			if (is_estimated_shipping_valid && is_zipcode_require)
			{
				show_estimation_form = false;
			}
			else if (is_estimated_shipping_valid)
			{
				show_estimation_form = !this.options.showEstimated;
			}
			else
			{
				show_estimation_form = true;
			}

			// @class Cart.Summary.View.Context
			return {
					// @property {LiveOrder.Model} model
					model: this.model
					// @property {Boolean} isWSDK
				,	isWSDK: true	// is_wsdk
					// @property {String} continueURL
				,	continueURL: continueURL
					// @property {Boolean} showActions
				,	showActions: true
					// @property {Boolean} showLabelsAsEstimated
				,	showLabelsAsEstimated: true
					// @property {Object} summary
				,	summary: summary
					// @property {Number} itemCount
				,	itemCount: items_count
					// @property {Boolean} isSingleItem
				,	isSingleItem: items_count === 1
					// @property {Boolean} isZipCodeRequire
				,	isZipCodeRequire: is_zipcode_require
					// @property {Boolean} showEstimate Shows or not the estimation form
				,	showEstimate: show_estimation_form
					// @property {Boolean} showHandlingCost
				,	showHandlingCost: !!summary.handlingcost
					// @property {Boolean} showGiftCertificates
				,	showGiftCertificates: !!summary.giftcertapplied
					// @property {Boolean} showPromocodeForm (DEV - set the 'showPromocodeForm' as FALSE to hide promocode form on cart page)
				,	showPromocodeForm: false // Configuration.get('promocodes.allowMultiples', true) || !promocodes.length
					// @property {Array} giftCertificates
				,	giftCertificates: gift_certificates
					// @property {Boolean} showDiscountTotal
				,	showDiscountTotal: !!summary.discounttotal
					// @property {String} defaultCountry
				,	defaultCountry: default_country
					// @property {Boolean} isDefaultCountryUS
				,	isDefaultCountryUS: default_country === 'US'
					// @property {Array} countries
				,	countries: countries_list
					// @property {Boolean} singleCountry
				,	singleCountry: is_single_country
					// @property {String} singleCountryCode
				,	singleCountryCode: is_single_country ? countries_list[0].code : ''
					// @property {String} shipToText
				,	shipToText: shipping_zip_code || selected_country.name
					// @property {String} singleCountryName
				,	singleCountryName: is_single_country ? countries_list[0].name : ''
					// @property {String} shippingZipCode
				,	shippingZipCode: shipping_zip_code || ''
					// @property {Boolean} showPaypalButton
				,	showPaypalButton: Configuration.get('siteSettings.checkout.paypalexpress.available', 'F') === 'T'
					// @property {String} paypalButtonImageUrl
				,	paypalButtonImageUrl: Configuration.get('paypalButtonImageUrl', 'https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-large.png')
					// @property {Boolean} showProceedButton
        		,   showProceedButton: Configuration.get('siteSettings.sitetype') === 'STANDARD'
					// @property {String} urlLogin
				,	urlLogin: this.getUrlLogin()
                	// @property {Boolean} isPriceEnabled
				,	isPriceEnabled: !ProfileModel.getInstance().hidePrices()
					// @property {Boolean} showPickupInStoreLabel
				,	showPickupInStoreLabel: this.model.getPickupInStoreLines().length > 0
					// @property {Boolean} areAllItemsPickupable
				,	areAllItemsPickupable: this.model.getPickupInStoreLines().length === this.model.get('lines').length
					// @property {String} summaryLabel
				,	taxLabel: !!Configuration.get('summaryTaxLabel') ? Configuration.get('summaryTaxLabel') : 'Tax'
			};
			// @class Cart.Summary.View
		}
	});

});
