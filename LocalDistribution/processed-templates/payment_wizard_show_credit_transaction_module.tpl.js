define('payment_wizard_show_credit_transaction_module.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Credits",{"name":"translate","hash":{},"data":data}))
    + " ";
},"3":function(container,depth0,helpers,partials,data) {
    return " "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Deposits",{"name":"translate","hash":{},"data":data}))
    + " ";
},"5":function(container,depth0,helpers,partials,data) {
    return "in";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return " <div class=\"payment-wizard-show-credit-transaction-module-accordion-container-row\" data-id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"id") || (depth0 != null ? compilerNameLookup(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><div class=\"payment-wizard-show-credit-transaction-module-accordion-container-row-left\"><p>"
    + alias4((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"$(0) #$(1)",(depth0 != null ? compilerNameLookup(depth0,"type") : depth0),(depth0 != null ? compilerNameLookup(depth0,"number") : depth0),{"name":"translate","hash":{},"data":data}))
    + "</p></div><div class=\"payment-wizard-show-credit-transaction-module-accordion-container-row-right\"><p><span class=\"payment-wizard-show-credit-transaction-module-accordion-container-label\">"
    + alias4((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Amount: ",{"name":"translate","hash":{},"data":data}))
    + " </span><span class=\"payment-wizard-show-credit-transaction-module-accordion-container-value\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"amountFormatted") || (depth0 != null ? compilerNameLookup(depth0,"amountFormatted") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"amountFormatted","hash":{},"data":data}) : helper)))
    + "</span></p></div></div> ";
},"9":function(container,depth0,helpers,partials,data) {
    return " "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Credits Subtotal:",{"name":"translate","hash":{},"data":data}))
    + " ";
},"11":function(container,depth0,helpers,partials,data) {
    return " "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Deposits Subtotal:",{"name":"translate","hash":{},"data":data}))
    + " ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return " <div class=\"payment-wizard-show-credit-transaction-module-accordion-divider\"><div class=\"payment-wizard-show-credit-transaction-module-accordion-head\"><a class=\"payment-wizard-show-credit-transaction-module-accordion-head-toggle\" data-toggle=\"collapse\" data-target=\"#payment-wizard-show-credit-transaction-module-products\" aria-expanded=\"true\" aria-controls=\"payment-wizard-show-credit-transaction-module-products\"> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isTransactionTypeCredit") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + " <i class=\"payment-wizard-show-credit-transaction-module-accordion-toggle-icon\"></i></a></div><div class=\"payment-wizard-show-credit-transaction-module-accordion-body collapse "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showOpenedAccordion") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" id=\"payment-wizard-show-credit-transaction-module-products\" role=\"tabpanel\" data-target=\"#payment-wizard-show-credit-transaction-module-products\"><div data-content=\"items-body\"><div class=\"payment-wizard-show-credit-transaction-module-accordion-body-header\"><p class=\"payment-wizard-show-credit-transaction-module-accordion-body-header-label\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Amount",{"name":"translate","hash":{},"data":data}))
    + "</p></div><div class=\"payment-wizard-show-credit-transaction-module-accordion-container\"> "
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"transactions") : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </div><div class=\"payment-wizard-show-credit-transaction-module-accordion-body-footer\"><div class=\"payment-wizard-show-credit-transaction-module-accordion-container-row\"><span class=\"payment-wizard-show-credit-transaction-module-accordion-container-row-label\"> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isTransactionTypeCredit") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data})) != null ? stack1 : "")
    + " </span><b>"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"totalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"totalFormatted") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"totalFormatted","hash":{},"data":data}) : helper)))
    + "</b></div></div></div></div></div>  ";
},"useData":true}); template.Name = 'payment_wizard_show_credit_transaction_module'; return template;});