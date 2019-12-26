/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// @module Profile
define(
	'Profile.EmailPreferences.View'
,	[
		'SC.Configuration'
	,	'GlobalViews.Message.View'

	,   'Profile.Model'
	
	,	'profile_emailpreferences.tpl'

	,	'Backbone'
	,	'underscore'
	,	'jQuery'
	,	'Utils'
	]
,	function (
		Configuration
	,	GlobalViewsMessageView

	,   ProfileModel
		
	,	profile_emailpreferences_tpl

	,	Backbone
	,	_
	,	jQuery
	)
{
	'use strict';

	// @class Profile.EmailPreferences.View @extends Backbone.View
	return Backbone.View.extend({

		template: profile_emailpreferences_tpl
	,	title: _('Email Preferences').translate()
	,	page_header: _('Email Preferences').translate()
	,	attributes: {'class': 'ProfileEmailPreferencesView'}
	,	events: {
			'submit form': 'save'
		,	'change [data-type="unsubscribe-checkbox"]': 'unSubscribeAll'	
		}

		//@method getSelectedMenu
	,	getSelectedMenu: function ()
		{
			return 'emailpreferences';
		}
	,	unSubscribeAll: function (e)
		{
			var disabled = jQuery(e.target).prop('checked');
			
			if(disabled)
			{
				this.$('.uncheck-all').prop('checked', false);
				this.$('.uncheck-all').prop('disabled', true);
			}
			else
			{
				this.$('.uncheck-all').prop('disabled', false);
			}
			
		}
		//@method getBreadcrumbPages
	,	getBreadcrumbPages: function ()
		{
			return {
				text: this.title
			,	href: 'emailpreferences'
			};
		}

	,	showSuccess: function ()
		{
			if (this.$savingForm)
			{
				var campaignsubscriptions = this.model.get('campaignsubscriptions');
				this.showContent();
				var global_view_message = new GlobalViewsMessageView({
					message: _('Email Preferences successfully saved!').translate()
				,	type: 'success'
				,	closable: true
				});

				this.$('[data-type="alert-placeholder"]').append(global_view_message.render().$el.html());
			}
		}

	,	save: function (e)
		{
			e.preventDefault();
			
			var	$target = jQuery(e.target)
			,	props = $target.serializeObject()
			,   subscribeArray = []
			,   UnsubscribeArray = []
			,   preferenceArray = []
			,	marketingUnsubs
			,   uncheckAll 

			_.each(props, function(value,key)
				{
					if(key == 'unsubscribe')
					{ 
						marketingUnsubs = value
					} 
					else if($.isNumeric(key) && value == 'F')
					{
						UnsubscribeArray.push(key)
					}
					else if($.isNumeric(key) && value == 'T')
					{
						subscribeArray.push(key)
					}
					
				});
			//console.log('UnsubscribeArray',UnsubscribeArray);
			//console.log('subscribeArray',subscribeArray);
			//console.log('this.model',this.model)

			preferenceArray = {
			
				'subscribe' : subscribeArray,
				'unsubscribe' : UnsubscribeArray,
				'marketingUnsubs': marketingUnsubs
			}

			var parseFinal = JSON.stringify(preferenceArray)
			jQuery.ajax({
				dataType: "json",
				url: "/app/site/hosting/scriptlet.nl?script=1230&deploy=1",
				data: {subscription: parseFinal,action:'put',email:this.model.get('email')},
				method: 'POST',
				async: false,
				success: function ( res ){ 
					console.log(res);
				}
			});
		}

	,	resetForm: function (e)
		{
			e.preventDefault();
			this.showContent();
		}

		// if the user doesn't want email notifications we disable all the campaign's checkboxes
	,	emailSubscribeChange: function (e)
		{
			var disabled = jQuery(e.target).prop('checked');

			this.$('[data-type="subscription-checkbox"]').prop('disabled', !disabled);
		}

		// @method getContext @return Profile.EmailPreferences.View.Context
	,	getContext: function()
		{
			var campaign_subscriptions = this.model.get('campaignsubscriptions') || []		
			,    user_email = this.model.get('email')
			,    server_user 
			,    iterable_response
			,    emailList
			,    unsubscribedMessageTypeIds
			,    dailyOffersEm
			,	 dailyOffersPu
			,    spotOffersEm
			,    spotOffersPu
			,    specialOffersEm
			,    specialOffersPu
			,	 bordeauxEu
			,	 bordeauxPu
			,	 fineWineEventsEu
			,	 fineWineEventsPu
			,    vinfolioNewsEu
			,	 personalizedRecomEu
			, 	 personalizedRecomPu
			,	 yourCellarEu
			,	 yourWinesEu
			,	 yourWinesPu
			, 	 yourRemindeEu
			,	 yourRemindePu
			,	 emailCheckMgs = false
			jQuery.ajax({
				dataType: "json",
				url: "/app/site/hosting/scriptlet.nl?script=customscript_update_comm_pref&deploy=1",
				data: {email: user_email,action:'get'},
				method: 'GET',
				async: false,
				success: function ( res ){ 
					iterable_response = res;
				}
			});
			if(!_.isEmpty(iterable_response))
			{
				server_user = iterable_response.user.email
				unsubscribedMessageTypeIds = iterable_response.user.dataFields.unsubscribedMessageTypeIds
			}else{
				emailCheckMgs = true;
			}
			if(_.contains(unsubscribedMessageTypeIds, 13773)){dailyOffersEm = true;}
			if(_.contains(unsubscribedMessageTypeIds, 19777)){spotOffersEm = true;}
			if(_.contains(unsubscribedMessageTypeIds, 20734)){spotOffersPu = true;}
			if(_.contains(unsubscribedMessageTypeIds, 13776)){specialOffersEm = true;}
			if(_.contains(unsubscribedMessageTypeIds, 20735)){specialOffersPu= true;}
			if(_.contains(unsubscribedMessageTypeIds, 20729)){bordeauxEu = true;}
			if(_.contains(unsubscribedMessageTypeIds, 20736)){bordeauxPu = true;}
			if(_.contains(unsubscribedMessageTypeIds, 19780)){fineWineEventsEu = true;}
			if(_.contains(unsubscribedMessageTypeIds, 19778)){vinfolioNewsEu = true;}
			if(_.contains(unsubscribedMessageTypeIds, 20730)){personalizedRecomEu = true;}
			if(_.contains(unsubscribedMessageTypeIds, 20738)){personalizedRecomPu = true;}
			if(_.contains(unsubscribedMessageTypeIds, 20731)){yourCellarEu = true;}
			if(_.contains(unsubscribedMessageTypeIds, 20732)){yourWinesEu = true;}
			if(_.contains(unsubscribedMessageTypeIds, 20739)){yourWinesPu = true;}
			if(_.contains(unsubscribedMessageTypeIds, 20733)){yourRemindeEu = true;}
			if(_.contains(unsubscribedMessageTypeIds, 20740)){yourRemindePu = true;}

			// @class Profile.EmailPreferences.View.Context
			return {
				// @property {String} pageHeader 
				pageHeader: this.page_header
				// @property {Array} subscriptions 
			,	subscriptions: campaign_subscriptions
				// @property {Boolean} isEmailSuscribe 
			,	isEmailSuscribe: this.model.get('emailsubscribe') === 'T'
				// @property {Boolean} campaignSubscriptions
			,	campaignSubscriptions: !!(Configuration.get('siteSettings.campaignsubscriptions') && campaign_subscriptions.length)
				//@property {Boolean} showBackToAccount
			,	showBackToAccount: Configuration.get('siteSettings.sitetype') === 'STANDARD'

			,	user_email: server_user
			,  	iterable_response:iterable_response
			//,  	emailList:emailList
			//,  	unsubscribedMessageType:unsubscribedMessageType
			,  spotOffersEm:spotOffersEm
			,  spotOffersPu:spotOffersPu
			,  dailyOffersEm :dailyOffersEm
			,  dailyOffersPu : dailyOffersPu
			,  specialOffersEm :specialOffersEm
			,  specialOffersPu :specialOffersPu
			,  bordeauxEu :bordeauxEu
			,  bordeauxPu : bordeauxPu
			,  fineWineEventsEu : fineWineEventsEu
			,  emailCheckMgs : emailCheckMgs
			,  vinfolioNewsEu:vinfolioNewsEu
			,  personalizedRecomEu:personalizedRecomEu
			,  personalizedRecomPu:personalizedRecomPu
			,  yourCellarEu:yourCellarEu
			,  yourWinesEu:yourWinesEu
			,  yourWinesPu:yourWinesPu
			,  yourRemindeEu:yourRemindeEu
			,  yourRemindePu:yourRemindePu
			};
		}
	});
});