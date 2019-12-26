define('product_details_full.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"facet-country-list\">"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_vf_region_hierarchy") : stack1), depth0))
    + "</div>";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "abv "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_vf_item_abv") : stack1), depth0))
    + "<br>";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<li><span>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_item_wa") : stack1), depth0))
    + "</span> WA</li>";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<li><span>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_item_ws") : stack1), depth0))
    + "</span> WS</li>";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<li><span>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_item_iwc") : stack1), depth0))
    + "</span> IWC</li>";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<li><span>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_item_jr") : stack1), depth0))
    + "</span> JR</li>";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<li><span>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_item_js") : stack1), depth0))
    + "</span> JS</li>";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression;

  return " <li><strong>"
    + alias1((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Variety",{"name":"translate","hash":{},"data":data}))
    + "</strong><br>"
    + alias1(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_varietal") : stack1), depth0))
    + " </li> ";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"hasSpecialCharRedirect") : depth0),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.program(20, data, 0),"data":data})) != null ? stack1 : "")
    + " ";
},"18":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return " <span id=\"custom-anchor\" data-action=\"custom-redirect\" data-hashtag=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"wineProducerURL") || (depth0 != null ? compilerNameLookup(depth0,"wineProducerURL") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"wineProducerURL","hash":{},"data":data}) : helper)))
    + "\" data-touchpoint=\"home\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"See all wines from",{"name":"translate","hash":{},"data":data}))
    + " "
    + alias3(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_producer") : stack1), depth0))
    + "</span> ";
},"20":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return " <a href=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"wineProducerURL") || (depth0 != null ? compilerNameLookup(depth0,"wineProducerURL") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"wineProducerURL","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"See all wines from",{"name":"translate","hash":{},"data":data}))
    + " "
    + alias3(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_producer") : stack1), depth0))
    + "</a> ";
},"22":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return " <div class=\"other-vintages\"> "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(alias1,"See other vintages",{"name":"translate","hash":{},"data":data}))
    + " "
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"otherVintages") : depth0),{"name":"each","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </div> ";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return " <a style=\""
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"available_qty") : depth0),{"name":"if","hash":{},"fn":container.program(24, data, 0),"inverse":container.program(26, data, 0),"data":data})) != null ? stack1 : "")
    + "\" href=\"/"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"vintage_url") || (depth0 != null ? compilerNameLookup(depth0,"vintage_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"vintage_url","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"vintage_year") || (depth0 != null ? compilerNameLookup(depth0,"vintage_year") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"vintage_year","hash":{},"data":data}) : helper)))
    + "</a><span style=\""
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(data && compilerNameLookup(data,"last")),{"name":"if","hash":{},"fn":container.program(28, data, 0),"inverse":container.program(30, data, 0),"data":data})) != null ? stack1 : "")
    + "\"> | </span> ";
},"24":function(container,depth0,helpers,partials,data) {
    return "color:#98813d;";
},"26":function(container,depth0,helpers,partials,data) {
    return "color:#808080;";
},"28":function(container,depth0,helpers,partials,data) {
    return " display:none; ";
},"30":function(container,depth0,helpers,partials,data) {
    return " display: ";
},"32":function(container,depth0,helpers,partials,data) {
    return " <div class=\"other-vintages-note\"><span style=\"color:#98813d;padding-right: 4px;\">In stock</span><span>|</span><span style=\"color:#808080;padding-left: 4px;\">Sold out</span></div> ";
},"34":function(container,depth0,helpers,partials,data) {
    return " <br><div class=\"product-details-full-main-custom-outofstock\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Out of stock",{"name":"translate","hash":{},"data":data}))
    + "</div> ";
},"36":function(container,depth0,helpers,partials,data) {
    return "hide";
},"38":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isPriceEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(39, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " <form id=\"product-details-full-form\" data-action=\"submit-form\" method=\"POST\"><section class=\"product-details-full-info\"><div id=\"banner-summary-bottom\" class=\"product-details-full-banner-summary-bottom\"></div></section><section data-view=\"Product.Options\"></section><div class=\"product-detail-border-wrap\"><div data-view=\"Product.Sku\" style=\"display: none;\"></div><div data-view=\"Quantity.Pricing\"></div><div class=\"productdetail-ship-in-hour\"></div><p class=\"gold product-detail-casesize\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(alias1,"This item is available by the case only",{"name":"translate","hash":{},"data":data}))
    + "</p><div data-view=\"Product.Stock.Info\"></div> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isPriceEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(41, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </div><div data-view=\"StockDescription\"></div><div class=\"product-details-full-main-bottom-banner\"><div id=\"banner-summary-bottom\" class=\"product-details-full-banner-summary-bottom\"></div></div></form> ";
},"39":function(container,depth0,helpers,partials,data) {
    return " <div data-view=\"AddToProductList\" class=\"product-details-full-actions-addtowishlist\"></div> ";
},"41":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return " <div class=\"row\"><div data-view=\"Quantity\" class=\"product-detail-quantity col-lg-5\"></div><div class=\"product-detail-casesize casesize col-sm-12 col-lg-7\" id=\"item-case-active\" ></div></div><div id=\"show-tariff-communication\" style=\"display:none\"> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showMessage") : depth0),{"name":"if","hash":{},"fn":container.program(42, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </div><section class=\"product-details-full-actions "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showOptions") : depth0),{"name":"if","hash":{},"fn":container.program(44, data, 0),"inverse":container.program(46, data, 0),"data":data})) != null ? stack1 : "")
    + "\"><div class=\"row\"><div class=\"product-details-total-price col-sm-5\" id=\"total-price\"><span class=\"product-detail-total-span\" style=\"font-size:10px;\">Total: <span id=\"bottlestext\"></span></span><br><span class=\"product-detail-total-price\">"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"itemPrice") || (depth0 != null ? compilerNameLookup(depth0,"itemPrice") : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"itemPrice","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</span></div><div data-view=\"Product.Price\" style=\"display: none;\" class=\"product-price hide-content1\"></div><div class=\"product-details-full-actions-container col-sm-7\"><div data-view=\"MainActionView\"></div></div><div class=\"livex-notes-pdp\"><p class=\"note1\">This is a final sale item</p><p class=\"note2\">Not eligible for cancellations or refunds</p></div><div class=\"product-details-full-actions-container\"><div data-view=\"ProductDetails.AddToQuote\" class=\"product-details-full-actions-addtoquote\" style=\"display: none;\"></div></div></div></section> ";
},"42":function(container,depth0,helpers,partials,data) {
    return " <p style=\"padding: 10px;font-size: 12px;\"> Prices are net of taxes and tariffs. Pre-Arrival items with future delivery dates from outside the United States may be subject to price adjustment based on tax and tariff schedules in effect on the day of importation of the product into the United States. </p> ";
},"44":function(container,depth0,helpers,partials,data) {
    return " ";
},"46":function(container,depth0,helpers,partials,data) {
    return "remove-lines";
},"48":function(container,depth0,helpers,partials,data) {
    return " <div data-view=\"GlobalViewsMessageView.WronglyConfigureItem\"></div> ";
},"50":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return " <div class=\"product-details-full-divider-desktop\"></div><div class=\"product-details-full-collector\"><h2>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(alias1,"Collector Data For This Wine",{"name":"translate","hash":{},"data":data}))
    + "</h2> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isCollectorData") : depth0),{"name":"if","hash":{},"fn":container.program(51, data, 0),"inverse":container.program(58, data, 0),"data":data})) != null ? stack1 : "")
    + " </div><div class=\"product-details-full-divider-desktop\"></div> ";
},"51":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return " <ul> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_item_bottles_owned") : stack1),{"name":"if","hash":{},"fn":container.program(52, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_item_collector") : stack1),{"name":"if","hash":{},"fn":container.program(54, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_item_average_collector_rating") : stack1),{"name":"if","hash":{},"fn":container.program(56, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </ul> ";
},"52":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression;

  return "<li>"
    + alias1(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_item_bottles_owned") : stack1), depth0))
    + " "
    + alias1((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"bottles owned",{"name":"translate","hash":{},"data":data}))
    + "</li>";
},"54":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression;

  return "<li>"
    + alias1(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_item_collector") : stack1), depth0))
    + " "
    + alias1((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"collectors",{"name":"translate","hash":{},"data":data}))
    + "</li>";
},"56":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4=container.lambda;

  return "<li>"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Average collector rating: ",{"name":"translate","hash":{},"data":data}))
    + alias3(alias4(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_item_average_collector_rating") : stack1), depth0))
    + "<br>(Out of "
    + alias3(alias4(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_item_collector") : stack1), depth0))
    + " "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"collectors",{"name":"translate","hash":{},"data":data}))
    + ")</li>";
},"58":function(container,depth0,helpers,partials,data) {
    return " "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"No collector data available for this wine",{"name":"translate","hash":{},"data":data}))
    + " ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return " <div class=\"product-details-full\"><div data-cms-area=\"item_details_banner\" data-cms-area-filters=\"page_type\"></div><header class=\"product-details-full-header\"><div id=\"banner-content-top\" class=\"product-details-full-banner-top\"></div></header><article class=\"product-details-full-content\" itemscope itemtype=\"https://schema.org/Product\"><meta itemprop=\"url\" content=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"itemUrl") || (depth0 != null ? compilerNameLookup(depth0,"itemUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemUrl","hash":{},"data":data}) : helper)))
    + "\"><div id=\"banner-details-top\" class=\"product-details-full-banner-top-details\"></div><section class=\"product-details-full-main-content\"><div class=\"product-details-full-main-content-left\"><div class=\"product-details-full-image-gallery-container\"><div id=\"banner-image-top\" class=\"content-banner banner-image-top\"></div><div data-view=\"Product.ImageGallery\"></div><div id=\"banner-image-bottom\" class=\"content-banner banner-image-bottom\"></div></div></div><div class=\"product-details-full-main-content-right\"><div class=\"product-details-full-content-header\"><h1 class=\"product-details-full-content-header-title\" itemprop=\"name\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"pageHeader") || (depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pageHeader","hash":{},"data":data}) : helper)))
    + "</h1> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_vf_region_hierarchy") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " <div class=\"product-details-full-rating\" data-view=\"Global.StarRating\"></div><div data-cms-area=\"item_info\" data-cms-area-filters=\"path\"></div></div><div class=\"product-details-full-divider\"></div><div class=\"product-details-full-main\"><div class=\"product-details-full-main-left\"> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_vf_item_abv") : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " <div class=\"product-details-full-main-left-num\"><ul> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isWA") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isWS") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isIWC") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isJR") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isJS") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </ul></div><div class=\"product-details-full-main-left-var\"><ul> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_varietal") : stack1),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </ul></div><div class=\"product-detail-see-all\"> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isWineProducer") : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isOtherVintages") : depth0),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </div> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isOtherVintages") : depth0),{"name":"if","hash":{},"fn":container.program(32, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_out_of_stock_item") : stack1),{"name":"if","hash":{},"fn":container.program(34, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </div><div class=\"product-details-full-main-right "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"custitem_out_of_stock_item") : stack1),{"name":"if","hash":{},"fn":container.program(36, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"><p class=\"learn-more\"><a href=\"https://www.vinfolio.com/sourcing\">learn more</a> about producers &amp; collectors</p> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isItemProperlyConfigured") : depth0),{"name":"if","hash":{},"fn":container.program(38, data, 0),"inverse":container.program(48, data, 0),"data":data})) != null ? stack1 : "")
    + " </div><div id=\"banner-details-bottom\" class=\"product-details-full-banner-details-bottom\" data-cms-area=\"item_info_bottom\" data-cms-area-filters=\"page_type\"></div></div></div></section><section data-view=\"Product.Information\"></section> "
    + alias4(compilerNameLookup(helpers,"log").call(alias1,depth0,{"name":"log","hash":{},"data":data}))
    + " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showOptions") : depth0),{"name":"if","hash":{},"fn":container.program(50, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " <div data-view=\"ProductReviews.Center\"></div><div class=\"product-details-full-content-related-items\"><div data-view=\"Related.Items\"></div></div><div class=\"product-details-full-content-correlated-items\"><div data-view=\"Correlated.Items\"></div></div><div id=\"banner-details-bottom\" class=\"content-banner banner-details-bottom\" data-cms-area=\"item_details_banner_bottom\" data-cms-area-filters=\"page_type\"></div></article></div><div class=\"image-productname\" style=\"display:none\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"itemNameImage") || (depth0 != null ? compilerNameLookup(depth0,"itemNameImage") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemNameImage","hash":{},"data":data}) : helper)))
    + "</div><script> setTimeout(function() {\n\ntry {\n\nvar prod_title = \""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"pageHeader") || (depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pageHeader","hash":{},"data":data}) : helper)))
    + "\";\n\nvar prod_price = \""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"prod_price") || (depth0 != null ? compilerNameLookup(depth0,"prod_price") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"prod_price","hash":{},"data":data}) : helper)))
    + "\";\n\nvar prod_image = \""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"prod_image") || (depth0 != null ? compilerNameLookup(depth0,"prod_image") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"prod_image","hash":{},"data":data}) : helper)))
    + "\";\n\nif (prod_title != \"\" && prod_price != \"\" && prod_image != \"\") {\n\n!function(s,a,e,v,n,t,z){if(s.saq)return;n=s.saq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!s._saq)s._saq=n;n.push=n;n.loaded=!0;n.version='1.0';n.queue=[];t=a.createElement(e);t.async=0;t.src=v;z=a.getElementsByTagName(e)[0];z.parentNode.insertBefore(t,z)}(window,document,'script','https://tags.srv.stackadapt.com/events.js');saq('drt', 'UymfyETaBEMfAT1KhF-cMg', {'${title}':prod_title, '${price}':prod_price, 'img_url':prod_image,'use_landing':'true'});\n\n}\n\n}catch(e) {\n\nconsole.log(e);\n\n}\n\n},1000); </script>  ";
},"useData":true}); template.Name = 'product_details_full'; return template;});