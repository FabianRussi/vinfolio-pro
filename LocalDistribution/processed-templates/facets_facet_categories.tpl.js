define('facets_facet_categories.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " collapse ";
},"3":function(container,depth0,helpers,partials,data) {
    return " in ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return " <div id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"facetHtmlId") || (depth0 != null ? compilerNameLookup(depth0,"facetHtmlId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"facetHtmlId","hash":{},"data":data}) : helper)))
    + "\" class=\"facets-facet-categories-well\" data-type=\"rendered-facet\" data-facet-id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"facetId") || (depth0 != null ? compilerNameLookup(depth0,"facetId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"facetId","hash":{},"data":data}) : helper)))
    + "\"><h3 class=\"facets-facet-categories-title\"></h3><div class=\"facets-facet-categories-filters "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isCollapsible") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\"><div data-view=\"Facets.FacetCategoriesList\"></div></div></div>  ";
},"useData":true}); template.Name = 'facets_facet_categories'; return template;});