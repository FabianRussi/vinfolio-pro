/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

//@module ProductDetails
define('ProductDetails.QuickView.View'
,	[
		'ProductDetails.Base.View'

	,	'product_details_quickview.tpl'

	,	'underscore'
	]
,	function (
		ProductDetailsBaseView

	,	product_details_quickview_tpl

	,	_
	)
{
	'use strict';

	//@class ProductDetails.QuickView.View Handles the PDP and quick view @extend Backbone.View
	return ProductDetailsBaseView.extend({

		//@property {Function} template
		template: product_details_quickview_tpl

		//@property {Object} attributes List of HTML attributes applied by Backbone into the $el
	,	attributes: {
			'id': 'ProductDetails.QuickView.View'
		,	'class': 'view product-detail'
		}

	,	bindings: _.extend({}, ProductDetailsBaseView.prototype.bindings, {})

	,	events: _.extend({}, ProductDetailsBaseView.prototype.events, {
			'click [data-action="go-to-fullview"]' : 'goToFullView'
			, 'click [name="custcol_casesize"]': 'quickviewSetCaseSizeOptions'
		})


	, quickviewSetCaseSizeOptions: function quickviewSetCaseSizeOptions(e)
	{
		var isSelected12 = jQuery('[name="custcol_casesize"]').is(':checked');
		var target = e.currentTarget;

		if(isSelected12)
			{
			var caseSelected = target.getAttribute('data-label')
			,	sizeVal			= jQuery('[name=custcol_vf_bottlesize]:checked').val()
			,	sizeSelected		= jQuery('[name=custcol_vf_bottlesize]:checked').attr('data-label-'+sizeVal)
			,	soldbyVal			= jQuery('[name=custcol_vf_soldby]:checked').val()
			,	soldbySelected		= jQuery('[name=custcol_vf_soldby]:checked').attr('data-label-'+soldbyVal)
			//,	itemFields			= this.model.get('options').item.get('_optionsDetails').fields
			,   itemFields = this.model.get('options').models
			,  activeCaseOptions= []

				for(var i=0; itemFields!=null && i<itemFields.length; i++)
				{
					var attr = itemFields[i].attributes

					if(attr.cartOptionId == 'custcol_casesize')
					{
						
					//	sby=itemFields[i];
						for(var v=0; attr.values != null && v < attr.values.length; v++)
						{
							var values = attr.values[v];
							if(values.internalid){
								activeCaseOptions.push(values);
							}
						}
					}
				}
				//console.log(activeCaseOptions)

				var objMatrixItem = this.model.get('item').get('matrixchilditems_detail');
				if(!_.isEmpty(activeCaseOptions))
				{
					
					for(var i=0; objMatrixItem!=null && i<objMatrixItem.length; i++)
					{
						var bottleSize	= objMatrixItem[i].custitem_vf_bottlesize
						,   bottleSoldBy = objMatrixItem[i].custitemvf_sold_by
						,   bottleCase = objMatrixItem[i].custitem_owc_casesize;

						if(bottleSize == sizeSelected && bottleSoldBy == soldbySelected && bottleCase == caseSelected)
						{
							var internalid		= objMatrixItem[i].internalid
							,	wineSource		= objMatrixItem[i].custitem_wine_source
							,	shippingMsg		= objMatrixItem[i].custitem_vf_shipping_message
							,	itemSKU			= objMatrixItem[i].itemid
							,	csoldBy			= objMatrixItem[i].custitem_owc_casesize
							,	sBy			= objMatrixItem[i].custitemvf_sold_by
							//,	isSpecialOrderItem	= objMatrixItem[i].custitem_onlinewithoutpo
							,	price			= objMatrixItem[i].onlinecustomerprice_detail.onlinecustomerprice_formatted
							,	itemLocation	= objMatrixItem[i].custitem_web_location
							,	listqtyAvailable	= objMatrixItem[i].custitem_livex_prearrival_qty
							,	caseSize		= !_.isUndefined(objMatrixItem[i].custitem_case_size) ? Number(objMatrixItem[i].custitem_case_size) : 0
							,	cartOptionId	= 'custcol_vf_soldby'

							,    salePrice = objMatrixItem[i].pricelevel3_formatted

							,    priceUnformatted = objMatrixItem[i].onlinecustomerprice_detail.onlinecustomerprice
							,    salePriceUnformatted = objMatrixItem[i].pricelevel3
							,	shipQtyStorage	= ''
							,	soldbyLabel		= (wineSource != "" && !_.isUndefined(wineSource)) ? wineSource : sBy
							,    custitem_owcpacksize = objMatrixItem[i].custitem_owc_casesize
							

							if(shippingMsg.indexOf('/') > -1){
								shipQtyStorage = shippingMsg.split('/');
								shipQtyStorage = shipQtyStorage[0];
							}

							// Get optionid from optionsDetails
							//-------------------------------------------------------------
							var soldby_options = _.findWhere(activeCaseOptions, {label: csoldBy})
							,	optionId		= soldby_options.internalid
							,	optionLabel		= soldby_options.label;
							//-------------------------------------------------------------
						
						var appendStr = soldbyLabel;
						if(sBy == 'LivEx')
						{
							jQuery('.case-size-'+optionId+'').parent().addClass('active').siblings().removeClass('active');
						
							var bottle_price = Number(priceUnformatted)/Number(custitem_owcpacksize);
							var fix_bottle_price = bottle_price.toFixed(2)
							var bottle_price_final = fix_bottle_price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
	

							if(listqtyAvailable<2)
							appendStr	+= ' $'+bottle_price_final+' <span class="sold-by-per-bottel-small">per bottle</span> <br/> '+listqtyAvailable+' case '+shipQtyStorage.toLowerCase();						
							else
							appendStr	+= ' $'+bottle_price_final+' <span class="sold-by-per-bottel-small">per bottle</span> <br/> '+listqtyAvailable+' cases '+shipQtyStorage.toLowerCase();						
							
							jQuery('.product-views-option-tile-price-selected').html(price+' <span class="sold-by-per-bottel-small">per case <br/>available by the case (owc)</span>' );							

							jQuery('.product-details-quantity-options-title').html('Case Qty');

							if(listqtyAvailable <2)
								listqtyAvailable += ' case'
							else
								listqtyAvailable += ' cases'
							
							var shpMsg = shippingMsg.toLowerCase().replace('/', " | ");
							jQuery('.productdetail-ship-in-hour').html( listqtyAvailable + ' ' + shpMsg );
							
							jQuery(".span-"+soldbyVal).html(appendStr);

							var qty = jQuery('#in-modal-quantity').val()

							var itemTotal = Number(priceUnformatted)*Number(qty)
							var fixItemTotal = itemTotal.toFixed(2)
							var orderSubTotalFinal = fixItemTotal.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
		
							//console.log(orderSubTotalFinal)
							jQuery('.product-detail-total-price').html("$"+orderSubTotalFinal)
							
							var totalqty = parseFloat(qty) * parseFloat(bottleCase);
							if(totalqty<2)
							jQuery('#in-modal-bottlestext').html('('+totalqty +' bottle)' );
							else
							jQuery('#in-modal-bottlestext').html('('+totalqty +' bottles)' );
							
						}
						else
						{
							jQuery('.product-details-quantity-options-title').html('Qty');
						}
					  }
					}
				}

			}

		//console.log(target)
	}
		//@method goToFullView Fix the url of the Full View link.
		//@param {jQuery.Event} e
		//@return {void}
	,	goToFullView: function goToFullView (e)
		{
			this.$(e.target).attr('href', this.model.generateURL());
		}

	,	childViews: _.extend({}, ProductDetailsBaseView.prototype.childViews, {

		})

		//@method getExtraChildrenOptions Allows adding extra option to the child view.
		//@return {ProductDetails.QuickView.View.ExtraChildrenOptions}
	,	getExtraChildrenOptions: function getExtraChildrenOptions ()
		{

			//@class ProductDetails.QuickView.View.ExtraChildrenOptions
			return {
				//@property {Boolean} isModal
				isModal: true
			};
			//@class ProductDetails.QuickView.View
		}

		//@method getContext
		//@return {ProductDetails.QuickView.View.Context}
	,	getContext: function ()
		{
			//@class ProductDetails.QuickView.View.Context @extend ProductDetails.Base.View.Context
			return _.extend(ProductDetailsBaseView.prototype.getContext.apply(this, arguments), {

			});
			//@class ProductDetails.QuickView.View
		}
	});
});
