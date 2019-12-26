/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// @module Facets
define(
	'Facets.ItemCell.View'
,	[
		'ProductLine.Stock.View'
	,	'Product.Model'
	,	'GlobalViews.StarRating.View'
	,	'Cart.QuickAddToCart.View'
	,	'ProductViews.Option.View'
	,	'ProductLine.StockDescription.View'
	,	'SC.Configuration'
	,	'Utils'

	,	'Backbone'
	,	'Backbone.CompositeView'
	,	'Backbone.CollectionView'
	,	'underscore'
	]
,	function (
		ProductLineStockView
	,	ProductModel
	,	GlobalViewsStarRating
	,	CartQuickAddToCartView
	,	ProductViewsOptionView
	,	ProductLineStockDescriptionView
	,	Configuration
	,	Utils

	,	Backbone
	,	BackboneCompositeView
	,	BackboneCollectionView
	,	_
	)
{
	'use strict';

	// @class Facets.ItemCell.View @extends Backbone.View
	return Backbone.View.extend({

		//@method initialize Override default method to convert this View into Composite
		//@param {Facets.ItemCell.View.Initialize.Options} options
		//@return {Void}
		initialize: function ()
		{
			BackboneCompositeView.add(this);
		}

	,	contextData: {
			'item': function ()
			{
				return this.model;
			}
		}

	,	childViews: {
			'ItemViews.Stock': function ()
			{
				return new ProductLineStockView({
					model: this.model
				});
			}

		,	'GlobalViews.StarRating': function()
			{

				var view = new GlobalViewsStarRating({
					model: this.model
				,	showRatingCount: false
				,	queryOptions: Utils.parseUrlOptions(location.href)
				});

				return this.options.showStarRating === false ? null : view;
			}

		,	'ItemDetails.Options': function()
			{
				var options_configuration = Configuration.get('ItemOptions.optionsConfiguration', []);

				return new BackboneCollectionView({
					collection: _.filter(this.model.get('options').sortBy('index'), function (option)
					{
						var option_configuration = _.findWhere(options_configuration, {cartOptionId: option.get('cartOptionId')});
						return option_configuration && option_configuration.showSelectorInList;
					})
				,	childView: ProductViewsOptionView
				,	viewsPerRow: 1
				,	childViewOptions: {
						item: this.model
					,	templateName: 'facetCell'
					,	showLink: true
					,	hideLabel: true
					,	showSmall: true
					}
				});
			}

		,	'Cart.QuickAddToCart': function ()
			{
				var product = new ProductModel({
					item: this.model
				,	quantity: this.model.get('_minimumQuantity', true)
				});

				return new CartQuickAddToCartView({
					model: product
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

		// @method getContext @returns {Facets.ItemCell.View.Context}
	,	getContext: function ()
		{
			var urlParam = ''
			,	size_arr = []
			,	bottle_size_range = '';
			if( !_.isUndefined(this.model.get('_optionsDetails').fields) )
			{
				var isBreak = false;
				var itemFields = this.model.get('_optionsDetails').fields;
				
				// ... START - Get bottle size range 
				for(var i=0; itemFields!=null && i<itemFields.length; i++)
				{
					if(itemFields[i].internalid == 'custcol_vf_bottlesize')
					{
						for(var v=0; itemFields[i].values != null && v < itemFields[i].values.length; v++)
						{
							var values = itemFields[i].values[v];
							if(values.internalid){
								var custom_label = values.label+' ml'
								if(Number(values.label) > 1000)
									custom_label = parseFloat(Number(values.label)/1000)+' L';
								size_arr.push(custom_label);
							}
						}
					}
				}

				if(size_arr.length >= 1){
					bottle_size_range = size_arr[0]
				}
				if(size_arr.length > 1){
					bottle_size_range = size_arr[0] + ' - ' +size_arr[size_arr.length-1];
				}
				// ... END - Get bottle size range 
			}

			// Source Tag
			var source_tag = '';
			if( !_.isUndefined(this.model.get('custitem_out_of_stock_item')) && this.model.get('custitem_out_of_stock_item') )
			{
				source_tag = '<span class="item-list-outofstock-tag">OUT OF STOCK</span>';
			}
			else
			{
				if( !_.isUndefined(this.model.get('custitem_source_tag')) && this.model.get('custitem_source_tag')!='' )
				{
					source_tag = this.model.get('custitem_source_tag');
					if( this.model.get('custitem_source_tag') == 'BOTH')
						source_tag = '<span class="item-list-vinfolio-tag">PRODUCER</span> <span class="item-list-collection-tag">COLLECTOR</span>';
					else if( this.model.get('custitem_source_tag') == 'PRODUCER')
						source_tag = '<span class="item-list-vinfolio-tag">PRODUCER</span>';
					else if( this.model.get('custitem_source_tag') == 'COLLECTOR')
						source_tag = '<span class="item-list-collection-tag">COLLECTOR</span>';
				}
			}

			var scoresArray = []
			,   wa = this.model.get('custitem_item_wa')
			,   iwc = this.model.get('custitem_item_iwc')
			,   ws = this.model.get('custitem_item_ws')
			,   jr = this.model.get('custitem_item_jr')
			,   js = this.model.get('custitem_item_js')
			if(wa)
			scoresArray[scoresArray.length] = {'score':'WA','value' : wa};
			if(iwc)
			scoresArray[scoresArray.length] = {'score':'IWC','value' : iwc};
			if(ws)
			scoresArray[scoresArray.length] = {'score':'WS','value' : ws};	
			if(jr)
			scoresArray[scoresArray.length] = {'score':'JR','value' : jr};		
			if(js)	
			scoresArray[scoresArray.length] = {'score':'JS','value' : js};	

			var sortedScores = scoresArray.sort(function(a, b){return b.value-a.value});
			//console.log(sortedScores)

			var childITemDetails = this.model.get('matrixchilditems_detail');
			var childPerPRice = new Array();
			//console.log(childITemDetails)
			var isEqual= true;

			var minValue = Infinity;
			var maxValue = -Infinity;
			var perPriceFlag = false;

			//console.log(this.options.translator.getCategoryUrl())
				
			if(!_.isUndefined(childITemDetails))
			{
				var categoryPage = this.options.translator.getCategoryUrl();

			 if(categoryPage == '/shop-wine/originalwoodcase')
			 {


				for(var c=0;c<childITemDetails.length;c++){
					childPerPRice.push(childITemDetails[c].custitem_in_case_price);
				}

			
				for (var item = 0;item<childPerPRice.length;item++) {
				    // find minimum value
				    var itemVal = childPerPRice[item]
				    if(itemVal != undefined ){
					    if (itemVal < minValue)
					    minValue = itemVal.toFixed(2);
						if (itemVal > maxValue)
					    maxValue = itemVal.toFixed(2);
					}
				}
			
				if(minValue != Infinity && maxValue != -Infinity){perPriceFlag = true;}

			//console.log('perPriceFlag',perPriceFlag);
				var custommPrice;
				if(perPriceFlag){
					if(size_arr.length >= 1){
						if(minValue != maxValue){
							custommPrice = minValue + ' - ' +maxValue;
						}else{custommPrice = minValue;}
					}
					if(size_arr.length > 1){
						if(minValue != maxValue){
							custommPrice = minValue + ' - ' +maxValue;
						}else{custommPrice = minValue;}
						
					}
				}else{
					custommPrice =0;
				}

		//	console.log(custommPrice)

				custommPrice= custommPrice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
			  }	
			}	
			//@class Facets.ItemCell.View.Context
			return {
				// @property {String} itemId
				itemId: this.model.get('_id')
				// @property {String} name
			,	name: this.model.get('_name')
				// @property {String} url
			,	url: this.model.get('_url')+urlParam
				//@property {String} sku
			,	sku: this.model.getSku()
				// @property {Boolean} isEnvironmentBrowser
			,	isEnvironmentBrowser: SC.ENVIRONMENT.jsEnvironment === 'browser' && !SC.ENVIRONMENT.isTouchEnabled
				// @property {ImageContainer} thumbnail
			,	thumbnail: this.model.getThumbnail()
				// @property {Boolean} itemIsNavigable
			,	itemIsNavigable: !_.isUndefined(this.options.itemIsNavigable) ? !!this.options.itemIsNavigable : true
				//@property {Boolean} showRating
			,	showRating: SC.ENVIRONMENT.REVIEWS_CONFIG && SC.ENVIRONMENT.REVIEWS_CONFIG.enabled
				// @property {Number} rating
			,	rating: this.model.get('_rating')
				//@property {String} track_productlist_list
			,	track_productlist_list: this.model.get('track_productlist_list')
				//@property {String} track_productlist_position
			,	track_productlist_position: this.model.get('track_productlist_position')
				//@property {String} track_productlist_category
			,	track_productlist_category: this.model.get('track_productlist_category')
/*				//@property {Boolean} isWA
			,	isWA: !!this.model.get('custitem_item_wa')
				//@property {Number} wa
			,	wa: this.model.get('custitem_item_wa')
				//@property {Boolean} isIWC
			,	isIWC: !!this.model.get('custitem_item_iwc')
				//@property {Number} iwc
			,	iwc: this.model.get('custitem_item_iwc')
				//@property {Boolean} isWS
			,	isWS: !!this.model.get('custitem_item_ws')
				//@property {Number} ws
			,	ws: this.model.get('custitem_item_ws')
				//@property {Boolean} isJR
			,	isJR: !!this.model.get('custitem_item_jr')
				//@property {Number} jr
			,	jr: this.model.get('custitem_item_jr')
				//@property {Boolean} isJS
			,	isJS: !!this.model.get('custitem_item_js')
				//@property {Number} js
			,	js: this.model.get('custitem_item_js')*/
				//@property {Number} sortedScores
			,   sortedScores : sortedScores.slice(0,3)

				//@property {String} bottleSizeRange
			,	bottleSizeRange: bottle_size_range
				//@property {String} sourceTag
			,	sourceTag: source_tag
				//@property {String} abv
			,	abv: this.model.get('custitem_vf_item_abv')
				//@property {String} varietal
			,	varietal: this.model.get('custitem_varietal')
				//@property {String} tasteProfile
			,	tasteProfile: this.model.get('custitem_taste_profile')
				//@property {String} body
			,	body: this.model.get('custitem_body')
				//@property {String} sweetness
			,	sweetness: this.model.get('custitem_sweetness')
				//@property {String} producer
			,	producer: this.model.get('custitem_producer')
				//@property {String} region
			,	region: this.model.get('custitem_region')
				//@property {String} vintage
			,	vintage: this.model.get('custitem_yearofvintage')
				//@property {String} winename
			,	winename: this.model.get('custitem_vf_winename')
				//@property {Boolean} isCustomOutOfStock
			,	isCustomOutOfStock: this.model.get('custitem_out_of_stock_item')
				//@property {String} top100CollItemURL
			,	top100CollItemURL: ( !_.isUndefined(this.model.get('custitem_vf_top100_coll_url')) && this.model.get('custitem_vf_top100_coll_url')!="" ) ? this.model.get('custitem_vf_top100_coll_url') : this.model.get('_url')
				//@property {Boolean} isTPRRating
			,	isTPRAvailable: (this.model.get('custitem_tpr_review_source') || this.model.get('custitem_tpr_rating') || this.model.get('custitem_tpr_desc') ) ? true : false
				//@property {String} tprSource
			,	tprSource: this.model.get('custitem_tpr_review_source')
				//@property {String} tprRating
			,	tprRating: this.model.get('custitem_tpr_rating')
				//@property {String} tprDesc
			,	tprDesc: this.model.get('custitem_tpr_desc')
				//@property {String} tprDrinkDate
			,	tprDrinkDate: this.model.get('custitem_tpr_drink_date')
				//@property {String} tprAuthor
			,	tprAuthor: this.model.get('custitem_tpr_author')
				//@property {String} tprIssue
			,	tprIssue: this.model.get('custitem_tpr_issue')
				//@property {String} regionHierarchy
			,	regionHierarchy: this.model.get('custitem_vf_region_hierarchy')
			,	custommPrice: custommPrice
				//@property {Boolean} perPriceFlag
			,	perPriceFlag:perPriceFlag
		};
			//@class Facets.ItemCell.View
		}
	});
});


//@class Facets.ItemCell.View.Initialize.Options
//@property {Item.Model} model
//@property {ApplicationSkeleton} application
//@property {Boolean?} itemIsNavigable
