/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// @module ProductDetails
define(
	'ProductDetails.Quantity.View'
,	[
		'LiveOrder.Model'

	,	'product_details_quantity.tpl'
	,	'jQuery'

	,	'Backbone'
	]
,	function (
		LiveOrderModel

	,	product_details_quantity_tpl
	,	jQuery

	,	Backbone
	)
{
	'use strict';

	// @class ProductDetails.Quantity.View @extends Backbone.View
	return Backbone.View.extend({

			template: product_details_quantity_tpl

		,	events: {
				'click [data-action="updateQuantity"]': 'setQuantity'
			,	'click [data-action="changeQuantity"]': 'setFocus'
            ,   'keyup [data-action="changeQuantity"]': 'disableFocus'
			,	'change [data-action="changeQuantity"]': 'setFocus'
			}

			// @method setQuantity Increase the product's Quantity by 1
			// @param {jQuery.Event} e
			// @return {Void}
		,	setQuantity: function setQuantity (e)
			{
				e.preventDefault();

				var value = parseInt(this.$(e.currentTarget).data('value'), 10)
				,	$input_quantity = this.$('[name="quantity"]')
				,	old_value = parseInt($input_quantity.val(), 10)
				,	new_quantity = old_value + value;

				$input_quantity.val(new_quantity).trigger('blur');
			}

		,	updateTotalPrice: function updateTotalPrice(itemId)
			{
				// Update total price
				jQuery(".product-price hide-content1").hide();
				var item_price_for_total = ".item-price-for-total-"+itemId;
				var unit_price = jQuery(item_price_for_total).val();

				if(!_.isUndefined(unit_price))
				{
					var total_price = Number(unit_price) * Number(this.$('[name="quantity"]').val());
					var currency = jQuery(item_price_for_total).attr('data-price-currency')

					var fixItemTotal = total_price.toFixed(2)
					var orderSubTotalFinal = fixItemTotal.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
		

					//var totalPriceStr = '<span class="product-detail-total-span">Total:</span> <br> <span class="product-detail-total-price">'+currency + total_price.toFixed(2)+'</span>';
					//jQuery('#total-price').html(totalPriceStr);
					jQuery('.product-detail-total-price').html(currency + orderSubTotalFinal);
				
				}
			}

			// @method setFocus sets focus on input when clicked. Needed as FF won't focus if quantity is updated from spinners
			// @return {Void}
		,	setFocus: function setFocus ()
			{

				var op = this.model.get('options');
				if(op.length && op.length >0){
					var found = _.find(op.models,function(o){return o.get('cartOptionId') == "custcol_casesize";});
					if(found && found.get('value')){
						var owcpacksize = found.get('value').label;
						if(owcpacksize == '0' || owcpacksize == 0)
							owcpacksize = 1;
						//console.log(typeof(owcpacksize))
				  	 var totalqty = parseFloat(this.model.get('quantity')) * parseFloat(owcpacksize);
				  		
				  		if(totalqty<2)
						{
							jQuery('#bottlestext').html('('+totalqty +' bottle)' );
							jQuery('#in-modal-bottlestext').html('('+totalqty +' bottle)' );
						}
						else
						{
							jQuery('#bottlestext').html('('+totalqty +' bottles)' );
							jQuery('#in-modal-bottlestext').html('('+totalqty +' bottles)' );	
				  		}
				  		 //jQuery('#bottlestext').html('('+totalqty +' bottles)' );
					}else{
						var totalqty = parseFloat(this.model.get('quantity'));
						if(totalqty<2)
						{
							jQuery('#bottlestext').html('('+totalqty +' bottle)' );
							jQuery('#in-modal-bottlestext').html('('+totalqty +' bottle)' );
						}
						else
						{
							jQuery('#bottlestext').html('('+totalqty +' bottles)' );
							jQuery('#in-modal-bottlestext').html('('+totalqty +' bottles)' );
						}
							//jQuery('#bottlestext').html('('+totalqty +' bottles)' );
					}
				}
				
				this.$('[name="quantity"]').focus();

				var itemId = this.$('[name="quantity"]').attr('data-item-id');
				this.updateTotalPrice(itemId);
			}

			// @method disableFocus Blur if ENTER/RETURN key is pressed
			// @return {Void}
        ,   disableFocus: function disableFocus(e)
            {
                if (e.keyCode === 13)
                {
                    this.$('[name="quantity"]').blur();
                }
            }

			//@method getContext
			//@return {ProductDetails.Quantity.View.Context}
		,	getContext: function getContext ()
			{
				//@class ProductDetails.Quantity.View.Context
				return {
					//@property {Product.Model} model
					model: this.model
					//@property {Boolean} showQuantity
				,	showQuantity: this.model.get('item').get('_itemType') !== 'GiftCert'
					//@property {Boolean} isMinusButtonDisabled
				,	isMinusButtonDisabled: this.model.get('quantity') <= 1
				};
				//@class ProductDetails.Quantity.View
			}
		});
});
