{{!
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
}}
<div class="home-slider-container">
	<div class="home-image-slider">
		<ul data-slider class="home-image-slider-list">
			{{#each carouselImages}}
			<li>
				<div class="home-slide-main-container">
					<div class="home-slide-image-container"><img src="{{getThemeAssetsPath (resizeImage url ../imageHomeSize)}}" alt="" /></div>
					<div class="home-slide-caption">{{{desc}}}</div>
				</div>
			</li>
			{{/each}}
		</ul>
	</div>
	<div class="homeslider-whitebg"></div>
</div>

<div class="home"> 
 
	<div class="home-bot-banner clearfix">
		<div id="home-page-top-three-banner" data-cms-area="Home-Page-Top-Three-Banner" data-cms-area-filters="path"></div>
	</div>
	  
	<div class="home-merchandizing-zone">
		<div class="home-main-title"><h2><span>{{translate "Featured Wines"}}</span></h2></div>
		<section class="home-cms-page-content-products" data-cms-area="Home-Page-Trending-Products" data-cms-area-filters="path"></section>
		<div data-id="Home-Merchandising-Zone" data-type="merchandising-zone"></div>
	</div>

	<div class="home-featured-wine clearfix">
		<div id="home-page-featured-wine-banner" data-cms-area="Home-Page-Featured-Wine-Banner" data-cms-area-filters="path"></div>
	</div>
	  
	<div class="home-newsletter">
		<div data-view="HomeNewsLetterContent"></div>
	</div>

	<div data-cms-area="home-bottom-info" data-cms-area-filters="path"></div>
  
</div>

<!-- Tag for Activity Group: conversion, Activity Name: VINFOLIO_Homepage_Floodlight, Activity ID: 7556689 -->
<!-- Expected URL: https://www.vinfolio.com/ -->

<!--
Activity ID: 7556689
Activity Name: VINFOLIO_Homepage_Floodlight
Activity Group Name: conversion
-->

<!--
Start of DoubleClick Floodlight Tag: Please do not remove
Activity name of this tag: VINFOLIO_Homepage_Floodlight
URL of the webpage where the tag is expected to be placed: https://www.vinfolio.com/
This tag must be placed between the <body> and </body> tags, as close as possible to the opening tag.
Creation Date: 06/29/2018
-->
<script type="text/javascript">
var axel = Math.random() + "";
var a = axel * 10000000000000;
$('body').append('<iframe src="https://8577661.fls.doubleclick.net/activityi;src=8577661;type=conve0;cat=vinfo00;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
</script>
<noscript>
<iframe src="https://8577661.fls.doubleclick.net/activityi;src=8577661;type=conve0;cat=vinfo00;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=1?" width="1" height="1" frameborder="0" style="display:none"></iframe>
</noscript>
<!-- End of DoubleClick Floodlight Tag: Please do not remove -->

{{!----
Use the following context variables when customizing this template:

	imageHomeSize (String)
	imageHomeSizeBottom (String)
	carouselImages (Array)
	bottomBannerImages (Array)

----}} 