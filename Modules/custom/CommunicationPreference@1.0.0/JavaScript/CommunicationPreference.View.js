/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

//@module Home
define(
	'CommunicationPreference.View'
,	[
		'SC.Configuration'
	,	'GlobalViews.Message.View'

	,	'commpref.tpl'

	,	'Backbone'
	,	'underscore'
	,	'jQuery'
	,	'Utils'
	]
,	function (
		Configuration

	,	GlobalViewsMessageView
	,	commpref_tpl

	,	Backbone
	,	_
	,	jQuery
	
	//,	Utils
	)
{
	'use strict';

	//@module Home.View @extends Backbone.View
	return Backbone.View.extend({

		template: commpref_tpl

	,	title: _('Communication Preferences Center').translate()

	,	page_header: _('Communication Preferences Center').translate()

	/*,	attributes: {
			'id': 'home-page'
		,	'class': 'home-page'
		}*/

	,	events:
		{
			'submit form': 'save'
		,	'change [data-type="unsubscribe-checkbox"]': 'unSubscribeAll'	
		}

	,	initialize: function ()
		{
			var self = this;
		}

	,   TogglePopup: function (){
		thankYou.classList.toggle("visible");
		overlay.classList.toggle("visible");
	}
	
	,   TogglePopupSorry: function (){

		if ( document.getElementById('toggleSorry').checked = true){
		sorry.classList.toggle("visible");
		overlay.classList.toggle("visible");
		}
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
			,	current_url = $(location).attr('href')
			,   splitURL = current_url.split("email=")
			,    user_email = splitURL[1]

			var decodeUserEmail = decodeURIComponent(user_email)

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
		//	console.log('UnsubscribeArray',UnsubscribeArray);
		//	console.log('splitURL',splitURL);

			preferenceArray = {
				'subscribe' : subscribeArray,
				'unsubscribe' : UnsubscribeArray,
				'marketingUnsubs': marketingUnsubs
			}

		//	console.log(props)

			var parseFinal = JSON.stringify(preferenceArray)


			jQuery.ajax({
				dataType: "json",
				url: "/app/site/hosting/scriptlet.nl?script=1230&deploy=1",
				data: {subscription: parseFinal,action:'put',email:decodeUserEmail},
				method: 'POST',
				async: false,
				success: function ( res ){ 
					console.log(res);
				}
			});

		}	
		// @method getContext @return Home.View.Context
	,	getContext: function()
		{			
			var current_url = $(location).attr('href')
			//,   splitURL = current_url.split("email=")
			//,    user_email = splitURL[1]
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

			//var decodeUserEmail = decodeURIComponent(user_email) 
			//console.log(decodeUserEmail)

			var decodeCurrentUrl = decodeURIComponent(current_url)
			,   findEmailFromURL = decodeCurrentUrl.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi)
			,   emailFromURL = findEmailFromURL[0]
			
			jQuery.ajax({
				dataType: "json",
				url: "/app/site/hosting/scriptlet.nl?script=customscript_update_comm_pref&deploy=1",
				data: {email: emailFromURL,action:'get'},
				method: 'GET',
				async: false,
				success: function ( res ){ 
					iterable_response = res;
				}
			});

			if(!_.isEmpty(iterable_response))
			{
				try{
					server_user = iterable_response.user.email
					unsubscribedMessageTypeIds = iterable_response.user.dataFields.unsubscribedMessageTypeIds
				}catch(e){
					emailCheckMgs = true;
				}
				//unsubscribedMessageType = iterable_response.user.dataFields.unsubscribedMessageTypeIds
			}else{
				emailCheckMgs = true;
			}
			//console.log(unsubscribedMessageTypeIds)

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
			return {

				   user_email: server_user
				,  iterable_response:iterable_response
				//,  emailList:emailList
				//,  unsubscribedMessageType:unsubscribedMessageTypeIds
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
