{{!
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
}}

<section class="profile-emailpreferences">

	<h2 class="profile-emailpreferences-title">{{pageHeader}}</h2>
	<div class="profile-collector-info profile-information-row"><p>{{translate 'Complete your collector profile to help us locate wine that best matches your tastes'}}<p></div>
	<div class="profile-emailpreferences-alert-placeholder" data-type="alert-placeholder"></div>

	<form class="profile-collector-form">
		
		<fieldset>
			<div class="profile-collector-france profile-information-row">
				<label class="profile-information-label"><strong>{{translate 'BURGUNDY'}}</strong></label>
				<p>
				{{#each burgundyList}}
					<label class="profile-information-label"><input type="checkbox" name="custentity_cp_burgundy" value="{{this.id}}" {{#if isChecked}}checked{{/if}}>{{this.name}}</label>
					<br class="clear">
				{{/each}}
				</p>
			</div>

			<div class="profile-collector-france profile-information-row">
				<label class="profile-information-label"><strong>{{translate 'BORDEAUX'}}</strong></label>
				<p>
				{{#each franceList}}
					<label class="profile-information-label"><input type="checkbox" name="custentity_collector_profile_france" value="{{this.id}}" {{#if isChecked}}checked{{/if}}>{{this.name}}</label>
					<br class="clear">
				{{/each}}
				</p>
			</div>

			<div class="profile-collector-france profile-information-row">
				<label class="profile-information-label"><strong>{{translate 'OTHER FRANCE'}}</strong></label>
				<p>
				{{#each otherfranceList}}
					<label class="profile-information-label"><input type="checkbox" name="custentity_cp_other_france" value="{{this.id}}" {{#if isChecked}}checked{{/if}}>{{this.name}}</label>
					<br class="clear">
				{{/each}}
				</p>
			</div>

			<div class="profile-collector-italy profile-information-row">
				<label class="profile-information-label"><strong>{{translate 'ITALY'}}</strong></label>
				<p>
				{{#each italyList}}
					<label class="profile-information-label"><input type="checkbox" name="custentity_collector_profile_italy" value="{{this.id}}" {{#if isChecked}}checked{{/if}}>{{this.name}}</label>
					<br class="clear">
				{{/each}}
				</p>
			</div>

			<div class="profile-collector-other profile-information-row">
				<label class="profile-information-label"><strong>{{translate 'OTHER OLD WORLD'}}</strong></label>
				<p>
				{{#each otherList}}
					<label class="profile-information-label"><input type="checkbox" name="custentity_c_profile_other" value="{{this.id}}" {{#if isChecked}}checked{{/if}}>{{this.name}}</label>
					<br class="clear">
				{{/each}}
				</p>
			</div>

			<div class="profile-collector-newworld profile-information-row">
				<label class="profile-information-label"><strong>{{translate 'CALIFORNIA'}}</strong></label>
				<p>
				{{#each newworldList}}
					<label class="profile-information-label"><input type="checkbox" name="custentity_c_profile_newworld" value="{{this.id}}" {{#if isChecked}}checked{{/if}}>{{this.name}}</label>
					<br class="clear">
				{{/each}}
				</p>
			</div>

			<div class="profile-collector-newworld profile-information-row">
				<label class="profile-information-label"><strong>{{translate 'OTHER NEW WORLD'}}</strong></label>
				<p>
				{{#each othernewworldList}}
					<label class="profile-information-label"><input type="checkbox" name="custentity_cp_other_new_world" value="{{this.id}}" {{#if isChecked}}checked{{/if}}>{{this.name}}</label>
					<br class="clear">
				{{/each}}
				</p>
			</div>

			
		</fieldset>

		<div class="profile-emailpreferences-controls-submit">
			<button type="submit" class="profile-emailpreferences-submit">{{translate 'Update'}}</button>
			<!-- <button type="reset"  class="profile-emailpreferences-reset" data-action="reset">{{translate 'Cancel'}}</button> -->
		</div>
	</form>
</section>




{{!----
Use the following context variables when customizing this template: 
	
	pageHeader (String)
	subscriptions (Array)
	isEmailSuscribe (Boolean)
	campaignSubscriptions (Boolean)
	showBackToAccount (Boolean)

----}}
