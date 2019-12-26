define('print_statement.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " <a href=\"/\" class=\"print-statement-button-back\"><i class=\"print-statement-back-icon\"></i> "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Back to Account",{"name":"translate","hash":{},"data":data}))
    + " </a> ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showBackToAccount") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " <section class=\"print-statement\"><h2 class=\"print-statement-title\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"pageHeader") || (depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"pageHeader","hash":{},"data":data}) : helper)))
    + "</h2><div class=\"print-statement-alert-placeholder\" data-type=\"alert-placeholder\"></div><form class=\"print-statement-form\"><small class=\"print-statement-form-label\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Required",{"name":"translate","hash":{},"data":data}))
    + " <span class=\"print-statement-form-label-required\">*</span></small><div class=\"print-statement-form-group\" data-validation=\"control-group\"><label class=\"print-statement-form-group-label\" for=\"statementDate\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Statement date",{"name":"translate","hash":{},"data":data}))
    + " <span class=\"print-statement-form-label-required\">*</span></label><div  class=\"print-statement-form-controls\" data-validation=\"control\"><input type=\"date\" data-format=\"yyyy-mm-dd\" id=\"statementDate\" name=\"statementDate\" class=\"print-statement-form-group-input\" autocomplete=\"off\" data-todayhighlight=\"true\"/><i class=\"print-statement-form-input-icon\"></i></div></div><div class=\"print-statement-form-group\" data-validation=\"control-group\"><label class=\"print-statement-form-group-label\" for=\"startDate\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Start date",{"name":"translate","hash":{},"data":data}))
    + " <span class=\"print-statement-form-group-label-optional\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"(optional)",{"name":"translate","hash":{},"data":data}))
    + "</span></label><div  class=\"print-statement-form-controls\" data-validation=\"control\"><input type=\"date\" data-format=\"yyyy-mm-dd\" id=\"startDate\" name=\"startDate\" class=\"print-statement-form-group-input\" autocomplete=\"off\" data-todayhighlight=\"true\"/><i class=\"print-statement-form-input-icon\"></i></div></div><div class=\"print-statement-form-group\"><div class=\"print-statement-form-controls\"><label class=\"print-statement-form-checkbox-label\"><input type=\"checkbox\" name=\"inCustomerLocale\"/> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Print in customer's locale",{"name":"translate","hash":{},"data":data}))
    + " </label><label class=\"print-statement-form-checkbox-label\"><input type=\"checkbox\" name=\"openOnly\"/> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Show only Open Transactions",{"name":"translate","hash":{},"data":data}))
    + " </label><label class=\"print-statement-form-checkbox-label\"><input type=\"checkbox\" name=\"consolidatedStatement\"/> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Consolidated Statement",{"name":"translate","hash":{},"data":data}))
    + " </label></div></div><div class=\"print-statement-form-actions\"><button type=\"submit\" class=\"print-statement-form-actions-print\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Download as PDF",{"name":"translate","hash":{},"data":data}))
    + "</button><button type=\"button\" class=\"print-statement-form-actions-email\" data-action=\"email\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Email",{"name":"translate","hash":{},"data":data}))
    + "</button></div></form></section>  ";
},"useData":true}); template.Name = 'print_statement'; return template;});