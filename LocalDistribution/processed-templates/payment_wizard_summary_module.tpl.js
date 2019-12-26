define('payment_wizard_summary_module.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return " <div class=\"payment-wizard-summary-module-deposits-subtotal\"><p class=\"payment-wizard-summary-module-grid-float\"><span class=\"payment-wizard-summary-module-deposits-subtotal-value\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"depositTotalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"depositTotalFormatted") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"depositTotalFormatted","hash":{},"data":data}) : helper)))
    + "</span> "
    + alias4((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Deposits Subtotal",{"name":"translate","hash":{},"data":data}))
    + " </p></div><div class=\"payment-wizard-summary-module-credits-subtotal\"><p class=\"payment-wizard-summary-module-grid-float\"><span class=\"payment-wizard-summary-module-credits-subtotal-value\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"creditTotalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"creditTotalFormatted") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"creditTotalFormatted","hash":{},"data":data}) : helper)))
    + "</span> "
    + alias4((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Credits Subtotal",{"name":"translate","hash":{},"data":data}))
    + " </p></div> ";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return " <span class=\"payment-wizard-summary-module-estimated-total-value\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"invoiceTotalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"invoiceTotalFormatted") : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"invoiceTotalFormatted","hash":{},"data":data}) : helper)))
    + "</span> ";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return " <span class=\"payment-wizard-summary-module-estimated-total-value\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"paymentFormatted") || (depth0 != null ? compilerNameLookup(depth0,"paymentFormatted") : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"paymentFormatted","hash":{},"data":data}) : helper)))
    + "</span> ";
},"7":function(container,depth0,helpers,partials,data) {
    return " <div class=\"payment-wizard-summary-module-alert-information\"> "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Add your credit card security code (CSC/CVV) before submitting the payment",{"name":"translate","hash":{},"data":data}))
    + " </div> ";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showPaymentMethodRequireLabel") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " ";
},"10":function(container,depth0,helpers,partials,data) {
    return " <div class=\"payment-wizard-summary-module-alert-information\"> "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Payment method is not required",{"name":"translate","hash":{},"data":data}))
    + " </div> ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return " <div class=\"payment-wizard-summary-module\"><div class=\"payment-wizard-summary-module-container\"><header class=\"payment-wizard-summary-module-header\"><h3 class=\"payment-wizard-summary-module-title\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Payment Summary",{"name":"translate","hash":{},"data":data}))
    + " </h3></header><div class=\"payment-wizard-summary-module-body\"><div class=\"payment-wizard-summary-module-invoices\"><p class=\"payment-wizard-summary-module-grid-float\"><span class=\"payment-wizard-summary-module-invoices-value\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"invoiceTotalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"invoiceTotalFormatted") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"invoiceTotalFormatted","hash":{},"data":data}) : helper)))
    + "</span> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Invoices (<span class=\"payment-wizard-summary-module-invoices-number\">$(0)</span>)",(depth0 != null ? compilerNameLookup(depth0,"selectedInvoicesLength") : depth0),{"name":"translate","hash":{},"data":data}))
    + " </p></div> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showTotalLabel") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " <div class=\"payment-wizard-summary-module-estimated\"><p class=\"payment-wizard-summary-module-grid-float\"> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showEstimatedAsInvoiceTotal") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + " "
    + alias3(((helper = (helper = compilerNameLookup(helpers,"totalLabel") || (depth0 != null ? compilerNameLookup(depth0,"totalLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"totalLabel","hash":{},"data":data}) : helper)))
    + " </p></div> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showCreditCardInformatioRequrieLabel") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data})) != null ? stack1 : "")
    + " </div></div><div class=\"payment-wizard-summary-module-buttons-container\"><button class=\"payment-wizard-summary-module-button-continue\" data-action=\"submit-step\" "
    + alias3(((helper = (helper = compilerNameLookup(helpers,"continueButtonDisabled") || (depth0 != null ? compilerNameLookup(depth0,"continueButtonDisabled") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"continueButtonDisabled","hash":{},"data":data}) : helper)))
    + " > "
    + alias3(((helper = (helper = compilerNameLookup(helpers,"continueButtonLabel") || (depth0 != null ? compilerNameLookup(depth0,"continueButtonLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"continueButtonLabel","hash":{},"data":data}) : helper)))
    + " </button></div></div>  ";
},"useData":true}); template.Name = 'payment_wizard_summary_module'; return template;});