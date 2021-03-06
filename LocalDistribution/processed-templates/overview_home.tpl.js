define('overview_home.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return " <table class=\"overview-home-orders-list-table\"><thead class=\"overview-home-content-table\"><tr class=\"overview-home-content-table-header-row\"><th class=\"overview-home-content-table-header-row-title\"><span>"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Purchase No.",{"name":"translate","hash":{},"data":data}))
    + "</span></th><th class=\"overview-home-content-table-header-row-date\"><span>"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Date",{"name":"translate","hash":{},"data":data}))
    + "</span></th><th class=\"overview-home-content-table-header-row-currency\"><span>"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Amount",{"name":"translate","hash":{},"data":data}))
    + "</span></th> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isSCISIntegrationEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + " <th class=\"overview-home-content-table-header-row-track\"><span>"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Track Items",{"name":"translate","hash":{},"data":data}))
    + "</span></th></tr></thead><tbody class=\"overview-home-purchases-list\" data-view=\"Order.History.Results\"></tbody></table> ";
},"2":function(container,depth0,helpers,partials,data) {
    return " <th class=\"overview-home-content-table-header-row-origin\"><span>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Origin",{"name":"translate","hash":{},"data":data}))
    + "</span></th> ";
},"4":function(container,depth0,helpers,partials,data) {
    return " <th class=\"overview-home-content-table-header-row-status\"><span>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Status",{"name":"translate","hash":{},"data":data}))
    + "</span></th> ";
},"6":function(container,depth0,helpers,partials,data) {
    return " <div class=\"overview-home-orders-empty-section\"><h5>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"You don't have any purchases in your account right now.",{"name":"translate","hash":{},"data":data}))
    + "</h5></div> ";
},"8":function(container,depth0,helpers,partials,data) {
    var helper;

  return " <p class=\"overview-profile-name\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data}) : helper)))
    + "</p> ";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return " <div class=\"overview-profile-card-content\"> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasCollectorProfile") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(13, data, 0),"data":data})) != null ? stack1 : "")
    + " </div><a href=\"/collectorprofile\" class=\"overview-profile-card-button-edit\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(alias1,"Update",{"name":"translate","hash":{},"data":data}))
    + "</a> ";
},"11":function(container,depth0,helpers,partials,data) {
    return " <p>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"We have your wine preferences on file for this account.",{"name":"translate","hash":{},"data":data}))
    + "</p> ";
},"13":function(container,depth0,helpers,partials,data) {
    return " <p>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"We have no wine preferences on file for this account.",{"name":"translate","hash":{},"data":data}))
    + "</p> ";
},"15":function(container,depth0,helpers,partials,data) {
    return " <div class=\"overview-home-header-links\"> "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Need Help? Contact <a href=\"$(0)\">Customer Service</a>",(depth0 != null ? compilerNameLookup(depth0,"customerSupportURL") : depth0),{"name":"translate","hash":{},"data":data}))
    + " </div> ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return " <section class=\"overview-home\"><div data-view=\"Overview.Messages\"></div><div class=\"overview-home-orders\" data-permissions=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"purchasesPermissions") || (depth0 != null ? compilerNameLookup(depth0,"purchasesPermissions") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"purchasesPermissions","hash":{},"data":data}) : helper)))
    + "\"><div class=\"overview-home-orders-title\"><h3>"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Recent Purchases",{"name":"translate","hash":{},"data":data}))
    + "</h3><a href=\"/purchases\" class=\"overview-home-orders-title-link\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"View Purchase History",{"name":"translate","hash":{},"data":data}))
    + "</a></div><div class=\"overview-home-order-history-results-container\"> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"collectionLengthGreaterThan0") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "")
    + " </div></div></section><section class=\"overview-home-mysettings\"><h3>"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"My Settings",{"name":"translate","hash":{},"data":data}))
    + "</h3><div class=\"overview-home-mysettings-row\"><div class=\"overview-home-mysettings-profile\"><div data-view=\"Overview.Profile\"></div></div><div class=\"overview-home-mysettings-shipping\"><div data-view=\"Overview.Shipping\"></div></div><div class=\"overview-home-mysettings-payment\"><div data-view=\"Overview.Payment\"></div></div></div><div class=\"overview-home-mysettings-row\"><div class=\"overview-home-mysettings-collector\"><article class=\"overview-profile\"><div class=\"overview-profile-header\"><h4>"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Collector Profile",{"name":"translate","hash":{},"data":data}))
    + "</h4></div><section class=\"overview-profile-card\"><div class=\"overview-profile-card-content\"> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"name") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data})) != null ? stack1 : "")
    + " </div></section></article></div><div class=\"overview-home-mysettings-referral\"><article class=\"overview-profile\"><div class=\"overview-profile-header\"><h4>"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Refer a Friend",{"name":"translate","hash":{},"data":data}))
    + "</h4></div><section class=\"overview-profile-card referral-content\"><div class=\"overview-profile-card-content\"><a href=\"/invite\" class=\"gold-button\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"GET 10%",{"name":"translate","hash":{},"data":data}))
    + "</a><p>"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"for each friend you refer.",{"name":"translate","hash":{},"data":data}))
    + "</p><span class=\"gold-line\"></span></div><a href=\"/invite\" class=\"overview-profile-card-button-edit\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Learn more",{"name":"translate","hash":{},"data":data}))
    + "</a></section></article></div></div></section><div data-view=\"Overview.Banner\"></div> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasCustomerSupportURL") : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  ";
},"useData":true}); template.Name = 'overview_home'; return template;});