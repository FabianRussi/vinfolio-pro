define('product_details_options_selector.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " <div data-view=\"Pusher\" data-type=\"sc-pusher\" data-target=\"product-details-options\"></div> ";
},"3":function(container,depth0,helpers,partials,data) {
    return " class=\"product-details-options-selector-content\" data-action=\"pushable\" data-id=\"product-details-options\" ";
},"5":function(container,depth0,helpers,partials,data) {
    return " <div class=\"product-details-options-selector-content-price\" data-view=\"Item.Price\"></div><div class=\"product-details-options-selector-content-stock\" data-view=\"Item.Stock\"></div><div data-view=\"StockDescription\"></div> ";
},"7":function(container,depth0,helpers,partials,data) {
    return " <div class=\"product-details-options-selector-reference-container\"><small>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Required",{"name":"translate","hash":{},"data":data}))
    + " <span class=\"product-details-options-selector-reference\">*</span></small></div> ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return " <div class=\"product-details-options-selector\"> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showPusher") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " <div "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showPusher") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showPusher") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showRequiredLabel") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " <div data-view=\"Options.Collection\" class=\"product-details-options-selector-option-container\"></div></div></div>  ";
},"useData":true}); template.Name = 'product_details_options_selector'; return template;});