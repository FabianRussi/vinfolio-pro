define('payment_wizard_credit_transaction_module.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "data-manage=\"payment-wizard-credits-accordion\"";
},"3":function(container,depth0,helpers,partials,data) {
    return "data-manage=\"payment-wizard-deposits-accordion\"";
},"5":function(container,depth0,helpers,partials,data) {
    return " "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Credits (<span class=\"payment-wizard-credit-transaction-module-credits-count\">$(0)</span>)",(depth0 != null ? compilerNameLookup(depth0,"collectionLength") : depth0),{"name":"translate","hash":{},"data":data}))
    + " ";
},"7":function(container,depth0,helpers,partials,data) {
    return " "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Deposits (<span class=\"payment-wizard-credit-transaction-module-deposits-count\">$(0)</span>)",(depth0 != null ? compilerNameLookup(depth0,"collectionLength") : depth0),{"name":"translate","hash":{},"data":data}))
    + " ";
},"9":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return " <span class=\"payment-wizard-credit-transaction-module-subtotal-label\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Credits Subtotal: ",{"name":"translate","hash":{},"data":data}))
    + "</span><span class=\"payment-wizard-credit-transaction-module-subtotal-value\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"totalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"totalFormatted") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"totalFormatted","hash":{},"data":data}) : helper)))
    + "</span> ";
},"11":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return " <span class=\"payment-wizard-credit-transaction-module-subtotal-label\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Deposits Subtotal: ",{"name":"translate","hash":{},"data":data}))
    + "</span><span class=\"payment-wizard-credit-transaction-module-subtotal-value\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"totalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"totalFormatted") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"totalFormatted","hash":{},"data":data}) : helper)))
    + "</span> ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return " <div class=\"payment-wizard-credit-transaction-module\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isTransactionTypeCredit") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "><div class=\"payment-wizard-credit-transaction-module-expander-head\"><a class=\"payment-wizard-credit-transaction-module-expander-head-toggle\" data-toggle=\"collapse\" data-target=\"#"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"accordionId") || (depth0 != null ? compilerNameLookup(depth0,"accordionId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"accordionId","hash":{},"data":data}) : helper)))
    + "\" aria-expanded=\"false\" aria-controls=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"accordionId") || (depth0 != null ? compilerNameLookup(depth0,"accordionId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"accordionId","hash":{},"data":data}) : helper)))
    + "\"> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isTransactionTypeCredit") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + " <i class=\"payment-wizard-credit-transaction-module-expander-head-toggle-icon\"></i></a></div><div class=\"payment-wizard-credit-transaction-module-expander-body collapse in\" id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"accordionId") || (depth0 != null ? compilerNameLookup(depth0,"accordionId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"accordionId","hash":{},"data":data}) : helper)))
    + "\"><table class=\"payment-wizard-credit-transaction-module-records\"><thead class=\"payment-wizard-credit-transaction-module-records-head\"><tr class=\"payment-wizard-credit-transaction-module-records-head-row\"><th></th><th></th><th>"
    + alias4((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Original amount",{"name":"translate","hash":{},"data":data}))
    + "</th><th>"
    + alias4((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Remaining amount",{"name":"translate","hash":{},"data":data}))
    + "</th><th>"
    + alias4((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Amount",{"name":"translate","hash":{},"data":data}))
    + "</th><th class=\"payment-wizard-credit-transaction-module-records-action-col\"></th></tr></thead><tbody class=\"payment-wizard-credit-transaction-module-records-body\" data-view=\"Transaction.Collection\"></tbody><tfoot class=\"payment-wizard-credit-transaction-module-records-foot\"><tr><td colspan=\"6\" class=\"payment-wizard-credit-transaction-module-subtotal\"> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isTransactionTypeCredit") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data})) != null ? stack1 : "")
    + " </td></tr></tfoot></table></div></div>  ";
},"useData":true}); template.Name = 'payment_wizard_credit_transaction_module'; return template;});