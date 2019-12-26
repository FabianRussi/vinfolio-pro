{{!
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
}}

<div data-action="skip-login-message" class="order-wizard-step-guest-message"></div>

{{#if showTitle}}
<header class="order-wizard-step-header">
	<h2 data-type="wizard-step-name-container" class="order-wizard-step-title">{{title}}</h2>
</header>
{{/if}}

<div data-type="alert-placeholder-step"></div>

<div class="order-wizard-step-review-wrapper">
	
	<section class="order-wizard-step-review-main">
		<div id="wizard-step-review-left"></div>
	</section>

	<section id="wizard-step-review-right" class="order-wizard-step-review-secondary">
	</section>

</div>

<div class="order-wizard-step-content-wrapper">
	
	<section id="wizard-step-content" class="order-wizard-step-content-main">
	</section>

	<section id="wizard-step-content-right" class="order-wizard-step-content-secondary">
	</section>

	<div class="order-wizard-step-actions">

		{{#if showBottomMessage}}
		<small class="order-wizard-step-message {{bottomMessageClass}}">
			{{bottomMessage}}
		</small>
		{{/if}}

		<div class="order-wizard-step-button-container">

			{{#if showContinueButton}}
				{{#if continueStyles}}
					<center><button class="order-wizard-step-button-continue will_continueBtn" data-action="submit-step" {{#if disableContinue}} disabled {{/if}}>
						{{continueButtonLabel}}
					</button></center>
				{{else}}
					<button class="order-wizard-step-button-continue {{#if shippingFlag}} store_styles{{else}}rest_styles {{/if}}" data-action="submit-step" {{#if disableContinue}} disabled {{/if}}>
						{{continueButtonLabel}}
					</button>
   				{{/if}}	
			{{/if}}
			<button class="order-wizard-step-button-back" {{#unless showBackButton}}style="display:none;"{{/unless}} data-action="previous-step">
				{{translate 'Back'}}
			</button>
		</div>
		{{#if shippingFlag}}
			<!-- <div class="third-party-div">
				<p class="third-party-message">
					{{translate 'Send your wines directly to our state-of-the-art fine wine storage facility for the best possible safe-keeping and deliver them to your location of choice at a later date. All storage wines will be added to your personal Vinfolio Vincellar account where you can track them, move them, or list the for sale on our collector Martketplace. '}}

					<p class='pad_text third-party-message'>Learn more about our <a href='http://www.vin-folio.com/sca-dev-kilimanjaro/checkout.ssp?is=checkout#/fine-wine-storage' class='third-party-message' style='padding-top: 10px;text-decoration:underline'>storage program</a></p>
					<p class='pad_text_bot third-party-message'>Learn more about our <a href='http://www.vin-folio.com/sca-dev-kilimanjaro/checkout.ssp?is=checkout#/cellar-management' class='third-party-message' style="text-decoration:underline">Vincellar software solution</a></p>

					<p class="third-party-message">Standard storage rate apply. Intake fees will not be charged for the wines purchased from our store.</p>
				</p>
			</div> -->
		{{/if}}
	</div>
</div>



{{!----
Use the following context variables when customizing this template: 
	
	showTitle (Boolean)
	title (String)
	showContinueButton (Boolean)
	continueButtonLabel (String)
	showSecondContinueButtonOnPhone (Boolean)
	showBackButton (Boolean)
	showBottomMessage (Boolean)
	bottomMessage (String)
	bottomMessageClass (String)

----}}
