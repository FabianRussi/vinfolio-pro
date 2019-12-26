{{!
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
}}

{{#ifEquals categoryType 1}}
	{{#if isTop100CollectibleURL}}

		{{#if hasBanner}}
			<div class="facets-browse-category-heading-main-image product-100-main-img" > 
			
			 <div class="aboutus-topbanner"><img src="{{resizeImage banner 'categorybanner'}}" alt="{{pageheading}}" />
    <div class="cms-main-title cms-main-title-white">
      <h1>{{pageheading}}</h1>
    </div>
   <!--  <div class="aboutus-bannner-top-white"></div> -->
  </div>
			  
			    </div>
		{{/if}}

		<section class="facets-browse-category-heading-list-header">
			<div class="facets-browse-category-heading-other product-100-main-heading">
				
		    
				<!-- {{#if showDescription}}<p>{{{description}}}</p>{{/if}} -->
				<div class="commerce-category-desc">{{{category_description}}}</div>
				<!-- <div id="sca-category-description" class="facets-browse-category-heading-category-description" data-cms-area="sca-category-description_top" data-cms-area-filters="path"></div> -->
			</div>
		</section>

	{{else}}

		{{#if hasBanner}}
			<div class="facets-browse-category-heading-main-image" > <img src="{{resizeImage banner 'categorybanner'}}" alt="{{pageheading}}" /> </div>
		{{/if}}
		<section class="facets-browse-category-heading-list-header">
		  <div class="facets-browse-category-heading-main-description">
		    <h1>{{pageheading}}</h1>

			<!-- <div id="sca-category-description" class="facets-browse-category-heading-category-description" data-cms-area="sca-category-description_top" data-cms-area-filters="path" data-type="information-content"></div> -->

			<div class="commerce-category-desc">{{{category_description}}}</div>

			<!-- <div class="product-details-information-tab-action"><a class="facet-see-more" >See More</a></div> -->

			{{#if isSubcategoryAvailable}}
			<div class="facets-browse-category-other-producer">
				<div class="facets-browse-category-other-product-left"></div>
				<div class="facets-browse-category-other-product-right"> {{translate 'See more offers from'}} <a href="#" data-action="toggle-subcat">{{name}}</a> </div>
			</div>
			{{/if}}
		    
		  </div>
		</section>

	{{/if}}

{{/ifEquals}}

{{#ifEquals categoryType 2}}

{{#if hasBanner}}
	<div class="facets-browse-category-heading-main-image" > <img src="{{resizeImage banner 'categorybanner'}}" alt="{{pageheading}}" /> </div>
{{/if}}
<section class="facets-browse-category-heading-list-header">
 <div class="row">
 {{#if producerLogo}}
 <div class="col-sm-3"><img src="/site/Producer-Images/{{producerLogo}}"></div>
 {{/if}}
 <div {{#if producerLogo}}class="col-sm-9"{{else}}class="col-sm-12"{{/if}}>
  <div class="facets-browse-category-heading-main-description">
    <h1>{{pageheading}}</h1>
   <!--  {{#if showDescription}} 
    	<p>{{{description}}}</p>  
    {{/if}} -->
    <div class="commerce-category-desc">{{{category_description}}}</div>
    <!-- <div id="sca-category-description" class="facets-browse-category-heading-category-description" data-cms-area="sca-category-description_top" data-cms-area-filters="path"></div> -->
    <!--<div class="product-details-information-tab-action"><a class="facet-see-more" >See More</a></div>-->
  </div>
 </div>
</div>

<div class="facets-browse-category-other-producer">
      <div class="facets-browse-category-other-product-left">
        <div id="similar-producers-top" class="facets-browse-category-other-producer-link" data-cms-area="other_similar_producers_top" data-cms-area-filters="path"></div>
      </div>
      <div class="facets-browse-category-other-product-right">
        <div id="see-other-producers-top" class="facets-browse-category-heading-see-other-producer" data-cms-area="see_other_producers_top" data-cms-area-filters="path"></div>
      </div>
    </div>

</section>
{{/ifEquals}}




{{#ifEquals categoryType 3}}

{{#if hasBanner}}
<div class="facets-browse-category-heading-main-image" > <img src="{{resizeImage banner 'categorybanner'}}" alt="{{pageheading}}" /> </div>
{{/if}}
<section class="facets-browse-category-heading-list-header">
  <div class="facets-browse-category-heading-main-description">
    <h1>{{pageheading}}</h1>
   <!--  {{#if showDescription}} 
    	<p>{{{description}}}</p>  
    {{/if}} -->
    
<!-- <div id="sca-category-description" class="facets-browse-category-heading-category-description" data-cms-area="sca-category-description_top" data-cms-area-filters="path" data-type="information-content">
    </div> -->
     <div class="commerce-category-desc">{{{category_description}}}</div>

	<!--<div class="product-details-information-tab-action"><a class="facet-see-more" >See More</a></div>-->
    
    <div class="facets-browse-category-other-producer">
      <div class="facets-browse-category-other-product-left">
        <div id="similar-producers-top" class="facets-browse-category-other-producer-link" data-cms-area="other_similar_producers_top" data-cms-area-filters="path"></div>
      </div>
      <div class="facets-browse-category-other-product-right">{{translate 'See more'}} {{#if regionUnderProducer}} {{translate 'producers'}} {{else}} {{translate 'regions'}} {{/if}} {{translate 'from'}} <a href="#" data-action="toggle-subcat">{{name}}</a> </div>
    </div>
  </div>
</section>
{{/ifEquals}}

{{#ifEquals categoryType 4}}

	{{#if hasBanner}}
<div class="facets-browse-category-heading-shop-main-image" > <img src="{{resizeImage banner 'shopcatbanner'}}" alt="{{pageheading}}" />
  <div class="facets-browse-category-heading-shop-main-description">
    <h1>{{pageheading}}</h1>
    <!-- {{#if showDescription}}
    <p>{{{description}}}</p>
    {{/if}}  -->
</div>
</div>
{{/if}}
<section class="facets-browse-category-heading-shop-list-header">
  <!-- <div id="sca-category-description" class="facets-browse-category-heading-shop-category-description" data-cms-area="sca-shop-category-description_top" data-cms-area-filters="path"></div> -->

      <div class="commerce-category-desc">{{{category_description}}}</div>

</section>
{{/ifEquals}} 


{{#ifEquals categoryType 5}}

{{#if hasBanner}}
<div class="facets-browse-category-heading-main-image" > <img src="{{resizeImage banner 'categorybanner'}}" alt="{{pageheading}}" /> </div>
{{/if}}
<section class="facets-browse-category-heading-list-header">
  <div class="facets-browse-category-heading-main-description">
    <h1>{{pageheading}}</h1>
    <!-- {{#if showDescription}} 
    	<p>{{{description}}}</p>  
    {{/if}} -->
    <div class="commerce-category-desc">{{{category_description}}}</div> 
    
   <!--  <div id="sca-category-description" class="facets-browse-category-heading-category-description" data-cms-area="sca-category-description_top" data-cms-area-filters="path" data-type="information-content">
    </div> -->

	<!--<div class="product-details-information-tab-action"><a class="facet-see-more" >See More</a></div>-->
    
    <div class="facets-browse-category-other-producer">
      <div class="facets-browse-category-other-product-left">
        <div id="similar-producers-top" class="facets-browse-category-other-producer-link" data-cms-area="other_similar_producers_top" data-cms-area-filters="path"></div>
      </div>
      <div class="facets-browse-category-other-product-right"> See more varieties from <a href="#" data-action="toggle-subcat">{{name}}</a> </div>
    </div>
  </div>
</section>
{{/ifEquals}}


{{#ifEquals categoryType 6}}

	{{#if hasBanner}}
		<div class="facets-browse-category-heading-main-image facets-browse-gift-banner" > 
			<img src="{{resizeImage banner 'categorybanner'}}" alt="{{pageheading}}" /> 
			<div class="facets-browse-category-heading-shop-main-description">
			  <!-- {{#if showDescription}}
			    <p>{{{description}}}</p>
			    {{/if}} -->
			      <h1>{{pageheading}}</h1>
			      
			     <!-- <div class="aboutus-bannner-top-white"></div> -->
			</div>
		</div>
	{{/if}}

	<section class="facets-browse-category-heading-shop-list-header">
		<!-- <div id="sca-category-description" class="facets-browse-category-heading-gift-category-description" data-cms-area="sca-shop-category-description_top" data-cms-area-filters="path"></div> -->
		<div class="commerce-category-desc">{{{category_description}}}</div> 
			       </div>
	</section>

{{/ifEquals}}



<script>

jQuery(document).ready(function(){
	var isTop100CollectibleCat = {{isTop100CollectibleURL}};
	if( isTop100CollectibleCat )
	{
		jQuery('.facets-facet-browse-facets').hide();
		jQuery('.facets-facet-browse-header').hide();
		jQuery('.facets-facet-browse-total-wrapper').hide();
		jQuery('.facets-item-list-show-selector').val("/shop-all-wine/top-100-collectible-wines?show=100");
	}

	jQuery(".facetcategorylistfliterbutt").click(function(){
		jQuery(".facets-facet-browse-facets").slideToggle();
	});

	jQuery(".facets-browse-category-heading-main-image").insertBefore(jQuery("#facet-browse"));
	jQuery(".facets-browse-category-heading-shop-main-image").insertBefore(jQuery("#facet-browse"));


	/*$(document).on('click','.morecnt',function(){
		$(this).parent().toggleClass("facet-top-text-auto");
		$(this).text(($(this).text() == 'See Less') ? 'See More' : 'See Less')
	});*/

	var showChar = 500;
	var ellipsestext = "...";
	var moretext = "See More";
	var lesstext = "...See Less";

	var content = $('.commerce-category-desc #xyz-999').text();
	//console.log(content)

	if(content)
	{

	if(content.length > showChar) {

	var c = content.substr(0, showChar);
	var h = content.substr(showChar, content.length - showChar);
/*	console.log(c)
	console.log(h)*/
	var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span><a href="" class="morelink">' + moretext + '</a></span>';

	$('.commerce-category-desc #xyz-999').html(html);
	}

	$(".morelink").click(function(){
		if($(this).hasClass("less")) {
			$(this).removeClass("less");
			$(this).html(moretext);
		} else {
			$(this).addClass("less");
			$(this).html(lesstext);
		}
		$(this).parent().prev().toggle();
		$(this).prev().toggle();
		return false;
	});
}

});

</script> 

<!-- {{#if segmentCode}}
<script>
analytics.track('View Category', {
  createdAt: new Date(),
  signupSource: "WEB",
  categoryName: "{{name}}",
  categoryID: "", // if exist
  email: "{{userEmail}}", // Replace with customer email
  first_name:"{{firstName}}",
  last_name:"{{lastName}}"
});	
debugger;
</script>
{{/if}} -->

{{!----
Use the following context variables when customizing this template: 
	
	name (String)
	banner (String)
	description (String)
	pageheading (String)
	hasBanner (Boolean)
	showDescription (Boolean)

----}} 