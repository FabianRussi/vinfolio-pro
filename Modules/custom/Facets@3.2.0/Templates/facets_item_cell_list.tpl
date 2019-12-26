{{!
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
}}

<div class="facets-item-cell-list" itemprop="itemListElement"  data-item-id="{{itemId}}" itemscope itemtype="https://schema.org/Product" data-track-productlist-list="{{track_productlist_list}}" data-track-productlist-category="{{track_productlist_category}}" data-track-productlist-position="{{track_productlist_position}}" data-sku="{{sku}}">
	<div class="facets-item-cell-list-left">
		<div class="facets-item-cell-list-image-wrapper">
			{{#if itemIsNavigable}}
				<a class="facets-item-cell-list-anchor" href='{{url}}'>
					<img class="facets-item-cell-list-image" src="{{resizeImage thumbnail.url 'thumbnail'}}" alt="{{thumbnail.altimagetext}}" itemprop="image">
				</a>
			{{else}}
				<img class="facets-item-cell-list-image" src="{{resizeImage thumbnail.url 'thumbnail'}}" alt="{{thumbnail.altimagetext}}" itemprop="image">
			{{/if}}
			{{#if isEnvironmentBrowser}}
				<div class="facets-item-cell-list-quick-view-wrapper">
					<a href="{{url}}" class="facets-item-cell-list-quick-view-link" data-toggle="show-in-modal">
						<i class="facets-item-cell-list-quick-view-icon"></i>
						{{translate 'Quick View'}}
					</a>
				</div>
			{{/if}}
			<div class="facets-item-cell-grid-source-tag">{{{sourceTag}}}</div>
		</div>
	</div>
	<div class="facets-item-cell-list-right">
		<div class="row">
			<div class="col-sm-9">
			<div class="facet-list-view-title-hold">
				<meta itemprop="url" content="{{url}}">
				<h2 class="facets-item-cell-list-title">
					{{#if itemIsNavigable}}
						<a class="facets-item-cell-list-name" href='{{url}}'>
							<span itemprop="name">
								{{name}}
							</span>
						</a>
					{{else}}
						<span itemprop="name">
							{{name}}
						</span>
					{{/if}}
				</h2>

			{{#if regionHierarchy}}<div class="facet-country-list">{{regionHierarchy}}</div>{{/if}}
			</div>
			
		<!--		<div class="facets-item-cell-list-left-num" style="display: none;">
					<ul>
						{{#if isWA}}<li><span>{{wa}}</span> WA</li>{{/if}}
						{{#if isWS}}<li><span>{{ws}}</span> WS</li>{{/if}}
						{{#if isIWC}}<li><span>{{iwc}}</span> IWC</li>{{/if}}
						{{#if isJR}}<li><span>{{jr}}</span> JR</li>{{/if}}
						{{#if isJS}}<li><span>{{js}}</span> JS</li>{{/if}}
					</ul>
				</div>-->

				{{#if abv}}abv {{abv}} <br /> {{/if}}

				<div class="facets-item-cell-list-left-var" id="facets-item-cell-var">
					<ul>
						{{#if varietal}}
							<li><strong>{{translate 'Variety'}}</strong><br>{{varietal}} </li>
						{{/if}}
						{{#if tasteProfile}}
							<li> <strong>{{translate 'Taste Profile'}}</strong><br> {{tasteProfile}} <br></li>
						{{/if}}
						
						{{#if body}}
							<li> <strong>{{translate 'Body'}}</strong><br> {{body}} <br></li>
						{{/if}}

						{{#if sweetness}}
							<li class="hide"> <strong>{{translate 'Sweetness'}}</strong><br> {{sweetness}} </li>
						{{/if}}
					</ul>
				</div>
				
				<div >
					{{#if isTPRAvailable}}
					<div class="facets-item-cell-list-tpr">
						{{#if tprDrinkDate}}<div><strong>{{translate 'Drink Dates'}}:</strong> {{tprDrinkDate}}</div>{{/if}}
						{{#if tprAuthor}}<div><strong>{{translate 'Author'}}:</strong> {{tprAuthor}} </div>{{/if}}
						<!--<div class="tpr-source"><strong> {{tprSource}} 
						{{#if tprRating}}| {{translate 'Rating'}}: {{tprRating}} {{/if}}</strong>
						</div>-->
						
						<div class="row facets-item-cell-col-hold"> 
					<div class="facets-item-cell-list-view-left-num facets-item-cell-col-1"><span>{{#if tprRating}} {{tprRating}} {{/if}}</span></div>
						
						{{#if tprDesc}}<div class="facets-item-cell-col-11">{{{tprDesc}}}</div>{{/if}}
						
						</div>
					</div>
					{{/if}}
				</div>

				
				{{#if showRating}}
				<div class="facets-item-cell-list-rating" itemprop="aggregateRating" itemscope="" itemtype="http://schema.org/AggregateRating"  data-view="GlobalViews.StarRating">
				</div>
				{{/if}}

				<div data-view="ItemDetails.Options"></div>

				<!--
				<div class="facets-item-cell-list-stock">
					<div data-view="ItemViews.Stock" class="facets-item-cell-list-stock-message"></div>
				</div>

				<div data-view="StockDescription"></div>
				-->
			</div>
	
	
	
	<div class="col-sm-3 facet-list-view-col-right">
			<div class="facets-item-cell-list-bottle-size-range">{{bottleSizeRange}}</div>
					<br clear="all">	
					<div class="facets-item-cell-list-price facets-item-cell-list-pricev1">
							<div data-view="ItemViews.Price"></div>
						</div>
					
					{{#if perPriceFlag}}
						<span class="product-views-price-lead" itemprop="price" data-rate="{{minValue}}"> ${{minValue}} </span>
					{{else}}
						<div data-view="Cart.QuickAddToCart" id="facets-item-cell-list-pricev1"></div>
					{{/if}}
	</div>
	
	
	</div>
	</div>
</div>




{{!----
Use the following context variables when customizing this template: 
	
	itemId (Number)
	name (String)
	url (String)
	sku (String)
	isEnvironmentBrowser (Boolean)
	thumbnail (Object)
	thumbnail.url (String)
	thumbnail.altimagetext (String)
	itemIsNavigable (Boolean)
	showRating (Boolean)
	rating (Number)

----}}
