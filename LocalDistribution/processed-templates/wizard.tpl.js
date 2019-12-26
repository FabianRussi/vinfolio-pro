define('wizard.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " <header class=\"wizard-header\"><h1 class=\"wizard-header-title\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Checkout",{"name":"translate","hash":{},"data":data}))
    + "</h1><div data-view=\"Wizard.StepNavigation\"></div></header> ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showBreadcrumb") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " <div id=\"wizard-content\" class=\"wizard-content\"></div><script> jQuery(document).ready(function () {\n	var step = '"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"stepGroup") || (depth0 != null ? compilerNameLookup(depth0,"stepGroup") : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"stepGroup","hash":{},"data":data}) : helper)))
    + "'\n	if(step == 'Billing' || step == 'billing' || step == 'Review')\n				{\n					jQuery('.order-wizard-step-button-container .order-wizard-step-button-continue').removeClass('will_continueBtn');	\n				jQuery('.order-wizard-step-button-container .order-wizard-step-button-continue').removeClass('store_styles');\n				\n				}\n}); </script>  ";
},"useData":true}); template.Name = 'wizard'; return template;});