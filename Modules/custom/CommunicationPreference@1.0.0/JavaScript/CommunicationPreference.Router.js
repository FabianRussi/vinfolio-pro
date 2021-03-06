/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

//@module Home
define(
	'CommunicationPreference.Router'
,	[
		'CommunicationPreference.View'

	,	'Backbone'
	]
,	function (
		CommunicationPreferenceView

	,	Backbone
	)
{
	'use strict';

	// @lass Home.Router @extends Backbone.Router
	return Backbone.Router.extend({

		routes: {
			'communication-preferences-center': 'commPage'
		,	'communication-preferences-center?*params': 'commPage'
		}

	,	initialize: function (Application)
		{
			this.application = Application;
		}

		// @method homePage dispatch the 'go to home page' route
	,	commPage: function ()
		{
			var view = new CommunicationPreferenceView({application: this.application});

			view.showContent();
		}
	});
});