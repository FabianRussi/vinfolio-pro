/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// @module Facets
define(
	'Facets.ShopCategoryCell.View'
,	[
		'facets_shop_category_cell.tpl'

	,	'Backbone'
	]
,	function(
		facets_shop_category_cell_tpl

	,	Backbone
	)
{
	'use strict';

	// @class Facets.CategoryCell.View @extends Backbone.View
	return Backbone.View.extend({

		template: facets_shop_category_cell_tpl

		// @method getContext @return Facets.CategoryCell.View.Context
	,	getContext: function ()
		{
			
			return {
				// @property {String} label
				name: this.model.get('name')
				// @property {String} name
			,	url: ( _.trim(this.model.get('custrecord_external_url')) != '') ? this.model.get('custrecord_external_url') : this.model.get('fullurl')
				// @property {String} target
			,	target: ( _.trim(this.model.get('custrecord_external_url')) != '') ? "_blank" : ''
				// @property {String} image
			,	image: this.model.get('thumbnailurl')
				// @property {Boolean} hasImage
			,	hasImage: !!this.model.get('thumbnailurl')
				// @property {Boolean} showImage
			,	showImage: true
				// @property {String} parentCategoryId
			,	parentCategoryId: ( !_.isUndefined(this.options.parent_category_type) && this.options.parent_category_type != "" ) ? this.options.parent_category_type : ''
			};
		}
	});
});
