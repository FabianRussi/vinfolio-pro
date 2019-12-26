/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// @module Profile
define(
	'Profile.CollectorProfile.View'
,	[
		'SC.Configuration'
	,	'GlobalViews.Message.View'
	
	,	'profile_collectorprofile.tpl'

	,	'Backbone'
	,	'underscore'
	,	'jQuery'
	,	'Utils'
	]
,	function (
		Configuration
	,	GlobalViewsMessageView
		
	,	profile_collectorprofile_tpl

	,	Backbone
	,	_
	,	jQuery
	)
{
	'use strict';

	// @class Profile.CollectorProfile.View @extends Backbone.View
	return Backbone.View.extend({

		template: profile_collectorprofile_tpl
	,	title: _('Collector Profile').translate()
	,	page_header: _('Collector Profile').translate()
	,	attributes: {'class': 'ProfileCollectorProfileView'}
	,	events: {
			'submit form': 'save'
		,	'change form:has([data-action="reset"])': 'toggleReset'
		,	'click [data-action="reset"]': 'resetForm'
		,	'keyup form:has([data-action="reset"])': 'toggleReset'
		}

		//@method getSelectedMenu
	,	getSelectedMenu: function ()
		{
			return 'collectorprofile';
		}
		//@method getBreadcrumbPages
	,	getBreadcrumbPages: function ()
		{
			return {
				text: this.title
			,	href: 'collectorprofile'
			};
		}

	,	showSuccess: function ()
		{
			if (this.$savingForm)
			{
				this.showContent();
				var global_view_message = new GlobalViewsMessageView({
					message: _('Collector Profile successfully saved!').translate()
				,	type: 'success'
				,	closable: true
				});

				this.$('[data-type="alert-placeholder"]').append(global_view_message.render().$el.html());
			}
		}

	,	showSuccessMsg: function ()
		{

				this.showContent();
				var global_view_message = new GlobalViewsMessageView({
					message: _('Collector Profile successfully saved!').translate()
				,	type: 'success'
				,	closable: true
				});

				this.$('[data-type="alert-placeholder"]').append(global_view_message.render().$el.html());
		}

	,	save: function (e)
		{
			e.preventDefault();

			var	$target = jQuery(e.target)
			,	props = $target.serializeObject();
			
			var fixed_props = {
				custentity_collector_profile_france: props.custentity_collector_profile_france
			,	custentity_collector_profile_italy: props.custentity_collector_profile_italy
			,	custentity_c_profile_newworld: props.custentity_c_profile_newworld
			,	custentity_c_profile_other: props.custentity_c_profile_other
			,	custentity_cp_burgundy: props.custentity_cp_burgundy
			,	custentity_cp_other_france: props.custentity_cp_other_france
			,	custentity_cp_other_new_world: props.custentity_cp_other_new_world
			};

			/*
			console.log('props.custentity_collector_profile_france', props.custentity_collector_profile_france);
			
			var fr = (props.custentity_collector_profile_france && !_.isUndefined(props.custentity_collector_profile_france)) ? props.custentity_collector_profile_france.toString() : '';

			var res = '';
			jQuery.ajax({
				dataType: "json",
				url: "/app/site/hosting/scriptlet.nl?script=customscript_web_test_sl&action=setcollectorprofile&deploy=1",
				data: {'fr': fr},
				async: false,
				type: 'POST',
				success: function (jData){ if(jData && jData[0].id > 0){console.log('jData', jData); res=true;} }
			});

			if(res) { console.log('res', res); this.showSuccessMsg(); };
			*/

			this.saveForm(e, this.model, fixed_props);
		}

	,	resetForm: function (e)
		{
			e.preventDefault();
			this.showContent();
		}

		

		// @method getContext @return Profile.CollectorProfile.View.Context
	,	getContext: function()
		{
			// START: Get/Set collector profile details
			var collectorProfileData = "", france_list_arr = [], italy_list_arr = [], newworld_list_arr = [], other_list_arr = [], burgundy_list_arr = [], otherfrance_list_arr = [], othernewworld_list_arr = [];

			jQuery.ajax({
				dataType: "json",
				url: "/app/site/hosting/scriptlet.nl?script=customscript_get_item_stock&action=collectorprofile&deploy=1",
				data: '',
				async: false,
				success: function (jData){ collectorProfileData = jData; }
			});

			var france_list = collectorProfileData[0].france_list;
			var france_list_checked = collectorProfileData[7].profile_data.custentity_collector_profile_france;
			if(france_list)
			{
				_.each(france_list, function(obj){
					france_list_arr.push({'id': obj.id, 'name': obj.name, 'isChecked': france_list_checked.indexOf(obj.id) != -1});
				});
			}

			var italy_list = collectorProfileData[1].italy_list;
			var italy_list_checked = collectorProfileData[7].profile_data.custentity_collector_profile_italy;
			if(italy_list)
			{
				_.each(italy_list, function(obj){
					italy_list_arr.push({'id': obj.id, 'name': obj.name, 'isChecked': italy_list_checked.indexOf(obj.id) != -1});
				});
			}

			var newworld_list = collectorProfileData[2].newworld_list;
			var newworld_list_checked = collectorProfileData[7].profile_data.custentity_c_profile_newworld;
			if(newworld_list)
			{
				_.each(newworld_list, function(obj){
					newworld_list_arr.push({'id': obj.id, 'name': obj.name, 'isChecked': newworld_list_checked.indexOf(obj.id) != -1});
				});
			}

			var other_list = collectorProfileData[3].other_list;
			var other_list_checked = collectorProfileData[7].profile_data.custentity_c_profile_other;
			if(other_list)
			{
				_.each(other_list, function(obj){
					other_list_arr.push({'id': obj.id, 'name': obj.name, 'isChecked': other_list_checked.indexOf(obj.id) != -1});
				});
			}

			var burgundy_list = collectorProfileData[4].burgundy_list;
			var burgundy_list_checked = collectorProfileData[7].profile_data.custentity_cp_burgundy;
			if(burgundy_list)
			{
				_.each(burgundy_list, function(obj){
					burgundy_list_arr.push({'id': obj.id, 'name': obj.name, 'isChecked': burgundy_list_checked.indexOf(obj.id) != -1});
				});
			}

			var otherfrance_list = collectorProfileData[5].otherfrance_list;
			var otherfrance_list_checked = collectorProfileData[7].profile_data.custentity_cp_other_france;
			if(otherfrance_list)
			{
				_.each(otherfrance_list, function(obj){
					otherfrance_list_arr.push({'id': obj.id, 'name': obj.name, 'isChecked': otherfrance_list_checked.indexOf(obj.id) != -1});
				});
			}

			var othernewworld_list = collectorProfileData[6].othernewworld_list;
			var othernewworld_list_checked = collectorProfileData[7].profile_data.custentity_cp_other_new_world;
			if(othernewworld_list)
			{
				_.each(othernewworld_list, function(obj){
					othernewworld_list_arr.push({'id': obj.id, 'name': obj.name, 'isChecked': othernewworld_list_checked.indexOf(obj.id) != -1});
				});
			}
			// END: Get/Set collector profile details

			var campaign_subscriptions = this.model.get('campaignsubscriptions') || [];

			// @class Profile.CollectorProfile.View.Context
			return {
				// @property {String} pageHeader 
				pageHeader: this.page_header
				// @property {Array} franceList
			,	franceList: france_list_arr
				// @property {Array} italyList
			,	italyList: italy_list_arr
				// @property {Array} newworldList
			,	newworldList: newworld_list_arr
				// @property {Array} otherList
			,	otherList: other_list_arr
				// @property {Array} burgundyList
			,	burgundyList: burgundy_list_arr
				// @property {Array} otherfranceList
			,	otherfranceList: otherfrance_list_arr
				// @property {Array} othernewworldList
			,	othernewworldList: othernewworld_list_arr
			};
		}
	});
});