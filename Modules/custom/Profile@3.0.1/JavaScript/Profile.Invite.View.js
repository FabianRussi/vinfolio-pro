/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// @module Profile
define(
	'Profile.Invite.View'
,	[
		'SC.Configuration'
	,	'GlobalViews.Message.View'
	
	,	'profile_invite.tpl'

	,	'Backbone'
	,	'underscore'
	,	'jQuery'
	,	'Utils'
	]
,	function (
		Configuration
	,	GlobalViewsMessageView
		
	,	profile_invite_tpl

	,	Backbone
	,	_
	,	jQuery
	)
{
	'use strict';

	// @class Profile.Invite.View @extends Backbone.View
	return Backbone.View.extend({

		template: profile_invite_tpl
	,	title: _('Invite').translate()
	,	page_header: ''
	,	attributes: {'class': 'ProfileInviteView'}

		//@method getSelectedMenu
	,	getSelectedMenu: function ()
		{
			return 'invite';
		}
		//@method getBreadcrumbPages
	,	getBreadcrumbPages: function ()
		{
			return {
				text: this.title
			,	href: 'invite'
			};
		}

		// @method getContext @return Profile.Invite.View.Context
	,	getContext: function()
		{
			// @class Profile.Invite.View.Context
			return {
				// @property {String} pageHeader 
				pageHeader: this.page_header
			};
		}
	});
});