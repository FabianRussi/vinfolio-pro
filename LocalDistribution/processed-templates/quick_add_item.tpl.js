define('quick_add_item.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return " <a class=\"quick-add-item-results\"><div class=\"quick-add-item-results-image\"><img data-loader=\"false\" class=\"typeahead-image\" src=\""
    + alias3((compilerNameLookup(helpers,"resizeImage") || (depth0 && compilerNameLookup(depth0,"resizeImage")) || alias2).call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"thumbnail") : depth0)) != null ? compilerNameLookup(stack1,"url") : stack1),"thumbnail",{"name":"resizeImage","hash":{},"data":data}))
    + "\" alt=\""
    + alias3(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"thumbnail") : depth0)) != null ? compilerNameLookup(stack1,"altimagetext") : stack1), depth0))
    + "\"></div><div class=\"quick-add-item-results-content\"><div class=\"quick-add-item-results-title\"> "
    + alias3((compilerNameLookup(helpers,"highlightKeyword") || (depth0 && compilerNameLookup(depth0,"highlightKeyword")) || alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"_name") : stack1),(depth0 != null ? compilerNameLookup(depth0,"query") : depth0),{"name":"highlightKeyword","hash":{},"data":data}))
    + " </div><div data-view=\"Item.Sku\"></div><div data-view=\"Item.Price\"></div><div data-view=\"Item.Options\"></div><div data-view=\"Item.Stock\"></div></div></a> ";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " <div class=\"quick-add-item-shadow\"></div> "
    + ((stack1 = compilerNameLookup(helpers,"unless").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"hasResults") : depth0),{"name":"unless","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " ";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isAjaxDone") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + " ";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return " <div class=\"quick-add-item-no-results\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"No results",{"name":"translate","hash":{},"data":data}))
    + " <span class=\"hide\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"currentQuery") || (depth0 != null ? compilerNameLookup(depth0,"currentQuery") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"currentQuery","hash":{},"data":data}) : helper)))
    + "</span></div> ";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return " <div class=\"quick-add-item-searching\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Searching...",{"name":"translate","hash":{},"data":data}))
    + " <span class=\"hide\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"currentQuery") || (depth0 != null ? compilerNameLookup(depth0,"currentQuery") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"currentQuery","hash":{},"data":data}) : helper)))
    + "</span></div> ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isItemSelected") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "  ";
},"useData":true}); template.Name = 'quick_add_item'; return template;});