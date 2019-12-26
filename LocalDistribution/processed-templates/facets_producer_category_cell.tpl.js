define('facets_producer_category_cell.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return " <div class=\"facets-producer-category-cell\"><div class=\"facets-category-cell-title\"><a href=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"fullurl") || (depth0 != null ? compilerNameLookup(depth0,"fullurl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fullurl","hash":{},"data":data}) : helper)))
    + "\" class=\"facets-category-cell-anchor\"> "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + " </a></div></div> ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " <div class=\"facets-browse-category-producers-subcat\"><a href=\"\">A</a><a href=\"\">B</a><a href=\"\">C</a><a href=\"\">D</a><a href=\"\">E</a><a href=\"\">F</a><a href=\"\">G</a><a href=\"\">H</a><a href=\"\">I</a><a href=\"\">J</a><a href=\"\">K</a><a href=\"\">L</a><a href=\"\">M</a><a href=\"\">N</a><a href=\"\">O</a><a href=\"\">P</a><a href=\"\">Q</a><a href=\"\">R</a><a href=\"\">S</a><a href=\"\">T</a><a href=\"\">U</a><a href=\"\">V</a><a href=\"\">W</a><a href=\"\">X</a><a href=\"\">Y</a><a href=\"\">Z</a><a href=\"\">All</a></div> "
    + ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"producerSubCat") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  ";
},"useData":true}); template.Name = 'facets_producer_category_cell'; return template;});