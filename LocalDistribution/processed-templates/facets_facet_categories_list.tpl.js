define('facets_facet_categories_list.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " collapse ";
},"3":function(container,depth0,helpers,partials,data) {
    return " in ";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return " id=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"listId") || (depth0 != null ? compilerNameLookup(depth0,"listId") : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"listId","hash":{},"data":data}) : helper)))
    + "\" ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return " <ul class=\"facets-facet-categories-list "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isCollapsible") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasListId") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><div data-view=\"Facets.FacetCategoryValues\"></div></ul>  ";
},"useData":true}); template.Name = 'facets_facet_categories_list'; return template;});