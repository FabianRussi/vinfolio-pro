define('product_list_edit_item.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " <div class=\"product-list-edit-item-rating\" itemprop=\"aggregateRating\" itemscope itemtype=\"https://schema.org/AggregateRating\"><div data-view=\"GlobalViews.StarRating\"></div></div> ";
},"3":function(container,depth0,helpers,partials,data) {
    return " <small class=\"product-list-edit-item-quantity-help\"> "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"(Minimum of $(0) required)",(depth0 != null ? compilerNameLookup(depth0,"minQuantity") : depth0),{"name":"translate","hash":{},"data":data}))
    + " </small> ";
},"5":function(container,depth0,helpers,partials,data) {
    return "selected";
},"7":function(container,depth0,helpers,partials,data) {
    return "disabled";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return " <form method=\"POST\"><div class=\"product-list-edit-item-modal-body\" itemscope itemtype=\"https://schema.org/Product\"><div class=\"product-list-edit-item-image\"><img src=\""
    + alias3((compilerNameLookup(helpers,"resizeImage") || (depth0 && compilerNameLookup(depth0,"resizeImage")) || alias2).call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"thumbnail") : depth0)) != null ? compilerNameLookup(stack1,"url") : stack1),"thumbnail",{"name":"resizeImage","hash":{},"data":data}))
    + "\" alt=\""
    + alias3(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"thumbnail") : depth0)) != null ? compilerNameLookup(stack1,"altimagetext") : stack1), depth0))
    + "\"></div><div class=\"product-list-edit-item-details\"><div class=\"product-list-edit-item-basic\"><h5 class=\"product-list-edit-item-name\"><a class=\"product-list-edit-item-anchor-name\" href=\"#\" data-touchpoint=\"home\" data-hashtag=\"product/"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"productId") || (depth0 != null ? compilerNameLookup(depth0,"productId") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"productId","hash":{},"data":data}) : helper)))
    + "\"> "
    + alias3(((helper = (helper = compilerNameLookup(helpers,"productName") || (depth0 != null ? compilerNameLookup(depth0,"productName") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"productName","hash":{},"data":data}) : helper)))
    + "</a></h5><div class=\"product-list-edit-item-added\"><small>"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Added on",{"name":"translate","hash":{},"data":data}))
    + ": "
    + alias3(((helper = (helper = compilerNameLookup(helpers,"itemCreatedDate") || (depth0 != null ? compilerNameLookup(depth0,"itemCreatedDate") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"itemCreatedDate","hash":{},"data":data}) : helper)))
    + "</small></div> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showRating") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " <div class=\"product-list-edit-item-price\"><div data-view=\"ItemViews.Price\"></div></div></div><div class=\"product-list-edit-item-options\"><div data-view=\"ItemDetails.Options\"></div></div><div class=\"product-list-edit-item-quantity\"><label class=\"product-list-edit-item-label\" for=\"product-list-edit-item-quantity\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Desired Quantity",{"name":"translate","hash":{},"data":data}))
    + "</label><button class=\"product-list-edit-item-button-quantity-minus\" data-ui-action=\"minus\">-</button><input class=\"product-list-edit-item-input-quantity\" type=\"number\" min=\"1\" name=\"quantity\" id=\"product-list-edit-item-quantity\" placeholder=\""
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Desired Quantity",{"name":"translate","hash":{},"data":data}))
    + "\" value=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"quantity") || (depth0 != null ? compilerNameLookup(depth0,"quantity") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"quantity","hash":{},"data":data}) : helper)))
    + "\"><button class=\"product-list-edit-item-button-quantity-add\" data-ui-action=\"add\">+</button></div> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showMinimumQuantity") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " <div class=\"product-list-edit-item-priority\"><label class=\"product-list-edit-item-label\" for=\"product-list-edit-item-priority\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Priority",{"name":"translate","hash":{},"data":data}))
    + "</label><select class=\"product-list-edit-item-select-priority product-list-edit-item-priority-input\" name=\"priority\" id=\"product-list-edit-item-priority\"><option value=\"1\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isPriority1") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"High",{"name":"translate","hash":{},"data":data}))
    + "</option><option value=\"2\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isPriority2") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Medium",{"name":"translate","hash":{},"data":data}))
    + "</option><option value=\"3\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isPriority3") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Low",{"name":"translate","hash":{},"data":data}))
    + "</option></select></div><div class=\"product-list-edit-item-notes\" data-validation=\"control-group\"><label class=\"product-list-edit-item-label\" for=\"product-list-edit-item-description\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Notes for this item",{"name":"translate","hash":{},"data":data}))
    + " <span class=\"product-list-edit-item-label-optional\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"(optional)",{"name":"translate","hash":{},"data":data}))
    + "</span></label><div data-validation=\"control\"><textarea class=\"product-list-edit-item-textarea\" name=\"description\" id=\"product-list-edit-item-description\" placeholder=\""
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Add a note or description for your item",{"name":"translate","hash":{},"data":data}))
    + "\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"description") || (depth0 != null ? compilerNameLookup(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</textarea></div></div></div></div><div class=\"product-list-edit-item-modal-footer\"><button type=\"submit\" class=\"product-list-edit-item-button-edit\" data-action=\"edit\" "
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isSelectionCompleteForEdit") : depth0),{"name":"unless","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Save",{"name":"translate","hash":{},"data":data}))
    + "</button><button type=\"reset\" class=\"product-list-edit-item-button-cancel\" data-dismiss=\"modal\" aria-hidden=\"true\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Cancel",{"name":"translate","hash":{},"data":data}))
    + "</button></div></form>  ";
},"useData":true}); template.Name = 'product_list_edit_item'; return template;});