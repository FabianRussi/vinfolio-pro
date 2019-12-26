define('product_list_details_later.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"No products yet",{"name":"translate","hash":{},"data":data}))
    + " ";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"hasMoreThanOneItem") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "")
    + " ";
},"4":function(container,depth0,helpers,partials,data) {
    return " "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"$(0) Products",(depth0 != null ? compilerNameLookup(depth0,"itemsLength") : depth0),{"name":"translate","hash":{},"data":data}))
    + " ";
},"6":function(container,depth0,helpers,partials,data) {
    return " "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"$(0) Product",(depth0 != null ? compilerNameLookup(depth0,"itemsLength") : depth0),{"name":"translate","hash":{},"data":data}))
    + " ";
},"8":function(container,depth0,helpers,partials,data) {
    return " <div class=\"product-list-details-later-explanation\"> "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"To buy an item now, click \"Move to Cart\"",{"name":"translate","hash":{},"data":data}))
    + " </div><div class=\"product-list-details-later-list-items\" data-type=\"product-list-items\"><div data-view=\"ProductList.DetailsLater.Collection\"></div></div> ";
},"10":function(container,depth0,helpers,partials,data) {
    return " <div class=\"product-list-details-later-header-no-items\"> "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"You don't have items in this list yet.",{"name":"translate","hash":{},"data":data}))
    + " </div> ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return " <div class=\"product-list-details-later\"><button class=\"product-list-details-later-button-saveforlater-pusher\" data-type=\"sc-pusher\" data-target=\"cart-save-for-later\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Saved for Later",{"name":"translate","hash":{},"data":data}))
    + " <i></i></button><div class=\"product-list-details-later-row\" data-action=\"pushable\" data-id=\"cart-save-for-later\"><div class=\"product-list-details-later-col\"><h3 class=\"product-list-details-later-list-header-title\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Saved for Later",{"name":"translate","hash":{},"data":data}))
    + " <small class=\"product-list-details-later-shopping-cart-title-details-count\"> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isEmpty") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + " </small></h3><div data-confirm-message class=\"product-list-details-later-confirm-message\"></div> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasItems") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data})) != null ? stack1 : "")
    + " </div></div></div>  ";
},"useData":true}); template.Name = 'product_list_details_later'; return template;});