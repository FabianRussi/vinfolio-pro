define('invoice_open_list.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " <a href=\"/\" class=\"invoice-open-list-button-back\"><i class=\"invoice-open-list-button-back-icon\"></i> "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Back to Account",{"name":"translate","hash":{},"data":data}))
    + " </a> ";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return " <a data-permissions=\"transactions.tranCustPymt.2, transactions.tranCustInvc.1\" data-type=\"make-a-payment\" class=\"invoice-open-list-button-payment\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"enableMakeAPaymentButton") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "")
    + "> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"enableMakeAPaymentButton") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data})) != null ? stack1 : "")
    + " </a> ";
},"4":function(container,depth0,helpers,partials,data) {
    return "href=\"/make-a-payment\"";
},"6":function(container,depth0,helpers,partials,data) {
    return "disabled";
},"8":function(container,depth0,helpers,partials,data) {
    return " "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Make a Payment",{"name":"translate","hash":{},"data":data}))
    + " ";
},"10":function(container,depth0,helpers,partials,data) {
    return " "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"0 Invoices Selected",{"name":"translate","hash":{},"data":data}))
    + " ";
},"12":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return " <table class=\"invoice-open-list-records\"><thead class=\"invoice-open-list-records-head\"><tr class=\"invoice-open-list-records-head-row\"><th></th><th></th><th> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Date",{"name":"translate","hash":{},"data":data}))
    + " </th><th> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Due date",{"name":"translate","hash":{},"data":data}))
    + " </th><th> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Amount",{"name":"translate","hash":{},"data":data}))
    + " </th></tr></thead><tbody class=\"invoice-open-list-records-body\" data-view=\"Invoice.Results\"></tbody></table> ";
},"14":function(container,depth0,helpers,partials,data) {
    return " <div class=\"invoice-open-list-no-records\"><h5>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"You don't have any Open Invoices at the moment,<br/>see <a href=\"/paid-invoices\" class=\"invoice-open-list-anchor-paid\">Invoices Paid In Full</a>",{"name":"translate","hash":{},"data":data}))
    + "</h5></div> ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showBackToAccount") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " <section class=\"invoice-open-list\"><header class=\"invoice-open-list-header\"><h2 class=\"invoice-open-list-title\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"pageHeader") || (depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"pageHeader","hash":{},"data":data}) : helper)))
    + "</h2></header><div class=\"invoice-open-list-header-nav\"><div class=\"invoice-open-list-header-button-group\"><span class=\"invoice-open-list-header-button-open\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Open",{"name":"translate","hash":{},"data":data}))
    + "</span><a href=\"/paid-invoices\" class=\"invoice-open-list-header-button-paid\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Paid in Full",{"name":"translate","hash":{},"data":data}))
    + "</a></div> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showMakeAPaymentButton") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </div><div data-view=\"ListHeader\"></div><div class=\"invoice-open-list-body\"> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showInvoices") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(14, data, 0),"data":data})) != null ? stack1 : "")
    + " </div></section>  ";
},"useData":true}); template.Name = 'invoice_open_list'; return template;});