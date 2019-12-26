define('facets_browse_category_heading.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isTop100CollectibleURL") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + " ";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasBanner") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " <section class=\"facets-browse-category-heading-list-header\"><div class=\"facets-browse-category-heading-other product-100-main-heading\"><div class=\"commerce-category-desc\">"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"category_description") || (depth0 != null ? compilerNameLookup(depth0,"category_description") : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"category_description","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div></div></section> ";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return " <div class=\"facets-browse-category-heading-main-image product-100-main-img\" ><div class=\"aboutus-topbanner\"><img src=\""
    + alias3((compilerNameLookup(helpers,"resizeImage") || (depth0 && compilerNameLookup(depth0,"resizeImage")) || alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"banner") : depth0),"categorybanner",{"name":"resizeImage","hash":{},"data":data}))
    + "\" alt=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"pageheading") || (depth0 != null ? compilerNameLookup(depth0,"pageheading") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"pageheading","hash":{},"data":data}) : helper)))
    + "\" /><div class=\"cms-main-title cms-main-title-white\"><h1>"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"pageheading") || (depth0 != null ? compilerNameLookup(depth0,"pageheading") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"pageheading","hash":{},"data":data}) : helper)))
    + "</h1></div></div></div> ";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasBanner") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " <section class=\"facets-browse-category-heading-list-header\"><div class=\"facets-browse-category-heading-main-description\"><h1>"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"pageheading") || (depth0 != null ? compilerNameLookup(depth0,"pageheading") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pageheading","hash":{},"data":data}) : helper)))
    + "</h1><div class=\"commerce-category-desc\">"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"category_description") || (depth0 != null ? compilerNameLookup(depth0,"category_description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"category_description","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isSubcategoryAvailable") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </div></section> ";
},"6":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return " <div class=\"facets-browse-category-heading-main-image\" ><img src=\""
    + alias3((compilerNameLookup(helpers,"resizeImage") || (depth0 && compilerNameLookup(depth0,"resizeImage")) || alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"banner") : depth0),"categorybanner",{"name":"resizeImage","hash":{},"data":data}))
    + "\" alt=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"pageheading") || (depth0 != null ? compilerNameLookup(depth0,"pageheading") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"pageheading","hash":{},"data":data}) : helper)))
    + "\" /></div> ";
},"8":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return " <div class=\"facets-browse-category-other-producer\"><div class=\"facets-browse-category-other-product-left\"></div><div class=\"facets-browse-category-other-product-right\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"See more offers from",{"name":"translate","hash":{},"data":data}))
    + " <a href=\"#\" data-action=\"toggle-subcat\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</a></div></div> ";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasBanner") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " <section class=\"facets-browse-category-heading-list-header\"><div class=\"row\"> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"producerLogo") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " <div "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"producerLogo") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.program(15, data, 0),"data":data})) != null ? stack1 : "")
    + "><div class=\"facets-browse-category-heading-main-description\"><h1>"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"pageheading") || (depth0 != null ? compilerNameLookup(depth0,"pageheading") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pageheading","hash":{},"data":data}) : helper)))
    + "</h1><div class=\"commerce-category-desc\">"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"category_description") || (depth0 != null ? compilerNameLookup(depth0,"category_description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"category_description","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div></div></div></div><div class=\"facets-browse-category-other-producer\"><div class=\"facets-browse-category-other-product-left\"><div id=\"similar-producers-top\" class=\"facets-browse-category-other-producer-link\" data-cms-area=\"other_similar_producers_top\" data-cms-area-filters=\"path\"></div></div><div class=\"facets-browse-category-other-product-right\"><div id=\"see-other-producers-top\" class=\"facets-browse-category-heading-see-other-producer\" data-cms-area=\"see_other_producers_top\" data-cms-area-filters=\"path\"></div></div></div></section> ";
},"11":function(container,depth0,helpers,partials,data) {
    var helper;

  return " <div class=\"col-sm-3\"><img src=\"/site/Producer-Images/"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"producerLogo") || (depth0 != null ? compilerNameLookup(depth0,"producerLogo") : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"producerLogo","hash":{},"data":data}) : helper)))
    + "\"></div> ";
},"13":function(container,depth0,helpers,partials,data) {
    return "class=\"col-sm-9\"";
},"15":function(container,depth0,helpers,partials,data) {
    return "class=\"col-sm-12\"";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasBanner") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " <section class=\"facets-browse-category-heading-list-header\"><div class=\"facets-browse-category-heading-main-description\"><h1>"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"pageheading") || (depth0 != null ? compilerNameLookup(depth0,"pageheading") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pageheading","hash":{},"data":data}) : helper)))
    + "</h1><div class=\"commerce-category-desc\">"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"category_description") || (depth0 != null ? compilerNameLookup(depth0,"category_description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"category_description","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div><div class=\"facets-browse-category-other-producer\"><div class=\"facets-browse-category-other-product-left\"><div id=\"similar-producers-top\" class=\"facets-browse-category-other-producer-link\" data-cms-area=\"other_similar_producers_top\" data-cms-area-filters=\"path\"></div></div><div class=\"facets-browse-category-other-product-right\">"
    + alias4((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"See more",{"name":"translate","hash":{},"data":data}))
    + " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"regionUnderProducer") : depth0),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.program(20, data, 0),"data":data})) != null ? stack1 : "")
    + " "
    + alias4((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"from",{"name":"translate","hash":{},"data":data}))
    + " <a href=\"#\" data-action=\"toggle-subcat\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</a></div></div></div></section> ";
},"18":function(container,depth0,helpers,partials,data) {
    return " "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"producers",{"name":"translate","hash":{},"data":data}))
    + " ";
},"20":function(container,depth0,helpers,partials,data) {
    return " "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"regions",{"name":"translate","hash":{},"data":data}))
    + " ";
},"22":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasBanner") : depth0),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " <section class=\"facets-browse-category-heading-shop-list-header\"><div class=\"commerce-category-desc\">"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"category_description") || (depth0 != null ? compilerNameLookup(depth0,"category_description") : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"category_description","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div></section> ";
},"23":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return " <div class=\"facets-browse-category-heading-shop-main-image\" ><img src=\""
    + alias3((compilerNameLookup(helpers,"resizeImage") || (depth0 && compilerNameLookup(depth0,"resizeImage")) || alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"banner") : depth0),"shopcatbanner",{"name":"resizeImage","hash":{},"data":data}))
    + "\" alt=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"pageheading") || (depth0 != null ? compilerNameLookup(depth0,"pageheading") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"pageheading","hash":{},"data":data}) : helper)))
    + "\" /><div class=\"facets-browse-category-heading-shop-main-description\"><h1>"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"pageheading") || (depth0 != null ? compilerNameLookup(depth0,"pageheading") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"pageheading","hash":{},"data":data}) : helper)))
    + "</h1></div></div> ";
},"25":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasBanner") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " <section class=\"facets-browse-category-heading-list-header\"><div class=\"facets-browse-category-heading-main-description\"><h1>"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"pageheading") || (depth0 != null ? compilerNameLookup(depth0,"pageheading") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pageheading","hash":{},"data":data}) : helper)))
    + "</h1><div class=\"commerce-category-desc\">"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"category_description") || (depth0 != null ? compilerNameLookup(depth0,"category_description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"category_description","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div><div class=\"facets-browse-category-other-producer\"><div class=\"facets-browse-category-other-product-left\"><div id=\"similar-producers-top\" class=\"facets-browse-category-other-producer-link\" data-cms-area=\"other_similar_producers_top\" data-cms-area-filters=\"path\"></div></div><div class=\"facets-browse-category-other-product-right\"> See more varieties from <a href=\"#\" data-action=\"toggle-subcat\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</a></div></div></div></section> ";
},"27":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasBanner") : depth0),{"name":"if","hash":{},"fn":container.program(28, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " <section class=\"facets-browse-category-heading-shop-list-header\"><div class=\"commerce-category-desc\">"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"category_description") || (depth0 != null ? compilerNameLookup(depth0,"category_description") : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"category_description","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div></div></section> ";
},"28":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return " <div class=\"facets-browse-category-heading-main-image facets-browse-gift-banner\" ><img src=\""
    + alias3((compilerNameLookup(helpers,"resizeImage") || (depth0 && compilerNameLookup(depth0,"resizeImage")) || alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"banner") : depth0),"categorybanner",{"name":"resizeImage","hash":{},"data":data}))
    + "\" alt=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"pageheading") || (depth0 != null ? compilerNameLookup(depth0,"pageheading") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"pageheading","hash":{},"data":data}) : helper)))
    + "\" /><div class=\"facets-browse-category-heading-shop-main-description\"><h1>"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"pageheading") || (depth0 != null ? compilerNameLookup(depth0,"pageheading") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"pageheading","hash":{},"data":data}) : helper)))
    + "</h1></div></div> ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return " "
    + ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"categoryType") : depth0),1,{"name":"ifEquals","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"categoryType") : depth0),2,{"name":"ifEquals","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"categoryType") : depth0),3,{"name":"ifEquals","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"categoryType") : depth0),4,{"name":"ifEquals","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"categoryType") : depth0),5,{"name":"ifEquals","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = (compilerNameLookup(helpers,"ifEquals") || (depth0 && compilerNameLookup(depth0,"ifEquals")) || alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"categoryType") : depth0),6,{"name":"ifEquals","hash":{},"fn":container.program(27, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " <script> jQuery(document).ready(function(){\n	var isTop100CollectibleCat = "
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"isTop100CollectibleURL") || (depth0 != null ? compilerNameLookup(depth0,"isTop100CollectibleURL") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"isTop100CollectibleURL","hash":{},"data":data}) : helper)))
    + ";\n	if( isTop100CollectibleCat )\n	{\n		jQuery('.facets-facet-browse-facets').hide();\n		jQuery('.facets-facet-browse-header').hide();\n		jQuery('.facets-facet-browse-total-wrapper').hide();\n		jQuery('.facets-item-list-show-selector').val(\"/shop-all-wine/top-100-collectible-wines?show=100\");\n	}\n\n	jQuery(\".facetcategorylistfliterbutt\").click(function(){\n		jQuery(\".facets-facet-browse-facets\").slideToggle();\n	});\n\n	jQuery(\".facets-browse-category-heading-main-image\").insertBefore(jQuery(\"#facet-browse\"));\n	jQuery(\".facets-browse-category-heading-shop-main-image\").insertBefore(jQuery(\"#facet-browse\"));\n\n\n	/*$(document).on('click','.morecnt',function(){\n		$(this).parent().toggleClass(\"facet-top-text-auto\");\n		$(this).text(($(this).text() == 'See Less') ? 'See More' : 'See Less')\n	});*/\n\n	var showChar = 500;\n	var ellipsestext = \"...\";\n	var moretext = \"See More\";\n	var lesstext = \"...See Less\";\n\n	var content = $('.commerce-category-desc #xyz-999').text();\n	//console.log(content)\n\n	if(content)\n	{\n\n	if(content.length > showChar) {\n\n	var c = content.substr(0, showChar);\n	var h = content.substr(showChar, content.length - showChar);\n/*	console.log(c)\n	console.log(h)*/\n	var html = c + '<span class=\"moreellipses\">' + ellipsestext+ '&nbsp;</span><span class=\"morecontent\"><span>' + h + '</span><a href=\"\" class=\"morelink\">' + moretext + '</a></span>';\n\n	$('.commerce-category-desc #xyz-999').html(html);\n	}\n\n	$(\".morelink\").click(function(){\n		if($(this).hasClass(\"less\")) {\n			$(this).removeClass(\"less\");\n			$(this).html(moretext);\n		} else {\n			$(this).addClass(\"less\");\n			$(this).html(lesstext);\n		}\n		$(this).parent().prev().toggle();\n		$(this).prev().toggle();\n		return false;\n	});\n}\n\n}); </script>  ";
},"useData":true}); template.Name = 'facets_browse_category_heading'; return template;});