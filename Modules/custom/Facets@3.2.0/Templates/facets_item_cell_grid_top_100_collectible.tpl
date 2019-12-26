{{!
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
}}

<div class="product-100-cell">

	<div class="product-100-cell-img">
		<img src="{{resizeImage thumbnail.url 'thumbnail'}}" alt="{{thumbnail.altimagetext}}" itemprop="image">
		
		<div class="product-100-caption">
			<a href="{{top100CollItemURL}}">
			{{#if region}}<p><span class="product-100-cap-subtitle">{{translate 'Region'}}</span> {{producer}}</p>{{/if}}
			{{#if producer}}<p><span class="product-100-cap-subtitle">{{translate 'Producer'}}</span> {{producer}}</p>{{/if}}
			{{#if winename}}<p><span class="product-100-cap-subtitle">{{translate 'Wine Name'}}</span> {{winename}}</p>{{/if}}
			{{#if vintage}}<p><span class="product-100-cap-subtitle">{{translate 'Vintage'}}</span> {{vintage}}</p>{{/if}}
			</a>
		</div>
		
	</div>
	<div class="product-100-cell-title"><a href="{{top100CollItemURL}}">{{name}}</a></div>

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
