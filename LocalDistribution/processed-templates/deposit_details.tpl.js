define('deposit_details.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "in";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return " <table class=\"deposit-details-invoice-table\"><thead class=\"deposit-details-invoice-table-heading\"><th class=\"deposit-details-invoice-table-heading-number\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Number",{"name":"translate","hash":{},"data":data}))
    + "</th><th class=\"deposit-details-invoice-table-heading-date\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Invoice Date",{"name":"translate","hash":{},"data":data}))
    + "</th><th class=\"deposit-details-invoice-table-heading-date-applied\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Date Applied",{"name":"translate","hash":{},"data":data}))
    + "</th><th class=\"deposit-details-invoice-table-heading-amount\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Amount",{"name":"translate","hash":{},"data":data}))
    + "</th></thead><tbody data-view=\"Invoices.Collection\"></tbody><tfoot><tr><td colspan=\"4\" class=\"deposit-details-applied-amount\"><span class=\"deposit-details-applied-amount-label\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Applied Amount:",{"name":"translate","hash":{},"data":data}))
    + " </span><span class=\"deposit-details-applied-amount-value\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"paidFormatted") || (depth0 != null ? compilerNameLookup(depth0,"paidFormatted") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"paidFormatted","hash":{},"data":data}) : helper)))
    + "</span></td></tr><tr><td colspan=\"4\" class=\"deposit-details-remaining-amount\"><span class=\"deposit-details-remaining-amount-label\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Remaining Amount:",{"name":"translate","hash":{},"data":data}))
    + " </span><span class=\"deposit-details-remaining-amount-value\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"remainingFormatted") || (depth0 != null ? compilerNameLookup(depth0,"remainingFormatted") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"remainingFormatted","hash":{},"data":data}) : helper)))
    + "</span></td></tr></tfoot></table> ";
},"5":function(container,depth0,helpers,partials,data) {
    return " <div class=\"deposit-details-row\"><div class=\"deposit-details-deposit-message\"> "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"This Deposit has not been applied to any invoices yet.",{"name":"translate","hash":{},"data":data}))
    + " </div></div> ";
},"7":function(container,depth0,helpers,partials,data) {
    return " <div class=\"deposit-details-method\"><div data-view=\"PaymentMethod\"></div></div> ";
},"9":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return " <div class=\"deposit-details-info-card-grid\"><div class=\"deposit-details-info-card\"><span class=\"deposit-details-memo-title\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Memo:",{"name":"translate","hash":{},"data":data}))
    + "</span><span class=\"deposit-details-memo-value\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"memo") || (depth0 != null ? compilerNameLookup(depth0,"memo") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"memo","hash":{},"data":data}) : helper)))
    + "</span></div></div> ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return " <section class=\"deposit-details\"><header><h2 class=\"deposit-details-header-title\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Deposit <span class=\"deposit-details-number\">#$(0)</span>",(depth0 != null ? compilerNameLookup(depth0,"tranId") : depth0),{"name":"translate","hash":{},"data":data}))
    + " <span class=\"deposit-details-deposit-payment\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"paymentFormatted") || (depth0 != null ? compilerNameLookup(depth0,"paymentFormatted") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"paymentFormatted","hash":{},"data":data}) : helper)))
    + "</span></h2><a href=\"/transactionhistory\" class=\"deposit-details-back-btn\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"&lt; Back to Transaction History",{"name":"translate","hash":{},"data":data}))
    + " </a></header><div class=\"deposit-details-header-information\"><div class=\"deposit-details-row\"><div class=\"deposit-details-header-col-left\"><p class=\"deposit-details-date-info\"><span class=\"deposit-details-date-label\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Date: ",{"name":"translate","hash":{},"data":data}))
    + "</span><span class=\"deposit-details-date-value\"> "
    + alias3(((helper = (helper = compilerNameLookup(helpers,"tranDate") || (depth0 != null ? compilerNameLookup(depth0,"tranDate") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"tranDate","hash":{},"data":data}) : helper)))
    + "</span></p></div><div class=\"deposit-details-header-col-right\"><p class=\"deposit-details-status-info\"><span class=\"deposit-details-status-label\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Status: ",{"name":"translate","hash":{},"data":data}))
    + "</span><span class=\"deposit-details-status-value\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"status") || (depth0 != null ? compilerNameLookup(depth0,"status") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"status","hash":{},"data":data}) : helper)))
    + "</span></p></div></div><div class=\"deposit-details-row\"><div class=\"deposit-details-button-container\"><a href=\""
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"downloadPDFURL") || (depth0 != null ? compilerNameLookup(depth0,"downloadPDFURL") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"downloadPDFURL","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\" target=\"_blank\" class=\"deposit-details-button-download-as-pdf\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Download as PDF",{"name":"translate","hash":{},"data":data}))
    + "</a></div></div></div><div class=\"deposit-details-accordion-divider\"><div class=\"deposit-details-accordion-head\"><a class=\"deposit-details-accordion-head-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#deposit-applied-to-invoices\" aria-expanded=\"true\" aria-controls=\"deposit-applied-to-invoices\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Applied to Invoices",{"name":"translate","hash":{},"data":data}))
    + " <i class=\"deposit-details-accordion-toggle-icon\"></i></a></div><div class=\"deposit-details-accordion-body collapse "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showOpenedAccordion") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" id=\"deposit-applied-to-invoices\" role=\"tabpanel\" data-target=\"#deposit-applied-to-invoices\"><div class=\"deposit-details-accordion-container-table\"> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showInvoices") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + " </div></div></div><div class=\"deposit-details-accordion-divider\"><div class=\"deposit-details-accordion-head\"><a class=\"deposit-details-accordion-head-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#deposit-billing\" aria-expanded=\"true\" aria-controls=\"deposit-billing\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Billing & Payment Method",{"name":"translate","hash":{},"data":data}))
    + " <i class=\"deposit-details-accordion-toggle-icon\"></i></a></div><div class=\"deposit-details-accordion-body collapse "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showOpenedAccordion") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" id=\"deposit-billing\" role=\"tabpanel\" data-target=\"#deposit-billing\"><div class=\"deposit-details-accordion-container\"><div class=\"deposit-details-row\"><div class=\"deposit-details-info-card-grid\"><div class=\"deposit-details-info-card\"> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showPaymentMethod") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </div> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showMemo") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </div></div></div></div></div></section>  ";
},"useData":true}); template.Name = 'deposit_details'; return template;});