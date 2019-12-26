/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// @module Facets
define(
	'Facets.CategoryCell.View'
,	[
		'facets_category_cell.tpl'

	,	'Backbone'
	]
,	function(
		facets_category_cell_tpl

	,	Backbone
	)
{
	'use strict';

	// @class Facets.CategoryCell.View @extends Backbone.View
	return Backbone.View.extend({

		template: facets_category_cell_tpl

		// @method getContext @return Facets.CategoryCell.View.Context
	,	getContext: function ()
		{
			var href = ( _.trim(this.model.get('custrecord_external_url')) != '') ? this.model.get('custrecord_external_url') : this.model.get('fullurl');

			var sort_option = '';
			if ( _.trim(this.model.get('custrecord_category_sort_option')) != '' )
			{
				sort_option = _.trim(this.model.get('custrecord_category_sort_option'));
				if(href.indexOf('?') == -1)
					href += '?order='+sort_option;
				else
					href += '&order='+sort_option;

				console.log('sort_option: ',sort_option, href);
			}

			return {
				// @property {String} label
				name: this.model.get('name')
				// @property {String} name
			,	url: href
				// @property {String} target
			,	target: ( _.trim(this.model.get('custrecord_external_url')) != '') ? "_blank" : ''
				// @property {String} image
			,	image: this.model.get('thumbnailurl')
				// @property {String} sortOption
			,	sortOption: ( _.trim(this.model.get('custrecord_category_sort_option')) != '1') ? "_blank" : ''
				// @property {Boolean} hasImage
			,	hasImage: !!this.model.get('thumbnailurl')
				// @property {Boolean} showImage
			,	showImage: ( !_.isUndefined(this.options.parent_category_type) && (this.options.parent_category_type != '2' && this.options.parent_category_type != '3')) ? true : false
			};
		}
	});
});
