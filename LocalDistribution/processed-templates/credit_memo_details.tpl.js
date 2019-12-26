define('credit_memo_details.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return " <table class=\"credit-memo-details-table-product\"><thead class=\"credit-memo-details-table-invoices-header\"><th class=\"credit-memo-details-table-invoices-header-title-record\"></th><th class=\"credit-memo-details-table-invoices-header-date-record\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Date",{"name":"translate","hash":{},"data":data}))
    + "</th><th class=\"credit-memo-details-table-invoices-header-amount-record\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Amount",{"name":"translate","hash":{},"data":data}))
    + "</th></thead><tbody data-view=\"Invoices.Collection\"></tbody><tfoot><tr><td class=\"credit-memo-details-accordion-body-container-payment-total\" colspan=\"3\"><p><span class=\"credit-memo-details-accordion-body-container-payment-total-label\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Applied Subtotal: ",{"name":"translate","hash":{},"data":data}))
    + "</span><span class=\"credit-memo-details-accordion-body-container-payment-total-value\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"amountPaidFormatted") || (depth0 != null ? compilerNameLookup(depth0,"amountPaidFormatted") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"amountPaidFormatted","hash":{},"data":data}) : helper)))
    + "</span></p><p><span class=\"credit-memo-details-accordion-body-container-payment-total-label\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Remaining subtotal: ",{"name":"translate","hash":{},"data":data}))
    + "</span><span class=\"credit-memo-details-accordion-body-container-payment-total-value\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"amountRemainingFormatted") || (depth0 != null ? compilerNameLookup(depth0,"amountRemainingFormatted") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"amountRemainingFormatted","hash":{},"data":data}) : helper)))
    + "</span></p></td></tr></tfoot></table> ";
},"3":function(container,depth0,helpers,partials,data) {
    return " <div class=\"credit-memo-details-accordion-body-container-message\"><p>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"This Credit Memo has not been applied to any invoices yet.",{"name":"translate","hash":{},"data":data}))
    + "</p></div> ";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return " <div class=\"credit-memo-details-accordion-divider\"><div class=\"credit-memo-details-accordion-head\"><a class=\"credit-memo-details-accordion-head-toggle\" data-toggle=\"collapse\" data-target=\"#credit-memo-details-memo\" aria-expanded=\"true\" aria-controls=\"credit-memo-details-memo\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"More Details",{"name":"translate","hash":{},"data":data}))
    + " <i class=\"credit-memo-details-accordion-toggle-icon\"></i></a></div><div class=\"credit-memo-details-accordion-body collapse in\" id=\"credit-memo-details-memo\" role=\"tabpanel\" data-target=\"#credit-memo-details-memo\"><div class=\"credit-memo-details-accordion-body-container-message\"><p>"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Memo:",{"name":"translate","hash":{},"data":data}))
    + " <span class=\"credit-memo-details-memo\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"memo") || (depth0 != null ? compilerNameLookup(depth0,"memo") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"memo","hash":{},"data":data}) : helper)))
    + "</span></p></div></div></div> ";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return " "
    + alias3(((helper = (helper = compilerNameLookup(helpers,"itemsQuantityNumber") || (depth0 != null ? compilerNameLookup(depth0,"itemsQuantityNumber") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"itemsQuantityNumber","hash":{},"data":data}) : helper)))
    + " "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Items",{"name":"translate","hash":{},"data":data}))
    + " ";
},"9":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return " "
    + alias3(((helper = (helper = compilerNameLookup(helpers,"itemsQuantityNumber") || (depth0 != null ? compilerNameLookup(depth0,"itemsQuantityNumber") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"itemsQuantityNumber","hash":{},"data":data}) : helper)))
    + " "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Item",{"name":"translate","hash":{},"data":data}))
    + " ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return " <a href=\"/transactionhistory\" class=\"credit-memo-details-back\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"&lt; Back to Transaction History",{"name":"translate","hash":{},"data":data}))
    + " </a><section class=\"credit-memo-details\"><header class=\"credit-memo-details-header\"><h2 class=\"credit-memo-details-title\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Credit Memo #$(0)",(depth0 != null ? compilerNameLookup(depth0,"tranId") : depth0),{"name":"translate","hash":{},"data":data}))
    + " <span class=\"credit-memo-details-header-payment-amount\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"totalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"totalFormatted") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"totalFormatted","hash":{},"data":data}) : helper)))
    + "</span></h2></header><div class=\"credit-memo-details-information\"><div class=\"credit-memo-details-information-col-date\"><p class=\"credit-memo-details-information-col-date-text\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"<span class=\"credit-memo-details-date-label\">Date: </span><span  class=\"credit-memo-details-information-date\">$(0)</span>",(depth0 != null ? compilerNameLookup(depth0,"tranDate") : depth0),{"name":"translate","hash":{},"data":data}))
    + "</p></div><div class=\"credit-memo-details-information-col-status\"><p class=\"credit-memo-details-information-col-status-text\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"<span class=\"credit-memo-details-status-label\">Status: </span><span  class=\"credit-memo-details-information-status\">$(0)</span>",(depth0 != null ? compilerNameLookup(depth0,"status") : depth0),{"name":"translate","hash":{},"data":data}))
    + "</p></div></div><div class=\"credit-memo-details-row\"><div class=\"credit-memo-details-content-col\"><div class=\"credit-memo-details-accordion-divider\"><div class=\"credit-memo-details-accordion-head\"><a class=\"credit-memo-details-accordion-head-toggle\" data-toggle=\"collapse\" data-target=\"#credit-memo-details-products\" aria-expanded=\"true\" aria-controls=\"credit-memo-details-products\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Product",{"name":"translate","hash":{},"data":data}))
    + " <i class=\"credit-memo-details-accordion-toggle-icon\"></i></a></div><div class=\"credit-memo-details-accordion-body collapse in\" id=\"credit-memo-details-products\" role=\"tabpanel\" data-target=\"#credit-memo-details-products\"><div data-content=\"items-body\"><table class=\"credit-memo-details-table-flex-item-navigable\"><thead class=\"credit-memo-details-table-products-header\"><th class=\"credit-memo-details-table-products-header-image\"></th><th class=\"credit-memo-details-table-products-header-product\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Product",{"name":"translate","hash":{},"data":data}))
    + "</th><th class=\"credit-memo-details-table-products-header-unit-price\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Unit price",{"name":"translate","hash":{},"data":data}))
    + "</th><th class=\"credit-memo-details-table-products-header-qty\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Quantity",{"name":"translate","hash":{},"data":data}))
    + "</th><th class=\"credit-memo-details-table-products-header-amount\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Amount",{"name":"translate","hash":{},"data":data}))
    + "</th></thead><tbody data-view=\"Items.Collection\"></tbody></table><div class=\"credit-memo-details-accordion-body-container-payment-total\"><p><span class=\"credit-memo-details-accordion-body-container-payment-total-label\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Items subtotal: ",{"name":"translate","hash":{},"data":data}))
    + "</span><span class=\"credit-memo-details-accordion-body-container-payment-total-value\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"subTotalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"subTotalFormatted") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"subTotalFormatted","hash":{},"data":data}) : helper)))
    + "</span></p></div></div></div></div><div class=\"credit-memo-details-accordion-divider\"><div class=\"credit-memo-details-accordion-head\"><a class=\"credit-memo-details-accordion-head-toggle\" data-toggle=\"collapse\" data-target=\"#credit-memo-details-invoice\" aria-expanded=\"true\" aria-controls=\"credit-memo-details-products\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Applied to Invoices",{"name":"translate","hash":{},"data":data}))
    + " <i class=\"credit-memo-details-accordion-toggle-icon\"></i></a></div><div class=\"credit-memo-details-accordion-body collapse in\" id=\"credit-memo-details-invoice\" role=\"tabpanel\" data-target=\"#credit-memo-details-invoice\"><div data-content=\"items-body\"> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showInvoicesDetails") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + " </div></div></div> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showMemoDetails") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </div><div class=\"credit-memo-details-summary-col\"><div class=\"credit-memo-details-row-fluid\"><div class=\"credit-memo-details-summary-container\"><h3 class=\"credit-memo-details-summary-title\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"ITEMS SUMMARY",{"name":"translate","hash":{},"data":data}))
    + "</h3><p class=\"credit-memo-details-summary-grid-float\"><span class=\"credit-memo-details-summary-subtotal\"> "
    + alias3(((helper = (helper = compilerNameLookup(helpers,"subTotalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"subTotalFormatted") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"subTotalFormatted","hash":{},"data":data}) : helper)))
    + " </span> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Subtotal",{"name":"translate","hash":{},"data":data}))
    + " <span class=\"credit-memo-details-summary-items\"> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"linesitemsNumberGreaterThan1") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data})) != null ? stack1 : "")
    + " </span></p><p class=\"credit-memo-details-summary-grid-float\"><span class=\"credit-memo-details-summary-discount\"> "
    + alias3(((helper = (helper = compilerNameLookup(helpers,"discountFormatted") || (depth0 != null ? compilerNameLookup(depth0,"discountFormatted") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"discountFormatted","hash":{},"data":data}) : helper)))
    + " </span> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Discount",{"name":"translate","hash":{},"data":data}))
    + " </p><p class=\"credit-memo-details-summary-grid-float\"><span class=\"credit-memo-details-summary-tax\"> "
    + alias3(((helper = (helper = compilerNameLookup(helpers,"taxTotalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"taxTotalFormatted") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"taxTotalFormatted","hash":{},"data":data}) : helper)))
    + " </span> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Tax Item",{"name":"translate","hash":{},"data":data}))
    + " </p><p class=\"credit-memo-details-summary-grid-float\"><span class=\"credit-memo-details-summary-shipping-cost\"> "
    + alias3(((helper = (helper = compilerNameLookup(helpers,"shippingCostFormatted") || (depth0 != null ? compilerNameLookup(depth0,"shippingCostFormatted") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"shippingCostFormatted","hash":{},"data":data}) : helper)))
    + " </span> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Shipping Cost",{"name":"translate","hash":{},"data":data}))
    + " </p><div class=\"credit-memo-details-summary-total-container\"><p class=\"credit-memo-details-summary-grid-float\"><span class=\"credit-memo-details-summary-total\"> "
    + alias3(((helper = (helper = compilerNameLookup(helpers,"totalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"totalFormatted") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"totalFormatted","hash":{},"data":data}) : helper)))
    + " </span> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Total",{"name":"translate","hash":{},"data":data}))
    + " </p></div></div><div class=\"credit-memo-details-buttons-container\"><a href=\""
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"downloadPDFURL") || (depth0 != null ? compilerNameLookup(depth0,"downloadPDFURL") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"downloadPDFURL","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\" target=\"_blank\" class=\"credit-memo-details-button-download-as-pdf\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Download as PDF",{"name":"translate","hash":{},"data":data}))
    + "</a></div></div></div></div></section>  ";
},"useData":true}); template.Name = 'credit_memo_details'; return template;});