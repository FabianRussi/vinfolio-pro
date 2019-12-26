define('order_wizard_shipmethod_module.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function", alias5=container.lambda;

  return " <div class=\"order-wizard-shipmethod-module "
    + ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"shippingType") : depth0),"3",{"name":"ifEquals","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "\"> "
    + ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"shippingType") : depth0),"5",{"name":"ifEquals","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " <div id=\"order-wizard-shipmethod-module-shipping-message\"><div class=\"order-wizard-shipmethod-module-shipping-message-5 "
    + ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"shippingType") : depth0),"5",{"name":"ifEquals","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(2, data, 0),"data":data})) != null ? stack1 : "")
    + "\" ><p><strong>"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"FREIGHT, DUTIES AND TAXES ON INTERNATIONAL SHIPMENTS",{"name":"translate","hash":{},"data":data}))
    + "</strong><br> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Air freight rates are charged after the order is placed. All costs related to international shipping are estimates only and are always the responsibility of the customer. For questions on applicable duties and taxes for your country, please visit export.gov or fedex.com",{"name":"translate","hash":{},"data":data}))
    + " <br> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"For more information about international shipping rates, contact our customer service.",{"name":"translate","hash":{},"data":data}))
    + "</p></div><div class=\"order-wizard-shipmethod-module-shipping-message-6 "
    + ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"shippingType") : depth0),"6",{"name":"ifEquals","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(2, data, 0),"data":data})) != null ? stack1 : "")
    + "\"><p><strong>"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"DELIVERY INFORMATION",{"name":"translate","hash":{},"data":data}))
    + "</strong><br> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Optionaly in Shipping Option below,  select your preferred delivery date from eligible route days for",{"name":"translate","hash":{},"data":data}))
    + " "
    + alias3(((helper = (helper = compilerNameLookup(helpers,"selectedZip") || (depth0 != null ? compilerNameLookup(depth0,"selectedZip") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"selectedZip","hash":{},"data":data}) : helper)))
    + " "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"zip area.",{"name":"translate","hash":{},"data":data}))
    + ".<br> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Once your order is confirmed, we will schedule the actual delivery date as all dates are subject to capacity constraints of our delivery van.",{"name":"translate","hash":{},"data":data}))
    + "<br> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Standard deliveries are charged $12 per case with a $48 minimum Orders over $1000 receive free local delivery ",{"name":"translate","hash":{},"data":data}))
    + "<br></p></div><div class=\"order-wizard-shipmethod-module-shipping-message-1 "
    + ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"shippingType") : depth0),"1",{"name":"ifEquals","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(2, data, 0),"data":data})) != null ? stack1 : "")
    + "\"><h3 class=\"order-wizard-shipmethod-module-willcalllocation-label\">Pickup Information</h3><p style=\"width: 65%;\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Pick-ups scheduled for a given day are available from 3pm to 5pm PT. Once at Will Call, wines that are not picked up within five business days will be transferred back to storage and subject to a $1.25 per bottle restocking fee.",{"name":"translate","hash":{},"data":data}))
    + "</p></div><div class=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"showWillCallLocationWill") || (depth0 != null ? compilerNameLookup(depth0,"showWillCallLocationWill") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"showWillCallLocationWill","hash":{},"data":data}) : helper)))
    + "\"><h3 class=\"order-wizard-shipmethod-module-willcalllocation-label\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Choose Pickup Location",{"name":"translate","hash":{},"data":data}))
    + "</h3> "
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"willCallLocations") : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </div><div class=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"showWillCallLocation") || (depth0 != null ? compilerNameLookup(depth0,"showWillCallLocation") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"showWillCallLocation","hash":{},"data":data}) : helper)))
    + "\"><h3 class=\"order-wizard-shipmethod-module-willcalllocation-label\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Choose Pickup Location",{"name":"translate","hash":{},"data":data}))
    + "</h3><select name=\"custbody_willcalllocation\" id=\"custbody_willcalllocation\" class=\"order-wizard-shipmethod-module-willcalllocation\" data-action=\"willcall-location\"> "
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"willCallLocations") : depth0),{"name":"each","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </select></div><div class=\"order-wizard-shipmethod-module-shipping-message-4 "
    + ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"shippingType") : depth0),"4",{"name":"ifEquals","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(2, data, 0),"data":data})) != null ? stack1 : "")
    + "\"><p><input type=\"checkbox\" name=\"third_party_confirmation\" class=\"order-wizard-shipmethod-module-confirmation-chk\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"I hereby confirm that I have made (or am making) shipping arrangements directly with a third party and I hereby take full responsibility for all aspects of legal compliance. I is hereby authorized to transfer to the party specified in my instructions.",{"name":"translate","hash":{},"data":data}))
    + " <br><br><p>"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Pick-ups scheduled for a given day are availablefrom 3p.m.to 5p.m. Not picked up within five business days will be transferred back to storage and is subject to a $1.25 per restocking fee.",{"name":"translate","hash":{},"data":data}))
    + "</p><br><br><strong>"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Please tell us the name of the third party shipper who is authorized to pick up.",{"name":"translate","hash":{},"data":data}))
    + "</strong><br><br><textarea name=\"custbody_3rd_party_shipper\" id=\"custbody_3rd_party_shipper\" maxlength=\"255\">"
    + alias3(alias5(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"options") : stack1)) != null ? compilerNameLookup(stack1,"custbody_3rd_party_shipper") : stack1), depth0))
    + "</textarea><br><p><span id=\"rchars\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"maxLength") || (depth0 != null ? compilerNameLookup(depth0,"maxLength") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"maxLength","hash":{},"data":data}) : helper)))
    + "</span> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"characters remaining",{"name":"translate","hash":{},"data":data}))
    + "</p></p></div></div><div class=\"row\"><div class=\"order-wizard-shipmethod-module-shipping-type col-md-6\"><h3 class=\"order-wizard-shipmethod-module-webship-date-label "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"callExpStyle") : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Shipping Options",{"name":"translate","hash":{},"data":data}))
    + " </h3> "
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"shippingOptions") : depth0),{"name":"each","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </div><div class=\"shipping-options-msg col-md-6\"><p>As your wines become available, we will email you to let you know they are ready for pickup.</p></div></div><div class=\"order-wizard-shipmethod-module-custom-fields\"><div class=\"row\"><div class=\"order-wizard-shipmethod-module-ship-pick-date col-md-5\"><h3 class=\"order-wizard-shipmethod-module-webship-date-label\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Choose Pickup Date",{"name":"translate","hash":{},"data":data}))
    + "</h3><input type=\"text\" class=\"order-wizard-shipmethod-module-webship-date\" id=\"custbody_vf_web_ship_date\" name=\"custbody_vf_web_ship_date\" autocomplete=\"off\" data-format=\"mm/dd/yyyy\" data-todayhighlight=\"true\" value=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"shipDate") || (depth0 != null ? compilerNameLookup(depth0,"shipDate") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"shipDate","hash":{},"data":data}) : helper)))
    + "\" data-action=\"check-weather-hold\"><input type=\"hidden\" name=\"txtWeatherHoldStartDate\" value=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"weatherHoldStartDate") || (depth0 != null ? compilerNameLookup(depth0,"weatherHoldStartDate") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"weatherHoldStartDate","hash":{},"data":data}) : helper)))
    + "\"><input type=\"hidden\" name=\"txtWeatherHoldEndDate\" value=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"weatherHoldEndDate") || (depth0 != null ? compilerNameLookup(depth0,"weatherHoldEndDate") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"weatherHoldEndDate","hash":{},"data":data}) : helper)))
    + "\"></div><div class=\"order-wizard-shipmethod-module-weather-hold "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isWeatherHold") : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.program(21, data, 0),"data":data})) != null ? stack1 : "")
    + " col-md-6\"><p> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Weather Hold Alert! One or more wines in your order will be held in a safe wine storage facility until weather clears.",{"name":"translate","hash":{},"data":data}))
    + " <i class=\"order-wizard-shipmethod-module-link-icon\" data-toggle=\"tooltip\" title=\"\" data-original-title=\""
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Please note that during the summer months, all wine is shipped at the customer's own risk using either Temperature Control, Overnight morning, or 2 Day AM delivery. During non-summer months we use an automated Weather Check system to ensure your wine is not shipped when temperatures are over 75<sup>0</sup>F or under 20<sup>0</sup>F. If temperatures fall outside of our Safe Shipping range, we will notify you via email that your wine shipment is held due to weather. You may choose to release the Weather Hold at any time by contacting Customer Care.",{"name":"translate","hash":{},"data":data}))
    + "\" >"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"More Info",{"name":"translate","hash":{},"data":data}))
    + "</i></p><p><input name=\"custbody_overrideweatherhold\" id=\"custbody_overrideweatherhold\" type=\"checkbox\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"overrideWeatherhold") : depth0),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><label for=\"custbody_overrideweatherhold\" class=\"order-wizard-shipmethod-module-overrideweatherhold-label\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Override hold and ship regardless of weather. I agree to hold Vinfolio harmless for any temperature related damage to my shipment",{"name":"translate","hash":{},"data":data}))
    + " </label></p></div><div class=\"order-wizard-shipmethod-module-weather-hold-3rd-party "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"is_weather_hold_party") : depth0),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.program(21, data, 0),"data":data})) != null ? stack1 : "")
    + " col-md-6\"><p style=\"font-size: 12px;\" class=\"ship-pick-up-mgs-party\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"If you are shipping your wines during the summer season we highly recommend selecting an expedited shipping option from your third party carrier.",{"name":"translate","hash":{},"data":data}))
    + " </p></div></div></div><div class=\"row\"><div id=\"order-wizard-shipmethod-module-dropdown\" class=\""
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showDeliveryMethod") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(27, data, 0),"data":data})) != null ? stack1 : "")
    + " col-md-6\"> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showTitle") : depth0),{"name":"if","hash":{},"fn":container.program(29, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showEnterShippingAddressFirst") : depth0),{"name":"if","hash":{},"fn":container.program(31, data, 0),"inverse":container.program(33, data, 0),"data":data})) != null ? stack1 : "")
    + " </div></div><div class=\"row\"><div id=\"order-wizard-shipmethod-module-dropdown-season-option\" class=\""
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showDeliveryMethod") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(27, data, 0),"data":data})) != null ? stack1 : "")
    + " col-md-6\"  style=\"display: none;\"> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showTitle") : depth0),{"name":"if","hash":{},"fn":container.program(29, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showEnterShippingAddressFirst") : depth0),{"name":"if","hash":{},"fn":container.program(31, data, 0),"inverse":container.program(33, data, 0),"data":data})) != null ? stack1 : "")
    + " </div></div><div class=\"order-wizard-shipmethod-module-custom-fields-season-option\" style=\"display: none;\"><div class=\"row\"><div class=\"order-wizard-shipmethod-module-ship-pick-date col-md-5\"><h3 class=\"order-wizard-shipmethod-module-webship-date-label\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Choose Pickup Date",{"name":"translate","hash":{},"data":data}))
    + "</h3><input type=\"text\" class=\"order-wizard-shipmethod-module-webship-date\" id=\"custbody_vf_web_ship_date\" name=\"custbody_vf_web_ship_date\" autocomplete=\"off\" data-format=\"mm/dd/yyyy\" data-todayhighlight=\"true\" value=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"shipDate") || (depth0 != null ? compilerNameLookup(depth0,"shipDate") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"shipDate","hash":{},"data":data}) : helper)))
    + "\" data-action=\"check-weather-hold\"><input type=\"hidden\" name=\"txtWeatherHoldStartDate\" value=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"weatherHoldStartDate") || (depth0 != null ? compilerNameLookup(depth0,"weatherHoldStartDate") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"weatherHoldStartDate","hash":{},"data":data}) : helper)))
    + "\"><input type=\"hidden\" name=\"txtWeatherHoldEndDate\" value=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"weatherHoldEndDate") || (depth0 != null ? compilerNameLookup(depth0,"weatherHoldEndDate") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"weatherHoldEndDate","hash":{},"data":data}) : helper)))
    + "\"></div></div></div><div class=\"row\"> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"expectedDeliveryDate") : depth0),{"name":"if","hash":{},"fn":container.program(46, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </div><div class=\"row div_line_css\"><div class=\"saparation_border_update\"></div><div class=\"order-wizard-shipmethod-module-vincellar  col-md-6\"><h3 class=\"order-wizard-shipmethod-module-webship-date-label\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Vincellar Update Upon Shipment/Delivery",{"name":"translate","hash":{},"data":data}))
    + "</h3><div class=\"row\"><div class=\"order-wizard-shipmethod-module-record-in-vincellar col-md-12\"><label for=\"custbody_record_in_vincellar\" class=\"record-in-vincellar-label\"> "
    + alias3(alias5(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"__customFieldsMetadata") : stack1)) != null ? compilerNameLookup(stack1,"custbody_record_in_vincellar") : stack1)) != null ? compilerNameLookup(stack1,"label") : stack1), depth0))
    + " <input data-action=\"record-in-vincellar\" type=\"checkbox\" name=\"custbody_record_in_vincellar\" id=\"custbody_record_in_vincellar\" class=\"custbody_record_in_vincellar\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"recordInVincellar") : depth0),{"name":"if","hash":{},"fn":container.program(48, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><span class=\"record-in-vincellar_checkmark\"></span></label></div><div class=\"col-md-12\"><select "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hideRemoveFromVincellar") : depth0),{"name":"if","hash":{},"fn":container.program(50, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " name=\"custbody_remove_from_vincellar\" id=\"custbody_remove_from_vincellar\" style=\"width: 85%\"><option value=\"\">Remove From Vincellar</option> "
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"removeVincellar") : depth0),{"name":"each","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </select></div></div></div></div><div class=\"row div_line_css_gift\"><div class=\"saparation_border_update\"></div><div class=\"order-wizard-shipmethod-module-giftnotes  col-md-6\"><label for=\"record_in_gift\" class=\"order-wizard-shipmethod-module-webship-date-label gift_notes_label\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Gift Notes / Special Instructions <span class=\"thin\">(250 Characters)</span>",{"name":"translate","hash":{},"data":data}))
    + " <input data-action=\"record-in-Gift\" class=\"record_in_gift\" name=\"record_in_gift\" id=\"record_in_gift\" type=\"checkbox\"><span class=\"gift_notes_checkmark\"></span></label><div class=\"gift_text_area\" style=\"display: none;\"><textarea maxlength=\"250\" id=\"textarea\" name=\"custbody_gift_special_instructions\">"
    + alias3(alias5(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"options") : stack1)) != null ? compilerNameLookup(stack1,"custbody_gift_special_instructions") : stack1), depth0))
    + "</textarea><script> if (document.readyState === 'complete') {\n							document.getElementById(\"textarea\").onfocusout = function() {checkText()};\n\n							function checkText() {\n							  \n								var textarea = document.getElementsByName('custbody_gift_special_instructions')[0].value;\n							    var patt = textarea.replace(/[^a-zA-Z0-9\\\\., ]+/g, '');\n							    document.getElementsByName('custbody_gift_special_instructions')[0].value = patt;\n\n								}\n								} </script></div></div><div class=\"saparation_border\"></div><div class=\"saparation_border_sec\" style=\"display: none;\"></div></div></div> "
    + ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"shippingType") : depth0),"3",{"name":"ifEquals","hash":{},"fn":container.program(52, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " ";
},"2":function(container,depth0,helpers,partials,data) {
    return " order-wizard-shipmethod-module-hide ";
},"4":function(container,depth0,helpers,partials,data) {
    return " order-wizard-shipmethod-module-show ";
},"6":function(container,depth0,helpers,partials,data) {
    return " <div class=\"row\" style=\"padding: 0 0 10px 15px;\"><p>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"A VinFolio Shipping Specialist will contact you regarding the shipping charges",{"name":"translate","hash":{},"data":data}))
    + "</p></div> ";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return " <div data-action=\"willcall-location\" name=\"custbody_willcalllocation\" id=\"custbody_willcalllocation\" class=\"order-wizard-shipmethod-module-willcalllocation\" data-value=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"id") || (depth0 != null ? compilerNameLookup(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><label class=\"willcall-pickup-radio-label"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"id") || (depth0 != null ? compilerNameLookup(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" for=\"custbody_willcalllocation-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"id") || (depth0 != null ? compilerNameLookup(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"text") || (depth0 != null ? compilerNameLookup(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "<input type=\"radio\" name=\"custbody_willcalllocation\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isActive") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " value=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"id") || (depth0 != null ? compilerNameLookup(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-action=\"willcall-location\" id=\"custbody_willcalllocation-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"id") || (depth0 != null ? compilerNameLookup(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" /><span class=\"willcall-pickup-radio"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"id") || (depth0 != null ? compilerNameLookup(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "-checkmark radio-switch\"></span></label></div> ";
},"9":function(container,depth0,helpers,partials,data) {
    return "checked=\"checked\"";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return " <option "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isActive") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " value=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"id") || (depth0 != null ? compilerNameLookup(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"> "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"text") || (depth0 != null ? compilerNameLookup(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + " </option> ";
},"12":function(container,depth0,helpers,partials,data) {
    return "selected";
},"14":function(container,depth0,helpers,partials,data) {
    return " for_will_call ";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return " <div data-action=\"select-shipping-option-radio\" class=\""
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isActive") : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " shipping-options\" data-value=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"id") || (depth0 != null ? compilerNameLookup(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><label class=\"shipping-option\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"text") || (depth0 != null ? compilerNameLookup(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "<input type=\"radio\" name=\"custbody_shipping_option\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isActive") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " value=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"id") || (depth0 != null ? compilerNameLookup(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" id=\"shipping-options-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"id") || (depth0 != null ? compilerNameLookup(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" /><span class=\"shipping-checkmark\"></span></label></div> ";
},"17":function(container,depth0,helpers,partials,data) {
    return "order-wizard-shipmethod-module-option-active";
},"19":function(container,depth0,helpers,partials,data) {
    return "order-wizard-shipmethod-module-show ship-pick-up-mgs-div-class";
},"21":function(container,depth0,helpers,partials,data) {
    return "order-wizard-shipmethod-module-hide";
},"23":function(container,depth0,helpers,partials,data) {
    return "checked";
},"25":function(container,depth0,helpers,partials,data) {
    return "order-wizard-shipmethod-module-show ship-pick-up-mgs-div-class-party";
},"27":function(container,depth0,helpers,partials,data) {
    return " order-wizard-shipmethod-module-hide";
},"29":function(container,depth0,helpers,partials,data) {
    var helper;

  return " <h3 class=\"order-wizard-shipmethod-module-title\"> "
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"title") || (depth0 != null ? compilerNameLookup(depth0,"title") : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper)))
    + " </h3> ";
},"31":function(container,depth0,helpers,partials,data) {
    return " <div class=\"order-wizard-shipmethod-module-message\"> "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Warning: Please enter a valid shipping address first",{"name":"translate","hash":{},"data":data}))
    + " </div> ";
},"33":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showLoadingMethods") : depth0),{"name":"if","hash":{},"fn":container.program(34, data, 0),"inverse":container.program(36, data, 0),"data":data})) != null ? stack1 : "")
    + " ";
},"34":function(container,depth0,helpers,partials,data) {
    return " <div class=\"order-wizard-shipmethod-module-message\"> "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Loading...",{"name":"translate","hash":{},"data":data}))
    + " </div> ";
},"36":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"hasShippingMethods") : depth0),{"name":"if","hash":{},"fn":container.program(37, data, 0),"inverse":container.program(44, data, 0),"data":data})) != null ? stack1 : "")
    + " ";
},"37":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showSelectForShippingMethod") : depth0),{"name":"if","hash":{},"fn":container.program(38, data, 0),"inverse":container.program(41, data, 0),"data":data})) != null ? stack1 : "")
    + " ";
},"38":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return " <select data-action=\"select-delivery-option\" data-action=\"edit-module\" class=\"order-wizard-shipmethod-module-option-select\"><option>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(alias1,"Select a delivery method",{"name":"translate","hash":{},"data":data}))
    + "</option> "
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"shippingMethods") : depth0),{"name":"each","hash":{},"fn":container.program(39, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </select> ";
},"39":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return " <option "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isActive") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " value=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"internalid") || (depth0 != null ? compilerNameLookup(depth0,"internalid") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"internalid","hash":{},"data":data}) : helper)))
    + "\"\n									id=\"delivery-options-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"internalid") || (depth0 != null ? compilerNameLookup(depth0,"internalid") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"internalid","hash":{},"data":data}) : helper)))
    + "\"> "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"rate_formatted") || (depth0 != null ? compilerNameLookup(depth0,"rate_formatted") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rate_formatted","hash":{},"data":data}) : helper)))
    + " - "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + " </option> ";
},"41":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"shippingMethods") : depth0),{"name":"each","hash":{},"fn":container.program(42, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " ";
},"42":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return " <a data-action=\"select-delivery-option-radio\" \n								class=\"order-wizard-shipmethod-module-option "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isActive") : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"\n								data-value=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"internalid") || (depth0 != null ? compilerNameLookup(depth0,"internalid") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"internalid","hash":{},"data":data}) : helper)))
    + "\"><input type=\"radio\" name=\"delivery-options\" data-action=\"edit-module\" class=\"order-wizard-shipmethod-module-checkbox\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isActive") : depth0),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " value=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"internalid") || (depth0 != null ? compilerNameLookup(depth0,"internalid") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"internalid","hash":{},"data":data}) : helper)))
    + "\" \n									id=\"delivery-options-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"internalid") || (depth0 != null ? compilerNameLookup(depth0,"internalid") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"internalid","hash":{},"data":data}) : helper)))
    + "\" /><span class=\"order-wizard-shipmethod-module-option-name\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + " <span class=\"order-wizard-shipmethod-module-option-price\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"rate_formatted") || (depth0 != null ? compilerNameLookup(depth0,"rate_formatted") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rate_formatted","hash":{},"data":data}) : helper)))
    + "</span></span></a> ";
},"44":function(container,depth0,helpers,partials,data) {
    return " <div class=\"order-wizard-shipmethod-module-message\"> "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Warning: No Delivery Methods are available for this address",{"name":"translate","hash":{},"data":data}))
    + " </div> ";
},"46":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return " <div class=\"col-md-6 hide-expected\"><h3 class=\"order-wizard-shipmethod-module-webship-date-label "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"callExpStyle") : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Expected Delivery Date",{"name":"translate","hash":{},"data":data}))
    + "</h3><input type=\"text\" class=\"order-wizard-shipmethod-module-webship-date\" id=\"expected_delivery_date\" name=\"expected_delivery_date\" readonly value=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"expectedDeliveryDate") || (depth0 != null ? compilerNameLookup(depth0,"expectedDeliveryDate") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"expectedDeliveryDate","hash":{},"data":data}) : helper)))
    + "\"></div> ";
},"48":function(container,depth0,helpers,partials,data) {
    return " checked";
},"50":function(container,depth0,helpers,partials,data) {
    return "disabled";
},"52":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showNonDomesticEstimate") : depth0),{"name":"if","hash":{},"fn":container.program(53, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " ";
},"53":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return " <div class=\"row non-domestic-expected-delivery "
    + ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || helpers.helperMissing).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"shippingType") : depth0),"3",{"name":"ifEquals","hash":{},"fn":container.program(54, data, 0),"inverse":container.program(56, data, 0),"data":data})) != null ? stack1 : "")
    + "\"> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"expectedDeliveryDate") : depth0),{"name":"if","hash":{},"fn":container.program(58, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </div> ";
},"54":function(container,depth0,helpers,partials,data) {
    return " non-domestic-expected-delivery-show ";
},"56":function(container,depth0,helpers,partials,data) {
    return " non-domestic-expected-delivery-hide ";
},"58":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return " <div class=\"col-md-5\"><h3 class=\"order-wizard-shipmethod-module-webship-date-label\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Expected Delivery Date",{"name":"translate","hash":{},"data":data}))
    + "</h3><input type=\"text\" class=\"order-wizard-shipmethod-module-webship-date\" id=\"expected_delivery_date\" name=\"expected_delivery_date\" readonly value=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"expectedDeliveryDate") || (depth0 != null ? compilerNameLookup(depth0,"expectedDeliveryDate") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"expectedDeliveryDate","hash":{},"data":data}) : helper)))
    + "\"></div> ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"flowRestriction") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " <script> jQuery(document).ready(function () {\n\n	var expShipDateCal = '"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"shipStartDate") || (depth0 != null ? compilerNameLookup(depth0,"shipStartDate") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"shipStartDate","hash":{},"data":data}) : helper)))
    + "';\n	var shippingLeadTimeDays = "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"shippingLeadTimeDays") || (depth0 != null ? compilerNameLookup(depth0,"shippingLeadTimeDays") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"shippingLeadTimeDays","hash":{},"data":data}) : helper)))
    + ";\n	var delivaryMethod = '"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"shippingType") || (depth0 != null ? compilerNameLookup(depth0,"shippingType") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"shippingType","hash":{},"data":data}) : helper)))
    + "';\n\n	var shipOptn = '"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"shipOptn") || (depth0 != null ? compilerNameLookup(depth0,"shipOptn") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"shipOptn","hash":{},"data":data}) : helper)))
    + "';\n	var display_ship_opts_notice = '"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"display_ship_opts_notice") || (depth0 != null ? compilerNameLookup(depth0,"display_ship_opts_notice") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"display_ship_opts_notice","hash":{},"data":data}) : helper)))
    + "';\n\n	if(delivaryMethod == 4){\n		var todayDay = new Date();\n		var str = todayDay.toString();\n		var splitdat = str.split('(');\n		if(splitdat[1] == 'Pacific Daylight Time)'){\n		}else{\n			/*var targetDate = new Date();\n			targetDate = targetDate.setHours(todayDay.getHours()-13);\n			todayDay = new Date(targetDate);*/\n\n			var offset = -7;\n			// PST time\n				var PSTtime = new Date(new Date().getTime() + offset * 3600 * 1000).toUTCString().replace( / GMT$/, \"\" )\n				todayDay = new Date(PSTtime);\n				//console.log(todayDay)\n		}\n		var dayToday = todayDay.getDay();\n		if(dayToday == 0 || dayToday == 1 || dayToday ==2){\n			var resultDate = new Date();\n			var dayOfWeek =4; \n			resultDate.setDate(todayDay.getDate() + (7 + dayOfWeek - todayDay.getDay()) % 7);\n			resultDate = new Date(resultDate);\n			var day = resultDate.getDate();\n			var month = resultDate.getMonth() + 1;\n			if (month < 10) month = \"0\" + month;\n			if (day < 10) day = \"0\" + day;\n			resultDate = month+\"/\"+day+\"/\"+resultDate.getFullYear();\n			var datePickerArr = new Array();\n			datePickerArr = [0,1,3,5,6];\n			jQuery(\"#custbody_vf_web_ship_date\").datepicker({daysOfWeekDisabled: datePickerArr, startDate:resultDate, endDate:\"+10000d\", format:'mm/dd/yyyy'})\n			jQuery(\"#custbody_vf_web_ship_date\").on('change', function(){ jQuery('.datepicker').hide(); });\n		}else if(dayToday == 3 ||dayToday ==4 ||dayToday == 5 || dayToday == 6){\n			var resultDate = new Date();\n			var dayOfWeek =2; \n			resultDate.setDate(todayDay.getDate() + (7 + dayOfWeek - todayDay.getDay()) % 7);\n			resultDate = new Date(resultDate);\n			var day = resultDate.getDate();\n			var month = resultDate.getMonth() + 1;\n			if (month < 10) month = \"0\" + month;\n			if (day < 10) day = \"0\" + day;\n			resultDate = month+\"/\"+day+\"/\"+resultDate.getFullYear();\n			var datePickerArr = new Array();\n			datePickerArr = [0,1,3,5,6];\n			jQuery(\"#custbody_vf_web_ship_date\").datepicker({daysOfWeekDisabled: datePickerArr, startDate:resultDate, endDate:\"+10000d\", format:'mm/dd/yyyy'})\n			jQuery(\"#custbody_vf_web_ship_date\").on('change', function(){ jQuery('.datepicker').hide(); });\n		}\n	}else{\n		//jQuery(\"#custbody_vf_web_ship_date\").datepicker({startDate:\"+\"+shippingLeadTimeDays+\"d\",endDate:\"+10000d\", format:'mm/dd/yyyy'})\n		jQuery(\"#custbody_vf_web_ship_date\").datepicker({daysOfWeekDisabled: ["
    + alias4(((helper = (helper = compilerNameLookup(helpers,"activeDays") || (depth0 != null ? compilerNameLookup(depth0,"activeDays") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"activeDays","hash":{},"data":data}) : helper)))
    + "], startDate:expShipDateCal, endDate:\"+10000d\", format:'mm/dd/yyyy'})\n		jQuery(\"#custbody_vf_web_ship_date\").on('change', function(){ jQuery('.datepicker').hide(); });\n\n		\n		var shiptype = '"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"shippingType") || (depth0 != null ? compilerNameLookup(depth0,"shippingType") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"shippingType","hash":{},"data":data}) : helper)))
    + "';\n		var sAddr = '"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"shipAddr") || (depth0 != null ? compilerNameLookup(depth0,"shipAddr") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"shipAddr","hash":{},"data":data}) : helper)))
    + "'\n		if((shiptype == '3' || shiptype == 3) && sAddr == 'true')\n		{\n				\n			jQuery('.order-wizard-step-content-wrapper .order-wizard-step-actions').children('.div-third').remove();\n				jQuery('.order-wizard-step-content-wrapper .order-wizard-step-actions').children('.third-party-div').remove();\n				$('.order-wizard-step-content-wrapper .order-wizard-step-actions').append(\"<div class='div-third'><p class='third-party-message'> Send your wines directly to our state-of-the-art fine wine storage facility for the best possible safe-keeping and deliver them to your location of choice at a later date. All storage wines will be added to your personal Vinfolio Vincellar account where you can track them, move them, or list the for sale on our collector Martketplace. <p class='pad_text third-party-message'>Learn more about our <a href='https://www.vinfolio.com/sca-dev-kilimanjaro/checkout.ssp?is=checkout#/fine-wine-storage' class='third-party-message' style='padding-top: 10px;text-decoration:underline'>storage program</a></p><p class='pad_text_bot third-party-message'>Learn more about our <a href='https://www.vinfolio.com/sca-dev-kilimanjaro/checkout.ssp?is=checkout#/cellar-management' class='third-party-message' style='text-decoration:underline'>Vincellar software solution </a></p><p class='third-party-message'>Standard storage rate apply. Intake fees will not be charged for the wines purchased from our store.</p></p></div>\");			\n		jQuery('.order-wizard-step-button-continue').addClass('store_styles');\n			\n		}	\n		//if willcall, display/hide ship option notice and pickup date\n		else if(shiptype == '1' || shiptype == 1)\n		{\n			//console.log(display_ship_opts_notice)\n			if(shipOptn == '1' || shipOptn == 1)\n			{\n			 if(display_ship_opts_notice == true || display_ship_opts_notice == 'true')		\n			 jQuery(\".shipping-options-msg\").show();\n			jQuery(\".order-wizard-shipmethod-module-ship-pick-date\").hide();\n			}else\n			{\n			jQuery(\".shipping-options-msg\").hide();\n			jQuery(\".order-wizard-shipmethod-module-ship-pick-date\").show();\n			}\n		}\n		else{\n					jQuery('.order-wizard-step-content-wrapper .order-wizard-step-actions').children('.div-third').remove();\n					jQuery('.order-wizard-step-button-continue').removeClass('store_styles');\n				}\n	}\n});\n\nif(jQuery('[name=\"custbody_shipping_option\"]:checked').val() == 2)\n	jQuery('.order-wizard-shipmethod-module-ship-pick-date').removeClass('order-wizard-shipmethod-module-hide'); </script>  ";
},"useData":true}); template.Name = 'order_wizard_shipmethod_module'; return template;});