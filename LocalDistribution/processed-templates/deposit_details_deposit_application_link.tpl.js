define('deposit_details_deposit_application_link.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return " <a href=\"/transactionhistory/depositapplication/"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"depositApplicationId") || (depth0 != null ? compilerNameLookup(depth0,"depositApplicationId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"depositApplicationId","hash":{},"data":data}) : helper)))
    + "\" data-action=\"go-to-deposit-application\" class=\"deposit-details-deposit-application-link-deposit-application-date\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"depositApplicationDate") || (depth0 != null ? compilerNameLookup(depth0,"depositApplicationDate") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"depositApplicationDate","hash":{},"data":data}) : helper)))
    + "</a>  ";
},"useData":true}); template.Name = 'deposit_details_deposit_application_link'; return template;});