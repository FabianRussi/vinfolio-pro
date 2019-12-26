define('livexresponse.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return " <div class=\"popup_item_cell\"><div class=\"popup_item_url\"><img src=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"imageUrl") || (depth0 != null ? compilerNameLookup(depth0,"imageUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imageUrl","hash":{},"data":data}) : helper)))
    + "\" alt=\"\"></div><div class=\"pop_up_item_name\" id='"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"internalId") || (depth0 != null ? compilerNameLookup(depth0,"internalId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"internalId","hash":{},"data":data}) : helper)))
    + "'>"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"itemName") || (depth0 != null ? compilerNameLookup(depth0,"itemName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemName","hash":{},"data":data}) : helper)))
    + "</div></div> ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "  <div class=\"pop_up_header\"><h1>ONE OR MORE OF THE ITEMS IN YOUR CART ARE NO LONGER AVAILABLE</h1></div> "
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"jsonData") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " <div class=\"popup-mgs-rem-button\"><button class=\"remove-items\" data-action=\"remove-items\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(alias1,"Remove Item(s) and Continue Purchase",{"name":"translate","hash":{},"data":data}))
    + "</button></div><div class=\"popup-mgs-view-button\"><a href=\"#\" data-touchpoint=\"viewcart\" data-hashtag=\"#cart\">View Cart</a></div> ";
},"useData":true}); template.Name = 'livexresponse'; return template;});