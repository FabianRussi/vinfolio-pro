{{!
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
}}

<div class="product-details-full">
	<div data-cms-area="item_details_banner" data-cms-area-filters="page_type"></div>

	<header class="product-details-full-header">
		<div id="banner-content-top" class="product-details-full-banner-top"></div>
	</header>
	<!--<div class="product-details-full-divider-desktop"></div>-->
	<article class="product-details-full-content" itemscope itemtype="https://schema.org/Product">
		<meta itemprop="url" content="{{itemUrl}}">
		<div id="banner-details-top" class="product-details-full-banner-top-details"></div>

		<section class="product-details-full-main-content">
			<div class="product-details-full-main-content-left">
			<div class="product-details-full-image-gallery-container">
				<div id="banner-image-top" class="content-banner banner-image-top"></div>
				<div data-view="Product.ImageGallery"></div>
				<div id="banner-image-bottom" class="content-banner banner-image-bottom"></div>
			</div>
			</div>

			<div class="product-details-full-main-content-right">

			<div class="product-details-full-content-header">
				<h1 class="product-details-full-content-header-title" itemprop="name">{{pageHeader}}</h1>
				{{#if model.item.custitem_vf_region_hierarchy}}<div class="facet-country-list">{{model.item.custitem_vf_region_hierarchy}}</div>{{/if}}
				<div class="product-details-full-rating" data-view="Global.StarRating"></div>
				<div data-cms-area="item_info" data-cms-area-filters="path"></div>
			</div>

			<div class="product-details-full-divider"></div>

			<div class="product-details-full-main">
				<div class="product-details-full-main-left">
					{{#if model.item.custitem_vf_item_abv}}abv {{model.item.custitem_vf_item_abv}}<br>{{/if}}
					<div class="product-details-full-main-left-num">
						<ul>
							{{#if isWA}}<li><span>{{model.item.custitem_item_wa}}</span> WA</li>{{/if}}
							{{#if isWS}}<li><span>{{model.item.custitem_item_ws}}</span> WS</li>{{/if}}
							{{#if isIWC}}<li><span>{{model.item.custitem_item_iwc}}</span> IWC</li>{{/if}}
							{{#if isJR}}<li><span>{{model.item.custitem_item_jr}}</span> JR</li>{{/if}}
							{{#if isJS}}<li><span>{{model.item.custitem_item_js}}</span> JS</li>{{/if}}
						</ul>
					</div>
					<div class="product-details-full-main-left-var">
						<ul>
							{{#if model.item.custitem_varietal}}
								<li><strong>{{translate 'Variety'}}</strong><br>{{model.item.custitem_varietal}} </li>
							{{/if}}
							<!-- {{#if model.item.custitem_taste_profile}}
								<li class="hide"> <strong>{{translate 'Taste Profile'}}</strong><br> {{model.item.custitem_taste_profile}} <br></li>
							{{/if}}

							{{#if model.item.custitem_body}}
								<li class="hide"> <strong>{{translate 'Body'}}</strong><br> {{model.item.custitem_body}} <br></li>
							{{/if}}

							{{#if model.item.custitem_sweetness}}
								<li class="hide"> <strong>{{translate 'Sweetness'}}</strong><br> {{model.item.custitem_sweetness}} </li>
							{{/if}} -->
						</ul>
					</div>

					<div class="product-detail-see-all">
						{{#if isWineProducer}}
						{{#if hasSpecialCharRedirect}}						
						<span id="custom-anchor" data-action="custom-redirect" data-hashtag="{{wineProducerURL}}" data-touchpoint="home">{{translate 'See all wines from'}} {{model.item.custitem_producer}}</span>
						{{else}}
						<a href="{{wineProducerURL}}">{{translate 'See all wines from'}} {{model.item.custitem_producer}}</a>
						{{/if}}
						{{/if}}
						{{#if isOtherVintages}}
							<div class="other-vintages">
							{{translate 'See other vintages'}}
							{{#each otherVintages}}
								<!-- <a style="{{#if available_qty}}{{#ifEquals ship_msg 'In Stock '}}color:#98813d;{{/ifEquals}}{{#ifEquals ship_msg 'In Vinfolio Storage '}}color:black;{{/ifEquals}}{{else}}color:#808080;{{/if}}" href="/{{vintage_url}}">{{vintage_year}}</a> -->
								<a style="{{#if available_qty}}color:#98813d;{{else}}color:#808080;{{/if}}" href="/{{vintage_url}}">{{vintage_year}}</a>
								<span style="{{#if @last}} display:none; {{else}} display: {{/if}}"> | </span>
							{{/each}}
							</div>
						{{/if}}
					</div>
					{{#if isOtherVintages}}
					<div class="other-vintages-note">
						<!-- <span>Note:</span> -->
						<span style="color:#98813d;padding-right: 4px;">In stock</span><span>|</span>
						<span style="color:#808080;padding-left: 4px;">Sold out</span>

					</div>
					{{/if}}

					{{#if model.item.custitem_out_of_stock_item}}
					<br> <div class="product-details-full-main-custom-outofstock">{{translate 'Out of stock'}}</div>
					{{/if}}

				</div>

				<div class="product-details-full-main-right {{#if model.item.custitem_out_of_stock_item}}hide{{/if}}">
				<p class="learn-more"><a href="https://www.vinfolio.com/sourcing">learn more</a> about producers &amp; collectors</p>

				{{#if isItemProperlyConfigured}}

					{{#if isPriceEnabled}}
					<div data-view="AddToProductList" class="product-details-full-actions-addtowishlist"></div>
					{{/if}}

					<form id="product-details-full-form" data-action="submit-form" method="POST">

						<section class="product-details-full-info">
							<div id="banner-summary-bottom" class="product-details-full-banner-summary-bottom"></div>
						</section>

						<section data-view="Product.Options"></section>

						<div class="product-detail-border-wrap">

							<div data-view="Product.Sku" style="display: none;"></div>

							<div data-view="Quantity.Pricing"></div>

							<div class="productdetail-ship-in-hour"></div>

							<!--this option is hidden for regular products -->
							<p class="gold product-detail-casesize">{{translate 'This item is available by the case only'}}</p>

							<div data-view="Product.Stock.Info"></div>

							{{#if isPriceEnabled}}
							<div class="row">
								<div data-view="Quantity" class="product-detail-quantity col-lg-5"></div>


								<!--this option is hidden for regular products -->
								
								<div class="product-detail-casesize casesize col-sm-12 col-lg-7" id="item-case-active" >
								 
								
								</div>

							</div>
<div id="show-tariff-communication" style="display:none">
						{{#if showMessage}}
							
								<p style="padding: 10px;font-size: 12px;">
									Prices are net of taxes and tariffs. Pre-Arrival items with future delivery dates from outside the United States may be subject to price adjustment based on tax and tariff schedules in effect on the day of importation of the product into the United States.
								</p>
							
						{{/if}}			
	</div>						
	<section class="product-details-full-actions {{#if showOptions}} {{else}}remove-lines{{/if}}">
									<div class="row">
									<div class="product-details-total-price col-sm-5" id="total-price">
										<span class="product-detail-total-span" style="font-size:10px;">Total: <span id="bottlestext"></span></span> <br>
										 <span class="product-detail-total-price">{{{itemPrice}}}</span></div>

									<div data-view="Product.Price" style="display: none;" class="product-price hide-content1"></div>

									<div class="product-details-full-actions-container col-sm-7">
										<div data-view="MainActionView"></div>
									</div>

									<div class="livex-notes-pdp">
										<p class="note1">This is a final sale item</p>
										<p class="note2">Not eligible for cancellations or refunds</p>
									</div>

									<div class="product-details-full-actions-container">
										<div data-view="ProductDetails.AddToQuote" class="product-details-full-actions-addtoquote" style="display: none;"></div>
									</div>
									</div>
								</section>
							{{/if}}

						</div>

						<div data-view="StockDescription"></div>

						<!--<div data-view="SocialSharing.Flyout" class="product-details-full-social-sharing"></div>-->

						<div class="product-details-full-main-bottom-banner">
							<div id="banner-summary-bottom" class="product-details-full-banner-summary-bottom"></div>
						</div>
					</form>
				{{else}}
					<div data-view="GlobalViewsMessageView.WronglyConfigureItem"></div>
				{{/if}}

				</div>

				<div id="banner-details-bottom" class="product-details-full-banner-details-bottom" data-cms-area="item_info_bottom" data-cms-area-filters="page_type"></div>
			</div>
			</div>

		</section>

		<section data-view="Product.Information"></section>
{{log this}}
		{{#if showOptions}}
		<div class="product-details-full-divider-desktop"></div>

		<div class="product-details-full-collector">
			<h2>{{translate 'Collector Data For This Wine'}}</h2>
			{{#if isCollectorData}}
			<ul>
				{{#if model.item.custitem_item_bottles_owned}}<li>{{model.item.custitem_item_bottles_owned}} {{translate 'bottles owned'}}</li>{{/if}}
				{{#if model.item.custitem_item_collector}}<li>{{model.item.custitem_item_collector}} {{translate 'collectors'}}</li>{{/if}}
				{{#if model.item.custitem_item_average_collector_rating}}<li>{{translate 'Average collector rating: '}}{{model.item.custitem_item_average_collector_rating}}<br>(Out of {{model.item.custitem_item_collector}} {{translate 'collectors'}})</li>{{/if}}
			</ul>
			{{else}}
				{{translate 'No collector data available for this wine'}}
			{{/if}}
		</div>

		<div class="product-details-full-divider-desktop"></div>
{{/if}}
		<div data-view="ProductReviews.Center"></div>

		<div class="product-details-full-content-related-items">
			<div data-view="Related.Items"></div>
		</div>

		<div class="product-details-full-content-correlated-items">
			<div data-view="Correlated.Items"></div>
		</div>
		<div id="banner-details-bottom" class="content-banner banner-details-bottom" data-cms-area="item_details_banner_bottom" data-cms-area-filters="page_type"></div>
	</article>
</div>

<div class="image-productname" style="display:none">{{itemNameImage}}</div>
<script>
setTimeout(function() {

try {

var prod_title = "{{pageHeader}}";

var prod_price = "{{prod_price}}";

var prod_image = "{{prod_image}}";

if (prod_title != "" && prod_price != "" && prod_image != "") {

!function(s,a,e,v,n,t,z){if(s.saq)return;n=s.saq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!s._saq)s._saq=n;n.push=n;n.loaded=!0;n.version='1.0';n.queue=[];t=a.createElement(e);t.async=0;t.src=v;z=a.getElementsByTagName(e)[0];z.parentNode.insertBefore(t,z)}(window,document,'script','https://tags.srv.stackadapt.com/events.js');saq('drt', 'UymfyETaBEMfAT1KhF-cMg', {'${title}':prod_title, '${price}':prod_price, 'img_url':prod_image,'use_landing':'true'});

}

}catch(e) {

console.log(e);

}

},1000);
</script>

{{!----
Use the following context variables when customizing this template:

	model (Object)
	model.item (Object)
	model.item.internalid (Number)
	model.item.type (String)
	model.quantity (Number)
	model.options (Array)
	model.options.0 (Object)
	model.options.0.cartOptionId (String)
	model.options.0.itemOptionId (String)
	model.options.0.label (String)
	model.options.0.type (String)
	model.location (String)
	model.fulfillmentChoice (String)
	pageHeader (String)
	itemUrl (String)
	isItemProperlyConfigured (Boolean)
	isPriceEnabled (Boolean)

----}}
