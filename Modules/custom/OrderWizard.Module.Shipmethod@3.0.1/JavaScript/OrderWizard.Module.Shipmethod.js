/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

//@module OrderWizard.Module.Shipmethod
define(
	'OrderWizard.Module.Shipmethod'
,	[	'Wizard.Module'
	,	'Profile.Model'
	,	'GlobalViews.Message.View'
	,   'LiveOrder.Model'

	,	'order_wizard_shipmethod_module.tpl'

	,	'underscore'
	,	'jQuery'
	]
,	function (
		WizardModule
	,	ProfileModel
	,	GlobalViewsMessageView
	,   LiveOrderModel

	,	order_wizard_shipmethod_module_tpl

	,	_
	,	jQuery
	)
{
	'use strict';
	//@class OrderWizard.Module.Shipmethod @extends Wizard.Module
	return WizardModule.extend({

		//@property {Function} template
		template: order_wizard_shipmethod_module_tpl
		//@property {Object} events
	,	events: {
			'change [data-action="select-delivery-option"]': 'changeDeliveryOptions'
		,	'click [data-action="select-delivery-option-radio"]': 'changeDeliveryOptions'
		,	'click input[name="third_party_confirmation"]': 'checkConfirmation'
		,	'change [data-action="willcall-location"]': 'setWillcallShipMethod'
		,	'keyup [name="custbody_3rd_party_shipper"]': 'setCharacterLimit'
		,	'click [data-action="select-shipping-option-radio"]': 'changeShippingOptions'
		,	'change [data-action="check-weather-hold"]': 'checkWeatherHoldDate'
		,	'click [data-action="custom-ship-options"]': 'changeShippingOption'
		,	'click [data-action="record-in-vincellar"]': 'recordInVincellar'
		,	'click [data-action="record-in-Gift"]' : 'recordGift'
		//,	'click [data-action="ship-season-1"]' : 'changeSeasonOption'
		}
		//@property {Array} errors
	,	errors: ['ERR_CHK_SELECT_SHIPPING_METHOD','ERR_WS_INVALID_SHIPPING_METHOD','ERR_CHK_CONFIRM_SHIPPING_RULES']
		//@method initialize
	,	initialize: function ()
		{
			this.waitShipmethod = SC.ENVIRONMENT.CART ? !SC.ENVIRONMENT.CART.shipmethod : !(this.model && this.model.get('shipmethod'));

			this.profileModel = ProfileModel.getInstance();

			this.addresses = this.profileModel.get('addresses');

			WizardModule.prototype.initialize.apply(this, arguments);
			// So we allways have a the reload promise
			this.reloadMethodsPromise = jQuery.Deferred().resolve();
			this.wizard.model.on('ismultishiptoUpdated', _.bind(this.render, this));
		}

		//@method changeShippingOption
	,	changeShippingOption: function(e)
		{
			var web_ship_date = jQuery("#custbody_vf_web_ship_date").val()
			,	so_shipping_type = this.wizard.model.get('options').custbody_vf_shippingtypeonso ? this.wizard.model.get('options').custbody_vf_shippingtypeonso : jQuery("#custbody_vf_shippingtypeonso").val() 
			
			if(so_shipping_type !== '2')
			{
			sessionStorage.removeItem("expected_delivery_date");	
			var expected_delivery_date = this.nonDomesticExpectedDeliveryDate(web_ship_date,so_shipping_type);
			jQuery('#expected_delivery_date').val(expected_delivery_date);
			}
			if(so_shipping_type == '1')
			{
				sessionStorage.removeItem("expected_delivery_date");	
			}
		}

	/*,   changeSeasonOption: function(e)
		{
			var self = this
			,	target = jQuery(e.currentTarget)
			,	targetValue = jQuery('.shipping_season').prop("checked");
			var shipping_type = jQuery('#custbody_vf_shippingtypeonso').val();
			var check = new Date(jQuery(e.currentTarget).val() )
			,	to = new Date( jQuery('input[name="txtWeatherHoldEndDate"]').val() )
			,	from = new Date( jQuery('input[name="txtWeatherHoldStartDate"]').val() )
			,	is_weather_hold_y = true;

			if(check != "" && to != "" && from != ""){
				if( is_weather_hold_y && check.getTime() <= to.getTime() && check.getTime() >= from.getTime() ){
					is_weather_hold_y = true;
				}
				else{
					is_weather_hold_y = false;
				}
			}
			
			if(targetValue == 1){
				jQuery(".order-wizard-shipmethod-module-custom-fields").show();
				jQuery('.order-wizard-shipmethod-module-custom-fields-season-option').hide();
				if(shipping_type == 2){
					jQuery('#order-wizard-shipmethod-module-dropdown-season-option').hide();
					jQuery("#order-wizard-shipmethod-module-dropdown").show();
					if(is_weather_hold_y){
						jQuery(".order-wizard-shipmethod-module-weather-hold-d-option-sec").show();
					}else{
						jQuery(".order-wizard-shipmethod-module-weather-hold-d-option-sec").hide();
					}
				}
			sessionStorage.setItem("shipping_season_checkbox", targetValue);
			}else{
				jQuery(".order-wizard-shipmethod-module-custom-fields").hide();
				jQuery(".order-wizard-shipmethod-module-weather-hold-d-option-sec").hide();
				jQuery(".order-wizard-shipmethod-module-weather-hold-d-option").hide();
				jQuery('.order-wizard-shipmethod-module-custom-fields-season-option').show();
				if(shipping_type == 2){
					jQuery('#order-wizard-shipmethod-module-dropdown-season-option').show();
					jQuery("#order-wizard-shipmethod-module-dropdown").hide();
				}
			sessionStorage.setItem("shipping_season_checkbox", targetValue);	
			}
		}*/

		//@method checkWeatherHoldDate
	,	checkWeatherHoldDate: function(e)
		{
			//Get user preferred ship date and store in localstorage to save it as preferred
			var ship_date = jQuery('#custbody_vf_web_ship_date').val()

			var self = this

			localStorage.setItem("user-ship-date", ship_date);
			var shipping_type = jQuery('#custbody_vf_shippingtypeonso').val();

			if(shipping_type == '2')
			{
				var check = new Date(jQuery(e.currentTarget).val() )
				,	to = new Date( jQuery('input[name="txtWeatherHoldEndDate"]').val() )
				,	from = new Date( jQuery('input[name="txtWeatherHoldStartDate"]').val() )
				,	is_weather_hold = true;
				//console.log('to',to)
				//console.log('from',from)
				if(check != "" && to != "" && from != ""){
					if( is_weather_hold && check.getTime() <= to.getTime() && check.getTime() >= from.getTime() ){
						is_weather_hold = true;
					}
					else{
						is_weather_hold = false;
					}
				}
				if(is_weather_hold){
					jQuery(".order-wizard-shipmethod-module-weather-hold").show();
				}
				else{
					jQuery(".order-wizard-shipmethod-module-weather-hold").hide();
				}
				jQuery(".hide-expected").hide();
			}else if(shipping_type == '4'){
				var check = new Date(jQuery(e.currentTarget).val() )
				,	to = new Date( jQuery('input[name="txtWeatherHoldEndDate"]').val() )
				,	from = new Date( jQuery('input[name="txtWeatherHoldStartDate"]').val() )
				,	is_weather_hold_party = true;

				if(check != "" && to != "" && from != ""){
					if( is_weather_hold_party && check.getTime() <= to.getTime() && check.getTime() >= from.getTime() ){
						is_weather_hold_party = true;
					}
					else{
						is_weather_hold_party = false;
					}
				}
				if(is_weather_hold_party){
					jQuery(".order-wizard-shipmethod-module-weather-hold-3rd-party").show();
					jQuery(".order-wizard-shipmethod-module-weather-hold").hide();
				}
				else{
					jQuery(".order-wizard-shipmethod-module-weather-hold-3rd-party").hide();
				}
			}
			else if(shipping_type == '6' || shipping_type == '5')
			{			
				var expected_delivery_date = this.nonDomesticExpectedDeliveryDate(ship_date,shipping_type);
				jQuery('#expected_delivery_date').val(expected_delivery_date);

			}else if(shipping_type == '1'){
				sessionStorage.removeItem("expected_delivery_date");	
			}
			// Update expected delivery date           
			///var expected_delivery_date = this.calculateExpectedDeliveryDate( jQuery(e.currentTarget).val() );
			//localStorage.setItem("expected_delivery_date", expected_delivery_date);
			//jQuery('#expected_delivery_date').val(expected_delivery_date);
			jQuery('.order-wizard-shipmethod-module-option-select').children().remove();
			jQuery('.order-wizard-shipmethod-module-option-select').val("Select a delivery method");
			jQuery('.order-wizard-shipmethod-module-weather-hold-d-option-sec').hide();
			jQuery('.order-wizard-shipmethod-module-weather-hold-d-option').hide();
			//console.log('shipping_type',shipping_type)
			if(shipping_type == '2'){
				$('.order-wizard-shipmethod-module-option-select').append('<option>Select a delivery method</option>');
				//console.log('is_weather_hold',is_weather_hold)
				if(is_weather_hold){
					var shipping_methods = this.model.get('shipmethods').map(function (shipmethod){
						var name = shipmethod.get('name').toLowerCase();
						var internalID = shipmethod.get('internalid');
						if(internalID == 20 || internalID == 21 || internalID == 22){
							var rate_formatted = shipmethod.get('rate_formatted');
							if(rate_formatted == 'Free!') rate_formatted = 'Charged at the time of shipping'
								/*if(shipmethod.get('internalid') == '21')
								{
								$('.order-wizard-shipmethod-module-option-select').append('<option selected value="'+shipmethod.get('internalid')+'" id="delivery-options-'+shipmethod.get('internalid')+'">'+rate_formatted+'-'+shipmethod.get('name')+'</option>');
									self.waitShipmethod = true;
									self.model.set('shipmethod', shipmethod.get('internalid'));
									self.step.disableNavButtons();
									self.model.save().always(function()
									{
										self.clearError();
										self.step.enableNavButtons();
									});	
								}
								else*/
								$('.order-wizard-shipmethod-module-option-select').append('<option value="'+shipmethod.get('internalid')+'" id="delivery-options-'+shipmethod.get('internalid')+'">'+rate_formatted+'-'+shipmethod.get('name')+'</option>');
									
						}
					});
				}else{
					var shipping_methods = this.model.get('shipmethods').map(function (shipmethod){
						var name = shipmethod.get('name').toLowerCase();
						var internalID = shipmethod.get('internalid');

						//console.log('internalID',internalID)
						if(name.indexOf('fedex') > -1 && internalID != 23 && internalID != 20 && internalID != 21 && internalID != 22){
							//console.log('internalID in',internalID)
							var rate_formatted = shipmethod.get('rate_formatted');
							if(rate_formatted == 'Free!') rate_formatted = 'Charged at the time of shipping'
							/*if(shipmethod.get('internalid') == '3')	
							{
							$('.order-wizard-shipmethod-module-option-select').append('<option selected value="'+shipmethod.get('internalid')+'" id="delivery-options-'+shipmethod.get('internalid')+'">'+rate_formatted+'-'+shipmethod.get('name')+'</option>');
								self.waitShipmethod = true;
								self.model.set('shipmethod', shipmethod.get('internalid'));
								self.step.disableNavButtons();
								self.model.save().always(function()
								{
									self.clearError();
									self.step.enableNavButtons();
								});	
							}
							else*/
							$('.order-wizard-shipmethod-module-option-select').append('<option value="'+shipmethod.get('internalid')+'" id="delivery-options-'+shipmethod.get('internalid')+'">'+rate_formatted+'-'+shipmethod.get('name')+'</option>');
						
						}
					});
				}

			}else{
				$('.order-wizard-shipmethod-module-option-select').append('<option>Select a delivery method</option>');
				var shipping_methods = this.model.get('shipmethods').map(function (shipmethod){
					var name = shipmethod.get('name').toLowerCase();
					var internalID = shipmethod.get('internalid');
					$('.order-wizard-shipmethod-module-option-select').append('<option value="'+shipmethod.get('internalid')+'" id="delivery-options-'+shipmethod.get('internalid')+'">'+shipmethod.get('rate_formatted')+'-'+shipmethod.get('name')+'</option>');
				});
			}
		}

		//@method changeShippingOptions
	,	changeShippingOptions: function (e)
		{
			var self = this
			,	target = jQuery(e.currentTarget)
			,	targetValue = target.val() || target.attr('data-value');
			var shipping_type = jQuery('#custbody_vf_shippingtypeonso').val()
			, availability_flag = false
			, unavailability_flag = false
			, display_ship_option_notice = false;


			if (shipping_type == '1') {
					this.model.get('lines').each(function (line) {
						var line_item = line.get('item')
						, wine_availability = line_item.get('custitem_vf_availability')

						if (wine_availability.indexOf('In Stock') > -1)
							availability_flag = true;
						else
							unavailability_flag = true;

					});
					//if all wines are unavailable,display a message
					if (unavailability_flag == true && availability_flag == false) {
						display_ship_option_notice = true;
					}
				}
			

			if(targetValue == 1){
				if (display_ship_option_notice == true && shipping_type == '1')
					jQuery(".shipping-options-msg").show();
					jQuery(".order-wizard-shipmethod-module-ship-pick-date").hide();
				if(shipping_type == 2){
					jQuery(".order-wizard-shipmethod-module-weather-hold").hide();
				}else if(shipping_type == 4){
					jQuery(".order-wizard-shipmethod-module-weather-hold-3rd-party").hide();
				}
			}
			else{
				jQuery(".shipping-options-msg").hide();
				jQuery(".order-wizard-shipmethod-module-ship-pick-date").show();
				if(shipping_type == 2){
					jQuery(".order-wizard-shipmethod-module-weather-hold").show();
				}else if(shipping_type == 4){
					jQuery(".order-wizard-shipmethod-module-weather-hold-3rd-party").show();
				}
			}

			var options = this.model.get('options');
			this.model.set({
				options: _.extend(options, {
					'custbody_shipping_option': targetValue
				})
			});
		}
	,	recordGift: function(e){
			var self = this
			,	target = jQuery(e.currentTarget)
			,	targetValue = jQuery('.record_in_gift').prop("checked");
			if(targetValue == true){
				jQuery('.gift_text_area').show();
				jQuery('.saparation_border').hide();
				jQuery('.saparation_border_sec').show();
			}
			else if(targetValue == false){
				$("#textarea").val('')
				jQuery('.gift_text_area').hide();
				jQuery('.saparation_border').show();
				jQuery('.saparation_border_sec').hide()
			}
		}

	,   recordInVincellar: function(e)
		{
			var self = this
			,	target = jQuery(e.currentTarget)
			,	targetValue = jQuery('.custbody_record_in_vincellar').prop("checked");

			if(targetValue == true)
				targetValue = 'T'
			else if(targetValue == false)
				targetValue = 'F'

			var options = this.wizard.model.get('options');
			options.custbody_record_in_vincellar = targetValue;

			self.wizard.model.save().always(function(){
				custbody_record_in_vincellar: targetValue
			});
			localStorage.setItem("record-in-vincellar", targetValue);
		}		

	,	setCharacterLimit: function(e)
		{
			var maxLength = (!_.isUndefined(this.model.get('options').custbody_3rd_party_shipper) && this.model.get('options').custbody_3rd_party_shipper != "") ? Number(255 - this.model.get('options').custbody_3rd_party_shipper.length) : 255;

			var	target = jQuery(e.currentTarget)

			var textlen = maxLength - target.val().length;
			jQuery('#rchars').text(textlen);
		}

	,	checkConfirmation: function(e)
		{
			var isChecked = jQuery(e.target).prop('checked')
			,	boxes = jQuery('input[name=third_party_confirmation]');

			jQuery.each(boxes, function( index ) {
			  jQuery(boxes[index]).prop('checked', isChecked);
			});
		}

	,	isActive: function ()
		{
			var is_shipping_required = this.wizard.model.shippingAddressIsRequired();
			if (!is_shipping_required)
			{
				this.wizard.model.unset('shipmethod');
			}
			return is_shipping_required && !this.wizard.model.get('ismultishipto');
		}

		//@method present
	,	present: function ()
		{
			this.currentAddress = this.previousAddress = this.model.get('shipaddress');
			this.eventHandlersOn();
		}
		//@method future
	,	future: function()
		{
			this.currentAddress = this.previousAddress = this.model.get('shipaddress');
			this.eventHandlersOn();
		}
		//@method past
	,	past: function()
		{
			this.waitShipmethod = !this.model.get('shipmethod');
			this.currentAddress = this.previousAddress = this.model.get('shipaddress');
			this.eventHandlersOn();
		}
		//@method eventHandlersOn
	,	eventHandlersOn: function ()
		{
			// Removes any leftover observer
			this.eventHandlersOff();
			// Adds the observer for this step
			this.model.on('change:shipaddress', this.shipAddressChange, this);

			this.model.on('change:shipmethods', function ()
			{
				_.defer(_.bind(this.render, this));
			}, this);

			var selected_address = this.addresses.get(this.currentAddress);

			if (selected_address)
			{
				selected_address.on('sync', jQuery.proxy(this, 'reloadMethods'), this);
			}
		}
		//@method eventHandlersOff
	,	eventHandlersOff: function ()
		{
			// removes observers
			this.model.off('change:shipmethods', null, this);
			this.model.off('change:shipaddress', this.shipAddressChange, this);

			var current_address = this.addresses.get(this.currentAddress)
			,	previous_address = this.addresses.get(this.previousAddress);

			if (current_address)
			{
				current_address.off('change:country change:zip', null, this);
				current_address.off('sync');
			}

			if (previous_address && previous_address !== current_address)
			{
				previous_address.off('change:country change:zip', null, this);
			}
		}
		//@method render
	,	render: function ()
		{
			if (this.state === 'present')
			{
				if (this.model.get('shipmethod') && !this.waitShipmethod)
				{
					this.trigger('ready', true);
				}
				
				this._render();
			}
		}
		//@method shipAddressChange
	,	shipAddressChange: function (model, value)
		{
			this.currentAddress = value;

			var order_address = this.model.get('addresses')
			,	previous_address = this.previousAddress && (order_address.get(this.previousAddress) || this.addresses.get(this.previousAddress))
			,	current_address = this.currentAddress && order_address.get(this.currentAddress) || this.addresses.get(this.currentAddress)
			,	changed_zip = previous_address && current_address && previous_address.get('zip') !== current_address.get('zip')
			,	changed_state = previous_address && current_address && previous_address.get('state') !== current_address.get('state')
			,	changed_country = previous_address && current_address && previous_address.get('country') !== current_address.get('country');

			// if previous address is equal to current address we compare the previous values on the model.
			if (previous_address && current_address && previous_address === current_address)
			{
				changed_zip = current_address.previous('zip') !== current_address.get('zip');
				changed_country = current_address.previous('country') !== current_address.get('country');
				changed_state = current_address.previous('state') !== current_address.get('state');
			}

			// reload ship methods only if there is no previous address or when change the country or zipcode
			if ((!previous_address && current_address) || changed_zip || changed_country || changed_state)
			{
				// if its selected a valid address, reload Methods
				if (this.model.get('isEstimating') || this.addresses.get(this.model.get('shipaddress')))
				{
					this.reloadMethods();
				}
			}
			else
			{
				this.render();
			}

			if (value)
			{
				this.previousAddress = value;
			}

			// if we select a new address, bind the sync method for possible address edits
			if (this.currentAddress)
			{
				var selected_address = this.addresses.get(this.currentAddress);
				if(selected_address)
				{
					selected_address.on('sync', jQuery.proxy(this, 'reloadMethods'), this);
				}

				// if there was a different previous address, remove the sync handler
				if(this.previousAddress && this.previousAddress !== this.currentAddress)
				{
					var previous_selected_address = this.addresses.get(this.previousAddress);
					if(previous_selected_address)
					{
						previous_selected_address.off('sync');
					}
				}
			}
		}

	,	setWillcallShipMethod: function setWillcallShipMethod(e)
		{
			var self = this
			,	target = jQuery(e.currentTarget)
			,	targetValue = target.val() || target.attr('data-value')			
			,   options = this.model.get('options')
			,   shippingType = jQuery("#custbody_vf_shippingtypeonso").val()
			,   newShipMethod = '';

			this.model.set({
					options: _.extend(options, {
						'custbody_willcalllocation': targetValue
					})
				});

			if(targetValue == 1)
				newShipMethod = '27';
			else 
				newShipMethod = '28';
				
				//console.log(newShipMethod)

			// to reload the shipping methods we just save the order
			var self = this
			,	$container = this.$el;

			$container.addClass('loading');
						
			// Abort the previous ajax call
			this.reloadMethodsPromise.abort && this.reloadMethodsPromise.abort();
			this.reloadingMethods = true;
			this.render();	
				this.reloadMethodsPromise = this.model
				.save(null, {
					parse: false
				,	success: function (model, attributes)
					{
							model.set({
									shipmethods: attributes.shipmethods
								,	shipmethod: newShipMethod
								,	summary: attributes.summary
							});
					}
				})
				.always(function (xhr)
				{
					// .always() method is excecuted even if the ajax call was aborted
					if (xhr.statusText !== 'abort')
					{
						$container.removeClass('loading');
						self.render();
						self.step.enableNavButtons();
						self.reloadingMethods = false;
					}
				});

			if (this.reloadMethodsPromise.state() === 'pending')
			{
				self.step.disableNavButtons();
			}		

		}

		//@method reloadMethods
	,	reloadMethods: function reloadMethods ()
		{
			//console.log('Reload Method')
			if (this.model.get('confirmation').internalid ||  this.model.get('confirmation').id )
			{
				return;
			}
			// to reload the shipping methods we just save the order
			var self = this
			,	$container = this.$el;

			$container.addClass('loading');

			// Set 'Delivery Method' based on the selection of 'SHIPPING TYPE'
			var newShipMethod = '';
			var willcallLocation = jQuery("#custbody_willcalllocation").val();
			var shippingType = jQuery("#custbody_vf_shippingtypeonso").val();
			//console.log(willcallLocation)
			switch (shippingType)
			{
				case '5': newShipMethod = '23'; break;
				case '6': newShipMethod = '26'; break;
				case '4': newShipMethod = '24'; break;
				case '1': 
						newShipMethod = '28'; 
						if(willcallLocation == 1) { newShipMethod = '27'; }
						break;
				case '3': newShipMethod = '25'; break;
				case '2': newShipMethod = ''; break;
				//case undefined : newShipMethod = '25'; break;
			}

			// Abort the previous ajax call
			this.reloadMethodsPromise.abort && this.reloadMethodsPromise.abort();
			this.reloadingMethods = true;
			this.render();
			this.reloadMethodsPromise = this.model
				.save(null, {
					parse: false
				,	success: function (model, attributes)
					{
						if(shippingType == 2)
						{
							// Show only 'FedEx' shipping methods
							var ship_methods_fedex = [];
							for(var i=0; attributes.shipmethods != null && i < attributes.shipmethods.length; i++)
							{
								var internalid		= attributes.shipmethods[i].internalid
								,	name			= attributes.shipmethods[i].name.toLowerCase()
								,	shipcarrier		= attributes.shipmethods[i].shipcarrier
								,	rate			= attributes.shipmethods[i].rate
								,	rate_formatted	= attributes.shipmethods[i].rate_formatted;

								if(name.indexOf('fedex')!=-1)
									ship_methods_fedex.push({internalid: internalid, name: attributes.shipmethods[i].name, shipcarrier: shipcarrier, rate: rate, rate_formatted: rate_formatted});
							}

							model.set({
									shipmethods: ship_methods_fedex
								,	shipmethod: newShipMethod
								,	summary: attributes.summary
							});
						}
						else
						{
							model.set({
									shipmethods: attributes.shipmethods
								,	shipmethod: newShipMethod
								,	summary: attributes.summary
							});
						}
					}
				})
				.always(function (xhr)
				{
					// .always() method is excecuted even if the ajax call was aborted
					if (xhr.statusText !== 'abort')
					{
						$container.removeClass('loading');
						self.render();
						self.step.enableNavButtons();
						self.reloadingMethods = false;
					}
				});

			if (this.reloadMethodsPromise.state() === 'pending')
			{
				self.step.disableNavButtons();
			}
		}

		//@method submit
	,	submit: function submit ()
		{
			return this.isValid();
		}

		//@method isValid
	,	isValid: function isValid ()
		{
			var model = this.model
			,	valid_promise = jQuery.Deferred();

			this.reloadMethodsPromise.always(function ()
			{
				if (model.get('shipmethod') && model.get('shipmethods').get(model.get('shipmethod')))
				{
					// Confirm shipping instructions for shipping type: 'Ship: Use My 3rd Party Shipper' 
					if( !jQuery('[name="third_party_confirmation"]').is(':checked') && jQuery('#custbody_vf_shippingtypeonso').val() == 4 )
					{
						valid_promise.reject({
							errorCode: 'ERR_CHK_CONFIRM_SHIPPING_RULES'
						,	errorMessage: _('Please check and confirm shipping instructions').translate()
						});
					}
					// Confirm shipping instructions for shipping type: 'Ship: Use My 3rd Party Shipper' 

					valid_promise.resolve();
				}
				else
				{
					valid_promise.reject({
						errorCode: 'ERR_CHK_SELECT_SHIPPING_METHOD'
					,	errorMessage: _('Please select a delivery method').translate()
					});
				}
			});

			return valid_promise;
		}

		//@method changeDeliveryOptions
	,	changeDeliveryOptions: function changeDeliveryOptions (e)
		{
			var self = this
			,	target = jQuery(e.currentTarget)
			,	targetValue = target.val() || target.attr('data-value');			

			this.waitShipmethod = true;
			this.model.set('shipmethod', targetValue);
			this.step.disableNavButtons();
			this.model.save().always(function()
			{
				self.clearError();
				self.step.enableNavButtons();
			});

			var ship_date = jQuery('#custbody_vf_web_ship_date').val()
			var shipping_type = jQuery('#custbody_vf_shippingtypeonso').val();
			
			if(shipping_type == '2')
			{
				var check = new Date(ship_date)
				,	to = new Date( jQuery('input[name="txtWeatherHoldEndDate"]').val() )
				,	from = new Date( jQuery('input[name="txtWeatherHoldStartDate"]').val() )
				,	is_weather_hold = true;

				if(check != "" && to != "" && from != ""){
					if( is_weather_hold && check.getTime() <= to.getTime() && check.getTime() >= from.getTime() ){
						is_weather_hold = true;
					}
					else{
						is_weather_hold = false;
					}
				}

				//call calculateExpectedDeliveryDate whenever delivery method is changed
				var expected_delivery_date = this.calculateExpectedDeliveryDate(targetValue,ship_date, is_weather_hold);
				sessionStorage.setItem("expected_delivery_date", expected_delivery_date);
				jQuery('#expected_delivery_date').val(expected_delivery_date);
			
			}
		}

		//@method showError render the error message
	,	showError: function showError ()
		{

			var global_view_message = new GlobalViewsMessageView({
					message: this.error.errorMessage
				,	type: 'error'
				,	closable: true
			});

			// Note: in special situations (like in payment-selector), there are modules inside modules, so we have several place holders, so we only want to show the error in the first place holder.
			this.$('[data-type="alert-placeholder-module"]:first').html(
				global_view_message.render().$el.html()
			);

			this.error = null;

		}

	,	getMaxDate: function getMaxDate(all_dates) 
		{
			if(all_dates != "")
			{
				var max_dt = all_dates[0].exp_ship_date
				,	item_id = all_dates[0].internalid
				,	max_dtObj = new Date(all_dates[0].exp_ship_date);

				all_dates.forEach(function(dt, index)
				{
					if ( new Date( dt.exp_ship_date ) > max_dtObj)
					{
						max_dt = dt.exp_ship_date;
						item_id = dt.internalid
						max_dtObj = new Date(dt.exp_ship_date);
					}
				});

				return {id: item_id, exp_ship_date: max_dt};
			}
		}

	,	calculateExpectedDeliveryDate: function calculateExpectedDeliveryDate(selectedDeliveryMethod,web_ship_date,is_weather_hold)
		{
			var self = this;

			var expected_delivery_date = '';
			if(!_.isUndefined(self.model.get('shipmethod')) && self.model.get('shipmethod')!="")
			{
				var todayDate = new Date()
					, expected_del_dt = ''
					, shipping_option = jQuery("[name=custbody_shipping_option]:checked").val() ? jQuery("[name=custbody_shipping_option]:checked").val() : this.wizard.model.get('options').custbody_shipping_option;

				//if(web_ship_date != "" && shipping_option == '2') todayDate = new Date(web_ship_date);
				if(web_ship_date != "") todayDate = new Date(web_ship_date);

				//console.log('calculateExpectedDeliveryDate: ', web_ship_date, 'ship method: ',self.model.get('shipmethod'), ' shipping_option: ',shipping_option);			
				switch(self.model.get('shipmethod'))
				{
					case '19':case '20':
						expected_delivery_date = new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate() + 2);
						break;
					case '22': case '150194':
						expected_delivery_date = new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate() + 3);
						break;
					case '16':
						expected_delivery_date = new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate() + 5);
						break;
					case '23':
						expected_delivery_date = new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate() + 14);
						break;
					case '3':case '18':case '49524':
						expected_delivery_date = new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate() + 1);
						break;
					case '26':case '24':case '28':
						var addDay = 1;
						if(web_ship_date != "" && shipping_option == '2') addDay = 0;
						expected_delivery_date = new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate() + addDay);
						break;
					case '21':
						expected_delivery_date = new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate() + 3);
						break;
					default:
						expected_delivery_date = '';
						break;
				}
				if(expected_delivery_date)
				{
					var day = expected_delivery_date.getDate();
					var month = expected_delivery_date.getMonth() + 1;
					if (month < 10) month = "0" + month;
					if (day < 10) day = "0" + day;
					expected_delivery_date = month+"/"+day+"/"+expected_delivery_date.getFullYear();
				}
			}
			//console.log('afetr calculateExpectedDeliveryDate: ', expected_delivery_date, 'ship method: ',self.model.get('shipmethod'), ' shipping_option: ',shipping_option);			
			return expected_delivery_date;
			
		}	
	
	,	nonDomesticExpectedDeliveryDate: function nonDomesticExpectedDeliveryDate(web_ship_date,so_shipping_type)
		{	
			var expected_delivery_date= ''
			,   addDays = ''
			, shipping_option = jQuery("[name=custbody_shipping_option]:checked").val() ? jQuery("[name=custbody_shipping_option]:checked").val() : this.wizard.model.get('options').custbody_shipping_option;
				

			//send to storage
			if(so_shipping_type == '3')
				addDays = 10;
			//International
			if(so_shipping_type == '5')
				addDays = 14;
			//Local Delivery/WillCall (removed 3rd party as per client request)
			if(so_shipping_type == '6' || so_shipping_type == '1')
				{
				addDays = 1;
				if(shipping_option == '2')
					addDays = 0;
				}

			if(so_shipping_type !== '2' && so_shipping_type !=='4' && so_shipping_type !=='1')
			{
				var add_to_final_web_date = new Date(web_ship_date)
				,   addDays_to_final_web_date = add_to_final_web_date.setDate(add_to_final_web_date.getDate()+ addDays)
				,   final_cal_delv_date = new Date(addDays_to_final_web_date)
				,   final_cal_delv_date_dd = final_cal_delv_date.getDate()
				,   final_cal_delv_date_mm = final_cal_delv_date.getMonth()+1
				,   final_cal_delv_date_yy = final_cal_delv_date.getFullYear()
				
				if (final_cal_delv_date_dd < 10) {
				  final_cal_delv_date_dd = '0' + final_cal_delv_date_dd;
				}
				if (final_cal_delv_date_mm < 10) {
				  final_cal_delv_date_mm = '0' + final_cal_delv_date_mm;
				}
				//console.log(final_cal_delv_date_mm+"/"+final_cal_delv_date_dd+"/"+final_cal_delv_date_yy)
				expected_delivery_date = final_cal_delv_date_mm+"/"+final_cal_delv_date_dd+"/"+final_cal_delv_date_yy
				sessionStorage.setItem('expected_delivery_date',expected_delivery_date)
			}		
				return expected_delivery_date;
		}
	
	,   validateShipDate:  function validateShipDate(web_ship_date)
		{
			// Check if date is fall on SAT/SUN, If YES then select next coming MONDAY date
			var tmp_web_ship_date = new Date(web_ship_date);
			var weekDay = tmp_web_ship_date.getDay();
			//var day = web_ship_date.getDate();
			var month = tmp_web_ship_date.getMonth() + 1;
				
			switch (weekDay)
			{
				case 0: tmp_web_ship_date = new Date( tmp_web_ship_date.getFullYear(), tmp_web_ship_date.getMonth(), tmp_web_ship_date.getDate()+1 );
						var dd = tmp_web_ship_date.getDate();
						var mm = tmp_web_ship_date.getMonth() + 1;
						if (mm < 10) month = "0" + mm;
						if (dd < 10) dd = "0" + dd;
						web_ship_date = mm+"/"+dd+"/"+tmp_web_ship_date.getFullYear();
						break;

				case 6: tmp_web_ship_date = new Date( tmp_web_ship_date.getFullYear(), tmp_web_ship_date.getMonth(), tmp_web_ship_date.getDate()+2 );
						var dd = tmp_web_ship_date.getDate();
						var mm = tmp_web_ship_date.getMonth() + 1;
						if (mm < 10) month = "0" + mm;
						if (dd < 10) dd = "0" + dd;
						web_ship_date = mm+"/"+dd+"/"+tmp_web_ship_date.getFullYear();
						break;
			}
			return web_ship_date;	
		}

		, findFutureShipDate: function findFutureShipDate(lines) {
			var expectd_ship_dates_cal = []
				, lt_days = []
				, web_ship_start_date = ''
				, web_ship_date = ''

			for (var i = 0; lines != null && i < lines.length; i++) {
				var expectedavail_date = lines[i].get('item').get('custitem_expectedavail_date')
					, shipping_lt_days = Number(lines[i].get('item').get('custitem_shipping_lt_days'))
					, vf_scasaletype = lines[i].get('item').get('custitem_vf_scasaletype')
					, item_internalid = lines[i].get('item').get('internalid');

				shipping_lt_days = (shipping_lt_days > 0) ? shipping_lt_days : 1;

				//console.log('000 expectedavail_date: ',expectedavail_date,' shipping_lt_days: ',shipping_lt_days,' vf_scasaletype: ',vf_scasaletype);

				if (shipping_lt_days > 0 && vf_scasaletype != "") {
					var tDate = new Date();
					expectedavail_date = new Date(expectedavail_date);
					var exp_ship_date_cal = tDate;

					if (expectedavail_date != "" && expectedavail_date >= tDate) {
						exp_ship_date_cal = new Date(expectedavail_date.getFullYear(), expectedavail_date.getMonth(), expectedavail_date.getDate() + shipping_lt_days);
					}
					else {
						exp_ship_date_cal = new Date(tDate.getFullYear(), tDate.getMonth(), tDate.getDate() + shipping_lt_days);
					}

					expectd_ship_dates_cal.push({ internalid: item_internalid, exp_ship_date: exp_ship_date_cal, lt_days: shipping_lt_days });
				}
			}

			if (lt_days != null && lt_days.length) {
				shipping_lt_days = _.max(lt_days);
			}

			// Set StartDate for datepicker
			if (this.getMaxDate(expectd_ship_dates_cal) && _.isObject(this.getMaxDate(expectd_ship_dates_cal))) {
				web_ship_start_date = new Date(this.getMaxDate(expectd_ship_dates_cal).exp_ship_date);
				var day = web_ship_start_date.getDate();
				var month = web_ship_start_date.getMonth() + 1;
				if (month < 10) month = "0" + month;
				if (day < 10) day = "0" + day;
				web_ship_start_date = month + "/" + day + "/" + web_ship_start_date.getFullYear();
			}

			//if(web_ship_date == "")
			//{
			var todayDate = new Date();
			var dd = todayDate.getDate();
			var mm = todayDate.getMonth() + 1;
			if (mm < 10) month = "0" + mm;
			if (dd < 10) dd = "0" + dd;
			todayDate = mm + "/" + dd + "/" + todayDate.getFullYear();

			web_ship_date = (web_ship_start_date) ? web_ship_start_date : todayDate;
			console.log(web_ship_date)
			return web_ship_date;
			}
	

	, reselectShipMethod: function reselectShipMethod(so_shipping_type) {

		var pls_select_ship_method = ''
			, self = this

		//willcall
		if (so_shipping_type == '1' || so_shipping_type == 1) {

			var curr_ship_method = self.model.get('shipmethod')
			//console.log(curr_ship_method)
			if (curr_ship_method != '27' || curr_ship_method != '28') {
				var selected_willcall_loc = self.wizard.model.get('options').custbody_willcalllocation;
				//console.log(selected_willcall_loc)
				if (selected_willcall_loc == '1')
					pls_select_ship_method = '27';
				else if (selected_willcall_loc == '2')
					pls_select_ship_method = '28';
			}
		}//storage
		else if (so_shipping_type == '3' || so_shipping_type == 3) {
			pls_select_ship_method = '25'
		}//3rd party
		else if (so_shipping_type == '4' || so_shipping_type == 4) {
			pls_select_ship_method = '24'
		}//international
		else if (so_shipping_type == '5' || so_shipping_type == 5) {
			pls_select_ship_method = '23'
		}//Local
		else if (so_shipping_type == '6' || so_shipping_type == 6) {
			pls_select_ship_method = '26'
		}

		return pls_select_ship_method;

		}			
		//@method getContext
		//@returns {OrderWizard.Module.Shipmethod.Context}
	,	getContext: function getContext ()
		{
			// Get maximum 'SHIPPING LEAD TIME (DAYS)' from cart items and set Ship/PickUp Date
			var self = this
			,	lines = this.wizard.model.get('lines').models
			,	options = this.model.get('options')
			,	web_ship_start_date = ''
			,	lt_days = []
			,	expectd_ship_dates_cal = []
			,	shipping_options = []
			,	remove_vincellar_options = []
			,	will_call_locations = []
			,	shipping_lt_days = 0
			,	hold_start_date = ""
			,	hold_end_date = ""
			,	web_ship_date = this.wizard.model.get('options').custbody_vf_web_ship_date
			,	override_weatherhold = this.wizard.model.get('options').custbody_overrideweatherhold
			,	record_in_vincellar = this.wizard.model.get('options').custbody_record_in_vincellar
			,	so_shipping_type = this.wizard.model.get('options').custbody_vf_shippingtypeonso ? this.wizard.model.get('options').custbody_vf_shippingtypeonso : jQuery("#custbody_vf_shippingtypeonso").val() 
			,	is_weather_hold = false
			,	is_weather_hold_party = false
			,	weather_hold = false
			,	is_not_select_delivery_method = true
			,	is_selected_exception_temp_control = false
			,	ship_option = this.wizard.model.get('options').custbody_shipping_option ? this.wizard.model.get('options').custbody_shipping_option : '2'
			,	vincellar_option = this.wizard.model.get('options').custbody_remove_from_vincellar ? this.wizard.model.get('options').custbody_remove_from_vincellar : jQuery("#custbody_remove_from_vincellar").val()
			,	expected_delivery_date = (sessionStorage.getItem("expected_delivery_date")) ? sessionStorage.getItem("expected_delivery_date") : '';

			var record_in_vin = localStorage.getItem("record-in-vincellar")
			,   date_selector_ship_date = ''
			,   hide_remove_from_vincellar = false
			,   new_final_web_date

			if(!_.isEmpty(record_in_vin))
			{
				record_in_vincellar = record_in_vin;
				//console.log(record_in_vincellar)
				//making the hide flag true when Record in vincellar is checked to disable the Remove from vincellar dropdown
				if(record_in_vincellar == 'T')
				{
					hide_remove_from_vincellar = true;
				}
			}
			else
			{
				//on pageload the record_in_vin is null, so we're getting element value
				var record_vcellar = $('.custbody_record_in_vincellar').val();
				if(record_vcellar == 'on' || record_vcellar == true)
				{
					hide_remove_from_vincellar = true;
				}
			}

			//console.log(hide_remove_from_vincellar)

			/*if(so_shipping_type == undefined){
				so_shipping_type = '3';
			}*/
			

		//if ship type is willcall
		if(so_shipping_type == '1')
		{
			var stockFlag = false
			, prearrivalFlag = false
					//console.log(this.model.get('lines'))
			this.model.get('lines').each(function (line) {
				//console.log(line.get('item'))
				var line_item = line.get('item')
					, wine_availabile = line_item.get('custitem_vf_availability')
					console.log(wine_availabile)
				if (wine_availabile.indexOf('In Stock') > -1)
					stockFlag = true;
				else
					prearrivalFlag = true;
			});

					/*console.log(prearrivalFlag)
					console.log(stockFlag)*/

					//when all wines in cart are prearrival, we use the same logic as send to storage expected delivery
					if ((prearrivalFlag == true && stockFlag == false) || (prearrivalFlag == true && stockFlag == true)) {
						var getLatestShipDate = this.findFutureShipDate(lines)
							, addDays = 10;
						//console.log(getLatestShipDate)	

						var add_to_final_web_date = new Date(getLatestShipDate)
							, addDays_to_final_web_date = add_to_final_web_date.setDate(add_to_final_web_date.getDate() + addDays)
							, final_calculate_web_date = new Date(addDays_to_final_web_date)
							, final_calculate_web_date_dd = final_calculate_web_date.getDate()
							, final_calculate_web_date_mm = final_calculate_web_date.getMonth() + 1
							, final_calculate_web_date_yy = final_calculate_web_date.getFullYear()

						if (final_calculate_web_date_dd < 10) {
							final_calculate_web_date_dd = '0' + final_calculate_web_date_dd;
						}
						if (final_calculate_web_date_mm < 10) {
							final_calculate_web_date_mm = '0' + final_calculate_web_date_mm;
						}
						
						var prearrival_pickup = final_calculate_web_date_mm + "/" + final_calculate_web_date_dd + "/" + final_calculate_web_date_yy
						//console.log(final_cal_delv_date_mm+"/"+final_cal_delv_date_dd+"/"+final_cal_delv_date_yy)
						web_ship_date = this.validateShipDate(prearrival_pickup)
						new_final_web_date = web_ship_date
						//console.log(final_web_date)
					}
					//when cart has no prearrival 
					else if (prearrivalFlag == false && stockFlag == true) {
						var todayDay = new Date();
						var str = todayDay.toString();

						var splitdat = str.split('(');
						if (splitdat[1] == 'Pacific Daylight Time)') {
						} else {

							var offset = -7;
							// PST time
							var PSTtime = new Date(new Date().getTime() + offset * 3600 * 1000).toUTCString().replace(/ GMT$/, "")
							todayDay = new Date(PSTtime);
						}

						var findOrderDay = todayDay.getDay()
							, findOrderHour = todayDay.getHours()
							, willcall_ship_date

						//console.log(PSTtime)

						if (findOrderHour <= 11) {
							var dd = todayDay.getDate();
							var mm = todayDay.getMonth() + 1;
							if (mm < 10) month = "0" + mm;
							if (dd < 10) dd = "0" + dd;
							willcall_ship_date = mm + "/" + dd + "/" + todayDay.getFullYear();
							//console.log(willcall_ship_date)
						}
						else {
							var addDays = 1
							var pickupdate = todayDay.setDate(todayDay.getDate() + addDays)
							var final_pickup_date = new Date(pickupdate)

							var dd = final_pickup_date.getDate();
							var mm = final_pickup_date.getMonth() + 1;
							if (mm < 10) month = "0" + mm;
							if (dd < 10) dd = "0" + dd;
							willcall_ship_date = mm + "/" + dd + "/" + final_pickup_date.getFullYear();

							//console.log(willcall_ship_date)
						}


						web_ship_date = this.validateShipDate(willcall_ship_date)
						new_final_web_date = web_ship_date
					}
		}else
		{	

			web_ship_date = this.findFutureShipDate(lines)
					/*if(shipping_lt_days) 
						web_ship_date = new Date(web_ship_date.getFullYear(), web_ship_date.getMonth(), web_ship_date.getDate() + shipping_lt_days);*/

			var others_web_ship_date = this.validateShipDate(web_ship_date)

			//Adding +3 days to ship date if it ships today
			var web_date = new Date(others_web_ship_date);
			var current_date = new Date()
			,   add_3_web_date
			,   final_web_date;

			if(web_date.getTime() == current_date.getTime())
			{
				var days = 3 * 60 * 60 * 24 * 1000;
				add_3_web_date = new Date(web_date.getTime() + days);
				final_web_date = add_3_web_date.toLocaleDateString()
			}else
			{
				final_web_date = others_web_ship_date
			}

			var est_ship_dat = new Date(final_web_date)
				,   dec31Date = '12/31/2018'
				,   jan1Date = '1/1/2019'
				,   new_ship_date = '1/2/2019'
				,   n_final_web_date
				,   new_final_web_date

				var Ndec31 = new Date(dec31Date)
				var Njan1 = new Date(jan1Date)
				//console.log(est_ship_dat.getTime())


				if(est_ship_dat.getTime() == Ndec31.getTime())
				{
					console.log('adding 2 days to ship date')
					var days = 2 * 60 * 60 * 24 * 1000;
					n_final_web_date = new Date(est_ship_dat.getTime() + days);
					new_final_web_date = n_final_web_date.toLocaleDateString()
				}
				else if(est_ship_dat.getTime() == Njan1.getTime())
				{
					console.log('adding 1 day to ship date')
					var days = 1 * 60 * 60 * 24 * 1000;
					n_final_web_date = new Date(est_ship_dat.getTime() + days);
					new_final_web_date = n_final_web_date.toLocaleDateString()

				}else{
					new_final_web_date = final_web_date
				}

		}//end web_ship_date calculation
			
			//capturing the user preferred ship date which was set to localstorage when user selects his/her preferred date 
			var calc = localStorage.getItem("calculated-web-date")	
			//console.log(calc)	

			if(_.isEmpty(calc))
				{
				localStorage.setItem("calculated-web-date",new_final_web_date);
				}	
			else if(new_final_web_date !== calc)
				{
					localStorage.removeItem("calculated-web-date")
					localStorage.removeItem("user-ship-date")
					//debugger;
				}	
			
			var user_ship_date = localStorage.getItem("user-ship-date");
			//console.log(user_ship_date)
			if(!_.isEmpty(user_ship_date))
			{
				var calculated_fin_web_date = localStorage.getItem("calculated-web-date")
				date_selector_ship_date = calculated_fin_web_date;
				if(new_final_web_date == calculated_fin_web_date)
				{
					new_final_web_date = user_ship_date;

				//console.log(new_final_web_date)
				}
			}
			

			// Set default ship date in model
			this.model.set({
				options: _.extend(options, {
					'custbody_vf_web_ship_date': new_final_web_date
				})
			});
			//}
			var	selected_location = this.wizard.model.get('options').custbody_willcalllocation;
			
			if(selected_location == "")
			{
				// Set default pickup location as American Canyon WHS(2)
				this.model.set({
					options: _.extend(options, {
						'custbody_willcalllocation': '2'
					})
				});
			}
			if(!_.isUndefined(this.model.__customFieldsMetadata))
			{
				// Willcall location
				for(var i=0; this.model.__customFieldsMetadata.custbody_willcalllocation.options != null && i < this.model.__customFieldsMetadata.custbody_willcalllocation.options.length; i++)
				{
					var locationOptions = this.model.__customFieldsMetadata.custbody_willcalllocation.options
					,	id		= locationOptions[i].id
					,	text	= locationOptions[i].text
					,	isActive = (selected_location == id);

					if( so_shipping_type == 4 && id == 2 ) will_call_locations.push({id: id, text: text, isActive: isActive});
					if( so_shipping_type == 1 && (id == 1 || id == 2) ) will_call_locations.push({id: id, text: text, isActive: isActive});
				}

				// Shipping options
				for(var i=0; this.model.__customFieldsMetadata.custbody_shipping_option.options != null && i < this.model.__customFieldsMetadata.custbody_shipping_option.options.length; i++)
				{
					var shippingOptions = this.model.__customFieldsMetadata.custbody_shipping_option.options
					,	id = shippingOptions[i].id
					,	text = shippingOptions[i].text
					,	isActive = '';

					if(ship_option != "" && shippingOptions[i].id == ship_option)
					{
						isActive = true;
					}
					
					shipping_options.push({id: id, text: text, isActive: isActive});
				}

				// Remove From Vincellar options
				for(var i=0; this.model.__customFieldsMetadata.custbody_remove_from_vincellar.options != null && i < this.model.__customFieldsMetadata.custbody_remove_from_vincellar.options.length; i++)
				{
					var vincellarOptions = this.model.__customFieldsMetadata.custbody_remove_from_vincellar.options
					,	id = vincellarOptions[i].id
					,	text = vincellarOptions[i].text
					,	isActive = '';

					if(vincellar_option != "" && vincellarOptions[i].id == vincellar_option)
						isActive = true;

					remove_vincellar_options.push({id: id, text: text, isActive: isActive});
				}
			}

			var show_delivery_method = (this.wizard.model.get('options').custbody_vf_shippingtypeonso == 2) ? true : false
			,	show_enter_shipping_address_first = !this.model.get('isEstimating') && !this.profileModel.get('addresses').get(this.model.get('shipaddress'))
			,	shipping_methods = this.model.get('shipmethods').map(function (shipmethod)
				{
					if(so_shipping_type == 2)
					{
						var name = shipmethod.get('name').toLowerCase();
						if(name.indexOf('fedex') > -1 && shipmethod.get('internalid') != 23)
						{
							// Remove/update 'Free!' word from shipping method 
							var rate_formatted = shipmethod.get('rate_formatted');
							if(rate_formatted == 'Free!') rate_formatted = 'Charged at the time of shipping'

							return {
									name: shipmethod.get('name')
								,	rate_formatted: rate_formatted
								,	internalid: shipmethod.get('internalid')
								,	isActive: shipmethod.get('internalid') === self.model.get('shipmethod')
							};
						}
					}
					else
					{

						//when we refresh the page, the previous selected shipmethod is considered so reselecting shipmethod based on shipping type
							var pls_select_ship_method = self.reselectShipMethod(so_shipping_type)

							var selected_ship_method_intr = ''

							if (pls_select_ship_method != '' || pls_select_ship_method != null)
								selected_ship_method_intr = pls_select_ship_method
							else
								selected_ship_method_intr = self.model.get('shipmethod')

						return {
								name: shipmethod.get('name')
							,	rate_formatted: shipmethod.get('rate_formatted')
							,	internalid: shipmethod.get('internalid')
							,	isActive: shipmethod.get('internalid') === selected_ship_method_intr
						};
					}
				});			

			// Remove null values
			shipping_methods = _.filter(shipping_methods, function(val){ return val != null; });
			//console.log(shipping_methods)

			if(so_shipping_type){ 
				show_delivery_method = (so_shipping_type == 2) ? true : false
			}

			// Get selected address for Local delivery and set active/deactivate shipping date(datepicker)
			if(so_shipping_type == 6 && this.addresses.get(this.currentAddress))
			{
				var selected_zip = this.addresses.get(this.currentAddress).get('zip');

				var local_zipcode_days = [];
				jQuery.ajax({
					dataType: "json",
					url: "/app/site/hosting/scriptlet.nl?script=customscript_get_item_stock&deploy=1",
					data: {action: 'localzipcodedays', selected_zip: selected_zip},
					method: 'POST',
					async: false,
					success: function ( res ){ 
						if(res!=null){
							local_zipcode_days = res;
						} 
					}
				});
			}
			var weekDays = [0,1,2,3,4,5,6];
			
			//shipping season checkbox
			var self = this
			,   ship_season_checkbox = sessionStorage.getItem("shipping_season_checkbox")
			,   shipping_season_checkbox_value
			
			//console.log(ship_season_checkbox)

			if(ship_season_checkbox == null || ship_season_checkbox == undefined)
			shipping_season_checkbox_value = true	
			else if(ship_season_checkbox == 'false')
			shipping_season_checkbox_value =  false
			else if(ship_season_checkbox == 'true')
			shipping_season_checkbox_value =  true


			// START: Weather hold
			/*for(var i=0; lines != null && i < lines.length; i++)
			{
				//console.log('djhb',lines[i].get('item').get('custitem_hold_start_date'))
				//console.log('d',lines[i].get('item').get('custitem_hold_end_date'))
				hold_start_date		= lines[i].get('item').get('custitem_hold_start_date');
				hold_end_date		= lines[i].get('item').get('custitem_hold_end_date');
				var weather_hold_value	= lines[i].get('item').get('custitem_weatherholdeligible');

				if(hold_start_date != "" && hold_end_date != "" && final_web_date != "")
				{
					var check = new Date(final_web_date), to = new Date(hold_end_date), from = new Date(hold_start_date);
					if( (check.getTime() <= to.getTime() && check.getTime() >= from.getTime()) ){
						weather_hold_value = 'yes';
					}
				}

				if( weather_hold_value && !_.isUndefined(weather_hold_value) && weather_hold_value.toLowerCase() == "yes" )
				{
					weather_hold = true;
					break;
				}
			}

			if( weather_hold && ( (so_shipping_type == 2 && !_.isUndefined(self.model.get('shipmethod'))) || so_shipping_type == 4 || so_shipping_type == 5) )
			{
				if(hold_start_date != "" && hold_end_date != "")
				{
					var check = new Date(final_web_date), to = new Date(hold_end_date), from = new Date(hold_start_date);
					
					if( (check.getTime() <= to.getTime() && check.getTime() >= from.getTime()) ){
						is_not_select_delivery_method = true;
					}
					else
						is_not_select_delivery_method = false;
				}
				else
					is_not_select_delivery_method = false;

				if(so_shipping_type == 2)
				{
					if(is_not_select_delivery_method && self.model.get('shipmethod') == 21){
						is_not_select_delivery_method = true;
					}else if(self.model.get('shipmethod') == 16 || self.model.get('shipmethod') == 19 || self.model.get('shipmethod') == 150194 || self.model.get('shipmethod') == 18 || self.model.get('shipmethod') == 3){
						is_not_select_delivery_method = false;
					}
					else{
						is_not_select_delivery_method = false;
					}
				}
				else{
					if(so_shipping_type == 5 || so_shipping_type == 4){
						is_not_select_delivery_method = false;
					}else{
						is_not_select_delivery_method = true;
					}
				}

				if(hold_start_date != "" && hold_end_date != "")
				{
					var check = new Date(final_web_date), to = new Date(hold_end_date), from = new Date(hold_start_date);

					if( (check.getTime() <= to.getTime() && check.getTime() >= from.getTime())){
						is_weather_hold = true;
					}
					else
						is_weather_hold = false;
				}
				else
					is_weather_hold = false;

				if(is_weather_hold){
					if(so_shipping_type == 4){
						is_weather_hold_party = true;
						is_weather_hold = false;
					}else{
						is_weather_hold_party = false;
						is_weather_hold = true;
					}
				}
				//console.log(this.model.get('shipmethods'))
				
				var shipping_methods = this.model.get('shipmethods').map(function (shipmethod)
				{
					if(so_shipping_type == 2)
					{

						//console.log(self.model.get('shipmethod'))
						var defaultMethod = self.model.get('shipmethod')
						,   is_active = ''

						//defaulting delivery method to priority overnight and temperature controlled
						if(is_weather_hold)
						{
						if(defaultMethod == '' || defaultMethod == null)
							is_active = '21'
							else
							is_active = defaultMethod
						}else
						{
						if(defaultMethod == '' || defaultMethod == null)
							is_active = '3'	
							else
							is_active = defaultMethod
						}

						var name = shipmethod.get('name').toLowerCase();
						var internalID = shipmethod.get('internalid');
						if(is_weather_hold && (internalID == 20 || internalID == 21 || internalID == 22))
						{
							// Remove/update 'Free!' word from shipping method 
							var rate_formatted = shipmethod.get('rate_formatted');
							if(rate_formatted == 'Free!') rate_formatted = 'Charged at the time of shipping'

							return {
									name: shipmethod.get('name')
								,	rate_formatted: rate_formatted
								,	internalid: shipmethod.get('internalid')
								,	isActive: shipmethod.get('internalid') === is_active
							};
						}
					}
					else
					{
						return {
								name: shipmethod.get('name')
							,	rate_formatted: shipmethod.get('rate_formatted')
							,	internalid: shipmethod.get('internalid')
							,	isActive: shipmethod.get('internalid') === self.model.get('shipmethod')
						};
					}
				});
			}
			else{
				is_not_select_delivery_method = false;
				if(so_shipping_type == 2){
					if(self.model.get('shipmethod') != 20 && self.model.get('shipmethod') != 21 && self.model.get('shipmethod') != 18 && self.model.get('shipmethod') != 22){
						is_selected_exception_temp_control = true;
					}
				}

				var	shipping_methods = this.model.get('shipmethods').map(function (shipmethod)
				{
					
					if(so_shipping_type == 2)
					{
						//console.log(self.model.get('shipmethod'))
						var defaultMethod = self.model.get('shipmethod')
						,   is_active = ''

						//defaulting delivery method to priority overnight and temperature controlled
						if(is_weather_hold)
						{
						if(defaultMethod == '' || defaultMethod == null)
							is_active = '21'
							else
							is_active = defaultMethod
						}else
						{
						if(defaultMethod == '' || defaultMethod == null)
							is_active = '3'	
							else
							is_active = defaultMethod
						}
						//console.log(is_active)
						var name = shipmethod.get('name').toLowerCase();
						var internalID = shipmethod.get('internalid'); 
						//console.log('internalID',internalID)
						if(name.indexOf('fedex') > -1 && shipmethod.get('internalid') != 23 && shipmethod.get('internalid') != 20 && shipmethod.get('internalid') != 21 && shipmethod.get('internalid') != 22)
						{
							// Remove/update 'Free!' word from shipping method 
							var rate_formatted = shipmethod.get('rate_formatted');
							if(rate_formatted == 'Free!') rate_formatted = 'Charged at the time of shipping'

							return {
									name: shipmethod.get('name')
								,	rate_formatted: rate_formatted
								,	internalid: shipmethod.get('internalid')
								,	isActive: shipmethod.get('internalid') === is_active
							};
						}
					}
					else
					{
						return {
								name: shipmethod.get('name')
							,	rate_formatted: shipmethod.get('rate_formatted')
							,	internalid: shipmethod.get('internalid')
							,	isActive: shipmethod.get('internalid') === self.model.get('shipmethod')
						};
					}
				});
			}
			// Remove null values
			
			shipping_methods = _.filter(shipping_methods, function(val){ return val != null; });
			//console.log(self.model.get('shipmethod'))
			if(self.model.get('shipmethod') == '' || self.model.get('shipmethod') == null)
			{
				if(so_shipping_type == '2')
					{
					var shipmeth = _.findWhere(shipping_methods, {isActive: true})
					//console.log(shipmeth)

					if(!_.isUndefined(shipmeth))
					{
					this.waitShipmethod = true;
					this.model.set('shipmethod', shipmeth.internalid);
					this.step.disableNavButtons();
					this.model.save().always(function()
					{
						self.clearError();
						self.step.enableNavButtons();
					});
					}
					
					}
			}	
			

			if(this.reloadingMethods && (self.model.get('shipmethod') == null || self.model.get('shipmethod') == '')){
				is_not_select_delivery_method = false;
			}*/

			
			//Update shipping logic for 3rd party shipping Start
			if(so_shipping_type == 4){
				var todayDay = new Date();
				var str = todayDay.toString();
				//console.log(str)
				var splitdat = str.split('(');
				if(splitdat[1] == 'Pacific Daylight Time)'){
				}else{
				

					var offset = -7;
					// PST time
 					var PSTtime = new Date(new Date().getTime() + offset * 3600 * 1000).toUTCString().replace( / GMT$/, "" )
 					todayDay = new Date(PSTtime);
 					//console.log(PSTtime)
 					//console.log(todayDay)
				}
				//console.log('todayDay',todayDay)
				//console.log('todayDay-'+todayDay.toDateString()+'  hours-'+todayDay.getHours()+'')
				var dayToday = todayDay.getDay();
				if(dayToday == 0 || dayToday == 1 || dayToday ==2){
					var resultDate = new Date();
					var dayOfWeek =4; 
					resultDate.setDate(todayDay.getDate() + (7 + dayOfWeek - todayDay.getDay()) % 7);
					resultDate = new Date(resultDate);
					var day = resultDate.getDate();
					var month = resultDate.getMonth() + 1;
					if (month < 10) month = "0" + month;
					if (day < 10) day = "0" + day;
					new_final_web_date = month+"/"+day+"/"+resultDate.getFullYear();
					date_selector_ship_date = new_final_web_date
				}else if(dayToday == 3 ||dayToday ==4 ||dayToday == 5 || dayToday == 6){
					var resultDate = new Date();
					var dayOfWeek =2; 
					resultDate.setDate(todayDay.getDate() + (7 + dayOfWeek - todayDay.getDay()) % 7);
					resultDate = new Date(resultDate);
					var day = resultDate.getDate();
					var month = resultDate.getMonth() + 1;
					if (month < 10) month = "0" + month;
					if (day < 10) day = "0" + day;
					new_final_web_date = month+"/"+day+"/"+resultDate.getFullYear();
					date_selector_ship_date = new_final_web_date
				}
			}
			//console.log('so_shipping_type',so_shipping_type)
			console.log(new_final_web_date)
			//Update shipping logic for 3rd party shipping Start

			//Update expected delivery logic for ship types other than Domestic
			if(so_shipping_type !== '2')
			{
				sessionStorage.removeItem("expected_delivery_date");	
				expected_delivery_date = this.nonDomesticExpectedDeliveryDate(new_final_web_date,so_shipping_type)
			}else if(so_shipping_type == '1'){
				sessionStorage.removeItem("expected_delivery_date");	
			}	
			if(isNaN(this.currentAddress) == true){
				so_shipping_type = undefined;
			}
			/*if(so_shipping_type == undefined || so_shipping_type == '3'){
				this.model.set('shipmethod', 25);
			}*/
			//this.reloadMethods();
			/*this.model.set({
				options: _.extend(options, {
					'custbody_vf_shippingtypeonso': so_shipping_type
				})
			});*/
			/*console.log('so_shipping_type',so_shipping_type)
			console.log(this.model.get('shipaddress'))
			if(so_shipping_type == '3' && this.model.get('shipaddress')){
				console.log(this.model.get('shipaddress'))
				jQuery('.order-wizard-step-content-wrapper .order-wizard-step-actions').children('.div-third').remove();
				jQuery('.order-wizard-step-content-wrapper .order-wizard-step-actions').children('.third-party-div').remove();
				jQuery('.order-wizard-step-content-wrapper .order-wizard-step-actions').append("<div class='div-third'> <p class='third-party-message'> Send your wines directly to our state-of-the-art fine wine storage facility for the best possible safe-keeping and deliver them to your location of choice at a later date. All storage wines will be added to your personal Vinfolio Vincellar account where you can track them, move them, or list the for sale on our collector Martketplace. <p class='pad_text third-party-message'>Learn more about our <a href='http://www.vin-folio.com/sca-dev-kilimanjaro/checkout.ssp?is=checkout#/fine-wine-storage' class='third-party-message' style='padding-top: 10px;text-decoration:underline'>storage program</a></p> <p class='pad_text_bot third-party-message'>Learn more about our <a href='http://www.vin-folio.com/sca-dev-kilimanjaro/checkout.ssp?is=checkout#/cellar-management' class='third-party-message' style='text-decoration:underline'>Vincellar software solution </a></p> <p class='third-party-message'>Standard storage rate apply. Intake fees will not be charged for the wines purchased from our store.</p> </p> </div>");	
			}else{
				jQuery('.order-wizard-step-content-wrapper .order-wizard-step-actions').children('.div-third').remove();
			}*/

			/*if ($('.order-wizard-address-module-form-actions .order-wizard-address-module-save-button').is(":visible")) {
				console.log('disable continue button when no address')
				$('.order-wizard-step-button-container .order-wizard-step-button-continue').attr('disabled', 'disabled');
			}*/
			//console.log('so_shipping_type',so_shipping_type)
			//Update expected delivery logic for ship types other than Domestic
			

			// END: Wheather hold

			//Set ship date in the date selector with the calculated ship date
			var final_date_selector_ship_date=''

			if(date_selector_ship_date != '' && date_selector_ship_date != null)
			{
				console.log(date_selector_ship_date)
				final_date_selector_ship_date = date_selector_ship_date
			}
			else
			{
				console.log(new_final_web_date)
				final_date_selector_ship_date = new_final_web_date
			}

			console.log(expected_delivery_date)
			//console.log(this.model.get('shipaddress'))
			//@class OrderWizard.Module.Shipmethod.Context
			return {
					//@property {LiveOrder.Model} model
					model: this.model
					//@property {Boolean} showEnterShippingAddressFirst
				,	showEnterShippingAddressFirst: show_enter_shipping_address_first
					//@property {Boolean} showLoadingMethods
				,	showLoadingMethods: this.reloadingMethods
					//@property {Boolean} hasShippingMethods
				,	hasShippingMethods: !!shipping_methods.length
					//@property {Boolean} display select instead of radio buttons
				,	showSelectForShippingMethod: true // shipping_methods.length > 5
					//@property {Array} shippingMethods
				,	shippingMethods: shipping_methods
					//@property {Boolean} showTitle
				,	showTitle: !this.options.hide_title
					//@property {Straing} title
				,	title: this.options.title || _('Delivery Method').translate()
					//@property {Number} shippingType
				,	shippingType: so_shipping_type

				,   showNonDomesticEstimate: this.model.get('shipaddress')
					//@property {Boolean} showWillCallLocation
				,	showWillCallLocation: (so_shipping_type == 4) ? 'order-wizard-shipmethod-module-show' : 'order-wizard-shipmethod-module-hide'
				//@property {Boolean} showWillCallLocation
				,	showWillCallLocationWill: (so_shipping_type == 1) ? 'order-wizard-shipmethod-module-show' : 'order-wizard-shipmethod-module-hide'
					//@property {Boolean} showDeliveryMethod
				,	showDeliveryMethod: show_delivery_method
					//@property {Date} shipDate
				,	shipDate: new_final_web_date
				
				,   shipSeasonCheck : shipping_season_checkbox_value
					//@property {Date} expectedDeliveryDate
				,	expectedDeliveryDate: expected_delivery_date
					//@property {Date} shipStartDate
				,	shipStartDate: (final_date_selector_ship_date) ? final_date_selector_ship_date : new Date()
					//@property {String} selectedZip
				,	selectedZip: (this.addresses.get(this.currentAddress)) ? this.addresses.get(this.currentAddress).get('zip') : ''
					//@property {Array} willCallLocations
				,	willCallLocations: will_call_locations
					//@property {Number} maxLength
				,	maxLength: (!_.isUndefined(this.model.get('options').custbody_3rd_party_shipper) && this.model.get('options').custbody_3rd_party_shipper != "") ? Number(255 - this.model.get('options').custbody_3rd_party_shipper.length) : 255
					//@property {Number} shipping_lt_days
				,	shippingLeadTimeDays: shipping_lt_days
					//@property {Object} shippingOptions
				,	shippingOptions: shipping_options
					//@property {Boolean} isWeatherHold
				,	isWeatherHold: (is_weather_hold && so_shipping_type == '2')
					//@property {Boolean} is_weather_hold_party
				,	is_weather_hold_party:is_weather_hold_party
					//@property {Boolean} is_not_select_delivery_method
				, 	is_not_select_delivery_method : is_not_select_delivery_method
					//@property {Array} removeVincellar
				,	removeVincellar: remove_vincellar_options
					//@property {Boolean} overrideWeatherhold
				,	overrideWeatherhold: (override_weatherhold == 'T') ? true : false
					//@property {Boolean} recordInVincellar
				,	recordInVincellar: (record_in_vincellar == 'T' || record_in_vincellar == true) ? true : false
					//@property {String} weatherHoldStartDate
				,	weatherHoldStartDate: hold_start_date
					//@property {Array} weatherHoldEndDate
				,	weatherHoldEndDate: hold_end_date
					//@property {boolean} weatherHoldEndDate
				,	callExpStyle: (so_shipping_type == '1' || so_shipping_type == '3') ? true : false
					//@property {Array} is_selected_exception_temp_control
				,	is_selected_exception_temp_control: is_selected_exception_temp_control
					//@property {Array} activeDays
				,	activeDays: (local_zipcode_days != null) ? _.difference(weekDays, local_zipcode_days) : [0,6]
					//@property {boolean} flowRestriction
				,	flowRestriction : (so_shipping_type == 'undefined' || so_shipping_type == undefined || so_shipping_type == '' || so_shipping_type == 'Select Shipping Type') ? false : true
				,   hideRemoveFromVincellar : hide_remove_from_vincellar
				,   shipAddr: this.model.get('shipaddress') ? true : false
				, shipOptn: ship_option
				, display_ship_opts_notice: (prearrivalFlag == true && stockFlag == false) ? true : false
			};
			//@class OrderWizard.Module.Shipmethod
		}
	});
});
