/*
	© 2018 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/


define(
	'LivexResponse.View'
,	[
		
		'SC.Configuration'
	,	'Backbone'
	,	'Backbone.CompositeView'
	,   'livexresponse.tpl'
	,	'Session'
	,	'underscore'
	,	'jQuery'
	,	'Utils'

	
	,	'jquery.zoom'
	,	'jQuery.bxSlider'
	,	'jQuery.scPush'
	,	'jQuery.scSeeMoreLess'
	,	'jQuery.overflowing'
	]
,	function (
		Configuration
	,	Backbone
	,	BackboneCompositeView
	,   livexresponse_tpl
	,	Session
	,	_
	,	jQuery
	,	Utils
	
	)
{
	'use strict';	

	
	return Backbone.View.extend({
	//@template custom template declaration
		template: livexresponse_tpl

	,	events: {	
		    'click [data-action="remove-items"]': 'removeItem'
		/*,  'click [data-action="clock_wise"]': 'clock_wise'
		,  'click [data-action="reset_image"]': 'reset_image'*/
		}

		//@method initialize
		//@param {LivexResponse.View.Initialize.Parameters}
		//@return {Void}
	,	initialize: function (options)
		{
			this.application = options.application;
			this.showEstimated = false;

			BackboneCompositeView.add(this);
		}
		// @method removeItem
		// handles the click event of the remove button
		// removes the item from the cart model and saves it.
	,	removeItem: function removeItem(e)
		{
			var lineCount = this.options.itemID.length;
			var self = this
			var remove_promise;
			for(var i=0;i< lineCount ;i++){
				var product = this.options.itemLine[i];
				console.log(product);
				remove_promise = this.options.itemModel.removeLine(product);
				this.isRemoving = true;
				remove_promise.always(function ()
				{
					self.isRemoving = false;
				});
			}
			//console.log('remove_promise',remove_promise.status != 400)
			if(remove_promise.status != 400){
				self.custProceedToCheckout();
			}
		}
	,	custProceedToCheckout:function continue_checkout(){
		var continue_checkout = Session.get('touchpoints.checkout');
		window.location.href = continue_checkout;
	}
		//@method getContext
		//@return LivexResponse.View.Context
	,	getContext: function()
		{
			//console.log(this.application)
			var jsonData = [];
			var lineCount = this.options.itemID.length;
			for(var i=0;i< lineCount;i++){
				jsonData.push({ "internalId":this.options.itemID[i],"itemName":this.options.itemName[i] ,"imageUrl":this.options.itemUrl[i]});
			}
			//console.log('jsonData',jsonData)
			//@class LivexResponse.View.Context
			return {
				//@property {Boolean} showOption
				jsonData: jsonData
			};
		}
	
	});
});

//@class LivexResponse.View.Initialize.Parameters
//@property {String} baseUrl
