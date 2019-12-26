define('product_list_control_new_item.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Create and Move Item",{"name":"translate","hash":{},"data":data}))
    + " ";
},"3":function(container,depth0,helpers,partials,data) {
    return " "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Create and Add Item",{"name":"translate","hash":{},"data":data}))
    + " ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return " <a class=\"product-list-control-new-item-button-create\" data-action=\"show-add-new-list-form\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Create a New List",{"name":"translate","hash":{},"data":data}))
    + " </a><form action=\"#\" data-action=\"create-and-move\" data-type=\"product-list-control-add-new-list-form\" class=\"product-list-control-new-item-add-new-list-form\"><div class=\"product-list-control-new-item-add-new-list-input-container\" data-validation=\"control-group\"><input class=\"product-list-control-new-item-add-new-list-input\" name=\"name\" type=\"text\" data-type=\"new-product-list-name\" placeholder=\""
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Your new list name",{"name":"translate","hash":{},"data":data}))
    + "\" ></div><div class=\"product-list-control-new-item-add-new-list-buttons\"><button type=\"submit\" class=\"product-list-control-new-item-button-create\"> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isMoving") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + " </button></div></form>  ";
},"useData":true}); template.Name = 'product_list_control_new_item'; return template;});