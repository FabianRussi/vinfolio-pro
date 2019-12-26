/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

//@module Transaction.Line.Views
define('Cart.Lines.View'
,	[
		'Transaction.Line.Views.Price.View'
	,	'Transaction.Line.Views.Options.Selected.View'
	,	'ProductLine.Stock.View'
	,	'ProductLine.Sku.View'
	,	'ProductLine.StockDescription.View'
	,	'Profile.Model'

	,	'Transaction.Line.Views.Tax'

	,	'Backbone.CollectionView'
	,	'Backbone.CompositeView'

	,	'cart_lines.tpl'

	,	'Backbone'
	,	'underscore'

	,	'SC.Configuration'
	]
,	function (
		TransactionLineViewsPriceView
	,	TransactionLineViewsOptionsSelectedView
	,	ProductLineStockView
	,	ProductLineSkuView
	,	ProductLineStockDescriptionView
	,	ProfileModel

	,	TransactionLineViewsTax

	,	BackboneCollectionView
	,	BackboneCompositeView

	,	cart_lines_tpl

	,	Backbone
	,	_

	,	Configuration
	)
{
	'use strict';

	//@class Cart.Lines.View @extend Backbone.View
	return Backbone.View.extend({

		template: cart_lines_tpl

		//@method initialize
		//@param {Transaction.Line.Views.Cell.Actionable.Initialize.Options} options
		//@return {Void}
	,	initialize: function ()
		{
			BackboneCompositeView.add(this);
		}

	,	childViews: {
			'Item.Price': function ()
			{
				return new TransactionLineViewsPriceView({
					model: this.model
				,	showComparePrice: true
				});
			}
		,	'Item.Sku': function ()
			{
				return new ProductLineSkuView({
					model: this.model
				});
			}
		,	'Item.SelectedOptions': function ()
			{
				return new TransactionLineViewsOptionsSelectedView({
					model: this.model
				,	wineSource: this.model.get('item').get('custitem_wine_source')
				});
			}
		,	'Product.Stock.Info': function ()
			{
				return new ProductLineStockView({
					model: this.model
				});
			}
		,	'Item.Tax.Info': function()
			{
				if(Configuration.get('showTaxDetailsPerLine'))
				{
					return new TransactionLineViewsTax({
						model: this.model
					});
				}
			}
		,	'Item.Summary.View': function ()
			{
				return new this.options.SummaryView(_.extend({
					model: this.model
				,	application: this.options.application
				}, this.options.summaryOptions || {}));
			}
		,	'Item.Actions.View': function ()
			{
				return new this.options.ActionsView(_.extend({
					model: this.model
				,	application: this.options.application
				}, this.options.actionsOptions || {}));
			}
		,	'StockDescription': function ()
			{
				return new ProductLineStockDescriptionView({
					model: this.model
				});
			}
		}

		//@method getContext
		//@return {Transaction.Line.Views.Actionable.View.Context}
	,	getContext: function ()
		{
			var item = this.model.get('item');
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
												livExErrorMessage = "REQUESTED QUANTITIES FOR THIS ITEM IS NO LONGER AVAILABLE: Available Qty: "+ livExQuantity;
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
			//@class Transaction.Line.Views.Actionable.View.Context
			return {
					//@property {OrderLine.Model|Transaction.Line.Model} line
					line: this.model
					//@property {String} lineId
				,	lineId: this.model.get('internalid')
					//@property {Item.Model} item
				,	item: item
					//@property {String} itemId
				,	itemId: item.get('internalid')
					//@property {String} linkAttributes
				,	linkAttributes: this.model.getFullLink({quantity:null,location:null,fulfillmentChoice:null})
					//@property {Boolean} isNavigable
				,	isNavigable: !!this.options.navigable && !!item.get('_isPurchasable')
					//@property {Boolean} showCustomAlert
				,	showCustomAlert: !!item.get('_cartCustomAlert')
					//@property {String} customAlertType
				,	customAlertType: item.get('_cartCustomAlertType') || 'info'
					//@property {Boolean} showActionsView
				,	showActionsView: !!this.options.ActionsView
					//@property {Boolean} showSummaryView
				,	showSummaryView: !!this.options.SummaryView
					//@property {Boolean} showAlert
				,	showAlert: !_.isUndefined(this.options.showAlert) ? !!this.options.showAlert : true
					//@property {Boolean} showGeneralClass
				,	showGeneralClass: !!this.options.generalClass
					//@property {String} generalClass
				,	generalClass: this.options.generalClass
					// @property {ImageContainer} thumbnail
				,	thumbnail: this.model.getThumbnail()
					// @property {Boolean} isPriceEnabled
				,	isPriceEnabled: !ProfileModel.getInstance().hidePrices()
					// @property {Boolean} isLivExItem
				, isNotLivExItem: !isLivExItem
				, livExInternalErrorCode: livExInternalErrorCode
				, livExQuantity: livExQuantity
				, livExBottlesInCase: livExBottlesInCase
				, livExError: livExError
				, livExSuccess: !livExError
				, owcpacksize: item.get('custitem_owcpacksize')
				, livExErrorMessage: livExErrorMessage
			};
			//@class Transaction.Line.Views.Actionable.View
		}
	});
});


//@class Cart.Lines.Initialize.Options
//@property {Transaction.Line.Model} model
//@property {String} generalClass Class name used in the generated HTML
//@property {Backbone.View} SummaryView View to show details
//@property {Backbone.View} ActionsView View to show actions buttons
//@property {Object} actionsOptions Any object used to extend the options sent to the Action View
//@property {Object} summaryOptions Any object used to extend the options sent to the Summary View
//@property {Boolean} navigable
//@property {Boolean} showAlert Indicate if a place holder is added in the final HTML, used when the action can generate errors
//@property {ApplicationSkeleton} application
//@property {Boolean} hideComparePrice Property used to bypass to the TransactionLineViewsPriceView
