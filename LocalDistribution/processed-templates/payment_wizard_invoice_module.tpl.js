define('payment_wizard_invoice_module.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return " <div class=\"payment-wizard-invoice-module-list-subheader\"><table class=\"payment-wizard-invoice-module-table\"><thead class=\"payment-wizard-invoice-module-table-header\"><tr><th class=\"payment-wizard-invoice-module-table-select-col\"> &nbsp; </th><th class=\"payment-wizard-invoice-module-table-invoice-number\"><span>"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Invoice No.",{"name":"translate","hash":{},"data":data}))
    + "</span></th><th class=\"payment-wizard-invoice-module-table-invoice-due-date\"><span>"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Due date",{"name":"translate","hash":{},"data":data}))
    + "</span></th><th class=\"payment-wizard-invoice-module-table-invoice-amount\"><span>"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Amount",{"name":"translate","hash":{},"data":data}))
    + "</span></th><th class=\"payment-wizard-invoice-module-table-invoice-action\"> &nbsp; </th></tr></thead><tbody class=\"payment-wizard-invoice-module-table-body\" data-view=\"Invoices.Collection\"></tbody></table></div> ";
},"3":function(container,depth0,helpers,partials,data) {
    return " <p class=\"payment-wizard-invoice-module-list-empty\"> "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"You don't have any Open Invoices at the moment,<br/>see <a href=\"/paid-invoices\">Invoices Paid In Full</a>",{"name":"translate","hash":{},"data":data}))
    + " </p> ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " <div data-view=\"ListHeader.View\"></div><div class=\"payment-wizard-invoice-module-payment-list\"> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isInvoiceLengthGreaterThan0") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + " </div>  ";
},"useData":true}); template.Name = 'payment_wizard_invoice_module'; return template;});