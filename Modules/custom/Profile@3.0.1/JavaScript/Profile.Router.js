/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// Profile.Router.js
// -----------------------
// Router for handling profile view/update
// @module Profile
define(
		'Profile.Router'
,	[	
		'Profile.UpdatePassword.View'
	,	'Profile.Information.View'
	,	'Profile.EmailPreferences.View'
	,	'Profile.CollectorProfile.View'
	,	'Profile.Invite.View'
	,	'OrderHistory.Collection'
	,	'Profile.UpdatePassword.Model'
	,	'Profile.Model'

	,	'Backbone'
	]
,	function (
		ProfileUpdatePasswordView
	,	ProfileInformationView
	,	ProfileEmailPreferencesView
	,	ProfileCollectorProfileView
	,	ProfileInviteView
	,	OrderHistoryCollection
	,	UpdatePasswordModel
	,	ProfileModel

	,	Backbone
	)
{
	'use strict';

	// @class Profile.Router @extends Backbone.Router
	return Backbone.Router.extend({

		routes: {
			'profileinformation': 'profileInformation'
		,	'emailpreferences': 'emailPreferences'
		,	'collectorprofile': 'collectorProfile'
		,	'invite': 'invite'
		,	'updateyourpassword': 'updateYourPassword'
		}

	,	initialize: function (application)
		{
			this.application = application;
		}

		// view/update profile information
	,	profileInformation: function ()
		{
			var view = new ProfileInformationView({
				application: this.application
			,	model: ProfileModel.getInstance()
			});

			view.useLayoutError = true;

			view.model.on('save', view.showSuccess, view);

			view.showContent();
		}


		// view/edit user's email preferences
	,	emailPreferences: function ()
		{
			var	view = new ProfileEmailPreferencesView({
				application: this.application
			,	model: ProfileModel.getInstance()
			});

			view.useLayoutError = true;

			view.model.on('save', view.showSuccess, view);

			view.showContent();
		}

		// view/edit user's collector profile data
	,	collectorProfile: function ()
		{
			var	view = new ProfileCollectorProfileView({
				application: this.application
			,	model: ProfileModel.getInstance()
			});

			view.useLayoutError = true;

			view.model.on('save', view.showSuccess, view);

			view.showContent();
		}

		// view/edit user's invite data
	,	invite: function ()
		{
			var	view = new ProfileInviteView({
				application: this.application
			,	model: ProfileModel.getInstance()
			});

			view.useLayoutError = true;

			view.showContent();
		}

		// update your password
	,	updateYourPassword: function ()
		{
			var model = new UpdatePasswordModel({});

			// merge the profile model into the UpdatePasswordModel
			model.set(ProfileModel.getInstance().attributes);

			var	view = new ProfileUpdatePasswordView({
				application: this.application
			,	model: model
			});

			view.useLayoutError = true;

			view.model.on('save', view.showSuccess, view);

			view.showContent();
		}
	});
});
