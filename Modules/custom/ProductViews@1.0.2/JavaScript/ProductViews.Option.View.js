/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// @module ProductViews
define(
	'ProductViews.Option.View'
,	[
		'SC.Configuration'
	,	'Product.SCASaleTypeView.View'

	,	'Backbone'
	,	'jQuery'
	,	'underscore'
	,	'bootstrap-datepicker'

	]
,	function (
		Configuration
	,	ProductSCASaleTypeView

	,	Backbone
	,	jQuery
	,	_
	)
{
	'use strict';

	//@class ProductViews.Option.View.initialize
	//@property {Transaction.Line.Model} line
	//@property {String} templateName As this view can be used to show options in all state (selected or to be selected) it is required to specify
	//what template should be used from the list of templates in configuration. If not value is given 'selector' is used, note that this value
	//is used to select option (in the PDP for instance)
	//@property {Backbone.Model<Transaction.Line.Option.Model>} model

	// @class ProductViews.Option.View @extends Backbone.View
	return Backbone.View.extend({

		//@method initialize Set the option template and values availability
		//@param {ProductViews.Option.View.initialize} options
		//@return {Void}
		initialize: function (options)
		{
			this.config = _.findWhere(Configuration.get('ItemOptions.optionsConfiguration', []), {cartOptionId: this.model.get('cartOptionId')}) || {templates:{}};
			this.config.templates = this.config.templates || {};

			var item_options_default_templates = Configuration.get('ItemOptions.defaultTemplates', {});

			if (item_options_default_templates && item_options_default_templates.selectorByType)
			{
				// Sets templates for this option
				if (!this.config.templates.selector)
				{
					var option_selector_template = item_options_default_templates.selectorByType[this.model.get('type')]
					,	default_option_selector_template = item_options_default_templates.selectorByType['default'];

					this.config.templates.selector = option_selector_template || default_option_selector_template;
				}

				if (!this.config.templates.selected)
				{
					var option_selected_template = item_options_default_templates.selectedByType[this.model.get('type')]
					,	default_option_selected_template = item_options_default_templates.selectedByType['default'];

					this.config.templates.selected = option_selected_template || default_option_selected_template;
				}

				if (!this.config.templates.facetCell)
				{
					var option_facetcell_template = item_options_default_templates.facetCellByType[this.model.get('type')]
					,	default_option_facetcell_template = item_options_default_templates.facetCellByType['default'];

					this.config.templates.facetCell = option_facetcell_template || default_option_facetcell_template;
				}
			}

			this.options.templateName = this.options.templateName || 'selector';
			this.template =	this.config.templates[this.options.templateName];
			this.options = options;
		}

	,	events: {
				'click [name="custcol_vf_bottlesize"]': 'checkSelectedOptions'
			,	'click [name="custcol_vf_soldby"]': 'setSoldByOptions'
			,	'click [data-action="toggle-soldby"]' : 'toggleSoldbyOptions'
		}

	,	setSoldByOptions: function(e){
			//console.log("setSoldByOptions");
			var isSelected11 = jQuery('[name="custcol_vf_soldby"]').is(':checked');
			var target = e.currentTarget
			, 	soldbyVal = jQuery('[name=custcol_vf_soldby]:checked').val()
			,	soldbySelected		= jQuery('[name=custcol_vf_soldby]:checked').attr('data-label-'+soldbyVal)
			,   sizeVal				= jQuery('[name=custcol_vf_bottlesize]:checked').val()
			,	sizeSelected		= jQuery('[name=custcol_vf_bottlesize]:checked').attr('data-label-'+sizeVal)
			,   origin = this.options.origin

			var SoldOp = this.options.line.get('options');
				if(SoldOp && SoldOp.length>0){
					var soldoptions = _.find(SoldOp.models,function(o){ return o.get('cartOptionId') == "custcol_vf_soldby";});
					soldoptions.set('value', {internalid: soldbyVal, label: soldbySelected});
				}

			//looping through the unavailable sizes and muting them	
			if(this.options.unavailable_sizes.length > 0)
			{
				for(var v=0;v<this.options.unavailable_sizes.length;v++)
				{
					var unAvailSize = this.options.unavailable_sizes[v];							
					jQuery('[data-label-bottlesize='+unAvailSize+']').parent().addClass('hide-size') 
				}
				
			}	

			if(isSelected11)
			{
				//console.log(isSelected11)
				jQuery(target).parent().addClass('active').siblings().removeClass('active');
				var scalsaletype = target.getAttribute('data-label-scasaletype');
				//console.log("scalsaletype"+scalsaletype);
				if(!_.isUndefined(scalsaletype) && scalsaletype==2){
							jQuery('#show-tariff-communication').show();
						}else{
							jQuery('#show-tariff-communication').hide();
						}
				
				var itemQty = target.getAttribute('data-label-qty');
				if(itemQty < 2)
				{
					var qtyText = itemQty + ' bottle';
				}else{
					var qtyText = itemQty + ' bottles';
				}

				if( itemQty == 99999 ) qtyText = ''


				if(itemQty > 0)
				{
					var salePriceVal = target.getAttribute('data-label-sale-price-unformatted')
					,   actualPriceVal = target.getAttribute('data-label-price-unformatted')
					,   salePriceformatted = target.getAttribute('data-label-sale-price')
					,   actualPriceformatted =  target.getAttribute('data-label-price')
					,   sold_by = target.getAttribute('data-label-sold-by')


					jQuery('.soldby-selected').html( target.getAttribute('data-label') );

					if(Number(salePriceVal) > Number(actualPriceVal))
					{
						//console.log(salePriceVal)
					jQuery('.product-views-option-tile-price-selected').html( '<span class="actual-price-value">'+salePriceformatted+'</span> <span class="sale-price-value">'+actualPriceformatted+'</span> <span class="sold-by-per-bottel-small">per bottle</span>' );
					}
					else
					{
					jQuery('.product-views-option-tile-price-selected').html( target.getAttribute('data-label-price')+' <span class="sold-by-per-bottel-small">per bottle</span>' );
					}

					jQuery('.productdetail-ship-in-hour').html( qtyText + ' ' + target.getAttribute('data-label-ship-msg') );
					
					//console.log(sold_by)
					if(sold_by != 'LivEx')
					{
						if(origin == 'PDPQUICK')
						var qty = jQuery('#in-modal-quantity').val()
						else	
						var qty = jQuery('#quantity').val()

						jQuery('.product-details-quantity-options-title').html('Qty');


						var retail_itemTotal = Number(actualPriceVal)*Number(qty)
						var fixretail_itemTotal = retail_itemTotal.toFixed(2)
						var final_retail_itemTotal = fixretail_itemTotal.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')	
						//var retail_total = retail_itemTotal.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
							
						jQuery('.product-detail-total-price').html("$"+final_retail_itemTotal)
						
						var totalqty = parseFloat(qty);
						//jQuery('#bottlestext').html('('+totalqty +' bottles)' );
						
						if(origin == 'PDPQUICK')
						{
							if(totalqty<2)
							jQuery('#in-modal-bottlestext').html('('+totalqty +' bottle)' );
							else
							jQuery('#in-modal-bottlestext').html('('+totalqty +' bottles)' );	
					    
					    jQuery('.product-detail-quickview-casesize').hide();
						jQuery('.livex-notes-pdp').hide();
						}
						else
						{
							if(totalqty<2)
							jQuery('#bottlestext').html('('+totalqty +' bottle)' );
							else
							jQuery('#bottlestext').html('('+totalqty +' bottles)' );	
					  
						jQuery('.product-detail-casesize').hide();
						jQuery('.livex-notes-pdp').hide();
					    }	

						
					}
				}

			this.setCaseSizeOptions()	


			jQuery('#custcol_vf_owccase-container').hide();
			jQuery('#in-modal-custcol_vf_owccase-container').hide();

			if(origin == 'PDPQUICK')
			var detail=jQuery('#in-modal-custcol_vf_soldby-container');
			else
			var detail=jQuery('#custcol_vf_soldby-container');

			var match_size = detail.find('.custcol_vf_soldby-controls .product-views-option-soldby-label[data-label-custom='+sizeSelected+']')			

			setTimeout(function(){
				match_size.removeClass('muted')
					//jQuery(target).parent().siblings().removeClass('muted');
				},800);

			}
		}

	,	toggleSoldbyOptions: function() {
			jQuery(".product-views-option-tile-container-text").slideToggle();
		}

	,	sortJSONArray: function (jsObj, prop, asc) {
			jsObj = jsObj.sort(function(a, b) {
				if (asc) {
					return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
				} else {
					return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
				}
			});
			return jsObj;
		}

	,	getItemStock: function(itemIds) {
			var objItemQty = "";
			jQuery.ajax({
				dataType: "json",
				url: "/app/site/hosting/scriptlet.nl?script=customscript_get_item_stock&deploy=1",
				data: {item: JSON.stringify(itemIds)},
				method: 'POST',
				async: false,
				success: function ( res ){ objItemQty = res.itemList; }
			});

			return objItemQty;
		}

	,	getCustomList: function() {
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
	
	,	checkSelectedOptions: function(e){
			// Reset the total price content
			//jQuery(".product-detail-quickview-total-price").html("");
			var _self=this;
			var isSelected8 = jQuery('[name="custcol_vf_bottlesize"]').is(':checked');
			var sby=null;


			jQuery('#custcol_vf_owccase-container').hide();
			jQuery('#in-modal-custcol_vf_owccase-container').hide();

			if(isSelected8)
			{
				var sizeVal				= jQuery('[name=custcol_vf_bottlesize]:checked').val()
				,	sizeSelected		= jQuery('[name=custcol_vf_bottlesize]:checked').attr('data-label-'+sizeVal)
				,	soldbyVal			= jQuery('[name=custcol_vf_soldby]:checked').val()
				,	soldbySelected		= (soldbyVal) ? jQuery('[name=custcol_vf_soldby]:checked').attr('data-label') : ''
				,	soldbySelectedPrice	= (soldbyVal) ? jQuery('[name=custcol_vf_soldby]:checked').attr('data-label-price') : ''
				,	soldbySelectedQty	= (soldbyVal) ? jQuery('[name=custcol_vf_soldby]:checked').attr('data-label-qty') : ''
				,	soldbySelectedShipMsg= (soldbyVal) ? jQuery('[name=custcol_vf_soldby]:checked').attr('data-label-ship-msg') : ''
				,	activeSoldbyOptions = []
				,	itemFields			= this.options.item.get('_optionsDetails').fields
				,   totalCases = 0
				,   origin = this.options.origin

				for(var i=0; itemFields!=null && i<itemFields.length; i++)
				{
					if(itemFields[i].internalid == 'custcol_vf_soldby')
					{
						sby=itemFields[i];
						for(var v=0; itemFields[i].values != null && v < itemFields[i].values.length; v++)
						{
							var values = itemFields[i].values[v];
							if(values.internalid){
								activeSoldbyOptions.push(values);
							}
						}
					}
				}

				var objMatrixItem = this.options.item.get('matrixchilditems_detail');
				var optIndex = 0;


				var sizeOp = this.options.line.get('options');
				if(sizeOp && sizeOp.length>0){
					var sizeoptions = _.find(sizeOp.models,function(o){ return o.get('cartOptionId') == "custcol_vf_bottlesize";});
					sizeoptions.set('value', {internalid: sizeVal, label: sizeSelected});
				}

				//console.log(objMatrixItem)

				// Get custom list 'SCA Sale Type' values
				var viewSCASaleType = new ProductSCASaleTypeView;
				var objSCASaleTypes = viewSCASaleType.getCustomList('473');

				if(!_.isEmpty(activeSoldbyOptions))
				{
					var detail=jQuery('#custcol_vf_soldby-container');
					var solbyGroup=detail.length?detail.find('.custcol_vf_soldby-controls > .product-views-option-soldby-label'):jQuery('.custcol_vf_soldby-controls > .product-views-option-soldby-label');

					solbyGroup.addClass('muted')
					for(var i=0; objMatrixItem!=null && i<objMatrixItem.length; i++)
					{
						var bottleSize	= objMatrixItem[i].custitem_vf_bottlesize;

						if(bottleSize == sizeSelected)
						{
							var internalid		= objMatrixItem[i].internalid
							,	wineSource		= objMatrixItem[i].custitem_wine_source
							,	shippingMsg		= objMatrixItem[i].custitem_vf_shipping_message
							,	itemSKU			= objMatrixItem[i].itemid
							,	soldBy			= objMatrixItem[i].custitemvf_sold_by
							,	isSpecialOrderItem	= objMatrixItem[i].custitem_onlinewithoutpo
							,	price			= objMatrixItem[i].onlinecustomerprice_detail.onlinecustomerprice_formatted
							,	itemLocation	= objMatrixItem[i].custitem_web_location
							,	qtyAvailable	= objMatrixItem[i].quantityavailable
							,	caseSize		= !_.isUndefined(objMatrixItem[i].custitem_case_size) ? Number(objMatrixItem[i].custitem_case_size) : 0
							,	scaSaleTypeText	= objMatrixItem[i].custitem_vf_scasaletype
							,	scaSaleType		= ''
							,	liveExQty		= _.isUndefined( objMatrixItem[i].custitem_livex_prearrival_qty ) ? 0 : objMatrixItem[i].custitem_livex_prearrival_qty
							,	cartOptionId	= 'custcol_vf_soldby'
							,	soldbyLabel		= (wineSource != "" && !_.isUndefined(wineSource)) ? wineSource : soldBy
							,	shipQtyStorage	= ''
							//,	optionId		= activeSoldbyOptions[optIndex].internalid
							//,	optionLabel		= activeSoldbyOptions[optIndex].label

							,   shipDate        = objMatrixItem[i].custitem_shipping_lt_days
							,   expectedAvailableDate = objMatrixItem[i].custitem_expectedavail_date

							,    mdate
							,    formattedShipDate

							,    salePrice = objMatrixItem[i].pricelevel3_formatted

							,    priceUnformatted = objMatrixItem[i].onlinecustomerprice_detail.onlinecustomerprice
							,    custitem_livex_order_guid = objMatrixItem[i].custitem_livex_order_guid
							,    custitem_owcpacksize = objMatrixItem[i].custitem_owc_casesize
							,    salePriceUnformatted = objMatrixItem[i].pricelevel3
							,	listqtyAvailable	= objMatrixItem[i].custitem_livex_prearrival_qty
							

							if(expectedAvailableDate)
							{
								mdate = new Date(expectedAvailableDate)

								var days = shipDate * 60 * 60 * 24 * 1000;

								var sDate = new Date(mdate.getTime() + days);

						    formattedShipDate = sDate.toLocaleDateString()
						    //console.log(sDate.toLocaleDateString());

						  }

							// Get optionid from optionsDetails
							//-------------------------------------------------------------
							var soldby_options = _.findWhere(activeSoldbyOptions, {label: soldBy})
							,	optionId		= soldby_options.internalid
							,	optionLabel		= soldby_options.label;
							//-------------------------------------------------------------

							if(objSCASaleTypes != null && objSCASaleTypes.length > 0)
							{
								var list = _(objSCASaleTypes).find(function(x) {
											return x.name == scaSaleTypeText;
										});
								if(list){
									scaSaleType = Number(list.id);
								}
							}

							if(shippingMsg.indexOf('/') > -1){
								shipQtyStorage = shippingMsg.split('/');
								shipQtyStorage = shipQtyStorage[0];
							}


							var optionStr = soldbyLabel;
							var qty = 0;
							if( scaSaleType == 1 || scaSaleType == 4 || scaSaleType == 5 || scaSaleType == 8 ){
								qty = qtyAvailable;
								if(qty < 2)
								{
									if(salePriceUnformatted > priceUnformatted)
									optionStr	+= ' <span class="sale-price">'+salePrice+'</span> <span class="actual-price">'+price+'</span><span class="sold-by-per-bottel-small">per bottle</span> | '+qty+' bottle '+shipQtyStorage.toLowerCase();
									else
									optionStr	+= ' '+price+' <span class="sold-by-per-bottel-small">per bottle</span> | '+qty+' bottle '+shipQtyStorage.toLowerCase();
								}else
								{
									if(salePriceUnformatted > priceUnformatted)
									optionStr	+= ' <span class="sale-price">'+salePrice+'</span> <span class="actual-price">'+price+'</span> <span class="sold-by-per-bottel-small">per bottle</span> | '+qty+' bottles '+shipQtyStorage.toLowerCase();
									else
									optionStr	+= ' '+price+' <span class="sold-by-per-bottel-small">per bottle</span> | '+qty+' bottles '+shipQtyStorage.toLowerCase();
								}
							}
							else if( scaSaleType == 2 || scaSaleType == 3 || scaSaleType == 6 || scaSaleType == 7 ){
								qty = liveExQty;
								if(qty < 2)
								{
									if(salePriceUnformatted > priceUnformatted)
									optionStr	+= ' <span class="sale-price">'+salePrice+'</span> <span class="actual-price">'+price+'</span> <span class="sold-by-per-bottel-small">per bottle</span> | '+qty+' bottle '+shipQtyStorage.toLowerCase();
									else
									optionStr	+= ' '+price+' <span class="sold-by-per-bottel-small">per bottle</span> | '+qty+' bottle '+shipQtyStorage.toLowerCase();
								}else
								{
									if(salePriceUnformatted > priceUnformatted)
									optionStr	+= ' <span class="sale-price">'+salePrice+'</span> <span class="actual-price">'+price+'</span> <span class="sold-by-per-bottel-small">per bottle</span> | '+qty+' bottles '+shipQtyStorage.toLowerCase();
									else
									optionStr	+= ' '+price+' <span class="sold-by-per-bottel-small">per bottle</span> | '+qty+' bottles '+shipQtyStorage.toLowerCase();
								}
							}
if(scaSaleType==2){
		jQuery('.soldby-option-'+optionId).attr('data-label-scasaletype', "2");
}
							//console.log(optionStr)
							if(soldBy == 'LivEx')
							{
							var numberCase = Number(listqtyAvailable)
							totalCases += numberCase;	
							}
							

							//console.log(listqtyAvailable)
							//console.log(totalCases)
							//add shipdate as attribute to the input tags
							if(formattedShipDate)
							{
							jQuery('label[data-label-value="'+optionId+'"]').attr('data-label-ship-date', formattedShipDate);
							}
							jQuery('label[data-label-value="'+optionId+'"]').attr('data-label-ship-msg-only', shipQtyStorage.trim());
							
							/*if(totalCases <2)
							totalCases += ' case'
							else
							totalCases += ' cases'*/

							var bottle_price = Number(priceUnformatted)/Number(custitem_owcpacksize);
							//console.log(custitem_owcpacksize)
							var fix_bottle_price = bottle_price.toFixed(2)
							var bottle_price_final = fix_bottle_price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')

							var	livexStr = soldbyLabel;
							if(totalCases <2)
							livexStr += ' $'+bottle_price_final+' <span class="sold-by-per-bottel-small">per bottle</span> <br/> '+totalCases+' case '+shipQtyStorage.toLowerCase();						
							else									
							livexStr += ' $'+bottle_price_final+' <span class="sold-by-per-bottel-small">per bottle</span> <br/> '+totalCases+' cases '+shipQtyStorage.toLowerCase();						
							

							/*** Remove label/qty/price/shipping msg of previos selected item ***/
							jQuery('.product-views-option-soldby-label').removeClass('active');
							//console.log(jQuery('.custcol_vf_soldby-controls > label:not([data-label-qty-allow="0"]').length)
							//if(jQuery('.custcol_vf_soldby-controls > label:not([data-label-qty-allow="0"]').length > 1)
							//	jQuery('.case-size-custcol_casesize').removeClass('active')
							jQuery('.soldby-selected').html('');
							jQuery('.product-views-option-tile-price-selected').html('');
							var qtyText = qty + ' bottles';
							if( qty == 99999 ) qtyText = '';
							jQuery('.productdetail-ship-in-hour').html('');

							/*** Remove label/qty/price/shipping msg of previos selected item ***/

							if(Number(qty) > 0 || (scaSaleType == 2 && isSpecialOrderItem))
							{
								//console.log('optionId: ',optionId)

							
								if(soldBy != 'LivEx')
								jQuery(".span-"+optionId).html(optionStr);
								else
								jQuery(".span-"+optionId).html(livexStr);
									
									
								jQuery('.soldby-option-'+optionId).attr('data-label', soldbyLabel);
								jQuery('.soldby-option-'+optionId).attr('data-label-price', price);
								jQuery('.soldby-option-'+optionId).attr('data-label-sale-price', salePrice);
								jQuery('.soldby-option-'+optionId).attr('data-label-price-unformatted', priceUnformatted);
								jQuery('.soldby-option-'+optionId).attr('data-label-sale-price-unformatted', salePriceUnformatted);
								jQuery('.soldby-option-'+optionId).attr('data-label-qty', qty);
								jQuery('.soldby-option-'+optionId).attr('data-label-ship-msg', shippingMsg.toLowerCase().replace('/', " | "));
								jQuery('.soldby-option-'+optionId).attr('data-label-custitem_livex_order_guid', custitem_livex_order_guid);
								jQuery('.soldby-option-'+optionId).attr('data-label-custitem_owcpacksize', custitem_owcpacksize);
								jQuery('.soldby-option-'+optionId).attr('data-label-sold-by', soldBy);

								//listqtyAvailable
								if(caseSize > 0)
								{
									jQuery('.soldby-option-'+optionId).attr('data-radio-case-size', caseSize);
									jQuery('label[data-label-value="'+optionId+'"]').attr('data-label-case-size', caseSize);
								}
								else
								{
									jQuery('.soldby-option-'+optionId).attr('data-radio-case-size', 0);
									jQuery('label[data-label-value="'+optionId+'"]').attr('data-label-case-size', 0);
								}

								jQuery('label[data-label-value="'+optionId+'"]').show();
								jQuery('label[data-label-value="'+optionId+'"]').attr('data-label-qty-allow', qty);
								jQuery('label[data-label-value="'+optionId+'"]').attr('data-label-custitem_livex_prearrival_qty', listqtyAvailable);
								jQuery(".span-"+optionId).parent().removeClass('muted').attr('data-item-price',price.replace(/^\S/i,'')).attr('data-soldby-label',soldbyLabel);
							
							//jQuery('label[data-label-value="'+optionId+'"]').attr('data-label-custom', "custcol_vf_bottlesize-"+sizeSelected);								
							jQuery('label[data-label-value="'+optionId+'"]').attr('data-label-custom', sizeSelected);								
								
							}
							else
							{
								
							//	jQuery(".span-"+optionId).html(optionStr);

								if(soldBy != 'LivEx')
								jQuery(".span-"+optionId).html(optionStr);
								else
								jQuery(".span-"+optionId).html(livexStr);

								jQuery('.soldby-option-'+optionId).attr('data-label', soldbyLabel);
								jQuery('.soldby-option-'+optionId).attr('data-label-price', price);
								jQuery('.soldby-option-'+optionId).attr('data-label-sale-price', salePrice);
								jQuery('.soldby-option-'+optionId).attr('data-label-price-unformatted', priceUnformatted);
								jQuery('.soldby-option-'+optionId).attr('data-label-sale-price-unformatted', salePriceUnformatted);
								jQuery('.soldby-option-'+optionId).attr('data-label-qty', qty);
								jQuery('.soldby-option-'+optionId).attr('data-label-ship-msg', shippingMsg);
								jQuery('.soldby-option-'+optionId).attr('data-label-custitem_livex_order_guid', custitem_livex_order_guid);
								jQuery('.soldby-option-'+optionId).attr('data-label-custitem_owcpacksize', custitem_owcpacksize);

								if(caseSize > 0)
								{
									jQuery('.soldby-option-'+optionId).attr('data-radio-case-size', caseSize);
									jQuery('label[data-label-value="'+optionId+'"]').attr('data-label-case-size', caseSize);
								}
								else
								{
									jQuery('.soldby-option-'+optionId).attr('data-radio-case-size', '');
									jQuery('label[data-label-value="'+optionId+'"]').attr('data-label-case-size', '');
								}

								jQuery('label[data-label-value="'+optionId+'"]').hide();
								jQuery('label[data-label-value="'+optionId+'"]').attr('data-label-qty-allow', qty);
							}

							optIndex++;
						}
						
					}

				//hiding case sizes 0
				//jQuery('[data-label="label-custcol12"]').attr('value','10').hide()				
						
							
					//Sorting the options
					var sort_by_name = function(a, b) {
						
   							var aShipDate=$(a).attr('data-label-ship-date')
   							,   bShipDate=$(b).attr('data-label-ship-date')
   							,   aPrice=$(a).attr('data-item-price')
						    ,   bPrice=$(b).attr('data-item-price')
						    ,   aLabel=$(a).attr('data-soldby-label')
						    ,   bLabel=$(b).attr('data-soldby-label')
						    ,   aShipMsg = $(a).attr('data-label-ship-msg-only')
						    ,   bShipMsg = $(b).attr('data-label-ship-msg-only')

						    var aShip = new Date(aShipDate)
						    ,   bShip = new Date(bShipDate)				


						    var order=['PRODUCER','COLLECTOR']
        					var indA = order.indexOf( aLabel );
							var indB = order.indexOf( bLabel );


							var shipOrder=[aShipMsg,bShipMsg]
        					var shipind1 = shipOrder.indexOf(aShipMsg.trim());
							var shipind2 = shipOrder.indexOf(bShipMsg.trim());

							var shipAvbMsg = new Array();
							 shipAvbMsg [0] = 'In Vinfolio Storage';
							 shipAvbMsg [1] = 'In Stock';

							var shipindA = shipAvbMsg.indexOf(aShipMsg.trim());
							var shipindB = shipAvbMsg.indexOf(bShipMsg.trim());
						
						//if shipmsg is Vinfolio Storage or In Stock
						if(!_.isEmpty(aShipMsg) && !_.isEmpty(bShipMsg))
						{	

							//if first and second options are Storage or Instock
							if((shipindA == 1 && shipindB == 1) || (shipindA == 0 && shipindB == 0) || (shipindA == 0 && shipindB == 1) || (shipindA == 1 && shipindB == 0))
							{
								if(aPrice === bPrice)
								return (indA - indB);
								else
								return (aPrice - bPrice);
							}
							//if first option is Storage or Instock
							 if((shipindA == 0 || shipindA == 1) && (shipindB != 0 && shipindB != 1))
							{
								return (shipind1 - shipind2);
							}
							//if second option is Storage or Instock
							 if((shipindB == 0 || shipindB == 1) && (shipindA != 0 && shipindA != 1))
							{
								return (shipind2 - shipind1);								
							}

						}
			
						//if shipdate is not empty 	
						if(!_.isEmpty(aShipDate) && !_.isEmpty(bShipDate))
						{
							if(aShipDate !== bShipDate)
							return (aShip.getTime() - bShip.getTime());
						}
						//if shipdate is empty then we consider price for sorting 	
						if(_.isEmpty(aShipDate) || _.isEmpty(bShipDate))
						{
							if(aPrice !== bPrice)
							return (aPrice - bPrice);
						}	

        				//if shipdate is same then we need to sort based on lowest price
        				if(aShipDate === bShipDate)
        				{
        					if(aPrice !== bPrice)
        					return (aPrice - bPrice);
        				}
        				//if price is same then we need to sort based on Label
        				if(aPrice === bPrice)
        				{
        				return (indA - indB);
        				}

        				//return (aShip.getTime() - bShip.getTime());
        				//return (aShipDate - bShipDate);
        					
    				}

    				//var sortOptionsFinal = jQuery('.custcol_vf_soldby-controls .product-views-option-soldby-label:not([data-label-qty-allow="0"])').not('.muted');
   					//console.log(sortOptionsFinal)
   					var sortOptionsFinal = jQuery('.custcol_vf_soldby-controls .product-views-option-soldby-label:not([data-label-qty-allow="0"])').not('.muted');
   					
   					
   					/*if(sortOptionsFinal.length >  1)
   					var sorted = sortOptionsFinal.sort(sort_by_name);	
   					else*/
   					var sorted = solbyGroup.sort(sort_by_name);

					jQuery('.custcol_vf_soldby-controls').html(sorted);
					var sbyoptions=sby.values;
					var selected=_self.options.default_custcol11_option;
					setTimeout(function(){
						//var first=jQuery('.custcol_vf_soldby-controls .product-views-option-soldby-label').not('.muted');
						var first=jQuery('.custcol_vf_soldby-controls .product-views-option-soldby-label:not([data-label-qty-allow="0"])').not('.muted');
						var selFound=true;

						
					//first.eq(0).find('input[name="custcol_vf_soldby"]')[0].click();
					if(selFound&&first.length){
						var opt=first.eq(0).find('input[name="custcol_vf_soldby"]')[0];
						opt.checked=true;
						opt.dataset.active=true;
						opt.click();
						first.eq(0).find('input[name="custcol_vf_soldby"]').trigger('change')

					}

				},1100);


					if(origin == 'PDPQUICK')
					{
						jQuery('#in-modal-custcol_casesize-container').detach().appendTo('.product-detail-quickview-casesize.casesize');
						jQuery('.product-detail-quickview-casesize.casesize').show();
						jQuery('.product-detail-quickview-casesize.casesize .product-views-option-tile-label').html('Case size ');
						jQuery('.product-detail-quickview-casesize.casesize .product-views-option-tile-label').show();
						
					}else
					{


					///if()
					//{
						jQuery('#custcol_casesize-container').detach().appendTo('#item-case-active');
					//	jQuery('#custcol_vf_owccase-container').hide();
						jQuery('#custcol_casesize-container').show();
						jQuery('#item-case-active .product-views-option-tile-label').html('Case size ');
						jQuery('#item-case-active .product-views-option-tile-label').show();
					}	
						
					//}
				//	this.setCaseSizeOptions()

				}
				
				jQuery(".sold-by-option").show();
			}

			

		}


	,   setCaseSizeOptions: function()
	{
				var caseVal				= jQuery('[name=custcol_casesize]:checked').val()
				,	caseSelected		= jQuery('[name=custcol_casesize]:checked').attr('data-label-'+caseVal)
				,	sizeVal			= jQuery('[name=custcol_vf_bottlesize]:checked').val()
				,	sizeSelected		= jQuery('[name=custcol_vf_bottlesize]:checked').attr('data-label-'+sizeVal)
				,	soldbyVal			= jQuery('[name=custcol_vf_soldby]:checked').val()
				,	soldbySelected		= jQuery('[name=custcol_vf_soldby]:checked').attr('data-label-'+soldbyVal)
				,	activeCaseOptions = []
				,	itemFields			= this.options.item.get('_optionsDetails').fields
				,   totalCases = 0
				,   origin = this.options.origin
				,   options = this.model
				
				var sby=null;
				//console.log(itemFields)

				for(var i=0; itemFields!=null && i<itemFields.length; i++)
				{
					if(itemFields[i].internalid == 'custcol_casesize')
					{
						sby=itemFields[i];
						for(var v=0; itemFields[i].values != null && v < itemFields[i].values.length; v++)
						{
							var values = itemFields[i].values[v];
							if(values.internalid){
								activeCaseOptions.push(values);
							}
						}
					}
				}
				var objMatrixItem = this.options.item.get('matrixchilditems_detail');
				
				var sold_by_label = options.get('value').label

				//console.log(soldbySelected)
				var optIndex = 0;
				if(!_.isEmpty(activeCaseOptions))
				{
					for(var i=0; objMatrixItem!=null && i<objMatrixItem.length; i++)
					{
						var bottleSize	= objMatrixItem[i].custitem_vf_bottlesize
						,   bottleSoldBy = objMatrixItem[i].custitemvf_sold_by
						,   bottleCase = objMatrixItem[i].custitem_owc_casesize;
						
						if(bottleSize == sizeSelected && bottleSoldBy == soldbySelected)
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

							var op = this.options.line.get('options');
							if(op && op.length>0){
								var caseoptions = _.find(op.models,function(o){ return o.get('cartOptionId') == "custcol_casesize";});


							caseoptions.set('value', {internalid: optionId, label: optionLabel});
							

							var soldCount = jQuery('.custcol_vf_soldby-controls .product-views-option-soldby-label:not([data-label-qty-allow="0"])').not('.muted');
							//console.log(soldCount.length)
							if(soldCount.length == 1)
							{
							jQuery('.case-size-'+optionId+'').parent().addClass('active').siblings().removeClass('active');
								//console.log(jQuery('.custcol_vf_soldby-controls > label:not([data-label-qty-allow="0"]').length)
							}	

							var appendStr = wineSource;

							/*console.log(optionId)
							console.log(typeof(optionId))*/
							if(optionLabel == '0')
							jQuery('[data-label="label-custcol_casesize"]').attr('value',optionId).hide()				
							else
							jQuery('[data-label="label-custcol_casesize"]').attr('value',optionId).show()				
							
							//var livexSelected = jQuery('.case-size-custcol_casesize').hasClass('active')	
							//console.log(sold_by_label)
							//console.log(sBy)
						
							if(sold_by_label == 'LivEx')
							{
								if(sBy == 'LivEx')
								{
									/*var numberCase = Number(listqtyAvailable)
									totalCases += numberCase;*/

									var bottle_price = Number(priceUnformatted)/Number(custitem_owcpacksize);
									//console.log(custitem_owcpacksize)
									var fix_bottle_price = bottle_price.toFixed(2)
									var bottle_price_final = fix_bottle_price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
			
									//console.log(listqtyAvailable)
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

									//console.log(appendStr)
									var shpMsg = shippingMsg.toLowerCase().replace('/', " | ");
									jQuery('.productdetail-ship-in-hour').html( listqtyAvailable + ' ' + shpMsg );
									
									jQuery(".span-"+soldbyVal).html(appendStr);

									if(origin == 'PDPQUICK')
									var qty = jQuery('#in-modal-quantity').val()	
									else
									var qty = jQuery('#quantity').val()

									var itemTotal = Number(priceUnformatted)*Number(qty)
									var fixItemTotal = itemTotal.toFixed(2)
									var orderSubTotalFinal = fixItemTotal.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
				
									//console.log(orderSubTotalFinal)
									jQuery('.product-detail-total-price').html("$"+orderSubTotalFinal)
									
									var totalqty = parseFloat(qty) * parseFloat(bottleCase);
									
									if(origin == 'PDPQUICK')
									{
										if(totalqty<2)
										jQuery('#in-modal-bottlestext').html('('+totalqty +' bottle)' );
										else
										jQuery('#in-modal-bottlestext').html('('+totalqty +' bottles)' );	
										
										jQuery('.product-detail-quickview-casesize').show();
										jQuery('.livex-notes-pdp').show();
									}
									else
									{
										if(totalqty<2)
										jQuery('#bottlestext').html('('+totalqty +' bottle)' );
										else
										jQuery('#bottlestext').html('('+totalqty +' bottles)' );	
										
										jQuery('.product-detail-casesize').show();
										jQuery('.livex-notes-pdp').show();
									}
									
									
								}
								else
								{
									jQuery('.product-details-quantity-options-title').html('Qty');
								}
							}
							else
							{
								//console.log(listqtyAvailable)
								if(sBy == 'LivEx')
								{	
								var numberCase = Number(listqtyAvailable)
								totalCases += numberCase;

								//console.log(totalCases)

								var bottle_price = Number(priceUnformatted)/Number(custitem_owcpacksize);
								//console.log(custitem_owcpacksize)
								var fix_bottle_price = bottle_price.toFixed(2)
								var bottle_price_final = fix_bottle_price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')

								var	livexStr = wineSource;
								if(totalCases <2)
								livexStr += ' $'+bottle_price_final+' <span class="sold-by-per-bottel-small">per bottle</span> <br/> '+totalCases+' case '+shipQtyStorage.toLowerCase();						
								else									
								livexStr += ' $'+bottle_price_final+' <span class="sold-by-per-bottel-small">per bottle</span> <br/> '+totalCases+' cases '+shipQtyStorage.toLowerCase();						
								
								//console.log(livexStr)
								jQuery(".span-"+soldbyVal).html(livexStr);
								}
							}		

						}

						}
					}
				}

	}		

	//,	validateItemOptions: function()

		//@method getContext
		//@returns {ProductViews.Option.View.Context}

		, showoptiosIgift: function(){

			var modelItem=SC.Application("Shopping")._layoutInstance.currentView.model;
			   var   itemtype= modelItem.get('item').get('itemtype');	 
				 if(itemtype=="GiftCert"){
			 var	showOptions=false;
			 }else{
				 showOptions=true;
			 }
		  return showOptions
			}
	,	getContext: function()
		{
			//console.log("333===>>>"+JSON.stringify(this.options.item.get('matrixchilditems_detail')));

			// START : DEV - Set/selected the first bottle size (custcol8) option
			if( this.options.default_custcol8_option != null && !_.isUndefined(this.options.default_custcol8_option) && !_.isUndefined(this.model.get('cartOptionId')) && this.model.get('cartOptionId') == 'custcol_vf_bottlesize' && _.isEmpty(selected_value))
			{
				this.model.set('value', this.options.default_custcol8_option);
			}

			if( this.options.default_custcol11_option != null && !_.isUndefined(this.options.default_custcol11_option) && !_.isUndefined(this.model.get('cartOptionId')) && this.model.get('cartOptionId') == 'custcol_vf_soldby' && _.isEmpty(selected_value))
			{
				this.model.set('value', this.options.default_custcol11_option);
			}
			// END : DEV - Set/selected the first bottle size (custcol_vf_bottlesize) option

			var self = this
			,	selected_value = this.model.get('value') || {}
			,	item_option_id = this.model.get('itemOptionId')
			,	cart_option_id = this.model.get('cartOptionId')
			,	values = _.map(this.model.get('values'), function (value)
				{
					var color = ''
					,	is_color_tile = true
					,	image = {};

					if (self.model.get('colors'))
					{
						color = self.model.get('colors')[value.label] || self.model.get('colors').defaultColor;

						if (_.isObject(color))
						{
							image = color;
							color = '';
							is_color_tile = false;
						}
					}

					var custom_label = value.label
					if(cart_option_id == 'custcol_vf_bottlesize')
					{
						custom_label = value.label+' <div style="text-transform: lowercase; display: inline;">ml</div>'
						if(Number(value.label) > 1000)
							custom_label = parseFloat(Number(value.label)/1000)+' <div style="text-transform: uppercase; display: inline;">L</div>';
					}

					//@class ProductViews.Option.View.Value
					return {
						// @property {String} internalId
						internalId: value.internalid
						// @property {Boolean} isAvailable
					,	isAvailable: value.isAvailable
						// @property {String} url
					,	url: value.url
						// @property {String} label
					,	label: value.label
						// @property {String} customSizeLabel
					,	customSizeLabel: custom_label
						// @property {Boolean} isSizeOption
					,	isSizeOption: (item_option_id === 'custitem_vf_bottlesize')
						// @property {Boolean} isActive
					,	isActive: value.internalid == selected_value.internalid
						// @property {String} color
					,	color: color
						// @property {Boolean} isColorTile Indicate if a simple colored box should be shown or an image object is aimed
					,	isColorTile: is_color_tile
						// @property {Color.Configuration>|String} image
					,	image: image
						// @property {Boolean} isLightColor
					,	isLightColor: _.contains(Configuration.get('layout.lightColors',[]), value.label)
						// @property {String} 
					,	valuesItemOptionId: item_option_id
					,	isBottleSize: (cart_option_id === 'custcol_vf_bottlesize')
			
					};
					//@class ProductViews.Option.View
				});

			// @class ProductViews.Option.View.Context
			return {
				// @property {Transaction.Line.Option.Model} model
				model: this.model
				// @property {Array<ItemOptions.Option.View.Value>} values
			,	values: values
				// @property {Boolean} showSelectedValue
			,	showSelectedValue: !!selected_value
				// @propery {Boolean} showRequiredLabel
			,	showRequiredLabel: this.options.show_required_label && this.model.get('isMandatory')
				// @property {String} itemOptionId
			,	itemOptionId: this.model.get('itemOptionId')
				// @property {String} cartOptionId
			,	cartOptionId: this.model.get('cartOptionId')
				// @property {String} label
			,	label: this.model.get('label')
				// @property {ItemViews.Option.View.Option} selectedValue
			,	selectedValue: selected_value
				// @property {Boolean} isTextArea
			,	isTextArea: this.model.get('type') === 'textarea'
				// @property {Boolean} isEmail
			,	isEmail: this.model.get('type') === 'email'
				// @property {Boolean} isText
			,	isText: this.model.get('type') === 'text'
				// @property {Boolean} isCheckbox
			,	isCheckbox: this.model.get('type') === 'checkbox'
				// @property {Boolean} idDate
			,	isDate: this.model.get('type') === 'date'
				// @property {Boolean} isSelect
			,	isSelect: this.model.get('type') === 'select'
				// @property {String} showLabel
			,	showLabel: !this.options.hideLabel
				// @property {Boolean} showSmall
			,	showSmall: !!this.options.showSmall
				// @property {Boolean} isSoldBy
			,	isSoldBy: (this.model.get('itemOptionId') === 'custitemvf_sold_by')
			,	isCaseSize: (this.model.get('itemOptionId') === 'custcol_casesize')
			,   showOptions:this.showoptiosIgift()
			,   selectedInternalId: selected_value?selected_value.internalid:""
			
			};
			// @class ProductViews.Option.View
		}
	});
});
