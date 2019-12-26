define('custom_content_type_container.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return " <div data-view=\"CCT-View\" data-cms-cct-instanceid=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"instanceId") || (depth0 != null ? compilerNameLookup(depth0,"instanceId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"instanceId","hash":{},"data":data}) : helper)))
    + "\" class=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"classes") || (depth0 != null ? compilerNameLookup(depth0,"classes") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"classes","hash":{},"data":data}) : helper)))
    + "\"></div> ";
},"useData":true}); template.Name = 'custom_content_type_container'; return template;});