/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// Categories.js
// -------------
// Utility Class to handle the Categories tree
define('Categories'
,	[
		'SC.Configuration'
	,	'underscore'
	]
,	function (
		Configuration
	,	_
	)
{
	'use strict';

	return {

		topLevelCategories: []

	,	makeNavigationTab: function (categories)
		{
			var result = []
			,	self = this;

			_.each(categories, function (category)
			{
				var href = category.fullurl
				,	external_url = _.trim(category.custrecord_external_url)
				,	hide_in_navigation = (category.custrecord_hide_in_navigation == 'T') ? 'header-menu-hide-in-navigation' : ''
				,	is_producers_top_menu = false
				,	sort_option = _.trim(category.custrecord_category_sort_option);
				
				// Used to apply the 'header-producers-top-menu' class on PRODUCERS top menu category
				if(href == '/producers') {
					is_producers_top_menu = true;
				}

				//if(href == '/shop-all-wine/top-100-collectible-wines') {
				if(sort_option && sort_option != '') {
					if(href.indexOf('?') == -1)
						href += '?order='+sort_option;
					else
						href += '&order='+sort_option;
				}

				var	tab = {
						'href': href
					,	'text': category.name
					,	'external_url': external_url
					,	'sort_option': sort_option
					,	'is_producers_top_menu': is_producers_top_menu
					,	'data':
						{
							hashtag: (external_url == '') ? '#' + href : ''
						,	touchpoint: 'home'
						}
					,	'class': 'header-menu-level' + category.level + '-anchor '+hide_in_navigation
					,	'data-type': 'commercecategory'
					};

				if (category.categories)
				{
					tab.categories = self.makeNavigationTab(category.categories);
				}

				result.push(tab);
			});

			return result;
		}

	,	addToNavigationTabs: function (categories)
		{
			if (Configuration.get('categories.addToNavigationTabs'))
			{
				var self = this
				,	navigationData = Configuration.get('navigationData')
				,	index = -1;

				// delete previews categories on the menu
				var lastIndex = navigationData.length;

				while(lastIndex--)
				{
					if (navigationData[lastIndex]['data-type'] === 'commercecategory')
					{
						navigationData.splice(lastIndex, 1);
					}
				}

				for (var i = 0; i < navigationData.length; i++)
				{
					if (navigationData[i].placeholder === 'Categories')
					{
						index = i;

						break;
					}
				}

				if (index !== -1)
				{
					var tabs = self.makeNavigationTab(categories);

					// navigationData.splice(index, 1);

					_.each(tabs, function(tab, position)
					{
						navigationData.splice(index + position, 0, tab);
					});
				}

				this.application.trigger('Configuration.navigationData');
			}
		}

	,	getTopLevelCategoriesUrlComponent: function()
		{
			return this.topLevelCategories;
		}

	,	mountToApp: function (application)
		{
			if (Configuration.get('categories'))
			{
				var self = this
				,	categories = SC.CATEGORIES;
				//delete SC.CATEGORIES.categories;

				this.application = application;

				_.each(categories, function (category)
				{
					self.topLevelCategories.push(category.fullurl);
				});

				this.addToNavigationTabs(categories);
			}
		}
	};
});
