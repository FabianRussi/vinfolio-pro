define('store_locator_upgrade.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return " <div class=\"store-locator-upgrade-container\"><h2>"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Your browser does not support this feature",{"name":"translate","hash":{},"data":data}))
    + "</h2><p>"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Please update to the latest version",{"name":"translate","hash":{},"data":data}))
    + "</p></div>  ";
},"useData":true}); template.Name = 'store_locator_upgrade'; return template;});