{{!
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
}}
<tr><td style="padding:0;{{#if livExError}}border: 5px solid #d0ecf6;{{/if}}"><table cellpadding="0" cellspacing="0" style="display: table;">
	<tr><td style="padding:0;display:table-cell;" colspan="5">
		{{#if livExError}}
		<div class="header-mini-cart-livex-error">{{livExErrorMessage}}</div>
		{{/if}}
	</tr></td>
<tr class="transaction-line-views-cell-navigable {{cellClassName}} item-{{itemId}}" data-id="{{itemId}}" data-item-type="{{itemType}}">
	<td class="transaction-line-views-cell-navigable-item-image" name="item-image">
		<img src="{{resizeImage thumbnail.url 'thumbnail'}}" alt="{{thumbnail.altimagetext}}">
	</td>
	<td class="transaction-line-views-cell-navigable-details" name="item-details">
		<p class="transaction-line-views-cell-navigable-product-name">
			{{#if isNavigable}}
				<a class="transaction-line-views-cell-navigable-product-title-anchor" {{{itemURLAttributes}}}>{{itemName}}</a>
			{{else}}
				<span class="transaction-line-views-cell-navigable-product-title">
					{{itemName}}
				</span>
			{{/if}}
		</p>
		{{#ifEquals showBlockDetail2 false}}
		<p>
			<div data-view="Item.Price"></div>
		</p>
		{{/ifEquals}}
		{{#if isLivExItem}}
		<div data-view="Item.Sku"></div>
		{{/if}}
		{{#if owcpacksize}}
		<div>Case Size: {{owcpacksize}}</div>
		{{/if}}
		<div data-view="Item.Tax.Info"></div>
		{{#if showOptions}}
			<div data-view="Item.Options"></div>
		{{/if}}
		<p>
			<span class="transaction-line-views-cell-navigable-stock" data-view="ItemViews.Stock.View">
		</p>

		<div data-view="StockDescription"></div>
	</td>
	<td class="transaction-line-views-cell-navigable-item-unit-price" name="item-totalprice">
	{{#if showBlockDetail2}}
		<p>
		{{#if showDetail2Title}}
			<span class="transaction-line-views-cell-navigable-item-unit-price-label">{{detail2Title}} </span>
		{{/if}}
		<span class="transaction-line-views-cell-navigable-item-reason-value">{{detail2}}</span>
		</p>
	{{/if}}
	</td>
	<td class="transaction-line-views-cell-navigable-item-quantity" name="item-quantity">
		<p>
			<span class="transaction-line-views-cell-navigable-item-quantity-label">
				{{#if isLivExItem}}{{translate 'Case Qty'}}{{else}}{{translate 'Qty'}}{{/if}} </span>
			<span class="transaction-line-views-cell-navigable-item-quantity-value">{{quantity}}</span>
		</p>
	</td>
	<td class="transaction-line-views-cell-navigable-amount" name="item-amount">
		<p>
		{{#if showDetail3Title}}
			<span class="transaction-line-views-cell-navigable-item-amount-label">{{detail3Title}} </span>
		{{/if}}
		<span class="transaction-line-views-cell-navigable-item-amount-value">{{detail3}}</span>
		{{#if showComparePrice}}
			<small class="transaction-line-views-cell-navigable-item-old-price">{{comparePriceFormatted}}</small>
		{{/if}}
		</p>
	</td>
</tr>

</table></td></tr>



{{!----
Use the following context variables when customizing this template:

	model (Object)
	model.item (Object)
	model.item.internalid (Number)
	model.item.type (String)
	model.quantity (Number)
	model.internalid (String)
	model.options (Array)
	model.shipaddress (undefined)
	model.shipmethod (undefined)
	model.location (String)
	model.fulfillmentChoice (String)
	itemId (Number)
	itemName (String)
	isNavigable (Boolean)
	rateFormatted (String)
	showOptions (Boolean)
	itemURLAttributes (String)
	quantity (Number)
	showDetail2Title (Boolean)
	detail2Title (String)
	detail2 (String)
	showBlockDetail2 (Boolean)
	showDetail3Title (Boolean)
	detail3Title (String)
	detail3 (String)
	showComparePrice (Boolean)
	comparePriceFormatted (String)
	thumbnail (Object)
	thumbnail.url (String)
	thumbnail.altimagetext (String)

----}}
