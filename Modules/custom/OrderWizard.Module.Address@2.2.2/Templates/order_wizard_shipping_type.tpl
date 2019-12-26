{{!
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
}}

<div class="order-wizard-address-module-show-addresses-container order-wizard-address-module-shipping-type">
	<h5 class="web-shipping-type">{{model.__customFieldsMetadata.custbody_vf_shippingtypeonso.label}}</h5>
	<select name="custbody_vf_shippingtypeonso" id="custbody_vf_shippingtypeonso" data-acion="shipping-type">
		<option value="">{{translate 'Select Shipping Type'}}</option>
		{{#each shippingTypes}}
			<option 
			{{#if isActive}}selected{{/if}} 
			value="{{id}}">
				{{text}}
			</option>
		{{/each}}
	</select>
</div>
{{log shippingTypes}}
{{!----
The context variables for this template are not currently documented. Use the {{log this}} helper to view the context variables in the Console of your browser's developer tools.

----}}
