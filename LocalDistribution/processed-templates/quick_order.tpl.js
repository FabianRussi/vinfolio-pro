define('quick_order.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "collapsed";
},"3":function(container,depth0,helpers,partials,data) {
    return "in";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return " <div class=\"quick-order\"><div class=\"quick-order-divider\"><div class=\"quick-order-expander-head\"><a class=\"quick-order-expander-head-toggle "
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showOpenedAccordion") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-toggle=\"collapse\" data-target=\"#quick-order\" aria-expanded=\"true\" aria-controls=\"quick-order\"> "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(alias1,"Quick Add",{"name":"translate","hash":{},"data":data}))
    + " <i class=\"quick-order-expander-toggle-icon\"></i></a></div><div class=\"quick-order-expander-body collapse "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showOpenedAccordion") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" id=\"quick-order\" data-target=\"#quick-order\"><div class=\"quick-order-expander-container\"><div data-view=\"QuickAddView\"></div></div></div></div></div>  ";
},"useData":true}); template.Name = 'quick_order'; return template;});