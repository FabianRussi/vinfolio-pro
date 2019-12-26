/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

//@module Cart
define('Cart.Item.Summary.View'
,	[	'Cart.Promocode.List.Item.View'
	,	'Backbone.CompositeView'
	,	'Backbone.CollectionView'
	,	'Profile.Model'

	,	'cart_item_summary.tpl'

	,	'Backbone'
	,	'underscore'
	]
,	function (
		CartPromocodeListItemView
	,	BackboneCompositeView
	,	BackboneCollectionView
	,	ProfileModel

	,	cart_item_summary_tpl

	,	Backbone
	,	_
	)
{
	'use strict';

	//@class Cart.Item.Summary.View @extend Backbone.View
	return Backbone.View.extend({

		// @property {Function} template
		template: cart_item_summary_tpl

		//@method initialize Defines this view as composite
   		//@return {Void}
	,	initialize: function ()
		{
			BackboneCompositeView.add(this);
		}

		// @property {Object} events
	,	events:{
			'click [data-action="plus"]': 'addQuantity'
		,	'click [data-action="minus"]': 'subQuantity'
		}

		// @method addQuantity Add 1 to the quantity field
   		// @param {jQuery.Event} e
		// @return {Void}
	,	addQuantity: function (e)
		{
			e.preventDefault();
			
			var $element = this.$(e.target)
			,	quantity_input = $element.parent().find('input')
			,	old_value = quantity_input.val()
			,	new_val = parseFloat(old_value) + 1;
			
			quantity_input.val(new_val);
			quantity_input.change();
		}

		// @method subQuantity Subtract 1 from the quantity field
   		// @param {jQuery.Event} e
		// @return {Void}
	,	subQuantity: function (e)
		{
			e.preventDefault();
			
			var $element = this.$(e.target)
			,	quantity_input = $element.parent().find('input')
			,	old_value = quantity_input.val()
			,	new_val = parseFloat(old_value) - 1;
			
			new_val = Math.max(this.model.get('item').get('_minimumQuantity', true), new_val);

			quantity_input.val(new_val);
			quantity_input.change();
		}
	,	childViews: {
			'PromocodeList': function ()
			{
				if(!!this.model.get('discounts_impact')){
					
					var discounts = _.filter(this.model.get('discounts_impact').discounts, function(discount){ return !!discount.promotion_couponcode; });
					
					return new BackboneCollectionView({
						collection: discounts
					,	viewsPerRow: 1
					,	childView: CartPromocodeListItemView
					,	childViewOptions: {
							isReadOnly: true
						,	source: 'item_summary'
						}
					});
				}
			}
		}

		// @method getContext
		// @return {Cart.Item.Summary.View.Context}
	,	getContext: function ()
		{
			var minimum_quantity = this.model.get('item').get('_minimumQuantity', true) || 1;
			var custitem_livex_order_guid = this.model.get('item').get('custitem_livex_order_guid');
			var options = this.model.get('options');
			var livExresponse = this.model.get('livexresponse');
			var isLivExItem = false;
			var livExInternalErrorCode = "";
			var livExQuantity = 0;
			var livExBottlesInCase = 0;
			var livExError = false;
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
										}
									}else{
										livExError = true;
									}
								}
							}
						}
					}
				}
			}

			//@class Cart.Item.Summary.View.Context
			return {
				//@property {Model} line
				line: this.model
				//@property {String} lineId
			,	lineId: this.model.get('internalid')
				//@property {Boolean} isMinusButtonDisabled
			,	isMinusButtonDisabled: this.model.get('item').get('quantity') <= this.model.get('item').get('_minimumQuantity', true) || this.model.get('item').get('quantity') === 1
				//@property {Boolean} showQuantity
			,	showQuantity: this.model.get('item').get('_itemType') === 'GiftCert'
				//@property {Boolean} showComparePrice
			,	showComparePrice: this.model.get('amount') > this.model.get('total')
				//@property {Boolean} showMinimumQuantity
			,	showMinimumQuantity: minimum_quantity > 1
				//@property {Integer} minimumQuantity
			,	minimumQuantity: minimum_quantity
				// @property {Boolean} isPriceEnabled
			,	isPriceEnabled: !ProfileModel.getInstance().hidePrices()
			// @property {Boolean} isLivExItem
			, isNotLivExItem: !isLivExItem
			, isLivExItem: isLivExItem
			, livExInternalErrorCode: livExInternalErrorCode
			, livExQuantity: livExQuantity
			, livExBottlesInCase: livExBottlesInCase
			, livExError: livExError
			, livExSuccess: !livExError
			};
			//@class Cart.Item.Summary.View
		}
	});
});
