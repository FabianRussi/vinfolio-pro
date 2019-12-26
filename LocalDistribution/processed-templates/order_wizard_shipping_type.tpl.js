define('order_wizard_shipping_type.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return " <option "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isActive") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " value=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"id") || (depth0 != null ? compilerNameLookup(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"> "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"text") || (depth0 != null ? compilerNameLookup(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + " </option> ";
},"2":function(container,depth0,helpers,partials,data) {
    return "selected";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : (container.nullContext || {});

  return " <div class=\"order-wizard-address-module-show-addresses-container order-wizard-address-module-shipping-type\"><h5 class=\"web-shipping-type\">"
    + alias1(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"__customFieldsMetadata") : stack1)) != null ? compilerNameLookup(stack1,"custbody_vf_shippingtypeonso") : stack1)) != null ? compilerNameLookup(stack1,"label") : stack1), depth0))
    + "</h5><select name=\"custbody_vf_shippingtypeonso\" id=\"custbody_vf_shippingtypeonso\" data-acion=\"shipping-type\"><option value=\"\">"
    + alias1((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(alias2,"Select Shipping Type",{"name":"translate","hash":{},"data":data}))
    + "</option> "
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias2,(depth0 != null ? compilerNameLookup(depth0,"shippingTypes") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </select></div> "
    + alias1(compilerNameLookup(helpers,"log").call(alias2,(depth0 != null ? compilerNameLookup(depth0,"shippingTypes") : depth0),{"name":"log","hash":{},"data":data}))
    + "  ";
},"useData":true}); template.Name = 'order_wizard_shipping_type'; return template;});