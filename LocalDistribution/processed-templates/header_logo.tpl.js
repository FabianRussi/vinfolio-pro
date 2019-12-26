define('header_logo.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return " <img class=\"header-logo-image\" src=\""
    + alias3((compilerNameLookup(helpers,"getThemeAssetsPathWithDefault") || (depth0 && compilerNameLookup(depth0,"getThemeAssetsPathWithDefault")) || alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"logoUrl") : depth0),"img/SCA_Logo.png",{"name":"getThemeAssetsPathWithDefault","hash":{},"data":data}))
    + "\" alt=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"siteName") || (depth0 != null ? compilerNameLookup(depth0,"siteName") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"siteName","hash":{},"data":data}) : helper)))
    + "\"> ";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return " <span class=\"header-logo-sitename\"> "
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"siteName") || (depth0 != null ? compilerNameLookup(depth0,"siteName") : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"siteName","hash":{},"data":data}) : helper)))
    + " </span> ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return " <div id=\"site-logo\" class=\"content-banner\"></div><a class=\"header-logo\" href=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"headerLinkHref") || (depth0 != null ? compilerNameLookup(depth0,"headerLinkHref") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"headerLinkHref","hash":{},"data":data}) : helper)))
    + "\" data-touchpoint=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"headerLinkTouchPoint") || (depth0 != null ? compilerNameLookup(depth0,"headerLinkTouchPoint") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"headerLinkTouchPoint","hash":{},"data":data}) : helper)))
    + "\" data-hashtag=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"headerLinkHashtag") || (depth0 != null ? compilerNameLookup(depth0,"headerLinkHashtag") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"headerLinkHashtag","hash":{},"data":data}) : helper)))
    + "\" title=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"headerLinkTitle") || (depth0 != null ? compilerNameLookup(depth0,"headerLinkTitle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"headerLinkTitle","hash":{},"data":data}) : helper)))
    + "\"> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"logoUrl") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + " </a>  ";
},"useData":true}); template.Name = 'header_logo'; return template;});