define('merchandising_zone.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return " <p class=\"merchandising-zone-description\"> "
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"zoneDescription") || (depth0 != null ? compilerNameLookup(depth0,"zoneDescription") : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"zoneDescription","hash":{},"data":data}) : helper)))
    + " </p> ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return " <aside class=\"merchandising-zone\"><h3> "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"zoneTitle") : depth0),{"name":"translate","hash":{},"data":data}))
    + "</h3> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isZoneDescription") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " <div class=\"merchandising-zone-container\"><div data-view=\"Zone.Items\"></div></div></aside>  ";
},"useData":true}); template.Name = 'merchandising_zone'; return template;});