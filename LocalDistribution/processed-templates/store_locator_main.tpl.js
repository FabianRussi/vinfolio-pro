define('store_locator_main.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return " <div class=\"store-locator-main\"><div class=\"store-locator-main-title\"><h1>"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"title") || (depth0 != null ? compilerNameLookup(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1></div><div class=\"store-locator-main-layout\"><div class=\"store-locator-main-layout-left\"><div class=\"store-locator-main-search\" data-view=\"StoreLocatorSearch\"></div><div class=\"store-locator-main-results\" data-view=\"StoreLocatorResults\"></div><div class=\"store-locator-main-see-all-stores\"><a data-touchpoint=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"touchpoint") || (depth0 != null ? compilerNameLookup(depth0,"touchpoint") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"touchpoint","hash":{},"data":data}) : helper)))
    + "\" data-hashtag=\"stores/all\" href=\"stores/all\">"
    + alias4((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"See complete list of stores",{"name":"translate","hash":{},"data":data}))
    + "</a></div></div><div class=\"store-locator-main-layout-right\"><div class=\"store-locator-main-map\" data-view=\"StoreLocatorMap\" data-type=\"map-view\"></div></div></div></div>  ";
},"useData":true}); template.Name = 'store_locator_main'; return template;});