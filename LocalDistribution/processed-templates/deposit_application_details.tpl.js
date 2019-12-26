define('deposit_application_details.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "in";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return " <table class=\"deposit-application-details-table\"><thead class=\"deposit-application-details-table-header\"><th class=\"deposit-application-details-table-header-number\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Number",{"name":"translate","hash":{},"data":data}))
    + "</th><th class=\"deposit-application-details-table-header-transaction-date\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Transaction Date",{"name":"translate","hash":{},"data":data}))
    + "</th><th class=\"deposit-application-details-table-header-amount\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Amount",{"name":"translate","hash":{},"data":data}))
    + "</th></thead><tbody data-view=\"Invoices.Collection\"></tbody><tfoot><tr><td class=\"deposit-application-details-applied-amount\" colspan=\"3\"><span class=\"deposit-application-details-applied-amount-label\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Applied Amount:",{"name":"translate","hash":{},"data":data}))
    + " </span><span class=\"deposit-application-details-applied-amount-value\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"totalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"totalFormatted") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"totalFormatted","hash":{},"data":data}) : helper)))
    + "</span></td></tr></tfoot></table> ";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return " <div class=\"deposit-application-details-accordion-divider\"><div class=\"deposit-application-details-accordion-head\"><a class=\"deposit-application-details-accordion-head-toggle-secondary\" data-toggle=\"collapse\" data-target=\"#deposit-application-more-details\" aria-expanded=\"true\" aria-controls=\"deposit-application-more-details\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"More Details",{"name":"translate","hash":{},"data":data}))
    + " <i class=\"deposit-application-details-accordion-toggle-icon-secondary\"></i></a></div><div class=\"deposit-application-details-accordion-body collapse\" id=\"deposit-application-more-details\" role=\"tabpanel\" data-target=\"#deposit-application-more-details\"><div class=\"deposit-application-details-accordion-container\"><div class=\"deposit-application-details-info-card\"><p>"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Memo:",{"name":"translate","hash":{},"data":data}))
    + "</p><p class=\"deposit-application-details-deposit-memo\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"memo") || (depth0 != null ? compilerNameLookup(depth0,"memo") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"memo","hash":{},"data":data}) : helper)))
    + "</p></div></div></div></div> ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return " <section><a href=\"/transactionhistory\" class=\"deposit-application-details-back-btn\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"&lt; Back to Transaction History",{"name":"translate","hash":{},"data":data}))
    + " </a><header><h2 class=\"deposit-application-details-title\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Deposit Application <span class=\"deposit-application-details-deposit-number\">#$(0)</span>",(depth0 != null ? compilerNameLookup(depth0,"tranId") : depth0),{"name":"translate","hash":{},"data":data}))
    + " <span class=\"deposit-application-details-deposit-amount\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"totalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"totalFormatted") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"totalFormatted","hash":{},"data":data}) : helper)))
    + "</span></h2></header><div class=\"deposit-application-details-header-information\"><div class=\"deposit-application-details-row\"><div class=\"deposit-application-details-header-information-container\"><p class=\"deposit-application-details-transaction-date-info\"><span class=\"deposit-application-details-transaction-date-label\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Transaction Date: ",{"name":"translate","hash":{},"data":data}))
    + "</span><span class=\"deposit-application-details-transaction-date-value\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"tranDate") || (depth0 != null ? compilerNameLookup(depth0,"tranDate") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"tranDate","hash":{},"data":data}) : helper)))
    + "</span></p><p class=\"deposit-application-details-from-info\"><span class=\"deposit-application-details-from-label\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"From:",{"name":"translate","hash":{},"data":data}))
    + "</span><span class=\"deposit-application-details-from-link\"><a href=\"/transactionhistory/customerdeposit/"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"depositInternalId") || (depth0 != null ? compilerNameLookup(depth0,"depositInternalId") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"depositInternalId","hash":{},"data":data}) : helper)))
    + "\" class=\"deposit-application-details-deposit-link\"> "
    + alias3(((helper = (helper = compilerNameLookup(helpers,"depositName") || (depth0 != null ? compilerNameLookup(depth0,"depositName") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"depositName","hash":{},"data":data}) : helper)))
    + " </a></span></p><p class=\"deposit-application-details-deposit-date-info\"><span class=\"deposit-application-details-deposit-date-label\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Deposit Date:",{"name":"translate","hash":{},"data":data}))
    + "</span><span class=\"deposit-application-details-deposit-date-value\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"depositDate") || (depth0 != null ? compilerNameLookup(depth0,"depositDate") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"depositDate","hash":{},"data":data}) : helper)))
    + "</span></p></div></div></div><div class=\"deposit-application-details-accordion-divider\"><div class=\"deposit-application-details-accordion-head\"><a class=\"deposit-application-details-accordion-head-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#deposit-application-applied-to-invoices\" aria-expanded=\"true\" aria-controls=\"deposit-application-applied-to-invoices\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Applied to Invoices",{"name":"translate","hash":{},"data":data}))
    + " <i class=\"deposit-application-details-accordion-toggle-icon\"></i></a></div><div class=\"deposit-application-details-accordion-body collapse "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showOpenedAccordion") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" id=\"deposit-application-applied-to-invoices\" role=\"tabpanel\" data-target=\"#deposit-application-applied-to-invoices\"><div class=\"deposit-application-details-accordion-container-table\"> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showInvoices") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </div></div></div> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showMemo") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </section>  ";
},"useData":true}); template.Name = 'deposit_application_details'; return template;});