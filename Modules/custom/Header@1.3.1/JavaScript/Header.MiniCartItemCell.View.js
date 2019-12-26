/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// @module Header
define(
	'Header.MiniCartItemCell.View'
,	[
		'Transaction.Line.Views.Options.Selected.View'
	,	'Profile.Model'

	,	'header_mini_cart_item_cell.tpl'

	,	'Backbone'
	,	'Backbone.CompositeView'
	,	'Backbone.CollectionView'
	]
,	function (
		TransactionLineViewsOptionsSelectedView
	,	ProfileModel

	,	header_mini_cart_item_cell_tpl

	,	Backbone
	,	BackboneCompositeView
	)
{
	'use strict';

	// @class Header.MiniCart.View @extends Backbone.View
	return Backbone.View.extend({

		template: header_mini_cart_item_cell_tpl

	,	initialize: function ()
		{
			BackboneCompositeView.add(this);
		}

	,	childViews: {
			'Item.SelectedOptions': function ()
			{
				return new TransactionLineViewsOptionsSelectedView({
					model:this.model
				});
			}
		}

		// @method getContext
		// @return {Header.MiniCart.View.Context}
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
												livExErrorMessage = "REQUESTED QUANTITIES FOR THIS ITEM IS NO LONGER AVAILABLE";
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
			// @class Header.MiniCart.View.Context
			return {
				line: this.model
				//@property {Number} itemId
			,	itemId: this.model.get('item').id
				//@property {String} itemType
			,	itemType: this.model.get('item').get('itemtype')
				//@property {String} linkAttributes
			,	linkAttributes: this.model.getFullLink({quantity:null,location:null,fulfillmentChoice:null})
				// @property {ImageContainer} thumbnail
			,	thumbnail: this.model.getThumbnail()
				// @property {Boolean} isPriceEnabled
			,	isPriceEnabled: !ProfileModel.getInstance().hidePrices()
			, isNotLivExItem: !isLivExItem
			, livExInternalErrorCode: livExInternalErrorCode
			, livExQuantity: livExQuantity
			, livExBottlesInCase: livExBottlesInCase
			, livExError: livExError
			, livExSuccess: !livExError
			, owcpacksize: this.model.get('item').get('custitem_owcpacksize')
			, livExErrorMessage: livExErrorMessage
			};
			// @class Header.MiniCart.View
		}
	});
});
