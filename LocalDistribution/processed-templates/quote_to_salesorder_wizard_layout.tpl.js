define('quote_to_salesorder_wizard_layout.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " <header class=\"quote-to-salesorder-wizard-layout-header\"><div data-view=\"Wizard.StepNavigation\"></div></header> ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showBreadcrumb") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " <div id=\"wizard-content\" class=\"quote-to-salesorder-wizard-layout-content\"></div>  ";
},"useData":true}); template.Name = 'quote_to_salesorder_wizard_layout'; return template;});