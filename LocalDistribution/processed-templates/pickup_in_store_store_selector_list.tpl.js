define('pickup_in_store_store_selector_list.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Store",{"name":"translate","hash":{},"data":data}))
    + " ";
},"3":function(container,depth0,helpers,partials,data) {
    return " "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Stores",{"name":"translate","hash":{},"data":data}))
    + " ";
},"5":function(container,depth0,helpers,partials,data) {
    return " <div data-view=\"GlobalMessageStoresUnavailable\"></div> ";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + ((stack1 = compilerNameLookup(helpers,"unless").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"stockPickup") : depth0),{"name":"unless","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " ";
},"8":function(container,depth0,helpers,partials,data) {
    return " <div data-view=\"GlobalMessageStoresStockUnavailable\"></div> ";
},"10":function(container,depth0,helpers,partials,data) {
    return " overflow: visible;";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return " <div class=\"pickup-in-store-store-selector-list-divider\"></div><div class=\"pickup-in-store-store-selector-list-result\"><div class=\"pickup-in-store-store-selector-list-result-item-selected-detail-mobile\" data-view=\"Line.Item.Information\"></div><h4 class=\"pickup-in-store-store-selector-list-result-title\"><span>"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"storesLength") || (depth0 != null ? compilerNameLookup(depth0,"storesLength") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"storesLength","hash":{},"data":data}) : helper)))
    + " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isOneStore") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + " </span> "
    + alias4((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"near",{"name":"translate","hash":{},"data":data}))
    + " "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"myPosition") || (depth0 != null ? compilerNameLookup(depth0,"myPosition") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"myPosition","hash":{},"data":data}) : helper)))
    + " </h4> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isEmptyStores") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + " <a href=\"#\" class=\"pickup-in-store-store-selector-list-refine-search\" data-action=\"refine-search\">"
    + alias4((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Refine Search",{"name":"translate","hash":{},"data":data}))
    + "</a><div class=\"pickup-in-store-store-selector-list-result-rows\" data-type=\"store-row\" style=\"max-height: "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"maxHeight") || (depth0 != null ? compilerNameLookup(depth0,"maxHeight") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"maxHeight","hash":{},"data":data}) : helper)))
    + "px; "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isOneStore") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"><div data-view=\"StoresList.Rows\"></div></div><div class=\"pickup-in-store-store-selector-list-result-item-selected-detail-desktop\" data-view=\"Line.Item.Information\"></div></div>  ";
},"useData":true}); template.Name = 'pickup_in_store_store_selector_list'; return template;});