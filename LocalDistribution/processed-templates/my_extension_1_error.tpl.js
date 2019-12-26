define('my_extension_1_error.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"my-extension-1-error\"><div class=\"my-extension-1-error-header\"><h1>Price Validation</h1><div id=\"main-banner\" class=\"my-extension-1-error-main-banner\"></div></div><div id=\"my-extension-1-error-content\" class=\"my-extension-1-error-content\"> "
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"message") || (depth0 != null ? compilerNameLookup(depth0,"message") : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"message","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " </div></div>  ";
},"useData":true}); template.Name = 'my_extension_1_error'; return template;});