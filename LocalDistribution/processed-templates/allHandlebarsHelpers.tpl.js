define('allHandlebarsHelpers.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression(container.lambda(depth0, depth0));
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"a") || (depth0 != null ? compilerNameLookup(depth0,"a") : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"a","hash":{},"data":data}) : helper)));
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "{\n	\"translate\": \""
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"hello $(0) $(1)","my","precious",{"name":"translate","hash":{},"data":data}))
    + "\",\n	\"formatCurrency\": \""
    + alias3((compilerNameLookup(helpers,"formatCurrency") || (depth0 && compilerNameLookup(depth0,"formatCurrency")) || alias2).call(alias1,"10000","$",{"name":"formatCurrency","hash":{},"data":data}))
    + "\",\n	\"each1\": \""
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"each1") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\",\n	\"each2\": \""
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"each2") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\",\n	\"each3\": \""
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"each3") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\",\n	\"highlightKeyword\": \""
    + alias3((compilerNameLookup(helpers,"highlightKeyword") || (depth0 && compilerNameLookup(depth0,"highlightKeyword")) || alias2).call(alias1,"hello world","world",{"name":"highlightKeyword","hash":{},"data":data}))
    + "\",\n	\"objectToAtrributesData1\": \""
    + alias3((compilerNameLookup(helpers,"objectToAtrributes") || (depth0 && compilerNameLookup(depth0,"objectToAtrributes")) || alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"objectToAtrributesData1") : depth0),{"name":"objectToAtrributes","hash":{},"data":data}))
    + "\"\n}";
},"useData":true}); template.Name = 'allHandlebarsHelpers'; return template;});