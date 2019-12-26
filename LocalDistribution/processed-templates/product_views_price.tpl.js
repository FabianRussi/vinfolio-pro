define('product_views_price.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isPriceRange") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(20, data, 0),"data":data})) != null ? stack1 : "")
    + " ";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return " <span class=\"product-views-price-range\" itemprop=\"offers\" itemscope itemtype=\"https://schema.org/AggregateOffer\"><meta itemprop=\"priceCurrency\" content=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"currencyCode") || (depth0 != null ? compilerNameLookup(depth0,"currencyCode") : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"currencyCode","hash":{},"data":data}) : helper)))
    + "\"/> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"categoryPage") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(12, data, 0),"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showComparePrice") : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " <link itemprop=\"availability\" href=\""
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isInStock") : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.program(18, data, 0),"data":data})) != null ? stack1 : "")
    + "\"/></span> ";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"minOverWrite") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "")
    + " ";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return " <span class=\"product-views-price-lead\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"<span itemprop=\"lowPrice\" data-rate=\"$(0)\" >$(1)</span> - <span itemprop=\"highPrice\" data-rate=\"$(2)\">$(3)</span>",(depth0 != null ? compilerNameLookup(depth0,"minPrice") : depth0),((stack1 = (depth0 != null ? compilerNameLookup(depth0,"salePriceValue") : depth0)) != null ? compilerNameLookup(stack1,"salepriceformatted") : stack1),(depth0 != null ? compilerNameLookup(depth0,"maxPrice") : depth0),(depth0 != null ? compilerNameLookup(depth0,"maxPriceFormatted") : depth0),{"name":"translate","hash":{},"data":data}))
    + " </span><div class=\"on-sale-tag\">On sale for "
    + alias3(((helper = (helper = compilerNameLookup(helpers,"minPriceFormatted") || (depth0 != null ? compilerNameLookup(depth0,"minPriceFormatted") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"minPriceFormatted","hash":{},"data":data}) : helper)))
    + "</div> ";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"maxOverWrite") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return " <span class=\"product-views-price-lead\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"<span itemprop=\"lowPrice\" data-rate=\"$(0)\" >$(1)</span> - <span itemprop=\"highPrice\" data-rate=\"$(2)\">$(3)</span>",(depth0 != null ? compilerNameLookup(depth0,"minPrice") : depth0),(depth0 != null ? compilerNameLookup(depth0,"minPriceFormatted") : depth0),(depth0 != null ? compilerNameLookup(depth0,"maxPrice") : depth0),((stack1 = (depth0 != null ? compilerNameLookup(depth0,"salePriceValue") : depth0)) != null ? compilerNameLookup(stack1,"salepriceformatted") : stack1),{"name":"translate","hash":{},"data":data}))
    + " </span><div class=\"on-sale-tag\">On sale for "
    + alias3(((helper = (helper = compilerNameLookup(helpers,"maxPriceFormatted") || (depth0 != null ? compilerNameLookup(depth0,"maxPriceFormatted") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"maxPriceFormatted","hash":{},"data":data}) : helper)))
    + "</div> ";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"outsideMinMax") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(12, data, 0),"data":data})) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression;

  return " <span class=\"product-views-price-lead\"> "
    + alias1((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"<span itemprop=\"lowPrice\" data-rate=\"$(0)\" >$(1)</span> - <span itemprop=\"highPrice\" data-rate=\"$(2)\">$(3)</span>",(depth0 != null ? compilerNameLookup(depth0,"minPrice") : depth0),(depth0 != null ? compilerNameLookup(depth0,"minPriceFormatted") : depth0),(depth0 != null ? compilerNameLookup(depth0,"maxPrice") : depth0),(depth0 != null ? compilerNameLookup(depth0,"maxPriceFormatted") : depth0),{"name":"translate","hash":{},"data":data}))
    + " </span><div class=\"on-sale-tag\">On sale for "
    + alias1(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"salePriceValue") : depth0)) != null ? compilerNameLookup(stack1,"originalpriceformatted") : stack1), depth0))
    + "</div> ";
},"12":function(container,depth0,helpers,partials,data) {
    return " <span class=\"product-views-price-lead\"> "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"<span itemprop=\"lowPrice\" data-rate=\"$(0)\" >$(1)</span> - <span itemprop=\"highPrice\" data-rate=\"$(2)\">$(3)</span>",(depth0 != null ? compilerNameLookup(depth0,"minPrice") : depth0),(depth0 != null ? compilerNameLookup(depth0,"minPriceFormatted") : depth0),(depth0 != null ? compilerNameLookup(depth0,"maxPrice") : depth0),(depth0 != null ? compilerNameLookup(depth0,"maxPriceFormatted") : depth0),{"name":"translate","hash":{},"data":data}))
    + " </span> ";
},"14":function(container,depth0,helpers,partials,data) {
    var helper;

  return " <small class=\"product-views-price-old\"> "
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"comparePriceFormatted") || (depth0 != null ? compilerNameLookup(depth0,"comparePriceFormatted") : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"comparePriceFormatted","hash":{},"data":data}) : helper)))
    + " </small> ";
},"16":function(container,depth0,helpers,partials,data) {
    return "https://schema.org/InStock";
},"18":function(container,depth0,helpers,partials,data) {
    return "https://schema.org/OutOfStock";
},"20":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return " <span class=\"product-views-price-exact\" itemprop=\"offers\" itemscope itemtype=\"https://schema.org/Offer\"><meta itemprop=\"priceCurrency\" content=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"currencyCode") || (depth0 != null ? compilerNameLookup(depth0,"currencyCode") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currencyCode","hash":{},"data":data}) : helper)))
    + "\"/> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasSalePriceRange") : depth0),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.program(23, data, 0),"data":data})) != null ? stack1 : "")
    + " <input type=\"hidden\" class=\"item-price-for-total-"
    + alias4(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"item") : stack1)) != null ? compilerNameLookup(stack1,"internalid") : stack1), depth0))
    + "\" data-formatted-price=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"priceFormatted") || (depth0 != null ? compilerNameLookup(depth0,"priceFormatted") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"priceFormatted","hash":{},"data":data}) : helper)))
    + "\" data-price-currency=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"itemPriceCurrency") || (depth0 != null ? compilerNameLookup(depth0,"itemPriceCurrency") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemPriceCurrency","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"price") || (depth0 != null ? compilerNameLookup(depth0,"price") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data}) : helper)))
    + "\"> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showComparePrice") : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " <link itemprop=\"availability\" href=\""
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isInStock") : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.program(18, data, 0),"data":data})) != null ? stack1 : "")
    + "\"/></span> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"categoryPage") : depth0),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " ";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression;

  return " <span class=\"product-views-price-lead\" itemprop=\"price\" data-rate=\""
    + alias1(((helper = (helper = compilerNameLookup(helpers,"salePriceValue") || (depth0 != null ? compilerNameLookup(depth0,"salePriceValue") : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"salePriceValue","hash":{},"data":data}) : helper)))
    + "\"> "
    + alias1(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"salePriceValue") : depth0)) != null ? compilerNameLookup(stack1,"salepriceformatted") : stack1), depth0))
    + " </span> ";
},"23":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return " <span class=\"product-views-price-lead\" itemprop=\"price\" data-rate=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"price") || (depth0 != null ? compilerNameLookup(depth0,"price") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data}) : helper)))
    + "\"> "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"priceFormatted") || (depth0 != null ? compilerNameLookup(depth0,"priceFormatted") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"priceFormatted","hash":{},"data":data}) : helper)))
    + " </span> ";
},"25":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"hasSalePriceRange") : depth0),{"name":"if","hash":{},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " ";
},"26":function(container,depth0,helpers,partials,data) {
    var helper;

  return " <div class=\"on-sale-tag\">On sale for "
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"priceFormatted") || (depth0 != null ? compilerNameLookup(depth0,"priceFormatted") : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"priceFormatted","hash":{},"data":data}) : helper)))
    + "</div> ";
},"28":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showHighlightedMessage") : depth0),{"name":"if","hash":{},"fn":container.program(29, data, 0),"inverse":container.program(31, data, 0),"data":data})) != null ? stack1 : "")
    + " ";
},"29":function(container,depth0,helpers,partials,data) {
    return " <div class=\"product-views-price-login-to-see-prices-highlighted\"><p class=\"product-views-price-message\"> "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Please <a href=\"$(0)\">log in</a> to see price or purchase this item",(depth0 != null ? compilerNameLookup(depth0,"urlLogin") : depth0),{"name":"translate","hash":{},"data":data}))
    + " </p></div> ";
},"31":function(container,depth0,helpers,partials,data) {
    return " <div class=\"product-views-price-login-to-see-prices\"><p class=\"product-views-price-message\"> "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"<a href=\"$(0)\">Log in</a> to see price",(depth0 != null ? compilerNameLookup(depth0,"urlLogin") : depth0),{"name":"translate","hash":{},"data":data}))
    + " </p></div> ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " <div class=\"product-views-price\"> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isPriceEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(28, data, 0),"data":data})) != null ? stack1 : "")
    + " </div>  ";
},"useData":true}); template.Name = 'product_views_price'; return template;});