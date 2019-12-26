define('newsletter.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "error";
},"3":function(container,depth0,helpers,partials,data) {
    return " <div data-view=\"GlobalMessageFeedback\"></div> ";
},"5":function(container,depth0,helpers,partials,data) {
    return " <script type=\"text/javascript\"> var axel = Math.random() + \"\";\nvar a = axel * 10000000000000;\n$('body').append('<iframe src=\"https://8577661.fls.doubleclick.net/activityi;src=8577661;type=conve0;cat=vinfo0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=' + a + '?\" width=\"1\" height=\"1\" frameborder=\"0\" style=\"display:none\"></iframe>'); </script><noscript><iframe src=\"https://8577661.fls.doubleclick.net/activityi;src=8577661;type=conve0;cat=vinfo0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=1?\" width=\"1\" height=\"1\" frameborder=\"0\" style=\"display:none\"></iframe></noscript> ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return " <form class=\"newsletter-suscription-form\" data-action=\"newsletter-subscribe\" novalidate><div data-validation=\"control-group\"><div class=\"home-main-title\"><h2><span>"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Sign up for our newsletter",{"name":"translate","hash":{},"data":data}))
    + "</span></h2><h3>"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"get early access to new arrivals and special offers",{"name":"translate","hash":{},"data":data}))
    + "</h3></div><div class=\"newsletter-subscription-form-container "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showErrorMessage") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-validation=\"control\"><input\n				name=\"email\"\n				id=\"email\"\n				type=\"email\"\n				class=\"homeinputfield\"\n				placeholder=\""
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Enter your email address",{"name":"translate","hash":{},"data":data}))
    + "\"\n			><button type=\"submit\" class=\"newsletter-subscription-form-button-subscribe\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Subscribe",{"name":"translate","hash":{},"data":data}))
    + " </button><div class=\"newsletter-alert-placeholder\" data-type=\"alert-placeholder\" > "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isFeedback") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </div></div></div></form> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"successCode") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  ";
},"useData":true}); template.Name = 'newsletter'; return template;});