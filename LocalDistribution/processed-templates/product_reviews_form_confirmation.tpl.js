define('product_reviews_form_confirmation.tpl', ['Handlebars','Handlebars.CompilerNameLookup','facets_item_cell_list.tpl'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " - <i class=\"product-reviews-form-confirmation-icon-sign\"></i> "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"verified purchaser",{"name":"translate","hash":{},"data":data}))
    + " ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return " <div class=\"product-reviews-form-confirmation\"><h1>"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"header") || (depth0 != null ? compilerNameLookup(depth0,"header") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"header","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h1><div class=\"product-reviews-form-confirmation-divider-desktop\"></div><div class=\"product-reviews-form-confirmation-divider\"></div><div class=\"product-reviews-form-confirmation-message\"> "
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"confirmationMessage") || (depth0 != null ? compilerNameLookup(depth0,"confirmationMessage") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"confirmationMessage","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " <a href=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"itemUrl") || (depth0 != null ? compilerNameLookup(depth0,"itemUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemUrl","hash":{},"data":data}) : helper)))
    + "\" class=\"product-reviews-form-confirmation-button-back\"> "
    + alias4((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Back to ",{"name":"translate","hash":{},"data":data}))
    + " "
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"productTitle") || (depth0 != null ? compilerNameLookup(depth0,"productTitle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"productTitle","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " </a></div><div class=\"product-reviews-form-confirmation-item-cell\"><div data-view=\"Facets.ItemCell\" data-template=\"facets_item_cell_list\"></div></div><div class=\"product-reviews-form-confirmation-content\"><div class=\"product-reviews-form-confirmation-review-rating\"><div data-view=\"Global.StarRatingAttribute\" class=\"product-reviews-form-confirmation-rating-attribute\"></div><div data-view=\"Global.StarRating\" itemprop=\"reviewRating\" itemscope itemtype=\"https://schema.org/Rating\"></div></div><div class=\"product-reviews-form-confirmation-content-review\"><h4 itemprop=\"name\"> "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"reviewTitle") || (depth0 != null ? compilerNameLookup(depth0,"reviewTitle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"reviewTitle","hash":{},"data":data}) : helper)))
    + " </h4><p class=\"product-reviews-form-confirmation-content-username\"> "
    + alias4((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"By <span itemprop=\"author\">$(0)</span>",(depth0 != null ? compilerNameLookup(depth0,"reviewAuthor") : depth0),{"name":"translate","hash":{},"data":data}))
    + " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isReviewVerified") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </p><div class=\"product-reviews-form-confirmation-content-description\"><p itemprop=\"description\"> "
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"reviewText") || (depth0 != null ? compilerNameLookup(depth0,"reviewText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"reviewText","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " </p></div></div></div></div>  ";
},"useData":true}); template.Name = 'product_reviews_form_confirmation'; return template;});