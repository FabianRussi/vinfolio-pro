{{!
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
}}
{{#if flowRestriction}}
	<div class="order-wizard-shipmethod-module {{#ifEquals shippingType '3'}} order-wizard-shipmethod-module-hide {{else}} order-wizard-shipmethod-module-show {{/ifEquals}}">
		{{#ifEquals shippingType '5'}}
			<div class="row" style="padding: 0 0 10px 15px;"><p>{{translate 'A VinFolio Shipping Specialist will contact you regarding the shipping charges'}}</p></div>
		{{/ifEquals}}
			<div id="order-wizard-shipmethod-module-shipping-message">
			<div class="order-wizard-shipmethod-module-shipping-message-5 {{#ifEquals shippingType '5'}} order-wizard-shipmethod-module-show {{else}} order-wizard-shipmethod-module-hide {{/ifEquals}}" >
				<p><strong>{{translate 'FREIGHT, DUTIES AND TAXES ON INTERNATIONAL SHIPMENTS'}}</strong> <br> {{translate 'Air freight rates are charged after the order is placed. All costs related to international shipping are estimates only and are always the responsibility of the customer. For questions on applicable duties and taxes for your country, please visit export.gov or fedex.com'}} <br> {{translate 'For more information about international shipping rates, contact our customer service.'}}</p>
			</div>
			<div class="order-wizard-shipmethod-module-shipping-message-6 {{#ifEquals shippingType '6'}} order-wizard-shipmethod-module-show {{else}} order-wizard-shipmethod-module-hide {{/ifEquals}}">
				<p>
				<strong>{{translate 'DELIVERY INFORMATION'}}</strong> <br>
				{{translate 'Optionaly in Shipping Option below,  select your preferred delivery date from eligible route days for'}} {{selectedZip}}  {{translate 'zip area.'}}.<br>
				{{translate 'Once your order is confirmed, we will schedule the actual delivery date as all dates are subject to capacity constraints of our delivery van.'}}<br>
				{{translate 'Standard deliveries are charged $12 per case with a $48 minimum Orders over $1000 receive free local delivery '}}<br>
				</p>
			</div>
			<div class="order-wizard-shipmethod-module-shipping-message-1 {{#ifEquals shippingType '1'}} order-wizard-shipmethod-module-show {{else}} order-wizard-shipmethod-module-hide {{/ifEquals}}">
				<h3 class="order-wizard-shipmethod-module-willcalllocation-label">Pickup Information</h3>
				<p style="width: 65%;">{{translate 'Pick-ups scheduled for a given day are available from 3pm to 5pm PT. Once at Will Call, wines that are not picked up within five business days will be transferred back to storage and subject to a $1.25 per bottle restocking fee.'}}</p>
			</div>

			<div class="{{showWillCallLocationWill}}">
				<h3 class="order-wizard-shipmethod-module-willcalllocation-label">{{translate 'Choose Pickup Location'}}</h3>
				<!-- <select name="custbody_willcalllocation" id="custbody_willcalllocation" class="order-wizard-shipmethod-module-willcalllocation" data-action="willcall-location"> -->
					{{#each willCallLocations}}
						<div data-action="willcall-location" name="custbody_willcalllocation" id="custbody_willcalllocation" class="order-wizard-shipmethod-module-willcalllocation" data-value="{{id}}">
							<!-- <input type="radio" name="custbody_willcalllocation" class="" 
							{{#if isActive}}checked{{/if}}
							value="{{id}}" 
							data-action="willcall-location"
							id="custbody_willcalllocation-{{id}}" /><label style="cursor: pointer;" for="custbody_willcalllocation-{{id}}">{{text}}</label> -->
							<label class="willcall-pickup-radio-label{{id}}" for="custbody_willcalllocation-{{id}}">{{text}}<input type="radio" name="custbody_willcalllocation" {{#if isActive}}checked="checked"{{/if}} value="{{id}}" data-action="willcall-location" id="custbody_willcalllocation-{{id}}" /><span class="willcall-pickup-radio{{id}}-checkmark radio-switch"></span></label>
						</div>
						<!-- <option 
						{{#if isActive}}selected{{/if}} 
						value="{{id}}">
							{{text}}
						</option> -->
					{{/each}}
				<!-- </select> -->
			</div>

			<div class="{{showWillCallLocation}}">
				<h3 class="order-wizard-shipmethod-module-willcalllocation-label">{{translate 'Choose Pickup Location'}}</h3>
				<select name="custbody_willcalllocation" id="custbody_willcalllocation" class="order-wizard-shipmethod-module-willcalllocation" data-action="willcall-location">
					{{#each willCallLocations}}
						<option 
						{{#if isActive}}selected{{/if}} 
						value="{{id}}">
							{{text}}
						</option>
					{{/each}}
				</select>
			</div>

			<div class="order-wizard-shipmethod-module-shipping-message-4 {{#ifEquals shippingType '4'}} order-wizard-shipmethod-module-show {{else}} order-wizard-shipmethod-module-hide {{/ifEquals}}">
				<p>
					<input type="checkbox" name="third_party_confirmation" class="order-wizard-shipmethod-module-confirmation-chk"> 
					{{translate 'I hereby confirm that I have made (or am making) shipping arrangements directly with a third party and I hereby take full responsibility for all aspects of legal compliance. I is hereby authorized to transfer to the party specified in my instructions.'}}
					<br><br>
					<p>{{translate 'Pick-ups scheduled for a given day are availablefrom 3p.m.to 5p.m. Not picked up within five business days will be transferred back to storage and is subject to a $1.25 per restocking fee.'}}</p>
					<br><br>
					<strong>{{translate 'Please tell us the name of the third party shipper who is authorized to pick up.'}}</strong>
					<br><br>
					<textarea name="custbody_3rd_party_shipper" id="custbody_3rd_party_shipper" maxlength="255">{{model.options.custbody_3rd_party_shipper}}</textarea>
					<br>
					<p><span id="rchars">{{maxLength}}</span> {{translate 'characters remaining'}}</p>
				</p>
			</div>
			
		</div>
		<!-- <div class="row">
			<div class="order-wizard-shipping-season {{#ifEquals shippingType '1'}} order-wizard-shipmethod-module-hide {{else}} order-wizard-shipmethod-module-show {{/ifEquals}}">
				<input data-action="ship-season-1"  class="shipping_season" name="shipping_season" id="shipping-season-1" type="checkbox" {{#if shipSeasonCheck}}checked{{/if}}> 
				<label for="shipping-seaso-1">
					{{translate 'SHIPPING SEASON'}}
				</label>
			</div>
		</div> -->
		<!-- {{#if expectedDeliveryDate}} -->
			<div class="row">
				<div class="order-wizard-shipmethod-module-shipping-type col-md-6">
					<h3 class="order-wizard-shipmethod-module-webship-date-label {{#if callExpStyle}} for_will_call {{/if}}">
						{{translate 'Shipping Options'}}
						<!-- {{model.__customFieldsMetadata.custbody_shipping_option.label}} -->
					</h3>

					{{#each shippingOptions}}
					<div data-action="select-shipping-option-radio" class="{{#if isActive}}order-wizard-shipmethod-module-option-active{{/if}} shipping-options" data-value="{{id}}">
						<label class="shipping-option">{{text}}<input type="radio" name="custbody_shipping_option" {{#if isActive}}checked="checked"{{/if}} value="{{id}}" id="shipping-options-{{id}}" /><span class="shipping-checkmark"></span></label>
					</div>
					{{/each}}
				</div>
				<div class="shipping-options-msg col-md-6"><p>As your wines become available, we will email you to let you know they are ready for pickup.</p></div>
			</div>
		<!-- {{/if}} -->
		<div class="order-wizard-shipmethod-module-custom-fields">
			<div class="row">
				<div class="order-wizard-shipmethod-module-ship-pick-date col-md-5">
					<h3 class="order-wizard-shipmethod-module-webship-date-label">{{translate 'Choose Pickup Date'}}</h3>
					<input type="text" class="order-wizard-shipmethod-module-webship-date" id="custbody_vf_web_ship_date" name="custbody_vf_web_ship_date" autocomplete="off" data-format="mm/dd/yyyy" data-todayhighlight="true" value="{{shipDate}}" data-action="check-weather-hold">

					<input type="hidden" name="txtWeatherHoldStartDate" value="{{weatherHoldStartDate}}">
					<input type="hidden" name="txtWeatherHoldEndDate" value="{{weatherHoldEndDate}}">
				</div>
				<div class="order-wizard-shipmethod-module-weather-hold {{#if isWeatherHold}}order-wizard-shipmethod-module-show ship-pick-up-mgs-div-class{{else}}order-wizard-shipmethod-module-hide{{/if}} col-md-6">
					<p>
				{{translate 'Weather Hold Alert! One or more wines in your order will be held in a safe wine storage facility until weather clears.'}}
				<i class="order-wizard-shipmethod-module-link-icon" data-toggle="tooltip" title="" data-original-title="{{translate 'Please note that during the summer months, all wine is shipped at the customer\'s own risk using either Temperature Control, Overnight morning, or 2 Day AM delivery. During non-summer months we use an automated Weather Check system to ensure your wine is not shipped when temperatures are over 75<sup>0</sup>F or under 20<sup>0</sup>F. If temperatures fall outside of our Safe Shipping range, we will notify you via email that your wine shipment is held due to weather. You may choose to release the Weather Hold at any time by contacting Customer Care.'}}" >{{translate 'More Info'}}</i>
			</p>

			<p>
				<input name="custbody_overrideweatherhold" id="custbody_overrideweatherhold" type="checkbox" {{#if overrideWeatherhold}}checked{{/if}}> 
				<label for="custbody_overrideweatherhold" class="order-wizard-shipmethod-module-overrideweatherhold-label">
					{{translate 'Override hold and ship regardless of weather. I agree to hold Vinfolio harmless for any temperature related damage to my shipment'}}
				</label>
			</p>
				<!-- <p class="ship-pick-up-mgs" style="font-size: 12px;">
					{{translate 'You have selected a ship date that falls within our summer shipping schedule. To ensure the safest possible shipping of your wine, our shipping options are limited during these months. If you prefer to wait until temperatures stabilize in the fall, we recommend sending your wine to storage for the summer or selecting a fall ship date. If you would like to override our safe shipping options, please contact service@vinfolio.com and we can set you up with additional shipping options.'}}
				</p> -->
			</div>
			<div class="order-wizard-shipmethod-module-weather-hold-3rd-party {{#if is_weather_hold_party}}order-wizard-shipmethod-module-show ship-pick-up-mgs-div-class-party{{else}}order-wizard-shipmethod-module-hide{{/if}} col-md-6">
				<p style="font-size: 12px;" class="ship-pick-up-mgs-party">
					{{translate 'If you are shipping your wines during the summer season we highly recommend selecting an expedited shipping option from your third party carrier.'}}
				</p>
			</div>
			</div>
		</div>

		<div class="row">
			<div id="order-wizard-shipmethod-module-dropdown" class="{{#if showDeliveryMethod}} order-wizard-shipmethod-module-show {{else}} order-wizard-shipmethod-module-hide{{/if}} col-md-6">
			{{#if showTitle}}
				<h3 class="order-wizard-shipmethod-module-title">
					{{title}}
				</h3>
			{{/if}}
			
			{{#if showEnterShippingAddressFirst}}
				<div class="order-wizard-shipmethod-module-message">
					{{translate 'Warning: Please enter a valid shipping address first'}}
				</div>
			{{else}}
				{{#if showLoadingMethods}}
					<div class="order-wizard-shipmethod-module-message">
						{{translate 'Loading...'}}
					</div>
				{{else}}
					{{#if hasShippingMethods}}
						{{#if showSelectForShippingMethod}}
							<select data-action="select-delivery-option" data-action="edit-module" class="order-wizard-shipmethod-module-option-select">
								<option>{{translate 'Select a delivery method'}}</option>
								{{#each shippingMethods}}
									<option 
									{{#if isActive}}selected{{/if}} 
									value="{{internalid}}"
									id="delivery-options-{{internalid}}">
										{{rate_formatted}} - {{name}}
									</option>
								{{/each}}
							</select>
						{{else}}
							{{#each shippingMethods}}
								<a data-action="select-delivery-option-radio" 
								class="order-wizard-shipmethod-module-option {{#if isActive}}order-wizard-shipmethod-module-option-active{{/if}}"
								data-value="{{internalid}}">
									<input type="radio" name="delivery-options" data-action="edit-module" class="order-wizard-shipmethod-module-checkbox" 
									{{#if isActive}}checked{{/if}}
									value="{{internalid}}" 
									id="delivery-options-{{internalid}}" />
									
									<span class="order-wizard-shipmethod-module-option-name">{{name}}
										<span class="order-wizard-shipmethod-module-option-price">{{rate_formatted}}</span>	
									</span>
								</a>
							{{/each}}
						{{/if}}
					{{else}}
						<div class="order-wizard-shipmethod-module-message">
							{{translate 'Warning: No Delivery Methods are available for this address'}}
						</div>
					{{/if}}
					
				{{/if}}
			{{/if}}

			</div>
			<!-- <div class="order-wizard-shipmethod-module-weather-hold-d-option-sec {{#if is_selected_exception_temp_control}}order-wizard-shipmethod-module-show ship-method-mgs-div-class-sec{{else}}order-wizard-shipmethod-module-hide{{/if}} col-md-6">
				<p class="ship-method-mgs-sec" style="font-size:12px">
					{{translate 'To ensure the safest possible shipping of your wine, we will check the weather across your delivery route to ensure no inclement weather conditions are present. If extreme temperatures are forecast, we will put your shipment on hold and reach out to you to select an alternate ship date.'}}
				</p>
			</div> 

			<div class="order-wizard-shipmethod-module-weather-hold-d-option {{#if is_not_select_delivery_method}}order-wizard-shipmethod-module-show ship-method-mgs-div-class{{else}}order-wizard-shipmethod-module-hide{{/if}} col-md-6">
				<p class="ship-method-mgs" style="font-size:12px">
					{{translate 'This option guarantees temperature control during your delivery and can take 10-14 days to in transit.'}}
					<i class="order-wizard-shipmethod-module-link-icon" data-toggle="tooltip" title="" data-original-title="{{translate 'Our Temperature Controlled shipping is a Cold Chain service offered by FedEx. When you select this shipping option your wine is moved directly from Vinfolio’s temperature controlled loading dock into a refrigerated truck and delivered to you. This shipping method transports and stores your wine at a stable 55 degree temperature until it reaches one of the five FedEx hub stations throughout the United States. (The southern route is Dallas, Atlanta, and Orlando. The northern route is Chicago and Newark). From the hub, FedEx Overnight Service picks up the shipment for overnight delivery to you. If you ship to a business address, delivery is done before 10:30 AM. If you ship to a home address, delivery is before 12:00 PM. Shipments are picked up by FedEx on a Monday, leave California on a Friday, and are delivered to Midwest states by Tuesday and East Coast states by Wednesday.

					FedEx rates are based on the distance of the delivery address from the nearest hub. Please be aware that if you live far from one of the above five hubs, this shipping method may not necessarily make sense for you due to the financial cost to ship from the hub to you using FedEx Overnight service. In this case, we suggest waiting until Fall to move your wines. However, if you live close to the hub, rates are very similar to FedEx Ground shipping rates.

					Delivery times range from 10-14 days, even within California. There is no expedited service available, and there is no tracking of the orders when they are being moved in the refrigerated trucks. As such, we strongly recommend that you use a business address for this service. An adult signature is required for all Vinfolio shipments, and this is especially important for Cold Chain deliveries. Vinfolio is not responsible if no one is home to sign for delivery.'}}" >{{translate 'More Info'}}</i>
				</p>

				
			</div>-->
		</div>

		<div class="row">
			<div id="order-wizard-shipmethod-module-dropdown-season-option" class="{{#if showDeliveryMethod}} order-wizard-shipmethod-module-show {{else}} order-wizard-shipmethod-module-hide{{/if}} col-md-6"  style="display: none;">
			{{#if showTitle}}
				<h3 class="order-wizard-shipmethod-module-title">
					{{title}}
				</h3>
			{{/if}}
			
			{{#if showEnterShippingAddressFirst}}
				<div class="order-wizard-shipmethod-module-message">
					{{translate 'Warning: Please enter a valid shipping address first'}}
				</div>
			{{else}}
				{{#if showLoadingMethods}}
					<div class="order-wizard-shipmethod-module-message">
						{{translate 'Loading...'}}
					</div>
				{{else}}
					{{#if hasShippingMethods}}
						{{#if showSelectForShippingMethod}}
							<select data-action="select-delivery-option" data-action="edit-module" class="order-wizard-shipmethod-module-option-select">
								<option>{{translate 'Select a delivery method'}}</option>
								{{#each shippingMethods}}
									<option 
									{{#if isActive}}selected{{/if}} 
									value="{{internalid}}"
									id="delivery-options-{{internalid}}">
										{{rate_formatted}} - {{name}}
									</option>
								{{/each}}
							</select>
						{{else}}
							{{#each shippingMethods}}
								<a data-action="select-delivery-option-radio" 
								class="order-wizard-shipmethod-module-option {{#if isActive}}order-wizard-shipmethod-module-option-active{{/if}}"
								data-value="{{internalid}}">
									<input type="radio" name="delivery-options" data-action="edit-module" class="order-wizard-shipmethod-module-checkbox" 
									{{#if isActive}}checked{{/if}}
									value="{{internalid}}" 
									id="delivery-options-{{internalid}}" />
									
									<span class="order-wizard-shipmethod-module-option-name">{{name}}
										<span class="order-wizard-shipmethod-module-option-price">{{rate_formatted}}</span>	
									</span>
								</a>
							{{/each}}
						{{/if}}
					{{else}}
						<div class="order-wizard-shipmethod-module-message">
							{{translate 'Warning: No Delivery Methods are available for this address'}}
						</div>
					{{/if}}
					
				{{/if}}
			{{/if}}

			</div>
		</div>

		<div class="order-wizard-shipmethod-module-custom-fields-season-option" style="display: none;">
			<div class="row">
				<div class="order-wizard-shipmethod-module-ship-pick-date col-md-5">
					<h3 class="order-wizard-shipmethod-module-webship-date-label">{{translate 'Choose Pickup Date'}}</h3>
					<input type="text" class="order-wizard-shipmethod-module-webship-date" id="custbody_vf_web_ship_date" name="custbody_vf_web_ship_date" autocomplete="off" data-format="mm/dd/yyyy" data-todayhighlight="true" value="{{shipDate}}" data-action="check-weather-hold">

					<input type="hidden" name="txtWeatherHoldStartDate" value="{{weatherHoldStartDate}}">
					<input type="hidden" name="txtWeatherHoldEndDate" value="{{weatherHoldEndDate}}">
				</div>
			</div>
		</div>
		
		<div class="row">
			{{#if expectedDeliveryDate}}
			<div class="col-md-6 hide-expected">
				<h3 class="order-wizard-shipmethod-module-webship-date-label {{#if callExpStyle}} for_will_call {{/if}}">{{translate 'Expected Delivery Date'}}</h3>
				<input type="text" class="order-wizard-shipmethod-module-webship-date" id="expected_delivery_date" name="expected_delivery_date" readonly value="{{expectedDeliveryDate}}">
			</div>
			{{/if}}
		</div>
		<div class="row div_line_css">
			<div class="saparation_border_update"></div>
			<div class="order-wizard-shipmethod-module-vincellar  col-md-6">
					<h3 class="order-wizard-shipmethod-module-webship-date-label">{{translate 'Vincellar Update Upon Shipment/Delivery'}}</h3>
					<div class="row">
						<div class="order-wizard-shipmethod-module-record-in-vincellar col-md-12">
							<!-- <input data-action="record-in-vincellar" class="custbody_record_in_vincellar" name="custbody_record_in_vincellar" id="custbody_record_in_vincellar" type="checkbox" {{#if recordInVincellar}} checked{{/if}}> 
							<label for="custbody_record_in_vincellar" class="order-wizard-shipmethod-module-overrideweatherhold-label">
								{{model.__customFieldsMetadata.custbody_record_in_vincellar.label}}
							</label> -->
							<label for="custbody_record_in_vincellar" class="record-in-vincellar-label">
					    	{{model.__customFieldsMetadata.custbody_record_in_vincellar.label}}
					    	<input data-action="record-in-vincellar" type="checkbox" name="custbody_record_in_vincellar" id="custbody_record_in_vincellar" class="custbody_record_in_vincellar" {{#if recordInVincellar}} checked{{/if}}>
					    	<span class="record-in-vincellar_checkmark"></span>
					    	</label>
						</div>

						<div class="col-md-12">
							<!-- {{translate 'Remove From Vincellar'}} -->
							
							<select {{#if hideRemoveFromVincellar}}disabled{{/if}} name="custbody_remove_from_vincellar" id="custbody_remove_from_vincellar" style="width: 85%">
								<option value="">Remove From Vincellar</option>
								{{#each removeVincellar}}
									<option 
									{{#if isActive}}selected{{/if}} 
									value="{{id}}">
										{{text}}
									</option>
								{{/each}}
							</select>
						</div>
					</div>
				</div>
		</div>

		<!-- {{#if expectedDeliveryDate}} -->
			<div class="row div_line_css_gift">
				<div class="saparation_border_update"></div>
				<div class="order-wizard-shipmethod-module-giftnotes  col-md-6">
					<label for="record_in_gift" class="order-wizard-shipmethod-module-webship-date-label gift_notes_label">
			    	{{translate 'Gift Notes / Special Instructions <span class="thin">(250 Characters)</span>'}}
			    	<input data-action="record-in-Gift" class="record_in_gift" name="record_in_gift" id="record_in_gift" type="checkbox">
			    	<span class="gift_notes_checkmark"></span>
			    	</label>
					<!-- <h3 class="order-wizard-shipmethod-module-webship-date-label"> {{model.__customFieldsMetadata.custbody_gift_special_instructions.label}} </h3> -->
					<div class="gift_text_area" style="display: none;">
						<textarea maxlength="250" id="textarea" name="custbody_gift_special_instructions">{{model.options.custbody_gift_special_instructions}}</textarea>
						<script>
							if (document.readyState === 'complete') {
							document.getElementById("textarea").onfocusout = function() {checkText()};

							function checkText() {
							  
								var textarea = document.getElementsByName('custbody_gift_special_instructions')[0].value;
							    var patt = textarea.replace(/[^a-zA-Z0-9\\., ]+/g, '');
							    document.getElementsByName('custbody_gift_special_instructions')[0].value = patt;

								}
								}
						</script>
					</div>
				</div>
				<div class="saparation_border"></div>
				<div class="saparation_border_sec" style="display: none;"></div>
			</div>
		<!-- {{/if}} -->
	</div>

	{{#ifEquals shippingType '3'}}
	{{#if showNonDomesticEstimate}}
	<div class="row non-domestic-expected-delivery {{#ifEquals shippingType '3'}} non-domestic-expected-delivery-show {{else}} non-domestic-expected-delivery-hide {{/ifEquals}}">
			{{#if expectedDeliveryDate}}
			<div class="col-md-5">
				<h3 class="order-wizard-shipmethod-module-webship-date-label">{{translate 'Expected Delivery Date'}}</h3>
				<input type="text" class="order-wizard-shipmethod-module-webship-date" id="expected_delivery_date" name="expected_delivery_date" readonly value="{{expectedDeliveryDate}}">
			</div>
			{{/if}}
	</div>
	{{/if}}
	{{/ifEquals}}

{{/if}}

<script>
jQuery(document).ready(function () {

	var expShipDateCal = '{{shipStartDate}}';
	var shippingLeadTimeDays = {{shippingLeadTimeDays}};
	var delivaryMethod = '{{shippingType}}';

	var shipOptn = '{{shipOptn}}';
	var display_ship_opts_notice = '{{display_ship_opts_notice}}';

	if(delivaryMethod == 4){
		var todayDay = new Date();
		var str = todayDay.toString();
		var splitdat = str.split('(');
		if(splitdat[1] == 'Pacific Daylight Time)'){
		}else{
			/*var targetDate = new Date();
			targetDate = targetDate.setHours(todayDay.getHours()-13);
			todayDay = new Date(targetDate);*/

			var offset = -7;
			// PST time
				var PSTtime = new Date(new Date().getTime() + offset * 3600 * 1000).toUTCString().replace( / GMT$/, "" )
				todayDay = new Date(PSTtime);
				//console.log(todayDay)
		}
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
			resultDate = month+"/"+day+"/"+resultDate.getFullYear();
			var datePickerArr = new Array();
			datePickerArr = [0,1,3,5,6];
			jQuery("#custbody_vf_web_ship_date").datepicker({daysOfWeekDisabled: datePickerArr, startDate:resultDate, endDate:"+10000d", format:'mm/dd/yyyy'})
			jQuery("#custbody_vf_web_ship_date").on('change', function(){ jQuery('.datepicker').hide(); });
		}else if(dayToday == 3 ||dayToday ==4 ||dayToday == 5 || dayToday == 6){
			var resultDate = new Date();
			var dayOfWeek =2; 
			resultDate.setDate(todayDay.getDate() + (7 + dayOfWeek - todayDay.getDay()) % 7);
			resultDate = new Date(resultDate);
			var day = resultDate.getDate();
			var month = resultDate.getMonth() + 1;
			if (month < 10) month = "0" + month;
			if (day < 10) day = "0" + day;
			resultDate = month+"/"+day+"/"+resultDate.getFullYear();
			var datePickerArr = new Array();
			datePickerArr = [0,1,3,5,6];
			jQuery("#custbody_vf_web_ship_date").datepicker({daysOfWeekDisabled: datePickerArr, startDate:resultDate, endDate:"+10000d", format:'mm/dd/yyyy'})
			jQuery("#custbody_vf_web_ship_date").on('change', function(){ jQuery('.datepicker').hide(); });
		}
	}else{
		//jQuery("#custbody_vf_web_ship_date").datepicker({startDate:"+"+shippingLeadTimeDays+"d",endDate:"+10000d", format:'mm/dd/yyyy'})
		jQuery("#custbody_vf_web_ship_date").datepicker({daysOfWeekDisabled: [{{activeDays}}], startDate:expShipDateCal, endDate:"+10000d", format:'mm/dd/yyyy'})
		jQuery("#custbody_vf_web_ship_date").on('change', function(){ jQuery('.datepicker').hide(); });

		
		var shiptype = '{{shippingType}}';
		var sAddr = '{{shipAddr}}'
		if((shiptype == '3' || shiptype == 3) && sAddr == 'true')
		{
				
			jQuery('.order-wizard-step-content-wrapper .order-wizard-step-actions').children('.div-third').remove();
				jQuery('.order-wizard-step-content-wrapper .order-wizard-step-actions').children('.third-party-div').remove();
				$('.order-wizard-step-content-wrapper .order-wizard-step-actions').append("<div class='div-third'> <p class='third-party-message'> Send your wines directly to our state-of-the-art fine wine storage facility for the best possible safe-keeping and deliver them to your location of choice at a later date. All storage wines will be added to your personal Vinfolio Vincellar account where you can track them, move them, or list the for sale on our collector Martketplace. <p class='pad_text third-party-message'>Learn more about our <a href='https://www.vinfolio.com/sca-dev-kilimanjaro/checkout.ssp?is=checkout#/fine-wine-storage' class='third-party-message' style='padding-top: 10px;text-decoration:underline'>storage program</a></p> <p class='pad_text_bot third-party-message'>Learn more about our <a href='https://www.vinfolio.com/sca-dev-kilimanjaro/checkout.ssp?is=checkout#/cellar-management' class='third-party-message' style='text-decoration:underline'>Vincellar software solution </a></p> <p class='third-party-message'>Standard storage rate apply. Intake fees will not be charged for the wines purchased from our store.</p> </p> </div>");			
		jQuery('.order-wizard-step-button-continue').addClass('store_styles');
			
		}	
		//if willcall, display/hide ship option notice and pickup date
		else if(shiptype == '1' || shiptype == 1)
		{
			//console.log(display_ship_opts_notice)
			if(shipOptn == '1' || shipOptn == 1)
			{
			 if(display_ship_opts_notice == true || display_ship_opts_notice == 'true')		
			 jQuery(".shipping-options-msg").show();
			jQuery(".order-wizard-shipmethod-module-ship-pick-date").hide();
			}else
			{
			jQuery(".shipping-options-msg").hide();
			jQuery(".order-wizard-shipmethod-module-ship-pick-date").show();
			}
		}
		else{
					jQuery('.order-wizard-step-content-wrapper .order-wizard-step-actions').children('.div-third').remove();
					jQuery('.order-wizard-step-button-continue').removeClass('store_styles');
				}
	}
});

if(jQuery('[name="custbody_shipping_option"]:checked').val() == 2)
	jQuery('.order-wizard-shipmethod-module-ship-pick-date').removeClass('order-wizard-shipmethod-module-hide');

</script>


{{!----
Use the following context variables when customizing this template: 
	
	model (Object)
	model.addresses (Array)
	model.addresses.0 (Object)
	model.addresses.0.zip (String)
	model.addresses.0.country (String)
	model.addresses.0.addr2 (String)
	model.addresses.0.addr1 (String)
	model.addresses.0.city (String)
	model.addresses.0.addr3 (String)
	model.addresses.0.isvalid (String)
	model.addresses.0.internalid (String)
	model.addresses.0.phone (String)
	model.addresses.0.defaultbilling (String)
	model.addresses.0.defaultshipping (String)
	model.addresses.0.isresidential (String)
	model.addresses.0.state (String)
	model.addresses.0.fullname (String)
	model.addresses.0.company (undefined)
	model.shipmethods (Array)
	model.shipmethods.0 (Object)
	model.shipmethods.0.internalid (String)
	model.shipmethods.0.name (String)
	model.shipmethods.0.shipcarrier (String)
	model.shipmethods.0.rate (Number)
	model.shipmethods.0.rate_formatted (String)
	model.lines (Array)
	model.lines.0 (Object)
	model.lines.0.item (Object)
	model.lines.0.item.internalid (Number)
	model.lines.0.item.type (String)
	model.lines.0.quantity (Number)
	model.lines.0.internalid (String)
	model.lines.0.options (Array)
	model.lines.0.options.0 (Object)
	model.lines.0.options.0.cartOptionId (String)
	model.lines.0.options.0.itemOptionId (String)
	model.lines.0.options.0.label (String)
	model.lines.0.options.0.type (String)
	model.lines.0.options.0.value (Object)
	model.lines.0.options.0.value.label (String)
	model.lines.0.options.0.value.internalid (String)
	model.lines.0.location (String)
	model.lines.0.fulfillmentChoice (String)
	model.paymentmethods (Array)
	model.paymentmethods.0 (Object)
	model.paymentmethods.0.type (String)
	model.paymentmethods.0.primary (Boolean)
	model.paymentmethods.0.creditcard (Object)
	model.paymentmethods.0.creditcard.internalid (String)
	model.paymentmethods.0.creditcard.ccnumber (String)
	model.paymentmethods.0.creditcard.ccname (String)
	model.paymentmethods.0.creditcard.ccexpiredate (String)
	model.paymentmethods.0.creditcard.ccsecuritycode (undefined)
	model.paymentmethods.0.creditcard.expmonth (String)
	model.paymentmethods.0.creditcard.expyear (String)
	model.paymentmethods.0.creditcard.paymentmethod (Object)
	model.paymentmethods.0.creditcard.paymentmethod.internalid (String)
	model.paymentmethods.0.creditcard.paymentmethod.name (String)
	model.paymentmethods.0.creditcard.paymentmethod.creditcard (Boolean)
	model.paymentmethods.0.creditcard.paymentmethod.ispaypal (Boolean)
	model.paymentmethods.0.creditcard.paymentmethod.isexternal (Boolean)
	model.paymentmethods.0.creditcard.paymentmethod.key (String)
	model.internalid (String)
	model.confirmation (Object)
	model.confirmation.addresses (Array)
	model.confirmation.shipmethods (Array)
	model.confirmation.lines (Array)
	model.confirmation.paymentmethods (Array)
	model.multishipmethods (Array)
	model.lines_sort (Array)
	model.lines_sort.0 (String)
	model.latest_addition (undefined)
	model.promocodes (Array)
	model.ismultishipto (Boolean)
	model.shipmethod (undefined)
	model.billaddress (String)
	model.shipaddress (String)
	model.isPaypalComplete (Boolean)
	model.touchpoints (Object)
	model.touchpoints.logout (String)
	model.touchpoints.customercenter (String)
	model.touchpoints.serversync (String)
	model.touchpoints.viewcart (String)
	model.touchpoints.login (String)
	model.touchpoints.welcome (String)
	model.touchpoints.checkout (String)
	model.touchpoints.continueshopping (String)
	model.touchpoints.home (String)
	model.touchpoints.register (String)
	model.touchpoints.storelocator (String)
	model.agreetermcondition (Boolean)
	model.summary (Object)
	model.summary.discounttotal_formatted (String)
	model.summary.taxonshipping_formatted (String)
	model.summary.taxondiscount_formatted (String)
	model.summary.itemcount (Number)
	model.summary.taxonhandling_formatted (String)
	model.summary.total (Number)
	model.summary.tax2total (Number)
	model.summary.discountedsubtotal (Number)
	model.summary.taxtotal (Number)
	model.summary.discounttotal (Number)
	model.summary.discountedsubtotal_formatted (String)
	model.summary.taxondiscount (Number)
	model.summary.handlingcost_formatted (String)
	model.summary.taxonshipping (Number)
	model.summary.taxtotal_formatted (String)
	model.summary.totalcombinedtaxes_formatted (String)
	model.summary.handlingcost (Number)
	model.summary.totalcombinedtaxes (Number)
	model.summary.giftcertapplied_formatted (String)
	model.summary.shippingcost_formatted (String)
	model.summary.discountrate (String)
	model.summary.taxonhandling (Number)
	model.summary.tax2total_formatted (String)
	model.summary.discountrate_formatted (String)
	model.summary.estimatedshipping (Number)
	model.summary.subtotal (Number)
	model.summary.shippingcost (Number)
	model.summary.estimatedshipping_formatted (String)
	model.summary.total_formatted (String)
	model.summary.giftcertapplied (Number)
	model.summary.subtotal_formatted (String)
	model.options (Object)
	model.purchasenumber (String)
	model.sameAs (Boolean)
	showEnterShippingAddressFirst (Boolean)
	hasShippingMethods (Boolean)
	showSelectForShippingMethod (Boolean)
	shippingMethods (Array)
	showTitle (Boolean)
	title (String)

----}}
