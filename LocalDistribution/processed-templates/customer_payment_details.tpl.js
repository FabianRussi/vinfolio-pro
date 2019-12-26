define('customer_payment_details.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " <div class=\"customer-payment-details-message-warning\"> "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"The payment process of this purchase was not completed. To place order, please <a href=\"$(0)\">finalize your payment.</a>",(depth0 != null ? compilerNameLookup(depth0,"redirectUrl") : depth0),{"name":"translate","hash":{},"data":data}))
    + " </div> ";
},"3":function(container,depth0,helpers,partials,data) {
    return "in";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return " <table class=\"customer-payment-details-accordion-body-container-recordviews-table\"><thead class=\"customer-payment-details-accordion-body-container-recordviews-table-header\"><tr><th class=\"customer-payment-details-accordion-body-container-recordviews-title\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Number",{"name":"translate","hash":{},"data":data}))
    + " </th><th class=\"customer-payment-details-accordion-body-container-recordviews-date\" data-name=\"date\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Date",{"name":"translate","hash":{},"data":data}))
    + " </th><th class=\"customer-payment-details-accordion-body-container-recordviews-discount\" data-name=\"discount\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Disc",{"name":"translate","hash":{},"data":data}))
    + " </th><th class=\"customer-payment-details-accordion-body-container-recordviews-currency\" data-name=\"amount\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Amount",{"name":"translate","hash":{},"data":data}))
    + " </th></tr></thead><tbody data-view=\"Invoices.Collection\"></tbody><tfoot><tr><td colspan=\"4\" class=\"customer-payment-details-accordion-body-container-payment-total\"><p><span class=\"customer-payment-details-payment-total-label\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Payment Total: ",{"name":"translate","hash":{},"data":data}))
    + " </span><span class=\"customer-payment-details-payment-total-value\"> "
    + alias3(((helper = (helper = compilerNameLookup(helpers,"paymentFormatted") || (depth0 != null ? compilerNameLookup(depth0,"paymentFormatted") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"paymentFormatted","hash":{},"data":data}) : helper)))
    + " </span></p></td></tr></tfoot></table> ";
},"7":function(container,depth0,helpers,partials,data) {
    return " <div class=\"customer-payment-details-noinvoices-message\"> "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"This payment is not applied to any invoices.",{"name":"translate","hash":{},"data":data}))
    + " </div> ";
},"9":function(container,depth0,helpers,partials,data) {
    return " <div class=\"customer-payment-details-accordion-body-container-payment-method\"><div class=\"customer-payment-details-accordion-body-container-payment-method-card\"><div data-view=\"PaymentMethod\"></div></div></div> ";
},"11":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return " <div class=\"customer-payment-details-accordion-body-container-payment-memo\"><div class=\"customer-payment-details-accordion-body-container-payment-memo-card\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Memo:",{"name":"translate","hash":{},"data":data}))
    + " <div class=\"customer-payment-details-accordion-body-container-payment-memo-card-info\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"memo") || (depth0 != null ? compilerNameLookup(depth0,"memo") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"memo","hash":{},"data":data}) : helper)))
    + "</div></div></div> ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return " <a href=\"/transactionhistory\" class=\"customer-payment-details-back\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"&lt; Back to Transaction History",{"name":"translate","hash":{},"data":data}))
    + " </a><section class=\"customer-payment-details\"><header class=\"customer-payment-details-header\"><h2> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Payment <span class=\"customer-payment-details-header-number\">#$(0)</span>",(depth0 != null ? compilerNameLookup(depth0,"tranId") : depth0),{"name":"translate","hash":{},"data":data}))
    + " <span class=\"customer-payment-details-header-amount\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"paymentFormatted") || (depth0 != null ? compilerNameLookup(depth0,"paymentFormatted") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"paymentFormatted","hash":{},"data":data}) : helper)))
    + "</span></h2></header> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showPaymentEventFail") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " <div class=\"customer-payment-details-information\"><div class=\"customer-payment-details-information-col-date\"><p class=\"customer-payment-details-information-col-date-text\"><span class=\"customer-payment-details-information-col-status-label\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Date:",{"name":"translate","hash":{},"data":data}))
    + " </span><span class=\"customer-payment-details-information-date\"> "
    + alias3(((helper = (helper = compilerNameLookup(helpers,"tranDate") || (depth0 != null ? compilerNameLookup(depth0,"tranDate") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"tranDate","hash":{},"data":data}) : helper)))
    + " </span></p></div><div class=\"customer-payment-details-information-col-status\"><p class=\"customer-payment-details-information-col-status-text\"><span class=\"customer-payment-details-information-col-status-label\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Status: ",{"name":"translate","hash":{},"data":data}))
    + "</span><span class=\"customer-payment-details-information-status\"> "
    + alias3(((helper = (helper = compilerNameLookup(helpers,"status") || (depth0 != null ? compilerNameLookup(depth0,"status") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"status","hash":{},"data":data}) : helper)))
    + " </span></p><a href=\""
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"downloadPDFURL") || (depth0 != null ? compilerNameLookup(depth0,"downloadPDFURL") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"downloadPDFURL","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\" target=\"_blank\" class=\"customer-payment-details-information-col-button\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Download as PDF",{"name":"translate","hash":{},"data":data}))
    + " </a></div></div><div class=\"customer-payment-details-accordion-head\"><a class=\"customer-payment-details-accordion-head-toggle\" data-toggle=\"collapse\" data-target=\"#invoice-items\" aria-expanded=\"true\" aria-controls=\"invoice-items\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Invoices",{"name":"translate","hash":{},"data":data}))
    + " <i class=\"customer-payment-details-accordion-toggle-icon\"></i></a></div><div class=\"customer-payment-details-accordion-body collapse "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showOpenedAccordion") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" id=\"invoice-items\" role=\"tabpanel\" data-target=\"#invoice-items\"><div class=\"customer-payment-details-accordion-container\" data-content=\"order-items-body\"> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showInvoices") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + " </div></div><div class=\"customer-payment-details-accordion-head\"><a class=\"customer-payment-details-accordion-head-toggle\" data-toggle=\"collapse\" data-target=\"#billing-payment-items\" aria-expanded=\"true\" aria-controls=\"billing-payment-items\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Billing & Payment Method",{"name":"translate","hash":{},"data":data}))
    + " <i class=\"customer-payment-details-accordion-toggle-icon\"></i></a></div><div class=\"customer-payment-details-accordion-body collapse "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showOpenedAccordion") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" id=\"billing-payment-items\" role=\"tabpanel\" data-target=\"#billing-payment-items\"><div class=\"customer-payment-details-accordion-container\" data-content=\"order-items-body\"><div class=\"customer-payment-details-accordion-body-container\"> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showPaymentMethod") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showMemo") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </div></div></div></section>  ";
},"useData":true}); template.Name = 'customer_payment_details'; return template;});