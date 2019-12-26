{{!
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
}}

<div id="{{cartOptionId}}-container" class="product-views-option-tile" data-type="option" data-cart-option-id="{{cartOptionId}}" data-item-option-id="{{itemOptionId}}">
	<div class="{{cartOptionId}}-controls-group" data-validation="control-group">
		{{#if isSoldBy}}
			<div class="sold-by-option">
				{{#if showLabel}}
					<label class="product-views-option-tile-label product-views-soldbymenu" data-action="toggle-soldby">
						{{label}}{{#if showSelectedValue}}: <span class="soldby-selected">{{selectedValue.label}}</span>
						{{/if}}
						{{#if showRequiredLabel}}<span class="product-views-option-tile-label-required">*</span>{{/if}}
						<br>
						<span class="product-views-option-tile-price-selected"><span>
					</label>
				{{/if}}

				<div class="{{cartOptionId}}-controls product-views-option-tile-container product-views-option-tile-container-text" data-validation="control">
					{{#each values}}
						{{#if internalId}}
							<label
							data-label="label-{{../cartOptionId}}" value="{{internalId}}" data-label-value="{{internalId}}"
							data-label-qty-allow="" data-label-case-size=""
							data-label-custom=""
							data-label-ship-msg-only=""
							data-label-ship-date="" class="product-views-option-soldby-label {{#if isActive}}active{{/if}} {{#if ../showSmall}}product-views-option-tile-picker-small{{/if}}" style="display: none">
								<input
								data-label-{{internalId}}="{{label}}"
									class="soldby-option-{{internalId}}"
									type="radio"
									name="{{../cartOptionId}}"
									data-action="changeOption"
									value="{{internalId}}"
									{{#if isActive}}checked{{/if}}
									data-label-sold-by=""
									data-toggle="set-option"
									data-active="{{isActive}}"
									data-available="{{isAvailable}}"
									data-label="{{label}}"
									data-label-price=""
									data-label-price-unformatted=""
									data-label-sale-price=""
									data-label-sale-price-unformatted=""
									data-label-qty=""
									data-radio-case-size=""
									data-label-ship-msg=""
									data-label-custitem_livex_order_guid = ""
									data-label-custitem_owcpacksize = ""/>
								<span class="span-{{internalId}}" style="font-size: 1rem; color: #4d5256;">{{label}}</span>
								{{#ifEquals internalId 61}}
								<span style="display: block;float: right;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.27 20.69" width="20px" height="24px"><defs><style>.cls-1{fill:#98813d;}</style></defs><path class="cls-1" d="M15.54,11.24a6.7,6.7,0,0,0-.82-3.4l-.27-.49a4.17,4.17,0,0,1-.72-1.83V3.37h0V1.78A.77.77,0,0,0,13,1h-.89a.76.76,0,0,0-.76.76V3.37h0V5.52a3,3,0,0,1-.45,1.34,3,3,0,0,1-.45-1.34V3.37h0V1.78A.76.76,0,0,0,9.69,1H8.8A.76.76,0,0,0,8,1.78V3.37h0V5.52a3,3,0,0,1-.44,1.34,3,3,0,0,1-.45-1.34V3.37h0V1.78A.76.76,0,0,0,6.41,1H5.52a.76.76,0,0,0-.76.76V3.37h0V5.52a4.25,4.25,0,0,1-.72,1.84L3.8,7.8A6.82,6.82,0,0,0,3,11.24H2.24v8h14.1v-8ZM12,1.78a.11.11,0,0,1,.12-.11H13a.11.11,0,0,1,.11.11v.94H12ZM11,8.19c.08-.16.17-.31.26-.46a4.73,4.73,0,0,0,.82-2.21V3.37H13V5.52a4.66,4.66,0,0,0,.82,2.2c.08.16.17.31.28.51a6.06,6.06,0,0,1,.71,3H10.27A6,6,0,0,1,11,8.19ZM8.69,1.78a.11.11,0,0,1,.11-.11h.89a.11.11,0,0,1,.12.11v.94H8.69Zm-1,6.41L8,7.73A4.73,4.73,0,0,0,8.8,5.52V3.37h.89V5.52a4.46,4.46,0,0,0,.77,2.11c0,.06-.07.12-.09.17a6.59,6.59,0,0,0-.85,3.44H7A6.2,6.2,0,0,1,7.72,8.19ZM5.4,1.78a.12.12,0,0,1,.12-.11h.89a.11.11,0,0,1,.11.11v.94H5.4Zm-1,6.41c.08-.16.17-.31.26-.46a4.73,4.73,0,0,0,.82-2.21V3.37h.89V5.52a4.46,4.46,0,0,0,.77,2.11l-.1.17a6.76,6.76,0,0,0-.84,3.44H3.7A6,6,0,0,1,4.44,8.19ZM3,12H6.23v2.87H3Zm0,3.64H6.23V18.5H3Zm12.6,2.87H7V15.63h8.61ZM7,14.86V12h8.61v2.87Z"></path><rect class="cls-1" x="9.61" y="12.9" width="3.38" height="1.04" rx="0.52">
								</rect></svg></span>
							{{/ifEquals}}
							</label>
							<!-- <br /> -->
						{{/if}}
					{{/each}}
				</div>
			</div>
		{{else}}
			{{#if showLabel}}
				<label class="product-views-option-tile-label" style="display: none;">
					{{label}}
					{{#if showSelectedValue}}
						: <span data-value="{{cartOptionId}}">{{selectedValue.label}}</span>
					{{/if}}
					{{#if showRequiredLabel}}<span class="product-views-option-tile-label-required">*</span>{{/if}}
				</label>
			{{/if}}
			<div class="{{cartOptionId}}-controls product-views-option-tile-container" data-validation="control">
				{{#each values}}
					{{#if internalId}}
						<label
						data-label="label-{{../cartOptionId}}" {{#if isCaseSize}}data-label-ship-msg-only=""{{/if}} value="{{internalId}}"
						class="{{#if isCaseSize}}case-size-{{../cartOptionId}}{{/if}} product-views-option-tile-picker {{#if isActive}}active{{/if}} {{#if ../showSmall}}product-views-option-tile-picker-small{{/if}}">
							<input
								class="{{#if isCaseSize}}case-size-{{internalId}}{{/if}} product-views-option-tile-input-picker"
								type="radio"
								name="{{../cartOptionId}}"
								data-action="changeOption"
								value="{{internalId}}"
								{{#if isActive}}checked{{/if}}
								data-toggle="set-option"
								data-active="{{isActive}}"
								data-available="{{isAvailable}}"
								data-label-{{internalId}}="{{label}}"
								data-label= "{{label}}"
								data-label-ship-msg=""
								{{#if isBottleSize}}data-label-bottlesize="{{label}}"{{/if}}
								data-label-price-unformatted=""
								data-label-sold-by=""/>
							{{#if isSizeOption}} {{{customSizeLabel}}} {{else}} {{label}} {{/if}}
						</label>
					{{/if}}
				{{/each}}
			</div>
		{{/if}}
	</div>
</div>


<script>
jQuery(document).ready(function(){
	// Triggered the checkSelectedOptions() function after page load and while returning from View Cart page
	jQuery( 'input[name="custcol_vf_bottlesize"]:radio:checked' ).click();

	// Triggered the setSoldByOptions() function after page load and while returning from View Cart page
	/*jQuery( 'input[name="custcol_vf_soldby"]:radio:checked' ).click();*/

	/*jQuery( 'input[name="custcol12"]:radio:checked' ).click();*/
});
</script>

<style>
/*  .picker-input, .product-views-option-facets-tile-input-picker, .product-views-option-tile-input-picker {opacity: 20; position: static;} */
</style>
{{!----
Use the following context variables when customizing this template:

	model (Object)
	model.cartOptionId (String)
	model.itemOptionId (String)
	model.label (String)
	model.type (String)
	values (Array)
	showSelectedValue (Boolean)
	showRequiredLabel (Boolean)
	itemOptionId (String)
	cartOptionId (String)
	label (String)
	selectedValue (Object)
	isTextArea (Boolean)
	isEmail (Boolean)
	isText (Boolean)
	isCheckbox (Boolean)
	isDate (Boolean)
	isSelect (Boolean)
	showLabel (Boolean)
	showSmall (Boolean)

----}}
