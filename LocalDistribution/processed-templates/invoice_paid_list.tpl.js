define('invoice_paid_list.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " <a href=\"/\" class=\"invoice-paid-list-button-back\"><i class=\"invoice-paid-list-button-back-icon\"></i> "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Back to Account",{"name":"translate","hash":{},"data":data}))
    + " </a> ";
},"3":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return " <table class=\"invoice-paid-list-records\"><thead class=\"invoice-paid-list-records-head\"><tr class=\"invoice-paid-list-records-head-row\"><th class=\"invoice-paid-list-head-invoicenumber\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Invoice No.",{"name":"translate","hash":{},"data":data}))
    + "</th><th>"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Date",{"name":"translate","hash":{},"data":data}))
    + "</th><th>"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Close date",{"name":"translate","hash":{},"data":data}))
    + "</th><th>"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Amount",{"name":"translate","hash":{},"data":data}))
    + "</th></tr></thead><tbody class=\"invoice-paid-list-records-body\" data-view=\"Invoice.Results\"></tbody></table> ";
},"5":function(container,depth0,helpers,partials,data) {
    return " <p class=\"invoice-paid-list-no-records\"> "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"You don't have any Invoices Paid In Full at the moment,<br/> see <a href=\"/invoices\" class=\"invoice-paid-list-anchor-open\" >Open Invoices</a>",{"name":"translate","hash":{},"data":data}))
    + " </p> ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showBackToAccount") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " <section class=\"invoice-paid-list\"><header class=\"invoice-paid-list-header\"><h2 class=\"invoice-paid-list-title\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"pageHeader") || (depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"pageHeader","hash":{},"data":data}) : helper)))
    + "</h2></header><div class=\"invoice-paid-list-header-nav\"><div class=\"invoice-paid-list-header-button-group\"><a href=\"/invoices\" class=\"invoice-paid-list-header-button-open\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Open",{"name":"translate","hash":{},"data":data}))
    + "</a><span class=\"invoice-paid-list-header-button-paid\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Paid in Full",{"name":"translate","hash":{},"data":data}))
    + "</span></div></div><div data-view=\"ListHeader\"></div><div class=\"invoice-paid-list-body\"> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showInvoices") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + " </div></section>  ";
},"useData":true}); template.Name = 'invoice_paid_list'; return template;});