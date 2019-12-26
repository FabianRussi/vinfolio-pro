define('header_menu_myaccount.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " <li> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"hasNoItem") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + " </li> ";
},"2":function(container,depth0,helpers,partials,data) {
    return " <a class=\"header-menu-myaccount-anchor-level4\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#quotes/new\" name=\"requestaquotes\"> "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Request a Quote",{"name":"translate","hash":{},"data":data}))
    + " </a> ";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"hasItemInBasket") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " ";
},"5":function(container,depth0,helpers,partials,data) {
    return " <a class=\"header-menu-myaccount-anchor-level4\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#quotebasket\" name=\"quotebasket\"> "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Quote basket <span>(300)</span>",{"name":"translate","hash":{},"data":data}))
    + " </a> ";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return " <li class=\"header-menu-myaccount-item-level2\"><a class=\"header-menu-myaccount-anchor-level2\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#wishlist\" name=\"wishlist\"> "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(alias1,"Wishlist",{"name":"translate","hash":{},"data":data}))
    + " </a><ul class=\"header-menu-myaccount-level3\"> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"productListsReady") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(13, data, 0),"data":data})) != null ? stack1 : "")
    + " </ul></li> ";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return " "
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isSingleList") : depth0),{"name":"unless","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"productLists") : depth0),{"name":"each","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " ";
},"9":function(container,depth0,helpers,partials,data) {
    return " <li><a href=\"#\" class=\"header-menu-myaccount-anchor-level3\" data-touchpoint=\"customercenter\" data-hashtag=\"#wishlist\" name=\"allmylists\"> "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"All my lists",{"name":"translate","hash":{},"data":data}))
    + " </a></li> ";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return " <li><a href=\"#\" class=\"header-menu-myaccount-anchor-level3\" data-touchpoint=\"customercenter\" data-hashtag=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"url") || (depth0 != null ? compilerNameLookup(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\"> "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + " ("
    + alias4(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"items") : depth0)) != null ? compilerNameLookup(stack1,"length") : stack1), depth0))
    + ") </a></li> ";
},"13":function(container,depth0,helpers,partials,data) {
    return " <li><a href=\"#\" class=\"header-menu-myaccount-anchor-level3\"> "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Loading...",{"name":"translate","hash":{},"data":data}))
    + " </a></li> ";
},"15":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return " <li class=\"header-menu-myaccount-item-level2\" data-permissions=\"lists.listCase.2\"><a  class=\"header-menu-myaccount-anchor-level2\" tabindex=\"-1\" href=\"#\" data-action=\"push-menu\" name=\"cases\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Cases",{"name":"translate","hash":{},"data":data}))
    + " <i class=\"header-menu-myaccount-menu-push-icon\"></i></a><ul class=\"header-menu-myaccount-level3\"><li><a href=\"#\" class=\"header-menu-myaccount-back\" data-action=\"pop-menu\" name=\"back-level3\"><i class=\"header-menu-myaccount-pop-icon \"></i> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Back",{"name":"translate","hash":{},"data":data}))
    + " </a></li><li><a class=\"header-menu-myaccount-anchor-level3\" tabindex=\"-1\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#cases\" name=\"allmycases\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Support Cases",{"name":"translate","hash":{},"data":data}))
    + "</a></li><li><a class=\"header-menu-myaccount-anchor-level3\" tabindex=\"-1\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#newcase\" name=\"submitnewcase\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Submit New Case",{"name":"translate","hash":{},"data":data}))
    + "</a></li></ul></li> ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return " <a class=\"header-menu-myaccount-anchor\" href=\"#\" data-action=\"push-menu\" name=\"myaccount\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"My Account",{"name":"translate","hash":{},"data":data}))
    + " <i class=\"header-menu-myaccount-menu-push-icon\"></i></a><ul class=\"header-menu-myaccount\"><li><a href=\"#\" class=\"header-menu-myaccount-back\" data-action=\"pop-menu\" name=\"back\"><i class=\"header-menu-myaccount-pop-icon \"></i> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Back",{"name":"translate","hash":{},"data":data}))
    + " </a></li><li class=\"header-menu-myaccount-overview\"><a class=\"header-menu-myaccount-overview-anchor\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#overview\" name=\"accountoverview\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Account Overview",{"name":"translate","hash":{},"data":data}))
    + " </a><a class=\"header-menu-myaccount-signout-link\" href=\"#\" data-touchpoint=\"logout\" name=\"signout\"><i class=\"header-menu-myaccount-signout-icon\"></i> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Sign Out",{"name":"translate","hash":{},"data":data}))
    + " </a></li><li class=\"header-menu-myaccount-item-level2 header-menu-myaccount-level2-orders\" data-permissions=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"purchasesPermissions") || (depth0 != null ? compilerNameLookup(depth0,"purchasesPermissions") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"purchasesPermissions","hash":{},"data":data}) : helper)))
    + "\" data-permissions-operator=\"OR\"><a class=\"header-menu-myaccount-anchor-level2\" href=\"#\" data-action=\"push-menu\" name=\"orders\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Purchases",{"name":"translate","hash":{},"data":data}))
    + " <i class=\"header-menu-myaccount-menu-push-icon\"></i></a><ul class=\"header-menu-myaccount-level3 header-menu-myaccount-level3-orders\"><li><a href=\"#\" class=\"header-menu-myaccount-back\" data-action=\"pop-menu\" name=\"back-level3\"><i class=\"header-menu-myaccount-pop-icon \"></i> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Back",{"name":"translate","hash":{},"data":data}))
    + " </a></li><li data-permissions=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"purchasesPermissions") || (depth0 != null ? compilerNameLookup(depth0,"purchasesPermissions") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"purchasesPermissions","hash":{},"data":data}) : helper)))
    + "\"><a class=\"header-menu-myaccount-anchor-level3\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#purchases\" name=\"orderhistory\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Purchases History",{"name":"translate","hash":{},"data":data}))
    + " </a></li><li><a class=\"header-menu-myaccount-anchor-level3\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#returns\" data-permissions=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"returnsPermissions") || (depth0 != null ? compilerNameLookup(depth0,"returnsPermissions") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"returnsPermissions","hash":{},"data":data}) : helper)))
    + "\" name=\"returns\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Returns",{"name":"translate","hash":{},"data":data}))
    + " </a></li><li data-permissions=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"purchasesPermissions") || (depth0 != null ? compilerNameLookup(depth0,"purchasesPermissions") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"purchasesPermissions","hash":{},"data":data}) : helper)))
    + "\"><a class=\"header-menu-myaccount-anchor-level3\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#reorderItems\" name=\"reorderitems\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Reorder Items",{"name":"translate","hash":{},"data":data}))
    + " </a></li><li class=\"header-menu-myaccount-item-level3\" data-permissions=\"transactions.tranFind.1,transactions.tranEstimate.1\"><a class=\"header-menu-myaccount-anchor-level3\" data-action=\"push-menu\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#quotes\" name=\"quotes\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Quotes",{"name":"translate","hash":{},"data":data}))
    + " <i class=\"header-menu-myaccount-menu-push-icon\"></i></a><ul class=\"header-menu-myaccount-level4\"><li><a href=\"#\" class=\"header-menu-myaccount-back\" data-action=\"pop-menu\" name=\"back-level4\"><i class=\"header-menu-myaccount-pop-icon \"></i> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Back",{"name":"translate","hash":{},"data":data}))
    + " </a></li><li><a class=\"header-menu-myaccount-anchor-level4\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#quotes\" name=\"allmyquotes\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"All my Quotes",{"name":"translate","hash":{},"data":data}))
    + " </a></li> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasProductList") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </ul></li></ul></li> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isProductListsEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " <li class=\"header-menu-myaccount-item-level2\"><a class=\"header-menu-myaccount-anchor-level2\" href=\"#\" data-action=\"push-menu\" name=\"billing\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Billing",{"name":"translate","hash":{},"data":data}))
    + " <i class=\"header-menu-myaccount-menu-push-icon\"></i></a><ul class=\"header-menu-myaccount-level3\"><li><a href=\"#\" class=\"header-menu-myaccount-back\" data-action=\"pop-menu\" name=\"back-level3\"><i class=\"header-menu-myaccount-pop-icon \"></i> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Back",{"name":"translate","hash":{},"data":data}))
    + " </a></li><li><a class=\"header-menu-myaccount-anchor-level3\" tabindex=\"-1\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#balance\" name=\"accountbalance\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Account Balance",{"name":"translate","hash":{},"data":data}))
    + "</a></li><li><a class=\"header-menu-myaccount-anchor-level3\" tabindex=\"-1\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#invoices\" data-permissions=\"transactions.tranCustInvc.1\" name=\"invoices\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Invoices",{"name":"translate","hash":{},"data":data}))
    + "</a></li><li><a class=\"header-menu-myaccount-anchor-level3\" tabindex=\"-1\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#transactionhistory\" data-permissions=\"transactions.tranCustInvc.1, transactions.tranCustCred.1, transactions.tranCustPymt.1, transactions.tranCustDep.1, transactions.tranDepAppl.1\" data-permissions-operator=\"OR\" name=\"transactionhistory\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Transaction History",{"name":"translate","hash":{},"data":data}))
    + "</a></li><li><a class=\"header-menu-myaccount-anchor-level3\" tabindex=\"-1\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#printstatement\" data-permissions=\"transactions.tranStatement.2\" name=\"printastatement\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Print a Statement",{"name":"translate","hash":{},"data":data}))
    + "</a></li></ul></li><li class=\"header-menu-myaccount-item-level2\"><a class=\"header-menu-myaccount-anchor-level2\" tabindex=\"-1\" href=\"#\" data-action=\"push-menu\" name=\"settings\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Settings",{"name":"translate","hash":{},"data":data}))
    + " <i class=\"header-menu-myaccount-menu-push-icon\"></i></a><ul class=\"header-menu-myaccount-level3\"><li><a href=\"#\" class=\"header-menu-myaccount-back\" data-action=\"pop-menu\" name=\"back-level3\"><i class=\"header-menu-myaccount-pop-icon \"></i> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Back",{"name":"translate","hash":{},"data":data}))
    + " </a></li><li><a class=\"header-menu-myaccount-anchor-level3\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#profileinformation\" name=\"profileinformation\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Profile Information",{"name":"translate","hash":{},"data":data}))
    + " </a></li><li><a class=\"header-menu-myaccount-anchor-level3\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#emailpreferences\" name=\"emailpreferences\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Email Preferences",{"name":"translate","hash":{},"data":data}))
    + " </a></li><li><a class=\"header-menu-myaccount-anchor-level3\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#addressbook\" name=\"addressbook\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Address Book",{"name":"translate","hash":{},"data":data}))
    + " </a></li><li><a class=\"header-menu-myaccount-anchor-level3\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#creditcards\" name=\"creditcards\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Credit Cards",{"name":"translate","hash":{},"data":data}))
    + " </a></li><li><a class=\"header-menu-myaccount-anchor-level3\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#updateyourpassword\" name=\"updateyourpassword\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Update Your Password",{"name":"translate","hash":{},"data":data}))
    + " </a></li><li><a class=\"header-menu-myaccount-anchor-level3\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#collectorprofile\" name=\"collectorprofile\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Collector Profile",{"name":"translate","hash":{},"data":data}))
    + " </a></li><li><a class=\"header-menu-myaccount-anchor-level3\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#invite\" name=\"invite\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Get 10%",{"name":"translate","hash":{},"data":data}))
    + " </a></li></ul></li> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isCaseModuleEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </ul>  ";
},"useData":true}); template.Name = 'header_menu_myaccount'; return template;});