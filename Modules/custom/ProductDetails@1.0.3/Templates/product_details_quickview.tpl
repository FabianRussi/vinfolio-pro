{{!
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
}}

<div class="product-details-quickview">

	<div class="product-details-quickview-img">
		{{#if isPriceEnabled}}
			<div data-view="AddToProductList" class="product-details-quickview-actions-container-add-to-wishlist {{#if model.item.custitem_out_of_stock_item}}hide{{/if}}"></div>
		{{/if}}
		<div data-view="Product.ImageGallery"></div>
		
		<div class="product-details-quickview-full-main">
			{{#if model.item.custitem_vf_item_abv}}abv {{model.item.custitem_vf_item_abv}}<br>{{/if}}
		
			<div class="product-details-full-main-left-num">
				<ul>
					{{#if isWA}}<li><span>{{model.item.custitem_item_wa}}</span> WA</li>{{/if}}
					{{#if isWS}}<li><span>{{model.item.custitem_item_ws}}</span> WS</li>{{/if}}
					{{#if isIWC}}<li><span>{{model.item.custitem_item_iwc}}</span> IWC</li>{{/if}}
					{{#if isJR}}<li><span>{{model.item.custitem_item_jr}}</span> JR</li>{{/if}}
				</ul>
			</div>
	
			<div class="product-details-quickview-full-text">{{{model.item.custitem_item_about_the_producer}}}</div>
			
			<a class="product-details-quickview-full-details" data-action="go-to-fullview" data-touchpoint="home" data-name="view-full-details" data-hashtag="#{{itemUrl}}" href="{{itemUrl}}">
			{{translate 'View full details'}}</a>
		</div>
	</div>

	<div class="product-details-quickview-details">
		{{#if isItemProperlyConfigured}}
		<div data-view="Product.Sku" style="display:none; "></div>
		{{/if}}
		<h1 class="product-details-quickview-item-name" itemprop="name">{{pageHeader}}</h1>
		{{#if model.item.custitem_vf_region_hierarchy}}<div class="facet-country-list">{{model.item.custitem_vf_region_hierarchy}}</div>{{/if}}

		<div class="product-details-full-main-left-var">
			<ul>
				{{#if model.item.custitem_varietal}}
					<li><strong>{{translate 'Variety'}}</strong><br>{{model.item.custitem_varietal}}</li>
				{{/if}}
				<!-- {{#if model.item.custitem_taste_profile}}
					<li class="hide"> <strong>{{translate 'Taste Profile'}}</strong><br> {{model.item.custitem_taste_profile}} <br></li>
				{{/if}}
				
				{{#if model.item.custitem_taste_profile}}
					<li class="hide"> <strong>{{translate 'Body'}}</strong><br> {{model.item.custitem_body}} <br></li>
				{{/if}}

				{{#if model.item.custitem_taste_profile}}
					<li class="hide"> <strong>{{translate 'Sweetness'}}</strong><br> {{model.item.custitem_sweetness}} </li>
				{{/if}} -->
			</ul>
		</div>

		{{#if model.item.custitem_out_of_stock_item}}
		
			<div class="product-details-full-main-custom-outofstock">{{translate 'Out of stock'}} <br /></div>
		
		{{else}}
       
       
		<p class="learn-more right-aligned"><a href="https://www.vinfolio.com/sourcing">learn more</a> about producers &amp; collectors
		</p>	
		

		<div class="product-details-quickview-main">
			{{#if isItemProperlyConfigured}}
				<form id="product-details-quickview-form" data-action="submit-form" method="POST">

					<section class="product-details-quickview-info">
						<div id="banner-summary-bottom" class="product-details-quickview-banner-summary-bottom"></div>
					</section>

					<section data-view="Product.Options"></section>

					<div data-view="Product.Stock.Info"></div>

					<div class="product-detail-quickview-border-wrap" >
						<div class="productdetail-ship-in-hour"></div>
						
					
						<!--this option is hidden for regular products -->
							<p class="gold gold-quick product-detail-quickview-casesize" style="display:none;">{{translate 'This item is avaialble by the case only'}}</p>

							<div data-view="Quantity.Pricing"></div>

						{{#if isPriceEnabled}}
						<div class="row">
							<div data-view="Quantity" class="product-detail-quickview-quantity col-sm-4"></div>
							
							<div class="product-detail-quickview-casesize casesize col-sm-12 col-lg-8" ></div>
							
						</div>

							<br clear="all">

							<div class="product-detail-quickview-total-price"><span class="product-detail-total-span" style="font-size:10px;">Total: <span id="bottlestext"></span></span> <br>
							 <span class="product-detail-total-price">{{{itemPrice}}}</span></div>

							<div data-view="Product.Price" class="product-detail-quickview-price" style="display: none;"></div>

							<section class="product-details-quickview-actions">

								<div class="product-details-quickview-actions-container">
									<div data-view="MainActionView"></div>
								</div>

								<div class="livex-notes-pdp">
										<p class="note1">This is a final sale item</p>
										<p class="note2">Not eligible for cancellations or refunds</p>
									</div>

								<div class="product-details-quickview-actions-container">
									<div data-view="ProductDetails.AddToQuote" class="product-details-quickview-actions-container-add-to-quote" style="display: none;"></div>
								</div>
							</section>
						{{/if}}

					
						<div data-view="StockDescription"></div>

						<div class="product-details-quickview-main-bottom-banner">
							<div id="banner-summary-bottom" class="product-details-quickview-banner-summary-bottom"></div>
						</div>
					</form>
				{{else}}
					<div data-view="GlobalViewsMessageView.WronglyConfigureItem"></div>
				{{/if}}

				
				<div id="banner-details-bottom" class="product-details-quickview-banner-details-bottom" data-cms-area="item_info_bottom" data-cms-area-filters="page_type"></div>
			</div>
			
		</div>

		{{/if}}
	</div>
</div>


{{!----
The context variables for this template are not currently documented. Use the {{log this}} helper to view the context variables in the Console of your browser's developer tools.

----}}
