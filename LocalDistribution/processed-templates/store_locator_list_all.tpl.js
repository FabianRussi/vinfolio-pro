define('store_locator_list_all.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " <ul data-view=\"StoreLocatorListAllStoreView\" class=\"store-locator-list-all-container\"></ul><div data-view=\"GlobalViews.Pagination\"></div> ";
},"3":function(container,depth0,helpers,partials,data) {
    return " <div class=\"store-locator-list-all-container\"><p>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"The list of stores is not available.",{"name":"translate","hash":{},"data":data}))
    + "</p></div> ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " <div class=\"store-locator-list-all-main\"><h2>Store List</h2> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showList") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + " </div>  ";
},"useData":true}); template.Name = 'store_locator_list_all'; return template;});