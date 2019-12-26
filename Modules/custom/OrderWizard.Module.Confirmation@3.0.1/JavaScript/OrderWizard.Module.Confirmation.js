/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// @module OrderWizard.Module.Confirmation
var _talkable_data = null;
define(
	'OrderWizard.Module.Confirmation'
,	[
		'SC.Configuration'
	,	'Wizard.Module'
	,	'Tracker'

	,	'order_wizard_confirmation_module.tpl'

	,	'Backbone'
	,	'underscore'
	,	'jQuery'
	,	'Utils'
	]
,	function (
		Configuration
	,	WizardModule
	,	Tracker

	,	order_wizard_confirmation_module_tpl

	,	Backbone
	,	_
	,	jQuery
	,	Utils
	)
{
	'use strict';

	// @class OrderWizard.Module.Confirmation @extends Wizard.Module
	return WizardModule.extend({

		template: order_wizard_confirmation_module_tpl

	,	className: 'OrderWizard.Module.Confirmation'

	,	render: function()
		{
			var confirmation = this.model.get('confirmation')
				// store current order id in the hash so it is available even when the checkout process ends.
			,	new_hash;

			if (!_.parseUrlOptions(Backbone.history.fragment).last_order_id)
			{
				this.trackTransaction(confirmation);
				this.talkable = this.talkable(confirmation);

				new_hash = Utils.addParamsToUrl(Backbone.history.fragment, {
					last_order_id: confirmation.get('internalid')
				});

				Backbone.history.navigate(new_hash, {
					trigger: false
				});
			}

			this.confirmation_number = confirmation.get('tranid') || confirmation.get('confirmationnumber');
			this.order_id = confirmation.get('internalid');
			this.tranid = confirmation.get('tranid');
			this._render();

			if (!(this.model.get('confirmation') && this.model.get('confirmation').get('internalid')))
			{
				this.$el.html('<h3>' + _('Your Order has been placed').translate()+ '</h3>');
				this.$el.append('<p>'+  _('Continue Shopping on our <a href="/" data-touchpoint="home">Home Page</a>. ').translate() +'</p>');
			}
		}

		//@method talkable Convert the LiveOrder.Model into talkable script
	,	talkable: function (confirmation)
		{
			var profileModel = this.wizard.profileModel
			,	_talkable_purchase_items = [];

			console.log('confirmation: ', confirmation);

			var summary = confirmation.get('summary')
			,	talkableData = {
					purchase: {
							order_number: confirmation.get('tranid')
						,	subtotal: summary.subtotal
						,	coupon_code: ''
						,	shipping_zip: ''
						,	shipping_address: ''
						//,	items: new Backbone.Collection()
					},
					customer: { email: profileModel.get('email') }
				}
			,	talkableModel = new Backbone.Model(talkableData);

			console.log('talkableModel111: ', talkableModel);

			/*confirmation.get('lines').each(function(line)
			{
				talkableModel.get('items').add(
					new Backbone.Model({
							product_id: line.getSku() // Item Product ID. Example: 'sku0001'
						,	price: line.get('item').get('onlinecustomerprice_detail').onlinecustomerprice // Item Unit Price. Example: '199.00'
						,	quantity: line.get('quantity') // Item Quantity. Example: '1'
						,	title: line.get('item').get('_name') // Name of a product. Example: 'Product Name'
					})
				);
			});*/

			console.log('talkableModel-items: ', talkableModel);
			return talkableModel;
		}

		//@method trackTransaction Convert the LiveOrder.Model into Track.Transaction.Model until we unified it with the Transaction.Model
	,	trackTransaction: function (confirmation)
		{
			var summary = confirmation.get('summary')
			,	transaction = {
					confirmationNumber: confirmation.get('tranid')
				,	subTotal: summary.subtotal
				,	total: summary.total
				,	taxTotal: summary.taxtotal
				,	shippingCost: summary.shippingcost
				,	handlingCost: summary.handlingcost
				,	products: new Backbone.Collection()
				}
			,	transactionModel = new Backbone.Model(transaction);

			confirmation.get('lines').each(function(line)
			{
				var options = [];

				line.get('options').each(function (option)
				{
					if (option.get('value').label)
					{
						options.push(option.get('value').label);
					}
				});

				transactionModel.get('products').add(new Backbone.Model({
					sku: line.getSku()
				,	name: line.get('item').get('_name')
				,	category: line.get('item').get('category')
				,	rate: line.get('rate')
				,	quantity: line.get('quantity')
				,	options: options.sort().join(', ')
				}));
			});

			Tracker.getInstance().trackTransaction(transactionModel);
		}

		// @method getContext @return OrderWizard.Module.Confirmation.Context
	,	getContext: function()
		{
			var continue_url = '/'
			,	touchpoint = true;

			if (Configuration.get('siteSettings.iswsdk') && Configuration.get('siteSettings.wsdkcancelcarturl'))
			{
				continue_url = Configuration.get('siteSettings.wsdkcancelcarturl');
				touchpoint = false;
			}

			_talkable_data = this.talkable;

			//console.log('OrderWizard.Module.Confirmation.js => _talkable_data: ', _talkable_data);

			//console.log("Confirmation => this.model: ", this.model);

			localStorage.removeItem("expected_delivery_date");
			localStorage.removeItem("record-in-vincellar");
			localStorage.removeItem("calculated-web-date");
			localStorage.removeItem("user-ship-date");


			var confirmation = this.model.get('confirmation')

			var summary = confirmation.get('summary')

			var profileModel = this.wizard.profileModel
			,   userEmail= profileModel.get('email')
			,   firstName = profileModel.get('firstname')
			,   lastName = profileModel.get('lastname')
			,   productArray = []

			confirmation.get('lines').each(function(line)
			{
				//console.log(line)
				productArray.push(line.get('item').get('displayname'));
				// productArray.push({
				// 	//'id':line.getSku(),
				// 	'name':line.get('item').get('displayname')
				// 	//'quantity':line.get('quantity'),
				// 	//'price':line.get('rate')
				// })
			});
			/*analytics.track("Order Completed",
			{"email":userEmail, // Replace with customer email
			"first_name":firstName,
			 "last_name":lastName,
			 "products":productArray,
			 "total": summary.total
			});

			console.log(productArray)*/
			// @class OrderWizard.Module.Confirmation.Context
			return {
				// @property {String} continueURL
				continueURL: continue_url
				// @property {Boolean} isGuestAndCustomerCenter
			,	isGuestAndCustomerCenter: !!(this.wizard.profileModel.get('isGuest') === 'F' && Configuration.get('siteSettings.touchpoints.customercenter'))
				// @property {String} additionalConfirmationMessage
			,	additionalConfirmationMessage: this.options.additional_confirmation_message
				// @property {Boolean} touchPoint
			,	touchPoint: touchpoint
				// @property {String} confirmationNumber
			,	confirmationNumber: this.confirmation_number
				// @property {Number} orderId
			,	orderId: this.order_id
				// @property {String} pdfUrl
			,	pdfUrl:  _.getDownloadPdfUrl({
					asset: 'order-details'
				,	id: this.order_id
				})
			, tranid: this.tranid
			,   subTotal: summary.total
			//,   userEmail:userEmail
			,   productArray:productArray.toString()
			};
		}
	});
});
