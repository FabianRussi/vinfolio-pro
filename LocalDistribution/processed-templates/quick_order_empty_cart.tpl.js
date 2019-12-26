define('quick_order_empty_cart.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return " <p class=\"quick-order-empty-cart\"> "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Continue Shopping on our <a href=\"/\" data-touchpoint=\"home\">Home Page</a> or use the Quick Add below to add items to your cart.",{"name":"translate","hash":{},"data":data}))
    + " </p>  ";
},"useData":true}); template.Name = 'quick_order_empty_cart'; return template;});