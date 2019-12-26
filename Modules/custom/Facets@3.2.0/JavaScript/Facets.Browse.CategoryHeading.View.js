/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

define('Facets.Browse.CategoryHeading.View'
,	[
    	'Backbone'

    ,   'Profile.Model'		
    ,	'facets_browse_category_heading.tpl'
	,	'jQuery'
	]
,	function (
    	Backbone
    ,   ProfileModel	
	,	facetsBrowseCategoryHeadingTpl
	,	jQuery
	)
{
    'use strict';

    return Backbone.View.extend({

        template: facetsBrowseCategoryHeadingTpl

	,	events: {
			'click [data-action="toggle-subcat"]': 'showSubcategoryList'
		}

	,	showSubcategoryList: function(e){
			jQuery(".facets-facet-browse-subcat-list").slideToggle();
		}

    ,	getContext: function ()
		{
			var category_type = 1;
			var producer_logo = '';
			if( !_.isUndefined(this.model.get('custrecord_category_type')) && this.model.get('custrecord_category_type') != '' )
			{
				category_type = this.model.get('custrecord_category_type');
			}

			if( !_.isUndefined(this.model.get('custrecord_producer_image_url')) && this.model.get('custrecord_producer_image_url') != '' )
			{
				producer_logo = this.model.get('custrecord_producer_image_url');
			}
			var desc=this.model.get('description');

			var category_desc = this.model.get('custrecord_category_description')

			console.log(category_desc)
			/*var profile = ProfileModel.getInstance()
			,	is_loged_in = profile.get('isLoggedIn') === 'T' && profile.get('isGuest') === 'F'
			,   userEmail = profile.get('email')
			,   firstName = profile.get('firstname')
			,   lastName = profile.get('lastname')*/

			return {
				// @property {String} name
                name: this.model.get('name')
				// @property {String} banner
            ,	banner: this.model.get('pagebannerurl')
				// @property {String} description
            ,	description: this.model.get('description')
				// @property {String} pageheading
			,	pageheading: this.model.get('pageheading') || this.model.get('name')
				// @property {Boolean} hasBanner
			,	hasBanner: !!this.model.get('pagebannerurl')
                // @property {Boolean} showDescription
            ,   showDescription: !!this.options.showDescription
				// @property {Boolean} isSubcategoryAvailable
            ,   isSubcategoryAvailable: (this.model.get('categories') != null && this.model.get('categories').length > 0) ? true : false
				// @property {String} categoryType
            ,   categoryType: category_type
            ,	category_description: category_desc
				// @property {String} producerLogo
            ,   producerLogo: '' // producer_logo
				// @property {Boolean} regionUnderProducer
			,	regionUnderProducer: (this.model.get('custrecord_region_under_producer') === 'T') ? true : false
				// @property {Boolean} showProducerRegion
			,	showProducerRegion: (!_.isUndefined(this.model.get('custrecord_category_type')) && (this.model.get('custrecord_category_type') == '2' || this.model.get('custrecord_category_type') == '3')) ? true : false
				// @property {Boolean} isProducerDirectory
            ,   isProducerDirectory: false
				// @property {String} categoryURL
            ,   isTop100CollectibleURL: ( this.model.get('urlfragment') != '' && this.model.get('urlfragment') == 'top-100-collectible-wines') ? true : false
           	/*,   segmentCode: is_loged_in
            ,   userEmail : userEmail
            ,   firstName: firstName
            ,   lastName:lastName*/
            };
        }
    });
});
