define('product_list_bulk_actions.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "disabled";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return " <div class=\"product-list-bulk-actions-button-group\"><button class=\"product-list-bulk-actions-button-addtocart\" data-action=\"add-items-to-cart\" "
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isAddToCartEnabled") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Add Items to Cart",{"name":"translate","hash":{},"data":data}))
    + "</button><button class=\"product-list-bulk-actions-button-expander\" data-toggle=\"dropdown\" aria-expanded=\"false\" "
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isAtLeastOneItemChecked") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><i></i></button><ul class=\"product-list-bulk-actions-dropdown\" role=\"menu\"><li><a href=\"#\" data-action=\"delete-items\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Remove Items",{"name":"translate","hash":{},"data":data}))
    + "</a></li></ul></div>  ";
},"useData":true}); template.Name = 'product_list_bulk_actions'; return template;});