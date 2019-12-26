/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

//@module Transaction.Line.Views
define('Transaction.Line.Views.Cell.Navigable.View'
,	[	'Transaction.Line.Views.Options.Selected.View'
	,	'ProductLine.Stock.View'
	,	'Transaction.Line.Views.Price.View'
	,	'ProductLine.Sku.View'
	,	'ProductLine.StockDescription.View'

	,	'Transaction.Line.Views.Tax'

	,	'Backbone.CollectionView'
	,	'Backbone.CompositeView'

	,	'transaction_line_views_cell_navigable.tpl'

	,	'Backbone'
	]
,	function (
		TransactionLineViewsOptionsSelectedView
	,	ProductLineStockView
	,	TransactionLineViewsPriceView
	,	ProductLineSkuView
	,	ProductLineStockDescriptionView

	,	TransactionLineViewsTax

	,	BackboneCollectionView
	,	BackboneCompositeView

	,	transaction_line_views_cell_navigable_tpl

	,	Backbone
	)
{
	'use strict';

	//@class Transaction.Line.Views.Navigable.View @extend Backbone.View
	return Backbone.View.extend({

		template: transaction_line_views_cell_navigable_tpl

	,	initialize: function (options)
		{
			this.options = options;
			this.application = options.application;
			this.model = options.model;

			BackboneCompositeView.add(this);
		}

	,	childViews: {
			'Item.Options': function ()
			{
				return new TransactionLineViewsOptionsSelectedView({
					model: this.model
				});
			}
		,	'ItemViews.Stock.View': function()
			{
				return new ProductLineStockView({
					model:this.model.get('item')
				});
			}
		,	'Item.Price': function ()
			{
				return new TransactionLineViewsPriceView({
					model: this.model
				});
			}
		,	'Item.Sku': function ()
			{
				return new ProductLineSkuView({
					model: this.model
				});
			}
		,	'Item.Tax.Info': function()
			{
				if(this.options.showTaxDetails)
				{
					return new TransactionLineViewsTax({
						model: this.model
					});
				}
			}
		,	'StockDescription': function ()
			{
				return new ProductLineStockDescriptionView({
					model: this.model.get('item')
				});
			}
		}

		//@method getContext
		//@return {Transaction.Line.Views.Navigable.View.Context}
	,	getContext: function ()
		{
			var item = this.model.get('item')
			,	line = this.model;
			var custitem_livex_order_guid = item.get('custitem_livex_order_guid');
			var options = this.model.get('options');
			var livExresponse = this.model.get('livexresponse');
			var isLivExItem = false;
			var livExInternalErrorCode = "";
			var livExQuantity = 0;
			var livExBottlesInCase = 0;
			var livExError = false;
			var livExErrorMessage = "";
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
											if(parseFloat(livExQuantity)< this.model.get('quantity')){
												livExError = true;
												livExErrorMessage = "REQUESTED QUANTITIES FOR THIS ITEM IS NO LONGER AVAILABLE: QTY AVAILABLE "+livExQuantity;
											}else{

											}

										}
									}else{
										livExError = true;
										livExErrorMessage = "THIS ITEM IS NO LONGER AVAILABLE AS REQUESTED";
									}
								}
							}
						}
					}
				}
			}
			//@class Transaction.Line.Views.Navigable.View.Context
			return {
					//@property {Transaction.Line.Model} model
					model: this.model
					//@property {String} itemId
				,	itemId: item.get('internalid')
					//@property {String} itemName
				,	itemName: item.get('_name')
					//@property {String} cellClassName
				,	cellClassName: this.options.cellClassName
					//@property {Boolean} isNavigable
				,	isNavigable: !!this.options.navigable && !!item.get('_isPurchasable')
					//@property {String} rateFormatted
				,	rateFormatted: line.get('rate_formatted')
					//@property {Boolean} showOptions
				,	showOptions: !!(line.get('options') && line.get('options').length)
					//@property {String} itemURLAttributes
				,	itemURLAttributes: line.getFullLink({quantity:null,location:null,fulfillmentChoice:null})
					//@property {Number} quantity
				,	quantity: line.get('quantity')
					//@property {Boolean} showDetail2Title
				,	showDetail2Title: !!this.options.detail2Title
					//@property {String} detail2Title
				,	detail2Title: this.options.detail2Title
					//@property {String} detail2
				,	detail2: line.get(this.options.detail2)
					//@property {Boolean} showBlockDetail2
				,	showBlockDetail2: !!line.get(this.options.detail2)
					//@property {Boolean} showDetail3Title
				,	showDetail3Title: !!this.options.detail3Title
					//@property {String} detail3Title
				,	detail3Title: this.options.detail3Title
					//@property {String} detail3
				,	detail3: line.get(this.options.detail3)
					//@property {Boolean} showComparePrice
				,	showComparePrice: line.get('amount') > line.get('total')
					//@property {String} comparePriceFormatted
				,	comparePriceFormatted: line.get('amount_formatted')
					// @property {ImageContainer} thumbnail
				,	thumbnail: this.model.getThumbnail()
				, isNotLivExItem: !isLivExItem
				, isLivExItem: isLivExItem
				, livExInternalErrorCode: livExInternalErrorCode
				, livExQuantity: livExQuantity
				, livExBottlesInCase: livExBottlesInCase
				, livExError: livExError
				, livExSuccess: !livExError
				, owcpacksize: item.get('custitem_owcpacksize')
				, livExErrorMessage: livExErrorMessage
			};
		}

	});
});
