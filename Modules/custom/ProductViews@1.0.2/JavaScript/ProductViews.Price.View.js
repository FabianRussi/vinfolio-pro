/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// @module ProductViews
define(
	'ProductViews.Price.View'
,	[
		'Profile.Model'
	,	'Session'
	,	'SC.Configuration'

	,	'product_views_price.tpl'

	,	'Backbone'
	,	'underscore'
	]
,	function(
		ProfileModel
	,	Session
	,	Configuration

	,	product_views_price_tpl

	,	Backbone
	,	_
	)
{
	'use strict';

	// @class ProductViews.Price.View @extends Backbone.View
	var ProductViewsPriceView = Backbone.View.extend(
	{
		//@property {Function} template
		template: product_views_price_tpl

		//@method initialize
		//@param {ProductViews.Price.View.Initialize.Options} options
		//@return {Void}
	,	initialize: function (options)
		{
			//console.log(options)
			this.options = options
			this.model.on('change', this.render, this);
		}

		//@method getUrlLogin Get the login URL contains an origin hash parameter indicating the current URL to came back after login
		//@return {String}
	,	getUrlLogin: function ()
		{
			var url = Session.get('touchpoints.login') + '&origin=' + (Configuration.get('currentTouchpoint') || 'home') + '&origin_hash=';

			return url + encodeURIComponent(this.options.origin === 'PDPQUICK' ? this.model.generateURL().replace('/', '') : Backbone.history.fragment);
		}

		// @method getContext
		// @returns {ProductViews.Price.View.Context}
	,	getContext: function ()
		{
			var price_container_object = this.model.getPrice()
			,	is_price_range = !!(price_container_object.min && price_container_object.max)
			,	showComparePrice = false;

			//console.log(price_container_object)

			if (!this.options.hideComparePrice)
			{
				showComparePrice = is_price_range ?
					price_container_object.max.price < price_container_object.compare_price :
					price_container_object.price < price_container_object.compare_price;
			}

			//console.log(price_container_object)
			// var sale_price_object = this.model.getSalePrice();
			//console.log(sale_price_object)
		//	console.log(this.model.get('item').get('matrixchilditems_detail'))

			var origin = this.options.origin
			,   matrixChildTotal 
			,   salePrice = []
			,   overWriteMin = false
			,   overWriteMax = false
			,   outsideMinMax = false

			if(origin === 'ITEMCELL')
			{
				matrixChildTotal = this.model.get('item').get('matrixchilditems_detail')

				_.each(matrixChildTotal, function (matrixChild)
				{
					var sale = matrixChild.pricelevel3
					var actualPrice = matrixChild.onlinecustomerprice_detail.onlinecustomerprice
					
					if(sale > actualPrice)
					{
						if(sale!== '' && sale!== undefined && sale!== null)
						{
						salePrice['saleprice'] = matrixChild.pricelevel3
						salePrice['salepriceformatted'] = matrixChild.pricelevel3_formatted
						salePrice['originalprice'] = matrixChild.onlinecustomerprice_detail.onlinecustomerprice
						salePrice['originalpriceformatted'] = matrixChild.onlinecustomerprice_detail.onlinecustomerprice_formatted
						}
					}
					
				});	
				//console.log(salePrice)
				if(is_price_range)
				 {
				 	
				 	var maxPrice = price_container_object.max.price
				 	,   minPrice = price_container_object.min.price

				 	if(salePrice.originalprice == minPrice)
				 	{
				 		
				 		overWriteMin = true
				 	}else if(salePrice.originalprice == maxPrice)
				 	{
				 		
				 		overWriteMax = true
				 	}
				 	else if(salePrice.originalprice >= minPrice && salePrice.originalprice <= maxPrice)
				 	{
				 		outsideMinMax = true
				 		
				 	}
				 }

			}

			//@class ProductViews.Price.View.Context
			return {
					// @property {Boolean} isPriceEnabled
					isPriceEnabled: !ProfileModel.getInstance().hidePrices()
					// @property {String} urlLogin
				,	urlLogin: this.getUrlLogin()

					// @property {Boolean} isPriceRange
				,	isPriceRange: is_price_range
					// @property {Boolean} showComparePrice
				,	showComparePrice: showComparePrice
					// @property {Boolean} isInStock
				,	isInStock: this.model.getStockInfo().isInStock
					// @property {Item.Model|Product.Model} model
				,	model: this.model
					// @property {String} currencyCode
				,	currencyCode: SC.getSessionInfo('currency') ? SC.getSessionInfo('currency').code : ''
					// @property {String} priceCurrency
				,	itemPriceCurrency: (price_container_object.price_formatted) ? price_container_object.price_formatted.charAt(0) : '$'
					// @property {String} priceFormatted
				,	priceFormatted: price_container_object.price_formatted || ''
					// @property {String} comparePriceFormatted
				,	comparePriceFormatted: price_container_object.compare_price_formatted || ''
					// @property {String} minPriceFormatted
				,	minPriceFormatted: price_container_object.min ? price_container_object.min.price_formatted : ''
					// @property {String} maxPriceFormatted
				,	maxPriceFormatted: price_container_object.max ? price_container_object.max.price_formatted : ''
					// @property {Number} price
				,	price: price_container_object.price ? price_container_object.price : 0
					// @property {Number} comparePrice
				,	comparePrice: price_container_object.compare_price ? price_container_object.compare_price : 0
					// @property {Number} minPrice
				,	minPrice: price_container_object.min ? price_container_object.min.price : 0
					// @property {Number} maxPrice
				,	maxPrice: price_container_object.max ? price_container_object.max.price : 0

					// @property {Boolean} showHighlightedMessage
				,	showHighlightedMessage:	_.indexOf(ProductViewsPriceView.highlightedViews, this.options.origin) >= 0
				,   categoryPage : origin === 'ITEMCELL'
				,   hasSalePriceRange : !_.isEmpty(salePrice.salepriceformatted)
				,   salePriceValue : salePrice
				,   maxOverWrite : overWriteMax
				,   minOverWrite : overWriteMin
				,   outsideMinMax: outsideMinMax
			};
			//@class ProductViews.Price.View
		}
	}
,	{
		//@property {Array<String>} highlightedViews Contains the list of all origins that in case of using the "LOGIN TO SEE PRICES" feature must render a highlighted notification message
		//@static
		highlightedViews:  ['PDPQUICK', 'PDPFULL']
	});

	return ProductViewsPriceView;
});

//@class ProductViews.Price.View.Initialize.Options
//@property {String?} origin Possible values are:
//	PDPCONFIRMATION 		For the PDP confirmation message
//	ITEMCELL 				For each item being shown in the item list (ex your-domain.com/search)
//	PDPQUICK 				For a PDP being shown on a quick view form
//	PDPFULL 				Full PDP view
//	RELATEDITEM				Related Item
//	PRODUCTLISTDETAILSLATER	Used to render each item that was saved for later
//	PRODUCTLISTDETAILSFULL	Used to render each item that is shown inside My Account in the details of a particular Product List
//	PRODUCTLISTDETAILSEDIT	Used when rendering the form to edit an item inside a product list
//	ITEMVIEWCELL			For all list where items are rendered
//
//@property {Number?} linePrice Specify this value if you want to use a different price rather than the one of the line
//@property {String?} linePriceFormatted This string valid must be present if you want to use a custom price containing the formatted value of linePrice
//@property {Boolean?} hideComparePrice
//@property {Item.Model|Product.Model} model