define('payment_wizard_invoice_subject.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return " <span class=\"payment-wizard-invoice-subject-date-overdue\"> "
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"dueDate") || (depth0 != null ? compilerNameLookup(depth0,"dueDate") : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"dueDate","hash":{},"data":data}) : helper)))
    + " </span><i class=\"payment-wizard-invoice-subject-icon-flag\"></i> ";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return " "
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"dueDate") || (depth0 != null ? compilerNameLookup(depth0,"dueDate") : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"dueDate","hash":{},"data":data}) : helper)))
    + " ";
},"5":function(container,depth0,helpers,partials,data) {
    return " <br><small class=\"payment-wizard-invoice-subject-text-success\"> "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Applied Discount: $(0) - until $(1)",(depth0 != null ? compilerNameLookup(depth0,"discountFormatted") : depth0),(depth0 != null ? compilerNameLookup(depth0,"discDate") : depth0),{"name":"translate","hash":{},"data":data}))
    + " </small> ";
},"7":function(container,depth0,helpers,partials,data) {
    return " <br><small class=\"payment-wizard-invoice-subject-text-success\"> "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Processing Payments",{"name":"translate","hash":{},"data":data}))
    + " </small> ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return " <span class=\"payment-wizard-invoice-subject\"> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isOverdue") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isDiscountApplied") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isPaid") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </span>  ";
},"useData":true}); template.Name = 'payment_wizard_invoice_subject'; return template;});