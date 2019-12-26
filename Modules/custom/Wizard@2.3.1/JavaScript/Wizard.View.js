/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// @module Wizard
define(
	'Wizard.View'
,	[
		'wizard.tpl'
	,	'Backbone'
	,	'Backbone.CompositeView'
	,	'Wizard.StepNavigation.View'
	,	'LivexResponse.View'
	]
,	function (
		wizard_tpl
	,	Backbone
	,	BackboneCompositeView
	,	WizardStepNavigationView
	,	LivexResponseView
	)
{
	'use strict';

	// @class Wizard.View  Frame component, Renders the steps @extends Backbone.View
	return Backbone.View.extend({

		template: wizard_tpl

    ,   attributes: {
            'id': 'wizard'
        }

	,	events: {
			'click [data-action="previous-step"]': 'previousStep'
		,	'click [data-action="submit-step"]': 'submit'
		}

	,	childViews:
		{
			'Wizard.StepNavigation': function()
			{
				return new WizardStepNavigationView({wizard: this.wizard});
			}
		}

	,	initialize: function (options)
		{
			this.wizard = options.wizard;
			this.currentStep = options.currentStep;
			BackboneCompositeView.add(this);
		}

	,	render: function ()
		{
			this.title = this.currentStep.getName();

			// Renders itself
			this._render();

			// Then Renders the current Step
			this.currentStep.render();

			// Then adds the step in the #wizard-content element of self
			this.$('#wizard-content').empty().append(this.currentStep.$el);
		}

		// @method showError handle error messages on each step so we disable the global ErrorManagment
	,	showError: function (message)
		{
			this.wizard.manageError(message);
		}

		// @method previousStep
	,	previousStep: function(e)
		{
			this.wizard.getCurrentStep().previousStep(e);
		}
		// @method getHeaderView
	,	getHeaderView: function ()
		{
			return this.wizard.getCurrentStep() && this.wizard.getCurrentStep().headerView;
		}
		// @method getHeaderViewOptions
	,	getHeaderViewOptions: function()
		{
			return this.wizard.getCurrentStep() && this.wizard.getCurrentStep().headerViewOptions && this.wizard.getCurrentStep().headerViewOptions();
		}
		// @method getFooterView
	,	getFooterView: function ()
		{
			return this.wizard.getCurrentStep() && this.wizard.getCurrentStep().footerView;
		}
		// @method getFooterViewOptions
	,	getFooterViewOptions: function()
		{
			return this.wizard.getCurrentStep() && this.wizard.getCurrentStep().footerViewOptions && this.wizard.getCurrentStep().footerViewOptions();
		}

	,	getPageDescription: function ()
		{
			return 'checkout - ' + (Backbone.history.fragment||'').split('?')[0]; //remove parameters - we don't want a variable value for site-page
		}

		//@method submit
	,	submit :function(e)
		{
			//console.log('this.wizard.getCurrentStep()',this.wizard)
			//console.log('this.wizard.getCurrentStep()',this.wizard.model.attributes.lines.models);
			if(this.wizard.isCurrentStepFirst()){
				//Get the lines and check if there are livex issues, create a popup that prevents the users to proceed to checkout
				var lines = this.wizard.model.attributes.lines;
				var livExErrorMessage = "";
				var itemID = new Array();
				var itemUrl = new Array();
				var itemName = new Array();
				var itemRemLine = new Array();
				var livExError = false;
				for( var j=0; j<lines.models.length; j++){

					var line = lines.models[j];
					var item = line.get('item');
					var custitem_livex_order_guid = item.get('custitem_livex_order_guid');
					var options = line.get('options');
					var livExresponse = line.get('livexresponse');
					var isLivExItem = false;
					var livExInternalErrorCode = "";
					var livExQuantity = 0;
					var livExBottlesInCase = 0;
					var name = item.get('_name');
					var url = item.get('_url');
					var matrix_parent = item.get('matrix_parent');
					var itemInternalId = item.id;
					var imageurl = item.getThumbnail().url;
					//Try to determine if the item is a livex item
					if(options && options.models){
						if(options.models.length>0){
							for(var i=0;i<options.models.length; i++){
								if(options.models[i].get('cartOptionId') == "custcol_vf_soldby"){
									var opVal = options.models[i].get('value');
									if(opVal.label =='LivEx'){
										isLivExItem = true;
										//Get the status from the livexresponse and the quantity
										if(livExresponse){
											//"{"orderStatus":null,"error":{"code":"V056","message":"GUID is not available or does not exist"},"status":"Bad Request","httpCode":"400","message":"Request was unsuccessful.","internalErrorCode":"R000","apiInfo":{"version":"1.0","timestamp":1564662796580,"provider":"Liv-ex"}}"
											var livExresponseJSON = JSON.parse(livExresponse);
											livExInternalErrorCode = livExresponseJSON.internalErrorCode;
											if(livExInternalErrorCode == 'R001' || livExInternalErrorCode == 'R002'){
												var livExOrderStatus = livExresponseJSON.orderStatus;
												if(livExOrderStatus.status && livExOrderStatus.status.length>0){
													livExBottlesInCase = livExOrderStatus.status[0].bottlesInCase;
													livExQuantity = livExOrderStatus.status[0].quantity;
													if(parseFloat(livExQuantity)< line.get('quantity')){
														itemID.push(itemInternalId);
														itemUrl.push(imageurl);
														itemName.push(name);
														itemRemLine.push(line);
														livExErrorMessage  += '<div><div style="width: 20%;display: inline-block;text-align: center;">'+
															'<img style="height:100px;" src="'+imageurl+'" alt=""></div>'+
															'<div style="width: 80%;display: inline-block;vertical-align: top;padding:20px;font-weight:bold;">'+name+'</div></div>';
														livExError = true;
													}else{
													}
												}
											}else{
												livExError = true;
												itemID.push(itemInternalId);
												itemUrl.push(imageurl);
												itemName.push(name);
												itemRemLine.push(line);
												livExErrorMessage  += '<div><div style="width: 20%;display: inline-block;text-align: center;">'+
													'<img style="height:100px;" src="'+imageurl+'" alt=""></div>'+
													'<div style="width: 80%;display: inline-block;vertical-align: top;padding:20px;font-weight:bold;">'+name+'</div></div>';
											}
										}
									}
								}
							}
						}
					}
				}
				//console.log('livExError',livExError)
				if(livExError){
					//console.log('line',line);
					//console.log('item',item)
					// Calling a custom created LivexResponseView
			        var view = new LivexResponseView({
			        	message: livExErrorMessage,             // passing the values to the view
			        	itemID: itemID,
			        	itemUrl: itemUrl,
			        	itemModel :this.wizard.model,
			        	itemLine :itemRemLine,
			        	itemName:itemName
			        });
			        // calling the layout to get the popup window.
			        this.options.application.getLayout().showInModal(view);
					//this.options.application.getLayout().showLivExErrorInModal(livExErrorMessage);
					return false;
				}
				this.wizard.getCurrentStep().submit(e);
			}else{
				this.wizard.getCurrentStep().submit(e);
			}
			if(this.wizard.getCurrentStep().stepGroup)
			{
				var step = this.wizard.getCurrentStep().stepGroup.name;
				if(step == 'Billing' || step == 'billing' || step == 'Review')
				{
					console.log(this.wizard.getCurrentStep().stepGroup.name)
				jQuery('.order-wizard-step-button-container .order-wizard-step-button-continue').removeClass('will_continueBtn');	
				jQuery('.order-wizard-step-button-container .order-wizard-step-button-continue').removeClass('store_styles');
				} 
			}
		}

		// @method getContext @return {Wizard.View.Context}
	,	getContext: function()
		{
			// @class Wizard.View.Context
			return {
				// @property {Boolean} showBreadcrumb
				showBreadcrumb: !this.wizard.getCurrentStep().hideBreadcrumb
				, stepGroup: this.wizard.getCurrentStep().stepGroup.name
			};
			// @class Wizard.View
		}

	});
});