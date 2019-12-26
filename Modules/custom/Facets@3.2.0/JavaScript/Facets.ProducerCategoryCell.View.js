/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// @module Facets
define(
	'Facets.ProducerCategoryCell.View'
,	[
		'facets_producer_category_cell.tpl'

	,	'Backbone'
	]
,	function(
		facets_producer_category_cell_tpl

	,	Backbone
	)
{
	'use strict';

	// @class Facets.ProducerCategoryCell.View @extends Backbone.View
	return Backbone.View.extend({

		template: facets_producer_category_cell_tpl

	/*,	initialize: function (options)
		{
			var self = this;
			console.log("options=========");console.log(options);
			this.cat = self.options.producerSubCat;
		}

	,	render: function render ()
			{
				this._render();
			}*/

	,	createAlphabetArray: function(name)
		{
			var a_sub_cat = [],	b_sub_cat = [],	c_sub_cat = [],	d_sub_cat = [],	e_sub_cat = [],	f_sub_cat = [];
		}

		// @method getContext @return Facets.ProducerCategoryCell.View.Context
	,	getContext: function ()
		{
			var self = this
			,	alphabets = ['a', 'b', 'c', 'd', 'e', 'f']
			,	sub_cat = [],	a_sub_cat = [],	b_sub_cat = [],	c_sub_cat = [],	d_sub_cat = [],	e_sub_cat = [],	f_sub_cat = [];
			
			for(var i=0; self.options.producer_sub_cat!=null && i<self.options.producer_sub_cat.length; i++)
			{
				var obj_cat = self.options.producer_sub_cat[i];
				//console.log("charAt: "+obj_cat.name.charAt(0).toLowerCase);
				if(obj_cat.name.charAt(0).toLowerCase=='a'){
					a_sub_cat.push({name: obj_cat.name, fullurl: obj_cat.fullurl, urlfragment: obj_cat.urlfragment, internalid: obj_cat.internalid});
				}
				if(obj_cat.name.charAt(0).toLowerCase=='b'){
					b_sub_cat.push({name: obj_cat.name, fullurl: obj_cat.fullurl, urlfragment: obj_cat.urlfragment, internalid: obj_cat.internalid});
				}
				if(obj_cat.name.charAt(0).toLowerCase=='c'){
					c_sub_cat.push({name: obj_cat.name, fullurl: obj_cat.fullurl, urlfragment: obj_cat.urlfragment, internalid: obj_cat.internalid});
				}
				if(obj_cat.name.charAt(0).toLowerCase=='d'){
					d_sub_cat.push({name: obj_cat.name, fullurl: obj_cat.fullurl, urlfragment: obj_cat.urlfragment, internalid: obj_cat.internalid});
				}
				if(obj_cat.name.charAt(0).toLowerCase=='e'){
					e_sub_cat.push({name: obj_cat.name, fullurl: obj_cat.fullurl, urlfragment: obj_cat.urlfragment, internalid: obj_cat.internalid});
				}
				if(obj_cat.name.charAt(0).toLowerCase=='f'){
					f_sub_cat.push({name: obj_cat.name, fullurl: obj_cat.fullurl, urlfragment: obj_cat.urlfragment, internalid: obj_cat.internalid});
				}

				sub_cat.push({
						name: obj_cat.name
					,	fullurl: obj_cat.fullurl
					,	urlfragment: obj_cat.urlfragment
					,	internalid: obj_cat.internalid
					});
			}
			
			return {
					// @property {Array} producerSubCat
					producerSubCat: sub_cat
					// @property {Array} aSubCat
				,	aSubCat: a_sub_cat
					// @property {Array} bSubCat
				,	bSubCat: b_sub_cat
					// @property {Array} cSubCat
				,	cSubCat: c_sub_cat
					// @property {Array} dSubCat
				,	dSubCat: d_sub_cat
					// @property {Array} eSubCat
				,	eSubCat: e_sub_cat
					// @property {Array} fSubCat
				,	fSubCat: f_sub_cat
			};
		}
	});
});
