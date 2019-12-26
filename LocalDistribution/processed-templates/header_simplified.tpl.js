define('header_simplified.tpl', ['Handlebars','Handlebars.CompilerNameLookup','header_sidebar.tpl','header_sidebar.tpl'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return " <li class=\"header-subheader-settings\"><a href=\"#\" class=\"header-subheader-settings-link\" data-toggle=\"dropdown\" title=\""
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Settings",{"name":"translate","hash":{},"data":data}))
    + "\"><i class=\"header-menu-settings-icon\"></i><i class=\"header-menu-settings-carret\"></i></a><div class=\"header-menu-settings-dropdown\"><h5 class=\"header-menu-settings-dropdown-title\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Site Settings",{"name":"translate","hash":{},"data":data}))
    + "</h5> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showLanguages") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showCurrencies") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </div></li> ";
},"2":function(container,depth0,helpers,partials,data) {
    return " <div data-view=\"Global.HostSelector\"></div> ";
},"4":function(container,depth0,helpers,partials,data) {
    return " <div data-view=\"Global.CurrencySelector\"></div> ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return " <div class=\"header-message\" data-view=\"Message.Placeholder\"></div><div class=\"header-main-wrapper\" style=\"border: 1px solid red;\"><div class=\"header-subheader\"><div class=\"header-subheader-container\"><ul class=\"header-subheader-options\"> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showLanguagesOrCurrencies") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " <li data-view=\"StoreLocatorHeaderLink\"></li><li data-view=\"RequestQuoteWizardHeaderLink\"></li><li data-view=\"QuickOrderHeaderLink\"></li></ul></div></div><nav class=\"header-main-nav\"><div id=\"banner-header-top\" class=\"content-banner banner-header-top\" data-cms-area=\"header_banner_top\" data-cms-area-filters=\"global\"></div><div class=\"header-sidebar-toggle-wrapper\"><button class=\"header-sidebar-toggle\" data-action=\"header-sidebar-show\"><i class=\"header-sidebar-toggle-icon\"></i></button></div><div class=\"header-content\"><div class=\"header-logo-wrapper\"><div data-view=\"Header.Logo\"></div></div><div class=\"header-right-menu\"><div class=\"header-menu-profile\" data-view=\"Header.Profile\"></div><div class=\"header-menu-locator-mobile\" data-view=\"StoreLocatorHeaderLink\"></div><div class=\"header-menu-searchmobile\"><button class=\"header-menu-searchmobile-link\" data-action=\"show-sitesearch\" title=\""
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(alias1,"Search",{"name":"translate","hash":{},"data":data}))
    + "\"><i class=\"header-menu-searchmobile-icon\"></i></button></div><div class=\"header-menu-cart\"><div class=\"header-menu-cart-dropdown\" ><div data-view=\"Header.MiniCart\"></div></div></div></div></div><div id=\"banner-header-bottom\" class=\"content-banner banner-header-bottom\" data-cms-area=\"header_banner_bottom\" data-cms-area-filters=\"global\"></div></nav></div><div class=\"header-sidebar-overlay\" data-action=\"header-sidebar-hide\"></div><div class=\"header-secondary-wrapper\" data-view=\"Header.Menu\" data-phone-template=\"header_sidebar\" data-tablet-template=\"header_sidebar\"></div><div class=\"header-site-search-main\"><div class=\"header-site-search\" data-view=\"SiteSearch\" ></div></div>  ";
},"useData":true}); template.Name = 'header_simplified'; return template;});