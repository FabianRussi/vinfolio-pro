{{!
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
}}

<form class="newsletter-suscription-form" data-action="newsletter-subscribe" novalidate>

	<div data-validation="control-group">

		<div class="home-main-title">
		      <h2><span>{{translate 'Sign up for our newsletter'}}</span></h2>
		      <h3>{{translate 'get early access to new arrivals and special offers'}}</h3>
		</div>

		<div class="newsletter-subscription-form-container {{#if showErrorMessage}}error{{/if}}" data-validation="control">
			<input
				name="email"
				id="email"
				type="email"
				class="homeinputfield"
				placeholder="{{translate 'Enter your email address'}}"
			>

			<button type="submit" class="newsletter-subscription-form-button-subscribe">
				{{translate 'Subscribe'}}
			</button>

			<div class="newsletter-alert-placeholder" data-type="alert-placeholder" >
				{{#if isFeedback}}
				<div data-view="GlobalMessageFeedback"></div>
				{{/if}}
			</div>
		</div>
	</div>
</form>

{{#if successCode}}
<!--
Start of DoubleClick Floodlight Tag: Please do not remove
Activity name of this tag: VINFOLIO_EmailConfirmation_Floodlight
URL of the webpage where the tag is expected to be placed: https://www.vinfolio.com/do/store/signup
This tag must be placed between the <body> and </body> tags, as close as possible to the opening tag.
Creation Date: 06/29/2018
-->
<script type="text/javascript">
var axel = Math.random() + "";
var a = axel * 10000000000000;
$('body').append('<iframe src="https://8577661.fls.doubleclick.net/activityi;src=8577661;type=conve0;cat=vinfo0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
</script>
<noscript>
<iframe src="https://8577661.fls.doubleclick.net/activityi;src=8577661;type=conve0;cat=vinfo0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=1?" width="1" height="1" frameborder="0" style="display:none"></iframe>
</noscript>
<!-- End of DoubleClick Floodlight Tag: Please do not remove -->

<!-- Snippet for Segment to pass the user data when user subscribes successfully -->
<!-- <script>
	var userEmail = $.cookie('homenewsletteruser');
	if(userEmail!= null && userEmail!= '')
	{
		console.log(userEmail)
		analytics.identify(userEmail, {
		  created_at: '',
		  email: userEmail,
		  first_name: '',
		  is_priority_customer: '',
		  last_login:'',
		  last_name: '',
		  managed_by: '',
		  managed_by_admin: '',
		  median_bottle_spend: '',
		  register_source: 'website',
		  source: 'website',
		  spending_2012: '',
		  spending_2013: '',
		  spending_2014: '',
		  spending_2015: '',
		  spending_2016: '',
		  spending_2017: '',
		  spending_2018: '',
		  spending_2019: ''
		});

		analytics.track('AddToList', {
		  createdAt: new Date(),
		  signupSource: "WEB",
		  eventType: "106691",
		  eventId: "106691",
		  email: userEmail, 
		});
	}
</script> -->

{{/if}}

{{!----
Use the following context variables when customizing this template: 
	
	isFeedback (Boolean)
	model (Object)

----}}
