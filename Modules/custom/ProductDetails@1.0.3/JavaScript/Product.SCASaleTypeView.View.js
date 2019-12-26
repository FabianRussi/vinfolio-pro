/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

//@module Cart
define('Product.SCASaleTypeView.View'
,	[	
		'Backbone'
	,	'underscore'
	]
,	function (
		Backbone
	,	_
	)
{
	'use strict';

	//@class Cart.Item.Summary.View @extend Backbone.View
	return Backbone.View.extend({

		// @property {Function} template
		template: ''

		//@method initialize Defines this view as composite
   		//@return {Void}
	,	initialize: function ()
		{

		}

	,	getCustomList: function(list_id) {
			var objList = "";
			jQuery.ajax({
				dataType: "json",
				url: "/app/site/hosting/scriptlet.nl?script=customscript_get_item_stock&deploy=1",
				data: {action: 'customlist'},
				method: 'POST',
				async: false,
				success: function ( res ){ objList = res.customList; }
			});

			return objList;
		}

		// @method getContext
		// @return {Cart.Item.Summary.View.Context}
	,	getContext: function ()
		{
			
			//@class Cart.Item.Summary.View.Context
			return {
				
			};
			//@class Cart.Item.Summary.View
		}
	});
});
