define('invoice_date.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return " <span class=\"invoice-date-overdue\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"dueDate") || (depth0 != null ? compilerNameLookup(depth0,"dueDate") : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"dueDate","hash":{},"data":data}) : helper)))
    + "</span><i class=\"invoice-date-overdue-icon\"></i> ";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return " <span class=\"invoice-date-due\"> "
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"dueDate") || (depth0 != null ? compilerNameLookup(depth0,"dueDate") : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"dueDate","hash":{},"data":data}) : helper)))
    + " </span> ";
},"5":function(container,depth0,helpers,partials,data) {
    return " <span class=\"invoice-date-legend\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Partially paid",{"name":"translate","hash":{},"data":data}))
    + "</span> ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showOverdueFlag") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showPartiallyPaid") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  ";
},"useData":true}); template.Name = 'invoice_date'; return template;});