define('product_list_details_min_quantity.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return " <p class=\"product-list-details-min-quantity\"><span class=\"product-list-details-min-quantity-label\" style=\"white-space:normal\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"The minimum quantity to purchase this item is <b>$(0)</b>. Do you want to change it <b>from $(1) to $(0)?</b> ",(depth0 != null ? compilerNameLookup(depth0,"minimumQuantity") : depth0),(depth0 != null ? compilerNameLookup(depth0,"quantity") : depth0),{"name":"translate","hash":{},"data":data}))
    + " <a href=\"#\" class=\"product-list-details-min-quantity-button-update\" data-id="
    + alias3(((helper = (helper = compilerNameLookup(helpers,"id") || (depth0 != null ? compilerNameLookup(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + " data-action=\"update-item-quantity\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Yes, update it",{"name":"translate","hash":{},"data":data}))
    + "</a></span></p> ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + ((stack1 = compilerNameLookup(helpers,"unless").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"fulfillsMinQuantityRequirements") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  ";
},"useData":true}); template.Name = 'product_list_details_min_quantity'; return template;});