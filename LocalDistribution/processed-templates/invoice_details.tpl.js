define('invoice_details.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return " <header><h2 class=\"invoice-details-invoice-title\"> "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(alias1,"Invoice <span class=\"invoice-details-invoice-number\">#$(0)</span>",((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"tranid") : stack1),{"name":"translate","hash":{},"data":data}))
    + " <span class=\"invoice-details-invoice-amount\"> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isOpen") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + " </span></h2></header> ";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " <span class=\"invoice-details-amount\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"amountDue_formatted") : stack1), depth0))
    + "</span> ";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " <span class=\"invoice-details-amount\">"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"summary") : stack1)) != null ? compilerNameLookup(stack1,"total_formatted") : stack1), depth0))
    + "</span> ";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4=container.lambda;

  return " <p class=\"invoice-details-header-created-from\"><span class=\"invoice-details-header-created-from-label\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Created from: ",{"name":"translate","hash":{},"data":data}))
    + "</span><a href=\"/purchases/view/"
    + alias3(alias4(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"createdfrom") : stack1)) != null ? compilerNameLookup(stack1,"recordtype") : stack1), depth0))
    + "/"
    + alias3(alias4(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"createdfrom") : stack1)) != null ? compilerNameLookup(stack1,"internalid") : stack1), depth0))
    + "\" class=\"invoice-details-header-created-from-value\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Purchase #$(0)",((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"createdfrom") : stack1)) != null ? compilerNameLookup(stack1,"tranid") : stack1),{"name":"translate","hash":{},"data":data}))
    + " </a></p> ";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression;

  return " <span class=\"invoice-details-header-due-date-label\">"
    + alias1((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Due Date: ",{"name":"translate","hash":{},"data":data}))
    + "</span><span class=\"invoice-details-header-due-date-value\">"
    + alias1(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"dueDate") : stack1), depth0))
    + "</span> ";
},"10":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return " <span class=\"invoice-details-header-due-date-label\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Due Date: ",{"name":"translate","hash":{},"data":data}))
    + "</span><span class=\"invoice-details-header-due-date-value\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1," N/A",{"name":"translate","hash":{},"data":data}))
    + "</span> ";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression;

  return " <span class=\"invoice-details-header-amount-label\">"
    + alias1((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Amount:",{"name":"translate","hash":{},"data":data}))
    + "</span> "
    + alias1(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"amountDue_formatted") : stack1), depth0))
    + " ";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression;

  return " <span class=\"invoice-details-header-amount-label\">"
    + alias1((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Amount:",{"name":"translate","hash":{},"data":data}))
    + "</span> "
    + alias1(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"summary") : stack1)) != null ? compilerNameLookup(stack1,"total_formatted") : stack1), depth0))
    + " ";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return " <div class=\"invoice-details-content-col\"><div class=\"invoice-details-accordion-divider\"><div class=\"invoice-details-accordion-head\"><a class=\"invoice-details-accordion-head-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#invoice-details-products\" aria-expanded=\"true\" aria-controls=\"invoice-details-products\">"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"linesLengthGreaterThan1") : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.program(19, data, 0),"data":data})) != null ? stack1 : "")
    + " <i class=\"invoice-details-accordion-toggle-icon\"></i></a></div><div class=\"invoice-details-accordion-body collapse "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showOpenedAccordion") : depth0),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" id=\"invoice-details-products\" role=\"tabpanel\" data-target=\"#invoice-details-products\"><div data-content=\"items-body\"><table class=\"invoice-details-products-table lg2sm-first\"><thead class=\"invoice-details-table-products-header\"><th class=\"invoice-details-table-products-header-image\"></th><th class=\"invoice-details-table-products-header-product\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Product",{"name":"translate","hash":{},"data":data}))
    + "</th><th class=\"invoice-details-table-products-header-qty\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Qty",{"name":"translate","hash":{},"data":data}))
    + "</th><th class=\"invoice-details-table-products-header-unit-price\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Unit price",{"name":"translate","hash":{},"data":data}))
    + "</th><th class=\"invoice-details-table-products-header-amount\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Amount",{"name":"translate","hash":{},"data":data}))
    + "</th></thead><tbody data-view=\"Items.Collection\"></tbody></table></div></div></div> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showSaleRep") : depth0),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " <div class=\"invoice-details-accordion-divider\"><div class=\"invoice-details-accordion-head\"><a class=\"invoice-details-accordion-head-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#invoice-billing\" aria-expanded=\"true\" aria-controls=\"invoice-billing\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Billing",{"name":"translate","hash":{},"data":data}))
    + " <i class=\"invoice-details-accordion-toggle-icon\"></i></a></div><div class=\"invoice-details-accordion-body collapse "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showOpenedAccordion") : depth0),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" id=\"invoice-billing\" role=\"tabpanel\" data-target=\"#invoice-billing\"><div class=\"invoice-details-accordion-container\"><div class=\"invoice-details-row\"><div class=\"invoice-details-info-card-grid\"> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showBillingAddress") : depth0),{"name":"if","hash":{},"fn":container.program(28, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </div><div class=\"invoice-details-info-card-grid\"><div class=\"invoice-details-info-card\"><div class=\"invoice-details-info-card-terms-container\"><p class=\"invoice-details-info-card-terms-title\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Terms:",{"name":"translate","hash":{},"data":data}))
    + "</p> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showTerms") : depth0),{"name":"if","hash":{},"fn":container.program(30, data, 0),"inverse":container.program(32, data, 0),"data":data})) != null ? stack1 : "")
    + " </div> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showMemo") : depth0),{"name":"if","hash":{},"fn":container.program(34, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </div></div></div></div></div></div></div> ";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Products ($(0))",((stack1 = (depth0 != null ? compilerNameLookup(depth0,"lines") : depth0)) != null ? compilerNameLookup(stack1,"length") : stack1),{"name":"translate","hash":{},"data":data}))
    + " ";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Product ($(0))",((stack1 = (depth0 != null ? compilerNameLookup(depth0,"lines") : depth0)) != null ? compilerNameLookup(stack1,"length") : stack1),{"name":"translate","hash":{},"data":data}))
    + " ";
},"21":function(container,depth0,helpers,partials,data) {
    return "in";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return " <div class=\"invoice-details-accordion-divider\"><div class=\"invoice-details-accordion-head\"><a class=\"invoice-details-accordion-head-toggle-secondary collapsed\" data-toggle=\"collapse\" data-target=\"#invoice-salesrep\" aria-expanded=\"true\" aria-controls=\"invoice-salesrep\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Sales Rep",{"name":"translate","hash":{},"data":data}))
    + " <i class=\"invoice-details-accordion-toggle-icon-secondary\"></i></a></div><div class=\"invoice-details-accordion-body collapse\" id=\"invoice-salesrep\" role=\"tabpanel\" data-target=\"#invoice-salesrep\"><div class=\"invoice-details-accordion-container\"><div class=\"invoice-details-row\"><div class=\"invoice-details-info-card-grid\"><div class=\"invoice-details-info-card\"><p class=\"invoice-details-info-card-name-title\">"
    + alias3(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"salesrep") : stack1)) != null ? compilerNameLookup(stack1,"name") : stack1), depth0))
    + "</p><p>"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"siteName") || (depth0 != null ? compilerNameLookup(depth0,"siteName") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"siteName","hash":{},"data":data}) : helper)))
    + "</p></div></div><div class=\"invoice-details-info-card-grid\"><div class=\"invoice-details-info-card\"> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showSaleRepPhone") : depth0),{"name":"if","hash":{},"fn":container.program(24, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showSaleRepEmail") : depth0),{"name":"if","hash":{},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </div></div></div></div></div></div> ";
},"24":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression;

  return " <p class=\"invoice-details-info-card-tel-title\">"
    + alias1((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Tel:",{"name":"translate","hash":{},"data":data}))
    + "</p><p>"
    + alias1(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"salesrep") : stack1)) != null ? compilerNameLookup(stack1,"phone") : stack1), depth0))
    + "</p> ";
},"26":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression;

  return " <p class=\"invoice-details-info-card-email-title\">"
    + alias1((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Email:",{"name":"translate","hash":{},"data":data}))
    + "</p><p>"
    + alias1(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"salesrep") : stack1)) != null ? compilerNameLookup(stack1,"email") : stack1), depth0))
    + "</p> ";
},"28":function(container,depth0,helpers,partials,data) {
    return " <div data-view=\"Billing.Address\"></div> ";
},"30":function(container,depth0,helpers,partials,data) {
    var helper;

  return " <span> "
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"termsName") || (depth0 != null ? compilerNameLookup(depth0,"termsName") : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"termsName","hash":{},"data":data}) : helper)))
    + "</span> ";
},"32":function(container,depth0,helpers,partials,data) {
    return " <span>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"N/A",{"name":"translate","hash":{},"data":data}))
    + "</span> ";
},"34":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression;

  return " <div class=\"invoice-details-info-card-memo-container\"><p class=\"invoice-details-info-card-memo-title\">"
    + alias1((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Memo:",{"name":"translate","hash":{},"data":data}))
    + "</p><span>"
    + alias1(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"memo") : stack1), depth0))
    + "</span></div> ";
},"36":function(container,depth0,helpers,partials,data) {
    return "invoice-details-summary-col-modal";
},"38":function(container,depth0,helpers,partials,data) {
    return "invoice-details-summary-col";
},"40":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return " "
    + alias3(((helper = (helper = compilerNameLookup(helpers,"itemsQuantityNumber") || (depth0 != null ? compilerNameLookup(depth0,"itemsQuantityNumber") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"itemsQuantityNumber","hash":{},"data":data}) : helper)))
    + " "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Items",{"name":"translate","hash":{},"data":data}))
    + " ";
},"42":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return " "
    + alias3(((helper = (helper = compilerNameLookup(helpers,"itemsQuantityNumber") || (depth0 != null ? compilerNameLookup(depth0,"itemsQuantityNumber") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"itemsQuantityNumber","hash":{},"data":data}) : helper)))
    + " "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Item",{"name":"translate","hash":{},"data":data}))
    + " ";
},"44":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression;

  return " <p class=\"invoice-details-summary-grid-float\"><span class=\"invoice-details-summary-discount\"> "
    + alias1(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"summary") : stack1)) != null ? compilerNameLookup(stack1,"discounttotal_formatted") : stack1), depth0))
    + " </span> "
    + alias1((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Discount",{"name":"translate","hash":{},"data":data}))
    + " </p> ";
},"46":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression;

  return " <p class=\"invoice-details-summary-grid-float\"><span class=\"invoice-details-summary-gift-certificate\"> "
    + alias1(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"summary") : stack1)) != null ? compilerNameLookup(stack1,"giftcertapplied_formatted") : stack1), depth0))
    + " </span> "
    + alias1((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Gift Certificate",{"name":"translate","hash":{},"data":data}))
    + " </p> ";
},"48":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=helpers.helperMissing;

  return " <div class=\"invoice-details-summary-total-container\"><p class=\"invoice-details-summary-grid-float\"><span class=\"invoice-details-summary-subtotal\"> "
    + alias1(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"summary") : stack1)) != null ? compilerNameLookup(stack1,"total_formatted") : stack1), depth0))
    + " </span> "
    + alias1((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias3).call(alias2,"Total",{"name":"translate","hash":{},"data":data}))
    + " </p></div><div class=\"invoice-details-adjustments-title\"><h5> "
    + alias1((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias3).call(alias2,"ADJUSTMENTS",{"name":"translate","hash":{},"data":data}))
    + " </h5></div> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias2,(depth0 != null ? compilerNameLookup(depth0,"showPayments") : depth0),{"name":"if","hash":{},"fn":container.program(49, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias2,(depth0 != null ? compilerNameLookup(depth0,"showCreditMemos") : depth0),{"name":"if","hash":{},"fn":container.program(52, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias2,(depth0 != null ? compilerNameLookup(depth0,"showDepositApplications") : depth0),{"name":"if","hash":{},"fn":container.program(55, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " ";
},"49":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"payments") : depth0),{"name":"each","hash":{},"fn":container.program(50, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " ";
},"50":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return " <p class=\"invoice-details-summary-grid-float\"><span class=\"invoice-details-summary-payment\"> ("
    + alias4(((helper = (helper = compilerNameLookup(helpers,"amount_formatted") || (depth0 != null ? compilerNameLookup(depth0,"amount_formatted") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"amount_formatted","hash":{},"data":data}) : helper)))
    + ") </span><a href=\"/transactionhistory/customerpayment/"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"internalid") || (depth0 != null ? compilerNameLookup(depth0,"internalid") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"internalid","hash":{},"data":data}) : helper)))
    + "\" data-action=\"update-layout\"> "
    + alias4((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Payment #$(0)",(depth0 != null ? compilerNameLookup(depth0,"tranid") : depth0),{"name":"translate","hash":{},"data":data}))
    + " </a></p> ";
},"52":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"creditMemos") : depth0),{"name":"each","hash":{},"fn":container.program(53, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " ";
},"53":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return " <p class=\"invoice-details-summary-grid-float\"><span class=\"invoice-details-summary-credit-memo\"> ("
    + alias4(((helper = (helper = compilerNameLookup(helpers,"amount_formatted") || (depth0 != null ? compilerNameLookup(depth0,"amount_formatted") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"amount_formatted","hash":{},"data":data}) : helper)))
    + ") </span><a href=\"/transactionhistory/creditmemo/"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"internalid") || (depth0 != null ? compilerNameLookup(depth0,"internalid") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"internalid","hash":{},"data":data}) : helper)))
    + "\" data-action=\"update-layout\"> "
    + alias4((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Credit Memo #$(0)",(depth0 != null ? compilerNameLookup(depth0,"tranid") : depth0),{"name":"translate","hash":{},"data":data}))
    + " </a></p> ";
},"55":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"depositApplications") : depth0),{"name":"each","hash":{},"fn":container.program(56, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " ";
},"56":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return " <p class=\"invoice-details-summary-grid-float\"><span class=\"invoice-details-summary-deposit\"> ("
    + alias4(((helper = (helper = compilerNameLookup(helpers,"amount_formatted") || (depth0 != null ? compilerNameLookup(depth0,"amount_formatted") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"amount_formatted","hash":{},"data":data}) : helper)))
    + ") </span><a href=\"/transactionhistory/depositapplication/"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"internalid") || (depth0 != null ? compilerNameLookup(depth0,"internalid") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"internalid","hash":{},"data":data}) : helper)))
    + "\" data-action=\"update-layout\"> "
    + alias4((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Deposit Applications #$(0)",(depth0 != null ? compilerNameLookup(depth0,"tranid") : depth0),{"name":"translate","hash":{},"data":data}))
    + " </a></p> ";
},"58":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return " <div class=\"invoice-details-button-make-a-payment-container\"><a data-permissions=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"makeAPaymentPermissions") || (depth0 != null ? compilerNameLookup(depth0,"makeAPaymentPermissions") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"makeAPaymentPermissions","hash":{},"data":data}) : helper)))
    + "\" href=\"/make-a-payment\" data-type=\"make-a-payment\" class=\"invoice-details-button-make-a-payment\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Make a Payment",{"name":"translate","hash":{},"data":data}))
    + " </a></div> ";
},"60":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=helpers.helperMissing;

  return " <a href=\"invoices/"
    + alias1(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"internalid") : stack1), depth0))
    + "\" class=\"invoice-details-link-goto\" data-action=\"update-layout\">"
    + alias1((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias3).call(alias2,"Go to detailed page",{"name":"translate","hash":{},"data":data}))
    + "</a><a href=\"#\" class=\"invoice-details-button-close\" data-dismiss=\"modal\">"
    + alias1((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias3).call(alias2,"Close",{"name":"translate","hash":{},"data":data}))
    + "</a> ";
},"62":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return " <a target=\"_blank\" class=\"invoice-details-button-download-as-pdf\" href=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"donwloadPdfUrl") || (depth0 != null ? compilerNameLookup(depth0,"donwloadPdfUrl") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"donwloadPdfUrl","hash":{},"data":data}) : helper)))
    + "\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Download as PDF",{"name":"translate","hash":{},"data":data}))
    + " </a> ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4=container.lambda;

  return " <a href=\"/invoices\" class=\"invoice-details-back-btn\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"&lt; Back to Invoices",{"name":"translate","hash":{},"data":data}))
    + "</a><section class=\"invoice-details\"><div class=\"content invoice-details-view\"> "
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showInModal") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " <div class=\"invoice-details-header-information\"><div class=\"invoice-details-header-row\"><div class=\"invoice-details-header-col-left\"><p class=\"invoice-details-header-date-info\"><span class=\"invoice-details-header-date-label\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Invoice Date: ",{"name":"translate","hash":{},"data":data}))
    + "</span><span class=\"invoice-details-header-date-value\">"
    + alias3(alias4(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"trandate") : stack1), depth0))
    + "</span></p> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showCreatedFrom") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " <p class=\"invoice-details-header-due-date-info\"> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showDueDate") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data})) != null ? stack1 : "")
    + " </p></div><div class=\"invoice-details-header-col-right\"><p class=\"invoice-details-header-status-info\"><span class=\"invoice-details-header-status-label\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Status: ",{"name":"translate","hash":{},"data":data}))
    + "</span><span class=\"invoice-details-header-status-value\">"
    + alias3(alias4(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"status") : stack1)) != null ? compilerNameLookup(stack1,"name") : stack1), depth0))
    + "</span></p></div><div class=\"invoice-details-header-amount\"><p class=\"invoice-details-header-amount-info\"> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isOpen") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(14, data, 0),"data":data})) != null ? stack1 : "")
    + " </p></div></div></div><div class=\"invoice-details-row\" name=\"invoice-content-layout\"> "
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showInModal") : depth0),{"name":"unless","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " <div class=\""
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showInModal") : depth0),{"name":"if","hash":{},"fn":container.program(36, data, 0),"inverse":container.program(38, data, 0),"data":data})) != null ? stack1 : "")
    + "\" name=\"summary-container\"><div class=\"invoice-details-row-fluid\"><div class=\"invoice-details-summary-container\"><h3 class=\"invoice-details-summary-title\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"SUMMARY",{"name":"translate","hash":{},"data":data}))
    + " </h3><p class=\"invoice-details-summary-grid-float\"><span class=\"invoice-details-summary-items-number\"> "
    + alias3(alias4(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"summary") : stack1)) != null ? compilerNameLookup(stack1,"subtotal_formatted") : stack1), depth0))
    + " </span> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Subtotal",{"name":"translate","hash":{},"data":data}))
    + " <span class=\"invoice-details-summary-subtotal-items\"> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"linesitemsNumberGreaterThan1") : depth0),{"name":"if","hash":{},"fn":container.program(40, data, 0),"inverse":container.program(42, data, 0),"data":data})) != null ? stack1 : "")
    + " </span></p> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showDiscountSummary") : depth0),{"name":"if","hash":{},"fn":container.program(44, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " <p class=\"invoice-details-summary-grid-float\"><span class=\"invoice-details-summary-tax-total\"> "
    + alias3(alias4(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"summary") : stack1)) != null ? compilerNameLookup(stack1,"taxtotal_formatted") : stack1), depth0))
    + " </span> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Tax Total",{"name":"translate","hash":{},"data":data}))
    + " </p><p class=\"invoice-details-summary-grid-float\"><span class=\"invoice-details-summary-shipping-cost\"> "
    + alias3(alias4(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"summary") : stack1)) != null ? compilerNameLookup(stack1,"shippingcost_formatted") : stack1), depth0))
    + " </span> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Shipping",{"name":"translate","hash":{},"data":data}))
    + " </p><p class=\"invoice-details-summary-grid-float\"><span class=\"invoice-details-summary-handling-value\"> "
    + alias3(alias4(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"summary") : stack1)) != null ? compilerNameLookup(stack1,"handlingcost_formatted") : stack1), depth0))
    + " </span> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Handling",{"name":"translate","hash":{},"data":data}))
    + " </p> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showGiftcerticate") : depth0),{"name":"if","hash":{},"fn":container.program(46, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showAdjustments") : depth0),{"name":"if","hash":{},"fn":container.program(48, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " <p class=\"invoice-details-summary-grid-float\"><span class=\"invoice-details-summary-amount-due\"> "
    + alias3(alias4(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"amountDue_formatted") : stack1), depth0))
    + " </span> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Amount Due",{"name":"translate","hash":{},"data":data}))
    + " </p></div></div><div class=\"invoice-details-buttons-container\"> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showMakeAPaymentButton") : depth0),{"name":"if","hash":{},"fn":container.program(58, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showInModal") : depth0),{"name":"if","hash":{},"fn":container.program(60, data, 0),"inverse":container.program(62, data, 0),"data":data})) != null ? stack1 : "")
    + " </div></div></div></div></section>  ";
},"useData":true}); template.Name = 'invoice_details'; return template;});