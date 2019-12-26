define('payment_wizard_confirmation_summary_module.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return " <div class=\"payment-wizard-confirmation-summary-module-deposits-subtotal\"><p class=\"payment-wizard-confirmation-summary-module-grid-float\"><span class=\"payment-wizard-confirmation-summary-module-deposits-subtotal-value\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"depositTotalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"depositTotalFormatted") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"depositTotalFormatted","hash":{},"data":data}) : helper)))
    + "</span> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Deposits Subtotal",{"name":"translate","hash":{},"data":data}))
    + " </p></div> ";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return " <div class=\"payment-wizard-confirmation-summary-module-credits-subtotal\"><p class=\"payment-wizard-confirmation-summary-module-grid-float\"><span class=\"payment-wizard-confirmation-summary-module-credits-subtotal-value\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"creditTotalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"creditTotalFormatted") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"creditTotalFormatted","hash":{},"data":data}) : helper)))
    + "</span> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Credits Subtotal",{"name":"translate","hash":{},"data":data}))
    + " </p></div> ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return " <div class=\"payment-wizard-confirmation-summary-module\"><div class=\"payment-wizard-confirmation-summary-module-container\"><header class=\"payment-wizard-confirmation-summary-module-header\"><h3 class=\"payment-wizard-confirmation-summary-module-title\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Payment Summary",{"name":"translate","hash":{},"data":data}))
    + " </h3></header><div class=\"payment-wizard-confirmation-summary-module-body\"><div class=\"payment-wizard-confirmation-summary-module-invoices\"><p class=\"payment-wizard-confirmation-summary-module-grid-float\"><span class=\"payment-wizard-confirmation-summary-module-invoices-value\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"invoiceTotalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"invoiceTotalFormatted") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"invoiceTotalFormatted","hash":{},"data":data}) : helper)))
    + "</span> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Invoices (<span class=\"payment-wizard-confirmation-summary-module-invoices-number\">$(0)</span>)",(depth0 != null ? compilerNameLookup(depth0,"selectedInvoicesLength") : depth0),{"name":"translate","hash":{},"data":data}))
    + " </p></div> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasDeposit") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasCredit") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " <div class=\"payment-wizard-confirmation-summary-module-estimated\"><p class=\"payment-wizard-confirmation-summary-module-grid-float\"><span class=\"payment-wizard-confirmation-summary-module-total-value\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"paymentFormatted") || (depth0 != null ? compilerNameLookup(depth0,"paymentFormatted") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"paymentFormatted","hash":{},"data":data}) : helper)))
    + "</span><span class=\"payment-wizard-confirmation-summary-module-total-label\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Payment Total",{"name":"translate","hash":{},"data":data}))
    + "</span></p></div></div></div></div>  ";
},"useData":true}); template.Name = 'payment_wizard_confirmation_summary_module'; return template;});