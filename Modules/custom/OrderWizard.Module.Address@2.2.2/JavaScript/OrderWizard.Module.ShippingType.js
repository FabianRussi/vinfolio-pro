/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

//@module OrderWizard
define('OrderWizard.Module.ShippingType'
,	[	'Wizard.Module'
	,	'OrderWizard.Module.Address'
	,	'Backbone.CompositeView'
	,	'order_wizard_shipping_type.tpl'

	,	'Backbone'
	,	'underscore'
	,	'jQuery'
	,	'Utils'
	]
,	function (
		WizardModule
	,	OrderWizardModuleAddress
	,	BackboneCompositeView
	,	order_wizard_shipping_type_tpl

	,	Backbone
	,	_
	,	jQuery
	)
{
	'use strict';

	//@class OrderWizard.Module.Address @extend Wizard.Module
	return WizardModule.extend({

		template: order_wizard_shipping_type_tpl

	,	events: {
			'change [data-acion="shipping-type"]': 'changeShippingType'
		}

	,	errors: ['ERR_CHK_INCOMPLETE_ADDRESS', 'ERR_CHK_INVALID_ADDRESS']

	,	initialize: function (options)
		{
			//WizardModule.prototype.initialize.apply(this, arguments);
//console.log('this.model.options', this.model.options.model);
			BackboneCompositeView.add(this);
		}

		// @method unsetAddressShippingType @param {Boolean} norender @param {Object} options
	,	unsetAddressShippingType: function (norender, shippingType, options)
		{
			var addressModuleView = new OrderWizardModuleAddress;

			addressModuleView.setAddress(null, options);
			addressModuleView.tempAddress = null;
			
			if (!norender)
			{
				addressModuleView.render();
			}
			
			jQuery("#custbody_vf_shippingtypeonso").val(shippingType);
		}
		
	,	changeShippingType: function (e)
		{
			//var addressModuleView = new OrderWizardModuleAddress();

			var shippingType = jQuery("#custbody_vf_shippingtypeonso").val();
			// Set 'Shipping Type' in model
			var options = this.model.options.model.get('options');
			this.model.options.model.set({
				options: _.extend(options, {
					'custbody_vf_shippingtypeonso': shippingType
				})
			});

			e.preventDefault();
			e.stopPropagation();

			var $link = jQuery(e.currentTarget)
			,	is_disabled = $link.attr('disabled');

			//OrderWizardModuleAddress.changeAddress(is_disabled);

			if (is_disabled)
			{
				return;
			}

			if (this.options.edit_url)
			{
				//addressModuleView.unsetAddressShippingType(true, shippingType);

				Backbone.history.navigate(this.options.edit_url + '?force=true', {
					trigger: true
				});
			}
			else
			{
				//addressModuleView.unsetAddressShippingType(false, shippingType);
			}
			
			// Check shipping type if user change the address
			//addressModuleView.enableDisableAddress(shippingType);

var user_ship_date = localStorage.getItem("user-ship-date");
			if(!_.isEmpty(user_ship_date))
			{
				//debugger;
				localStorage.removeItem("user-ship-date");
			}
		}


		//@method getContext @return {OrderWizard.Module.Address.Context}
	,	getContext: function ()
		{
			//console.log('this.model.options', this.model.options.model.get('options').custbody_vf_shippingtypeonso);
		//	console.log('model:', this);
			var	ship_type = jQuery("#custbody_vf_shippingtypeonso").val() ? jQuery("#custbody_vf_shippingtypeonso").val() :  this.model.options.model.get('options').custbody_vf_shippingtypeonso;

			var shipping_types = [];
			if(!_.isUndefined(this.model.options.model.__customFieldsMetadata))
			{
				for(var i=0; this.model.options.model.__customFieldsMetadata.custbody_vf_shippingtypeonso.options != null && i < this.model.options.model.__customFieldsMetadata.custbody_vf_shippingtypeonso.options.length; i++)
				{
					var shipTypeOptions = this.model.options.model.__customFieldsMetadata.custbody_vf_shippingtypeonso.options
					,	id = shipTypeOptions[i].id
					,	text = shipTypeOptions[i].text
					,	isActive = (shipTypeOptions[i].id == ship_type);

	if(id !=3){
						shipping_types.push({id: id, text: text, isActive: isActive});
					}
				}
			}

			//console.log('this.isSameAsEnabled && this.sameAs: ',this.isSameAsEnabled && this.sameAs, 'this.addressId: ',this.addressId, '!this.address.isNew(): ',!this.address.isNew(), 'this.getAddressesToShow().length : ',this.getAddressesToShow().length, 'this.isGuest: ',this.isGuest);

			//@class OrderWizard.Module.Address.Context
			return {
				//@property {Object} shippingTypes
				shippingTypes: shipping_types

			};
		}
	});
});
