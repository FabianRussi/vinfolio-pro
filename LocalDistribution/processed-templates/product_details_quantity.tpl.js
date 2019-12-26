define('product_details_quantity.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, alias3=container.lambda;

  return " <div class=\"product-details-quantity-options\" data-validation=\"control-group\"><label for=\"quantity\" class=\"product-details-quantity-options-title\"> "
    + alias2((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(alias1,"Qty",{"name":"translate","hash":{},"data":data}))
    + " </label><div data-validation=\"control\"><div class=\"product-details-quantity-container\"><button type=\"button\" class=\"product-details-quantity-remove\" data-action=\"updateQuantity\" data-type=\"product-details-quantity-remove\" data-value=\"-1\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isMinusButtonDisabled") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">-</button><input type=\"number\" name=\"quantity\" data-item-id=\""
    + alias2(alias3(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"internalid") : stack1), depth0))
    + "\" id=\"quantity\" data-action=\"changeQuantity\" class=\"product-details-quantity-value\" value=\""
    + alias2(alias3(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"quantity") : stack1), depth0))
    + "\" min=\"1\"><button  type=\"button\" class=\"product-details-quantity-add\" data-action=\"updateQuantity\" data-value=\"+1\">+</button></div></div></div> ";
},"2":function(container,depth0,helpers,partials,data) {
    return "disabled=\"disabled\"";
},"4":function(container,depth0,helpers,partials,data) {
    return " <input type=\"hidden\" name=\"quantity\" id=\"quantity\" value=\"1\"> ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " <div> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showQuantity") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + " </div>  ";
},"useData":true}); template.Name = 'product_details_quantity'; return template;});