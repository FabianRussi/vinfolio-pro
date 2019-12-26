/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

//@module SC.CCT.Html
define('SC.CCT.Html.View'
,	[
		'CustomContentType.Base.View'
	, 'jQuery'
	,	'sc_cct_html.tpl'	
	]
,	function (
		CustomContentTypeBaseView
	,	jQuery
	,	sc_cct_html_tpl
	)
{
	'use strict';

	//@class SC.CCT.Html.View @extend CustomContentType.Base.View
	return CustomContentTypeBaseView.extend({

		template: sc_cct_html_tpl

	,	getContext: function getContext()
		{
			// @class SC.CCT.Html.View.Context
			var _htmString=this.settings.html_string;
			
			var reg=/id="xyz-999"|id="xyz-99"/i
			if(reg.test(_htmString) && _htmString.length>500){
				var dummy=jQuery(_htmString);
				var inner=dummy.html()
				dummy.attr('data-full',inner+' <a href="javascript:void(0)" onclick="var dwrap=jQuery(this).parents(\'[id^=xyz-]\');dwrap.html(dwrap[0].dataset.ellipse); return false;" class="lesscnt">...See Less</a>')
				var letTxt=inner.substring(0,500)+'... <a href="javascript:void(0)" class="morecnt" onclick="var dwrap=jQuery(this).parents(\'[id^=xyz-]\');dwrap.html(dwrap[0].dataset.full); return false;">See More</a>';
				dummy.attr('data-ellipse',letTxt);
				dummy.html(letTxt)
				var _dummy=jQuery('<div />',{html:dummy})
				_htmString=_dummy.html();
			}

			return {
				//@property {String} htmlString
				htmlString: _htmString
				//@property {Boolean} hasHtmlString
			,	hasHtmlString: !!this.settings.html_string
			};
			// @class SC.CCT.Html.View
		}
	});
});
