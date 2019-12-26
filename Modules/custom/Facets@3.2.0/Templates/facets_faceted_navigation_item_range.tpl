{{!
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
}}

{{#if showFacet}}
	<div class="facets-faceted-navigation-item-range-facet-group facets-faceted-navigation-item-facet-group" id="{{htmlId}}" data-type="rendered-facet" data-facet-id="{{facetId}}">
		{{#if showHeading}}
			{{#if isUncollapsible}}
				<div class="facets-faceted-navigation-item-range-facet-group-expander">
					<h4 class="facets-faceted-navigation-item-range-facet-group-title facets-faceted-navigation-item-facet-group-title">
						{{facetDisplayName}}
						{{#if showRemoveLink}}
						<a class="facets-faceted-navigation-item-range-filter-delete" href="{{removeLink}}">
							<i class="facets-faceted-navigation-item-range-filter-delete-icon"></i>
						</a>
						{{/if}}
					</h4>
				</div>
			{{else}}
				<a href="#" class="facets-faceted-navigation-item-range-facet-group-expander" data-toggle="collapse" data-target="#{{htmlId}} facets-faceted-navigation-item-range-facet-group-wrapper facets-faceted-navigation-item-facet-group-wrapper" data-type="collapse" title="{{facetDisplayName}}">
					<i class="facets-faceted-navigation-item-range-facet-group-expander-icon"></i>
					<h4 class="facets-faceted-navigation-item-range-facet-group-title">{{facetDisplayName}}</h4>
					{{#if showRemoveLink}}
						<a class="facets-faceted-navigation-item-range-filter-delete" href="{{removeLink}}">
							<i class="facets-faceted-navigation-item-range-filter-delete-icon"></i>
						</a>
					{{/if}}
				</a>
			{{/if}}
		{{/if}}

	{{#if isUncollapsible}}
	<div class="facets-faceted-navigation-item-range-facet-group-wrapper facets-faceted-navigation-item-facet-group-wrapper price-filter">
	{{else}}
	<div class="facets-faceted-navigation-item-facet-group-wrapper facets-faceted-navigation-item-range-facet-group-wrapper price-filter {{#if isCollapsed}} collapse{{else}} in{{/if}}">
	{{/if}}
		<input type="text" class="facets-faceted-navigation-item-facet-option sliderValue" id="lowInput" placeholder="min" disabled>
		<span class='separator'> - </span>
		<input type="text"  class="facets-faceted-navigation-item-facet-option sliderValue" id="highInput"  placeholder="max"  disabled>
		<span class="facets-faceted-navigation-item-range-end slider-indicator" data-range-indicator="end">{{rangeToLabel}}</span>
		<span class="facets-faceted-navigation-item-range-start slider-indicator" data-range-indicator="start">{{rangeFromLabel}}</span>

		<div
			class="facets-faceted-navigation-item-range-slider"
			data-toggle="slider"
			data-facet-id="{{facetId}}"
			data-min="{{rangeMin}}"
			data-max="{{rangeMax}}"
			data-low="{{rangeFrom}}"
			data-high="{{rangeTo}}"
			data-slider-value="{{rangeMin}}"
			id="slider">
			
						<div class="facets-faceted-navigation-item-range-slider-bar" data-control="bar" style="left: 0%; width: 100%;"></div>
						<button class="facets-faceted-navigation-item-range-slider-bar-right" data-control="low" data-slider-value="{{rangeMin}}" style="left: 0%;"></button>
						<button class="facets-faceted-navigation-item-range-slider-bar-left" data-control="high" data-slider-value="{{rangeMax}}" style="left: 100%;"></button>
					</div>
		
		<div class="flex range">
		<span>${{rangeMin}}</span>
		<span>${{rangeMax}}</span>
		</div>
							
		<div class="flex submit">
		<button type="button" data-toggle="reset" id="reset" value="Clear">Clear</button>
		<button  type="button" data-toggle="apply" id="apply" value="Apply">Apply</button>
		</div>
	</div>
</div>
{{/if}}

<script>
var start =  $('.facets-faceted-navigation-item-range-slider-bar-right').attr("data-slider-value");
var end =  $('.facets-faceted-navigation-item-range-slider-bar-left').attr("data-slider-value");



$("#reset").click(function(e, slider){
console.log('reset')
$('.facets-faceted-navigation-item-range-slider-bar-right').css('left','0%');
$('.facets-faceted-navigation-item-range-slider-bar-left').css('left','100%');
$('.facets-faceted-navigation-item-range-slider-bar').css({
   'left' : '0%',
   'width' : '100%'
});
$('#lowInput').val('')
$('#highInput').val('')

$('.facets-faceted-navigation-item-range-slider').attr('data-low', start)
$('.facets-faceted-navigation-item-range-slider').attr('data-high', end)

$('span[data-range-indicator="start"]').html('$'+ start).end()
$('span[data-range-indicator="end"]').html('$'+ end)
});



</script>


{{!----
Use the following context variables when customizing this template: 
	
	htmlId (String)
	facetId (String)
	showFacet (Boolean)
	showHeading (Boolean)
	isUncollapsible (Boolean)
	isCollapsed (Boolean)
	isMultiSelect (Boolean)
	showRemoveLink (Boolean)
	removeLink (String)
	facetDisplayName (String)
	values (Array)
	extraValues (Array)
	showExtraValues (Boolean)
	isRange (Boolean)
	rangeValues (Array)
	rangeMin (Number)
	rangeMax (Number)
	rangeFrom (Number)
	rangeFromLabel (String)
	rangeTo (Number)
	rangeToLabel (String)

----}}
