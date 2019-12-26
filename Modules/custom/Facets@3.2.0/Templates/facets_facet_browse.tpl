{{!
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
}}


<section class="facets-facet-browse">
	<div data-cms-area="item_list_banner" data-cms-area-filters="page_type"></div>

	{{#if isCategory}}
		<div class="facets-facet-browse-category">
			<div data-view="Facets.Browse.CategoryHeading"></div>
			{{#ifEqualsOr categoryType 4 6}}
			<div data-view="Facets.ShopCategoryCells" class="facets-facet-browse-subcat-list"></div>
			{{else}}
			<div data-view="Facets.CategoryCells" class="facets-facet-browse-subcat-list" style="display: none;"></div>
			{{/ifEqualsOr}}
		</div>
	{{/if}}

	{{#ifEqualsOr categoryType 4 6}}
		<div class="facets-facet-browse-content">
			<div data-cms-area="Gift-Shop-Merchandising-Title" data-cms-area-filters="path"></div>

			<section class="facets-facet-browse-cms-page-content-products" data-cms-area="Bordeaux-Shop-Merchandising-Zone" data-cms-area-filters="path"></section>

			<div class="facets-facet-browse-shop-merchandizing-zone">
				<div data-id="Bordeaux-Shop-Merchandising-Zone" data-type="merchandising-zone"></div>
			</div>

			<div data-cms-area="Gift-Shop-Merchandising-Title-1" data-cms-area-filters="path"></div>
		</div>

		<div class="home-newsletter">
			<div data-view="FacetsNewsLetterContent"></div>
		</div>
	{{else}}

		{{#if showResults}}
		<div class="facets-facet-browse-content">
				<div class="{{#if hasItemsAndFacets}}facets-facet-browse-facets{{else}}facets-facet-browse-facets-noborder{{/if}}" data-action="pushable" data-id="product-search-facets">

					<div data-cms-area="facet_navigation_top" data-cms-area-filters="page_type"></div>

					{{#if isCategory}}
						<div data-view="Facets.CategorySidebar" class="facets-facet-browse-facets-sidebar"></div>
					{{/if}}

					<div data-view="Facets.FacetedNavigation" data-exclude-facets="commercecategoryname,category"></div>

					<div data-cms-area="facet_navigation_bottom" data-cms-area-filters="page_type"></div>
				</div>

				<!--
				Sample of how to add a particular facet into the HTML. It is important to specify the data-facet-id="<facet id>"
				properly <div data-view="Facets.FacetedNavigation.Item" data-facet-id="custitem1"></div>
				 -->

				<div class="facets-facet-browse-results" itemscope="" itemtype="https://schema.org/ItemList">

					<header class="{{#if hasItemsAndFacets}} facets-facet-browse-header {{else}} facets-facet-browse-header-noborder {{/if}}">
						{{#if isSource}}
							<ul class="customSourceFilter">
								{{#each sourceFilter}}									
									
									<li class="{{this.sourceClass}}">
										<a class="facets-faceted-navigation-item-facet-option {{#if this.isActive}}option-active{{/if}}" href="{{this.url}}" title="Vinfolio">  <label><input type="checkbox" class="facets-faceted-navigation-item-facet-multi" {{#if this.isActive}}checked {{/if}}></label>  <span>{{{this.label}}}</span>  </a>
										<span class="facets-faceted-source-tooltip-main">
										<i class="facet-info-circle"></i>
											<div class="facets-faceted-source-tooltip">{{this.toolTip}}</div>
										</span>
									</li>
								{{/each}}
							</ul>
						{{/if}}

						<ul class="customSourceFilter sold-out-filter">
							<li class="facets-facet-browse-show-sold-out">
								<a class="facets-faceted-navigation-item-facet-option {{#if soldoutActive}}option-active{{/if}}" href="{{soldOutData.url}}"><label><input type="checkbox" class="facets-faceted-navigation-item-facet-multi" {{#if soldoutActive}}checked {{/if}}></label><span>HIDE OUT OF STOCK ITEMS</span></a>
							</li>
						</ul>

						
						{{#if showItems}}
							

							<nav class="facets-facet-browse-list-header">
						
								<div class="facets-facet-browse-list-header-actions" data-view="Facets.ItemListDisplaySelector"></div>

								<div class="facets-facet-browse-list-header-expander">
									<button class="facets-facet-browse-list-header-expander-button collapsed" data-toggle="collapse" data-target="#list-header-filters" aria-expanded="true" aria-controls="list-header-filters">
										{{translate 'Sort & Filter'}}
										<i class="facets-facet-browse-list-header-expander-icon"></i>
									</button>
								</div>

								<div class="facets-facet-browse-list-header-filters collapse" id="list-header-filters">
									<div class="facets-facet-browse-list-header-filters-wrapper">

										<div class="facets-facet-browse-list-header-filters-row">

											<div class="facets-facet-browse-list-header-filter-column" data-view="Facets.ItemListShowSelector">
											</div>

											<div class="facets-facet-browse-list-header-filter-column" data-view="Facets.ItemListSortSelector">
											</div>

											{{#if hasItemsAndFacets}}
												<div class="facets-facet-browse-list-header-filter-column">
													<button class="facets-facet-browse-list-header-filter-facets" data-type="sc-pusher" data-target="product-search-facets">
														{{translate 'Narrow By'}}
														<i class="facets-facet-browse-list-header-filter-facets-icon"></i>
													</button>
												</div>
											{{/if}}
										</div>

									</div>
								</div>
							</nav>
						{{/if}}
					</header>

					<meta itemprop="name" content="{{title}}"/>
					<div id="banner-section-top" class="content-banner banner-section-top" data-cms-area="item_list_banner_top" data-cms-area-filters="path"></div>


					{{#if showItems}}
					<div class="facets-facet-browse-total-wrapper">
						<div class="totalItems col-sm-6"><h1 class="facets-facet-browse-title" data-quantity="{{total}}">
								{{#if keywords}}
									{{#if isTotalProductsOne}}
										{{translate '1 Result for <span class="facets-facet-browse-title-alt">$(0)</span>' keywords}}
									{{else}}
										{{translate '$(0) Results for <span class="facets-facet-browse-title-alt">$(1)</span>' total keywords}}
									{{/if}}
								{{else}}
									{{#if isTotalProductsOne}}
										{{translate '1 Product'}}
									{{else}}
										{{translate '$(0) Products' total}}
									{{/if}}
								{{/if}}
							</h1></div>

							{{#if isIncludeOutOfStock}}
								<div class="col-sm-6 facet-include-outofstock hide">
									<label><input {{#if selectedOutOfStock}}checked{{/if}}  name="include_outofstock" type="checkbox" class="facets-faceted-navigation-item-facet-multi" data-action="set-out-of-stock" ></label>  
									<span>{{translate 'Include out-of-stock items'}}</span>  
								</div>

								<div class="col-sm-6 facet-include-outofstock">
									<label><input {{#if selectedOutOfStock}}checked{{/if}}  name="exclude_outofstock" type="checkbox" class="facets-faceted-navigation-item-facet-multi" data-action="set-out-of-stock" ></label>  
									<span>{{translate 'Exclude out-of-stock items'}}</span>  
								</div>
							{{/if}}
						<div class="facets-facet-browse-narrowedby" data-view="Facets.FacetsDisplay"></div>
					</div>
						{{#if isEmptyList}}
							<div data-view="Facets.Items.Empty"></div>
						{{else}}
							<div class="facets-facet-browse-items" data-view="Facets.Items"></div>
						{{/if}}
					{{/if}}
				</div>
			</div>

			<div class="facets-facet-browse-pagination" data-view="GlobalViews.Pagination"></div>
		{{else}}
			<div class="facets-facet-browse-empty-items" data-view="Facets.Items.Empty"></div>
		{{/if}}
	{{/ifEqualsOr}}

	<div id="banner-section-bottom" class="content-banner banner-section-bottom" data-cms-area="item_list_banner_bottom" data-cms-area-filters="page_type"></div>

</section>

<script>
jQuery(document).ready(function(){
	jQuery( ".facets-faceted-navigation-item-facet-group:nth-child(9)" ).nextAll().wrapAll( "<div class='newwrapper'>  </div>" );
	jQuery( ".facets-faceted-navigation-item-facet-group:nth-child(9)" ).after( "<div class='viewmorefilter' ><a><h4>Additional Filter</h4></a></div>" );
	jQuery(".viewmorefilter").hover(function(){$('.newwrapper').addClass("newwrapperv1" );});	
		jQuery(".newwrapper").prepend("<div class='newwraperpreappend'></div>");

	jQuery(".newwrapper").mouseleave(function(){$('.newwrapper').removeClass("newwrapperv1" );});
});
</script>



{{!----
Use the following context variables when customizing this template: 
	
	total (Number)
	isTotalProductsOne (Boolean)
	title (String)
	hasItemsAndFacets (Boolean)
	collapseHeader (Boolean)
	keywords (undefined)
	showResults (Boolean)
	isEmptyList (Boolean)
	isCategory (Boolean)
	showItems (Number)

----}}
