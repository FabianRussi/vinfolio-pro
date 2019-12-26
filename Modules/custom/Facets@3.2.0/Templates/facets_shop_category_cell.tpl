{{!
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
}}


<div class="facets-shop-category-cell col-sm-6">
	{{#ifEquals parentCategoryId 4}}
		{{#if hasImage}}
			{{#if showImage}}
			<div class="facets-category-shop-cell-thumbnail">
				<a href="{{url}}" class="facets-category-cell-anchor">
					<img src="{{resizeImage image 'thumbnail'}}" alt="{{name}}" class="facets-category-cell-image">
				</a>
			</div>
			{{/if}}
		{{/if}}
		<div class="facets-category-shop-cell-title">
			<a href="{{url}}" class="facets-category-cell-anchor" {{#if target}}target="_blank"{{/if}}>
				{{name}}
			</a>
		</div>
	{{/ifEquals}}

	{{#ifEquals parentCategoryId 6}}
	<div class="facets-category-giftshop-cell-container">
		{{#if hasImage}}
			{{#if showImage}}
			<div class="facets-category-giftshop-cell-thumbnail">
				<a href="{{url}}" class="facets-category-cell-anchor">
					<img src="{{resizeImage image 'thumbnail'}}" alt="{{name}}" class="facets-category-cell-image">
				</a>
			</div>
			{{/if}}
		{{/if}}
		<div class="facets-category-giftshop-cell-title">
			<a href="{{url}}" class="facets-category-cell-anchor" {{#if target}}target="_blank"{{/if}}>
				{{name}}
			</a>
		</div>
	</div>
	{{/ifEquals}}
</div>


{{!----
The context variables for this template are not currently documented. Use the {{log this}} helper to view the context variables in the Console of your browser's developer tools.

----}}
