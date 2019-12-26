/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// @module Cart
define(
	'Cart.AddToCart.Button.View'
,	[
		'LiveOrder.Model'
	,	'LiveOrder.Line.Model'
	,	'Cart.Confirmation.Helpers'

	,   'Profile.Model'

	,	'cart_add_to_cart_button.tpl'

	,	'jQuery'
	,	'Backbone'
	,	'underscore'
	,	'Utils'
	]
,	function (
		LiveOrderModel
	,	LiveOrderLineModel
	,	CartConfirmationHelpers

	,   ProfileModel

	,	cart_add_to_cart_button_tpl

	,	jQuery
	,	Backbone
	,	_
	)
{
	'use strict';

	//@class Cart.AddToCart.Button.View @extend Backbone.View
	return Backbone.View.extend({

		//@property {Function} template
		template: cart_add_to_cart_button_tpl

	,	events: {
			'click [data-type="add-to-cart"]': 'addToCart'
		}

		//@method initialize
		//@param {ProductDeatils.AddToCart.ViewCart.AddToCart.Button.View.Initialize.Options} options
		//@return {Void}
	,	initialize: function initialize ()
		{
			Backbone.View.prototype.initialize.apply(this, arguments);

			this.cart = LiveOrderModel.getInstance();

			this.model.on('change', this.render, this);
		}

		//@method destroy Override default method to detach from change event of the current model
		//@return {Void}
	,	destroy: function destroy ()
		{
			Backbone.View.prototype.destroy.apply(this, arguments);

			this.model.off('change', this.render, this);
		}

		//@method getAddToCartValidators Returns the extra validation to add a product into the cart
		//@return {BackboneValidationObject}
	,	getAddToCartValidators: function getAddToCartValidators ()
		{
			var self = this;
			return {
				quantity: {
					fn : function ()
					{
						var line_on_cart	 = self.cart.findLine(self.model)
						,	quantity		 = self.model.get('quantity')
						,	minimum_quantity = self.model.getItem().get('_minimumQuantity') || 1
						//,	soldbyVal		 = _.isObject(self.model.get('custcol_vf_soldby')) ? self.model.get('custcol_vf_soldby').internalid : self.model.get('custcol_vf_soldby')
						,	soldbyVal		 = self.model.get('custcol_vf_soldby')
						,	case_size		 = jQuery('label[data-label-value="'+soldbyVal+'"]').attr('data-label-case-size') // Number( self.model.getItem().get('custitem_case_size') )
						,	custom_qty_allow = jQuery('label[data-label-value="'+soldbyVal+'"]').attr('data-label-qty-allow');

						if (!_.isNumber(quantity) || _.isNaN(quantity) || quantity < 1)
						{
							return _.translate('Invalid quantity value');
						}
						else if (!line_on_cart && custom_qty_allow != 99999 && custom_qty_allow < quantity)
						{
							if(custom_qty_allow == 0)
								return _.translate('Please select valid item options');

							return _.translate('Please add $(0) or less of this item', custom_qty_allow);
						}
						else if(case_size > 0 && Number(quantity % case_size) > 0)
						{
							return _.translate('You can add quantity only in multiples of '+case_size);
						}
						else if (!line_on_cart && quantity < minimum_quantity)
						{
							return _.translate('Please add $(0) or more of this item', minimum_quantity);
						}
						else if (line_on_cart &&  line_on_cart.get('quantity') >= custom_qty_allow)
						{
							return _.translate('You have exceeded the max quantity '+custom_qty_allow+' for this item');
						}
						else if (line_on_cart && custom_qty_allow)
						{
							var qty_line_on_cart = line_on_cart.get('quantity')
							,	qty_remaining = Number(custom_qty_allow - qty_line_on_cart);
							
							if (quantity > qty_remaining)
								return _.translate('You can add only '+qty_remaining+' quantity for this item');
						}
					}
				}
			};
		}

		//@method submitHandler Public method that fulfill the require interface of the Main action View of the PDP
		//@param {jQuery.Event} e
		//@return {Boolean}
	,	submitHandler: function submitHandler (e)
		{
			return this.addToCart(e);
		}

		// @method addToCart Updates the Cart to include the current model
		// also takes care of updating the cart if the current model is already in the cart
		// @param {jQuery.Event} e
		// @return {Boolean}
	,	addToCart: function addToCart (e)
		{
			e.preventDefault();

			var self = this
			,	cart_promise;
			if (!this.model.areAttributesValid(['options','quantity'], self.getAddToCartValidators()) && this.model.get("item").get('itemtype')!="GiftCert")
			{
				return;
			}
			if (!this.model.isNew() && this.model.get('source') === 'cart')
			{
 				cart_promise = this.cart.updateProduct(this.model);
 				cart_promise.done(function ()
 				{
 					self.options.application.getLayout().closeModal();
 				});
			}
			else
			{
				var line = LiveOrderLineModel.createFromProduct(this.model);
				cart_promise = this.cart.addLine(line);
				CartConfirmationHelpers.showCartConfirmation(cart_promise, line, self.options.application);
				//$.cookie('addtocartcookie','itemaddedtocart')
			}

			cart_promise.fail(function (jqXhr)
			{
				var error_details = null;
				try
				{
					var response = JSON.parse(jqXhr.responseText);
					error_details = response.errorDetails;
				}
				finally
				{
					if (error_details && error_details.status === 'LINE_ROLLBACK')
					{
						self.model.set('internalid', error_details.newLineId);
					}
				}

			});


			/*Start of DoubleClick Floodlight Tag: Please do not remove
			Activity name of this tag: VINFOLIO_CartAbandonment_Floodlight
			URL of the webpage where the tag is expected to be placed: http://www.TBD
			This tag must be placed between the <body> and </body> tags, as close as possible to the opening tag.
			Creation Date: 05/09/2018*/

			var axel = Math.random() + "";
			var a = axel * 10000000000000;
			$('body').append('<iframe src="https://8577661.fls.doubleclick.net/activityi;src=8577661;type=retar0;cat=vinfo00;dc_lat=;dc_rdid=7362347;tag_for_child_directed_treatment=;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');

			$('body').append('<noscript><iframe src="https://8577661.fls.doubleclick.net/activityi;src=8577661;type=retar0;cat=vinfo00;dc_lat=;dc_rdid=7362347;tag_for_child_directed_treatment=;ord=1?" width="1" height="1" frameborder="0" style="display:none"></iframe></noscript>');


			this.disableElementsOnPromise(cart_promise, e.target);
			return false;
		}

		//@method getContext
		//@return {Cart.AddToCart.Button.View.Context}
	,	getContext: function getContext ()
		{
			//@class Cart.AddToCart.Button.View.Context
			return {
				//@property {Boolean} isCurrentItemPurchasable Indicate if the current item is valid to be purchase or not
				isCurrentItemPurchasable: this.model.getItem().get('_isPurchasable')
				//@property {Boolean} isUpdate
			,	isUpdate: !this.model.isNew() && this.model.get('source') === 'cart'
			};
			//@class Cart.AddToCart.Button.View
		}
	});
});

//@class Cart.AddToCart.Button.View.Initialize.Options
//@property {Product.Model} model This view is only capable of adding new PRODUCTs into the cart.
//If you need to add something else please convert it into a Product.Model.
//
