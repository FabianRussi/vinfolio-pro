define('quote_to_salesorder_wizard_step.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return " <div class=\"quote-to-salesorder-wizard-step-actions\"><div class=\"quote-to-salesorder-wizard-step-button-container\"> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showContinueButton") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showBackButton") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </div></div> ";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return " <button class=\"quote-to-salesorder-wizard-step-button-continue\" data-action=\"submit-step\"> "
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"continueButtonLabel") || (depth0 != null ? compilerNameLookup(depth0,"continueButtonLabel") : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"continueButtonLabel","hash":{},"data":data}) : helper)))
    + " </button> ";
},"4":function(container,depth0,helpers,partials,data) {
    return " <button class=\"quote-to-salesorder-wizard-step-button-back\" data-action=\"previous-step\"> "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Back",{"name":"translate","hash":{},"data":data}))
    + " </button> ";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"hasSalesrep") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data})) != null ? stack1 : "")
    + " ";
},"7":function(container,depth0,helpers,partials,data) {
    return " <small class=\"quote-to-salesorder-wizard-step-disclaimer-message\"> "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"For immediate assistance contact <strong>$(0)</strong> at <strong>$(1)</strong> or send an email to <strong>$(2)</strong>",(depth0 != null ? compilerNameLookup(depth0,"salesrepName") : depth0),(depth0 != null ? compilerNameLookup(depth0,"salesrepPhone") : depth0),(depth0 != null ? compilerNameLookup(depth0,"salesrepEmail") : depth0),{"name":"translate","hash":{},"data":data}))
    + " </small> ";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return " <small class=\"quote-to-salesorder-wizard-step-disclaimer-message\"> "
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"disclaimer") || (depth0 != null ? compilerNameLookup(depth0,"disclaimer") : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"disclaimer","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " </small> ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return " <div><header><h1 class=\"quote-to-salesorder-wizard-step-header-title\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"currentStepGroupName") || (depth0 != null ? compilerNameLookup(depth0,"currentStepGroupName") : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"currentStepGroupName","hash":{},"data":data}) : helper)))
    + "</h1></header></div><div data-type=\"alert-placeholder-step\"></div><div class=\"quote-to-salesorder-wizard-step-content-wrapper\"><div id=\"wizard-step-content\" class=\"quote-to-salesorder-wizard-step-content-main\"></div><div id=\"wizard-step-content-right\" class=\"quote-to-salesorder-wizard-step-content-right\"></div> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showNavButtons") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " <div class=\"quote-to-salesorder-wizard-step-disclaimer-bottom-content\"> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showBottomMessage") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </div></div>  ";
},"useData":true}); template.Name = 'quote_to_salesorder_wizard_step'; return template;});