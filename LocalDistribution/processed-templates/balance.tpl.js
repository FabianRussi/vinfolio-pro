define('balance.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " <a href=\"/\" class=\"balance-button-back\"><i class=\"balance-button-back-icon\"></i> "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Back to Account",{"name":"translate","hash":{},"data":data}))
    + " </a> ";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return " <span class=\"balance-indicator-title-value\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"company") || (depth0 != null ? compilerNameLookup(depth0,"company") : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"company","hash":{},"data":data}) : helper)))
    + "</span> ";
},"5":function(container,depth0,helpers,partials,data) {
    return " <a data-permissions=\"transactions.tranCustPymt.2, transactions.tranCustInvc.1\" href=\"/make-a-payment\" class=\"balance-continue-button\"> "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Continue to Payment",{"name":"translate","hash":{},"data":data}))
    + " </a> ";
},"7":function(container,depth0,helpers,partials,data) {
    return " <button data-permissions=\"transactions.tranCustPymt.2, transactions.tranCustInvc.1\" class=\"balance-continue-button\" disabled> "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"No Payment Due",{"name":"translate","hash":{},"data":data}))
    + " </button> ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showBackToAccount") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " <section class=\"balance\"><div class=\"balance-content\"><h2 class=\"balance-billing-header\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Account Balance",{"name":"translate","hash":{},"data":data}))
    + " </h2><div class=\"balance-billing-account-balance\"><div class=\"balance-indicator\"><div class=\"balance-indicator-body\"><div class=\"balance-indicator-title\"> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showCompany") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </div><div class=\"balance-indicator-bar\"><div class=\"balance-indicator-bar-progress\" style=\"width: "
    + alias3(((helper = (helper = compilerNameLookup(helpers,"percentage") || (depth0 != null ? compilerNameLookup(depth0,"percentage") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"percentage","hash":{},"data":data}) : helper)))
    + "%;\"></div></div><div class=\"balance-indicator-details\"><div class=\"balance-indicator-details-outstanding-balance\"><span class=\"balance-indicator-details-outstanding-reference\"></span><span class=\"balance-indicator-details-outstanding-label\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Outstanding Balance",{"name":"translate","hash":{},"data":data}))
    + " </span><span class=\"balance-indicator-details-outstanding-value\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"balanceFormatted") || (depth0 != null ? compilerNameLookup(depth0,"balanceFormatted") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"balanceFormatted","hash":{},"data":data}) : helper)))
    + "</span></div><div class=\"balance-indicator-details-available-credit\"><span class=\"balance-indicator-details-available-credit-reference\"></span><span class=\"balance-indicator-details-available-credit-label\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Available",{"name":"translate","hash":{},"data":data}))
    + " </span><span class=\"balance-indicator-details-available-credit-value\"> "
    + alias3(((helper = (helper = compilerNameLookup(helpers,"balanceAvailableFormatted") || (depth0 != null ? compilerNameLookup(depth0,"balanceAvailableFormatted") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"balanceAvailableFormatted","hash":{},"data":data}) : helper)))
    + " </span></div></div></div><div class=\"balance-indicator-summary\"><p class=\"balance-indicator-summary-credit-limit\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Credit Limit: <span class=\"balance-indicator-summary-credit-limit-value\">$(0)</span>",(depth0 != null ? compilerNameLookup(depth0,"creditLimitFormatted") : depth0),{"name":"translate","hash":{},"data":data}))
    + " </p></div></div><div class=\"balance-credit-and-account\"><div class=\"balance-summary-credits\"><div class=\"balance-summary-credits-card\"><div class=\"balance-summary-credits-body\"><p class=\"balance-summary-credits-title\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Credits",{"name":"translate","hash":{},"data":data}))
    + " </p><div class=\"balance-summary-credits-deposits\"><span class=\"balance-summary-credits-deposits-label\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Deposits: ",{"name":"translate","hash":{},"data":data}))
    + "</span><span class=\"balance-summary-credits-deposits-value\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"depositsRemainingFormatted") || (depth0 != null ? compilerNameLookup(depth0,"depositsRemainingFormatted") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"depositsRemainingFormatted","hash":{},"data":data}) : helper)))
    + "</span></div><div class=\"balance-summary-credits-credit-memos\"><span class=\"balance-summary-credits-credit-memos-label\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Other Credits: ",{"name":"translate","hash":{},"data":data}))
    + "</span><span class=\"balance-summary-credits-credit-memos-value\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"creditMemosRemainingFormatted") || (depth0 != null ? compilerNameLookup(depth0,"creditMemosRemainingFormatted") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"creditMemosRemainingFormatted","hash":{},"data":data}) : helper)))
    + "</span></div></div></div></div><div class=\"balance-summary-account-details\"><div class=\"balance-summary-account-details-card\"><div class=\"balance-summary-account-details-body\"><p class=\"balance-summary-account-details-title\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Account Details",{"name":"translate","hash":{},"data":data}))
    + " </p><div class=\"balance-summary-account-terms\"><span class=\"balance-summary-account-terms-label\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Term: ",{"name":"translate","hash":{},"data":data}))
    + "</span><span class=\"balance-summary-account-terms-value\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"paymentTermsName") || (depth0 != null ? compilerNameLookup(depth0,"paymentTermsName") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"paymentTermsName","hash":{},"data":data}) : helper)))
    + "</span></div><div class=\"balance-summary-account-currency\"><span class=\"balance-summary-account-currency-label\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Currency: ",{"name":"translate","hash":{},"data":data}))
    + "</span><span class=\"balance-summary-account-currency-value\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"shopperCurrencyCode") || (depth0 != null ? compilerNameLookup(depth0,"shopperCurrencyCode") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"shopperCurrencyCode","hash":{},"data":data}) : helper)))
    + "</span></div></div></div></div></div></div></div><div class=\"balance-actions\"><div class=\"balance-actions-proceed\"> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"livePaymentHaveInvoices") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + " </div><div class=\"balance-actions-print\"><a href=\"/printstatement\" data-permissions=\"transactions.tranStatement.2\" class=\"balance-print-button\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Print a Statement",{"name":"translate","hash":{},"data":data}))
    + " </a></div></div></section>  ";
},"useData":true}); template.Name = 'balance'; return template;});