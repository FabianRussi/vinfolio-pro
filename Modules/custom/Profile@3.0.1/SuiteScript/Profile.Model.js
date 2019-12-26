/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// @module Profile
// This file define the functions to be used on profile service
define(
	'Profile.Model'
,	[
		'SC.Model'
	,	'SC.Models.Init'
	,	'Utils'

	]
,	function (
		SCModel
	,	ModelsInit
	,	Utils

	)
{
	'use strict';

	return SCModel.extend({
		name: 'Profile'

	,	validation: {
			firstname: {required: true, msg: 'First Name is required'}

		// This code is commented temporally, because of the inconsistences between Checkout and My Account regarding the require data from profile information (Checkout can miss last name)
		,	lastname: {required: true, msg: 'Last Name is required'}

		,	email: {required: true, pattern: 'email', msg: 'Email is required'}
		,	confirm_email: {equalTo: 'email', msg: 'Emails must match'}
		}

	,	isSecure: Utils.isInCheckout(request)

	,	get: function ()
		{
			var profile = {};

			//You can get the profile information only if you are logged in.
			if (ModelsInit.session.isLoggedIn2() && this.isSecure)
			{

				//Define the fields to be returned
				this.fields = this.fields || ['isperson', 'email', 'internalid', 'name', 'overduebalance', 'phoneinfo', 'companyname', 'firstname', 'lastname', 'middlename', 'emailsubscribe', 'campaignsubscriptions', 'paymentterms', 'creditlimit', 'balance', 'creditholdoverride'];

				profile = ModelsInit.customer.getFieldValues(this.fields);

				//Make some attributes more friendly to the response
				profile.phone = profile.phoneinfo.phone;
				profile.altphone = profile.phoneinfo.altphone;
				profile.fax = profile.phoneinfo.fax;
				profile.type = profile.isperson ? 'INDIVIDUAL' : 'COMPANY';

				profile.creditlimit = parseFloat(profile.creditlimit || 0);
				profile.creditlimit_formatted = Utils.formatCurrency(profile.creditlimit);

				profile.balance = parseFloat(profile.balance || 0);
				profile.balance_formatted = Utils.formatCurrency(profile.balance);

				profile.balance_available = profile.creditlimit - profile.balance;
				profile.balance_available_formatted = Utils.formatCurrency(profile.balance_available);
			}
			else
			{
				profile = ModelsInit.customer.getFieldValues(['addressbook', 'balance', 'campaignsubscriptions', 'companyname', 'creditcards', 'creditholdoverride', 'creditlimit', 'email', 'emailsubscribe', 'firstname', 'internalid', 'isperson', 'lastname', 'middlename', 'name', 'paymentterms', 'phoneinfo', 'vatregistration']);

				profile.isLoggedIn = ModelsInit.session.isLoggedIn2() ? 'T' : 'F';
				profile.isRecognized = ModelsInit.session.isRecognized() ? 'T' : 'F';
				profile.isGuest = ModelsInit.customer.isGuest() ? 'T' : 'F';
				profile.priceLevel = ModelsInit.session.getShopperPriceLevel().internalid ? ModelsInit.session.getShopperPriceLevel().internalid : ModelsInit.session.getSiteSettings('defaultpricelevel');

				profile.internalid = nlapiGetUser() + '';
			}

			profile.isGuest = ModelsInit.customer.isGuest() ? 'T' : 'F';
			profile.subsidiary = ModelsInit.session.getShopperSubsidiary();
			profile.language = ModelsInit.session.getShopperLanguageLocale();
			profile.currency = ModelsInit.session.getShopperCurrency();
			profile.priceLevel = ModelsInit.session.getShopperPriceLevel().internalid ? ModelsInit.session.getShopperPriceLevel().internalid : ModelsInit.session.getSiteSettings(['defaultpricelevel']).defaultpricelevel;

			return profile;
		}

	,	update: function (data)
		{
			// ----- START : collector profile update -----
			var collectorProfile = {"custentity_collector_profile_france":data.custentity_collector_profile_france,"custentity_collector_profile_italy":data.custentity_collector_profile_italy,"custentity_c_profile_newworld":data.custentity_c_profile_newworld,"custentity_c_profile_other":data.custentity_c_profile_other,"custentity_cp_burgundy":data.custentity_cp_burgundy,"custentity_cp_other_france":data.custentity_cp_other_france,"custentity_cp_other_new_world":data.custentity_cp_other_new_world};

			var jsonData = JSON.stringify(collectorProfile)
			, headers  = new Array()
			, responsebody  = ""
			, stSuiteletUrl = "";

			stSuiteletUrl = nlapiResolveURL('SUITELET','customscript_update_collector_profile', 'customdeploy_update_collector_profile', true);
			stSuiteletUrl = stSuiteletUrl + '&userid=' + nlapiGetUser() + '&action=setcollectorprofile';
			headers['Content-Type'] = 'application/json';
			headers['User-Agent-x'] = 'SuiteScript-Call';

			//nlapiLogExecution('debug', 'stSuiteletUrl: ', stSuiteletUrl);
			nlapiLogExecution('debug', 'jsonData: ', jsonData);

			responsebody = nlapiRequestURL(stSuiteletUrl, jsonData, headers, 'POST');

			if (responsebody.getCode() == 200 ) {
				var tt = JSON.parse( responsebody.getBody() );
			} else {
				var ll = {'status': 'error',internalid:'Internal Error'};
			}
			// ----- END : collector profile update -----

			var login = nlapiGetLogin();

			if (data.current_password && data.password && data.password === data.confirm_password)
			{
				//Updating password
				return login.changePassword(data.current_password, data.password);
			}

			this.currentSettings = ModelsInit.customer.getFieldValues();

			//Define the customer to be updated

			var customerUpdate = {
				internalid: parseInt(nlapiGetUser(), 10)
			};

			//Assign the values to the customer to be updated

			customerUpdate.firstname = data.firstname;
			customerUpdate.firstname = data.firstname;

			if(data.lastname !== '')
			{
				customerUpdate.lastname = data.lastname;
			}

			if(this.currentSettings.lastname === data.lastname)
			{
				delete this.validation.lastname;
			}

			customerUpdate.companyname = data.companyname;


			customerUpdate.phoneinfo = {
					altphone: data.altphone
				,	phone: data.phone
				,	fax: data.fax
			};

			if(data.phone !== '')
			{
				customerUpdate.phone = data.phone;
			}

			if(this.currentSettings.phone === data.phone)
			{
				delete this.validation.phone;
			}

			customerUpdate.emailsubscribe = (data.emailsubscribe && data.emailsubscribe !== 'F') ? 'T' : 'F';

			if (!(this.currentSettings.companyname === '' || this.currentSettings.isperson || ModelsInit.session.getSiteSettings(['registration']).registration.companyfieldmandatory !== 'T'))
			{
				this.validation.companyname = {required: true, msg: 'Company Name is required'};
			}

			if (!this.currentSettings.isperson)
			{
				delete this.validation.firstname;
				delete this.validation.lastname;
			}

			//Updating customer data
			if (data.email && data.email !== this.currentSettings.email && data.email === data.confirm_email && data.isGuest === 'T')
				{
					customerUpdate.email = data.email;
				}
			else if (data.new_email && data.new_email === data.confirm_email && data.new_email !== this.currentSettings.email)
				{
				ModelsInit.session.login({
					email: data.email
				,	password: data.current_password
				});
				login.changeEmail(data.current_password, data.new_email, true);
			}

			// Patch to make the updateProfile call work when the user is not updating the email
			data.confirm_email = data.email;

			var findNewsletterSub = _.findWhere(data.campaignsubscriptions, {internalid: 4});
				if(findNewsletterSub.subscribed == true || findNewsletterSub.subscribed == 'T')
				{
					var currentDate = new Date()
					,   convertDate = currentDate.toISOString()

					//build request header and auth token
					var username = 'I8vzHhsaLSf0E1hfrjOLsj5xRFWi9hkI';
					var password = ''; // leave empty

					var auth = nlapiEncrypt(username+':'+password, 'base64');
					var headers = new Array();
					headers["Authorization"] = 'Basic '+auth;

					// Add Object
					var objectVariable = {
					  "batch": [
					      {
					      "type": "track",
					      "userId": ""+data.email+"", // USER EMAIL
					      "event": "AddToList",
					      "properties": {
					        "eventType": "106691",
					        "eventId": "106691",
					        "signupSource":"WEB"
					      },
					      "timestamp": ""+convertDate+""
					      }
					    ]
					};

					//make request
					var url = 'https://api.segment.io/v1/batch';

					var jsonString = JSON.stringify(objectVariable);
					var response = nlapiRequestURL(url,jsonString,headers,'PUT');
					console.log(jsonString)
					console.log(response.getBody())
				}

			this.validate(data);
			// check if this throws error
			ModelsInit.customer.updateProfile(customerUpdate);

			if (data.campaignsubscriptions)
			{
				ModelsInit.customer.updateCampaignSubscriptions(data.campaignsubscriptions);
			}

			return this.get();
		}
	});
});
