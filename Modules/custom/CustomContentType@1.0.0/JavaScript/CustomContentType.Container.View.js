/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

//@module CustomContentType
define(
	'CustomContentType.Container.View'
,	[
		'custom_content_type_container.tpl'

	,	'Backbone'
	,	'jQuery'
	]
,	function (
		custom_content_type_container_tpl

	,	Backbone
	,	jQuery
	)
{
	'use strict';

	//@class CustomContentType.Container.View @extends Backbone.View
	//inherits the basic render and destroy methods from Backbone.View
	return Backbone.View.extend({		
		template: custom_content_type_container_tpl,
		initialize:function(){			
		this.on('afterViewRender', this.onRender, this);
		},
		onRender:function(){
		//var target=jQuery('[data-cms-cct-instanceid="'+this.options.instanceId+'"]');		
		var target=this.options.innerCustomContentType.$el;
			if(!window.isScaDesc){
				var desc=jQuery('#sca-category-description');
				if(desc.length&&desc.html()!=''){
					window.isScaDesc=desc;
					//desc.find('[data-view="CCT-View"]').append('<label class="morecnt">See More</label>')
				}
			}
		
		}
		
	,	childViews: {
			'CCT-View': function ()
			{
				return this.options.innerCustomContentType;
			}
		}

		// @method getContext
		// @return {CustomContentType.Container.View.Context}
	,	getContext: function getContext()
		{
			// @class CustomContentType.Container.View.Context
			return {
				//@property {String} instanceId
				instanceId: this.options.instanceId
				

				//@property {String} classes
			,	classes: this.options.classes
			};
			// @class CustomContentType.Container.View
		}
	});
});
