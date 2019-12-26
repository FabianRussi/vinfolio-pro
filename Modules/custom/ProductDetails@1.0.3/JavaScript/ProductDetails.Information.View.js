/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// @module ProductDetails
define(
	'ProductDetails.Information.View'
,	[
		'SC.Configuration'

	,	'product_details_information.tpl'

	,	'Backbone'
	,	'Utils'
	,	'underscore'
	]
,	function (
		Configuration

	,	product_details_information_tpl

	,	Backbone
	,	Utils
	,	_
	)
{
	'use strict';

	// @class ProductDetails.Information.View @extends Backbone.View
	return Backbone.View.extend({

		template: product_details_information_tpl

	,	events: {
			'click [data-action="show-more"]': 'showMore'
		,	'click [data-action="selected-tab"]': 'debouncedCheckContentHeight'
		}

		//@method initialize Override default method to allow passing pre-calculated details
		//@param {ProductDetails.Information.View.InitializationOptions} options
		//@return {Void}
	,	initialize: function initialize ()
		{
			Backbone.View.prototype.initialize.apply(this, arguments);
			this.details = this.options.details;
		}

	,	render: function ()
		{
			this.details = this.details || this.computeDetailsArea();

			this._render();

			if(!SC.isPageGenerator())
			{
				this.debouncedCheckContentHeight();
			}
		}

		// @method computeDetailsArea
		// Process what you have configured in itemDetails as item details.
		// In the PDP extra information can be shown based on the itemDetails property in the Shopping.Configuration.
		// These are extra field extracted from the item model
		//@return {Array<ProductDetails.Information.DataContainer>}
	,	computeDetailsArea: function ()
		{
			var self = this
			,	details = [];

			// Get custom reviews (Professional and Producers)
			var itemId = self.model.get('item').get('internalid');
			var reviewData = "";
			jQuery.ajax({
				dataType: "json",
				url: "/app/site/hosting/scriptlet.nl?script=customscript_get_item_stock&action=customreview&deploy=1&id="+itemId,
				data: '',
				async: false,
				success: function (jData){ reviewData = jData; }
			});

			_.each(Configuration.get('productDetailsInformation', []), function (item_information)
			{
				var content = '';

				if (item_information.contentFromKey)
				{
					if (item_information.contentFromKey && item_information.contentFromKey == 'customrecord_professional_review') 
					{
						content += '<div class="product-detail-content-text"><ul>';
						if(_.isEmpty(reviewData[0].profReviewList))
							content	+= _.translate('<li>No professional reviews available</li>');
						else
						{
							for(var i=0; reviewData[0].profReviewList!=null && i < reviewData[0].profReviewList.length; i++)
							{
								var profReview = reviewData[0].profReviewList[i];
								var source	= (profReview.source != "") ? profReview.source+' | ' : '';

								content	+= '<li>';
								content += '<h3>'+source+'Rating: '+profReview.rating+'</h3>';
								if(profReview.description!="")	content += '<div>'+profReview.description+'</div>';
								if(profReview.drinkdate!="")	content += '<div><strong>Drink Dates:</strong> '+profReview.drinkdate+'</div>';
								if(profReview.author!="")		content += '<div><strong>Author:</strong> '+profReview.author+' </div>';
								if(profReview.issuedate != "")	content += '<div><strong>Issue:</strong> '+profReview.issuedate+' </div>';
								content	+= '</li>';
							}
						}
						content += '</ul></div>';
					} 
					else if (item_information.contentFromKey && item_information.contentFromKey == 'customrecord_collectors_review') 
					{
						content = '';
						if(_.isEmpty(reviewData[1].prodReviewList))
							content	+= _.translate('<li>No collector reviews available</li>');
						else
						{
							content += '<div class="product-detail-content-text"><ul>';
							for(var i=0; reviewData[1].prodReviewList!=null && i < reviewData[1].prodReviewList.length; i++)
							{
								var prodReview = reviewData[1].prodReviewList[i];
								var source = (prodReview.source != "") ? prodReview.source+' | ' : ''
								content	+= '<li>';
								content += '<h3>'+source+'Rating: '+prodReview.rating+'</h3>';
								if(prodReview.description!="")	content += '<div>'+prodReview.description+'</div>';
								if(prodReview.drinkdate!="")	content += '<div><strong>Drink Dates:</strong> '+prodReview.drinkdate+'</div>';
								if(prodReview.author!="")		content += '<div><strong>Author:</strong> '+prodReview.author+' </div>';
								if(prodReview.issuedate!="")	content += '<div><strong>Issue:</strong> '+prodReview.issuedate+' </div>';
								content	+= '</li>';
							}
							content += '</ul></div>';
						}
					} 
					else 
					{
						content = self.model.get('item').get(item_information.contentFromKey);
					}
					
				}

				if (content && Utils.trim(content))
				{
					//@class ProductDetails.Information.DataContainer
					details.push({
						//@property {String} name
						name: item_information.name
						//@property {String} content Any string and event valid HTML is allowed
					,	content: content
						//@property {String} itemprop
					,	itemprop: item_information.itemprop
					});
					//@class ProductDetails.Information.View
				}
			});

			return details;
		}

	,	debouncedCheckContentHeight: function ()
		{
			return _.defer(_.bind(this.checkContentHeight, this));
		}

	,	checkContentHeight: function ()
		{
			var content_height = this.$('.active [data-type="information-content-text"]').height();
			if (content_height <= 370)
			{
				this.$('[data-type="information-content-text-actions"]').hide();
			}
			else
			{
				this.$('[data-type="information-content-text-actions"]').show();
			}
		}

		//@method showMore Toggle the content of an options, and change the label Show Less and Show More by adding a class
		//@return {Void}
	,	showMore: function ()
		{
			this.$('[data-type="information-content"]').toggleClass('show');
		}
		, showoptiosIgift: function(){
			//debugger;
	  var modelItem=SC.Application("Shopping")._layoutInstance.currentView.model;
		 var   itemtype= modelItem.get('item').get('itemtype');	 
		   if(itemtype=="GiftCert"){
	   var	showOptions=false;
	   }else{
		   showOptions=true;
	   }
	return showOptions
	  }

	,	getContext: function ()
		{
			return {
					//@property {Boolean} showInformation
					showInformation: this.details.length > 0
					//@property {Boolean} showHeader
				,	showHeader: this.details.length < 2
					//@property {Array<ProductDetails.Information.DataContainer>} details
				,	details: this.details
				,showOptions:this.showoptiosIgift()
			};
		}

	});
});


//@class ProductDetails.Information.View.InitializationOptions
//@property {Array<ProductDetails.Information.DataContainer>?} details
//@property {Product.Model} model
//