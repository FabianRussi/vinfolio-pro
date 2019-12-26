<div class="container">
<div class="row">
	
{{#if emailCheckMgs}}
<p class="top-cta">Your record doesn't exist in our system</p>
{{else}}
<section class="profile-emailpreferences">
	<!-- new email preference template -->

	<!-- + logged out user part -->
	<p class="top-cta">Email preferences for <a class="user-emailid" href="mailto:{{user_email}}">{{user_email}}</a></p>
	<!-- end logged out user part -->
	
<form class="communication-emailpreferences-form">
<!-- <input type="hidden" value="{{user_email}}" name="email"> -->
	<table class="responsive-table">
		<thead>
			<tr>
				<th>Fine Wine Offers</th>
				<th>Email</th>
				<th>Push</th>
			</tr>
		</thead>
		<tbody>
	
			<tr>
				<td class="actions">
					<b>Featured Wine Offers</b>
					<p>In-depth write ups on our featured wines for sale and fine wine announcements.</p>
				</td>
				<td class="email"><input type="checkbox" id="13773" data-type="emailsubscribe-checkbox" value="T" data-unchecked-value="F" name="13773" class="uncheck-all" {{#if dailyOffersEm}}{{else}}checked{{/if}}></td>
				<td classs="push"><!-- <input type="checkbox" class="pushsubscribe uncheck-all" data-type="pushsubscribe-checkbox" value="T" data-unchecked-value="F" name=""{{#if dailyOffersPu}}checked{{/if}}> <span>&#215;</span>--></td>
			</tr>
			<tr>
				<td class="actions">
					<b>Spot Offers</b>
					<p>Real-time notifications about newly available wines for sale for a very limited time (usually only a few hours).</p>
				</td>
				<td class="email"><input type="checkbox" id="19777" data-type="emailsubscribe-checkbox" value="T" data-unchecked-value="F" name="19777" class="uncheck-all" {{#if spotOffersEm}}{{else}}checked{{/if}}></td>
				<td classs="push"><input type="checkbox" class="pushsubscribe uncheck-all" data-type="pushsubscribe-checkbox" value="T" data-unchecked-value="F" name="20734" {{#if spotOffersPu}}{{else}}checked{{/if}}></td>
			</tr>
			<tr>
				<td class="actions">
					<b>Special Offers</b>
					<p>Notifications about new and rare collections, special promotions, ex-château offers, and more.</p>
				</td>
				<td class="email"><input type="checkbox" id="13776" data-type="emailsubscribe-checkbox" value="T" data-unchecked-value="F" name="13776" class="uncheck-all"{{#if specialOffersEm}}{{else}}checked{{/if}}></td>
				<td classs="push"><input type="checkbox" class="pushsubscribe uncheck-all" data-type="pushsubscribe-checkbox" value="T" data-unchecked-value="F" name="20735"{{#if specialOffersPu}}{{else}}checked{{/if}}></td>
			</tr>
			<tr>
				<td class="actions">
					<b>Bordeaux Futures</b>
					<p>Participate in our futures campaign. Highly recommended for collectors and investors.</p>
				</td>
				<td class="email"><input type="checkbox" id="20729" data-type="emailsubscribe-checkbox" value="T" data-unchecked-value="F" name="20729" class="uncheck-all"{{#if bordeauxEu}}{{else}}checked{{/if}}></td>
				<td classs="push"><input type="checkbox" class="pushsubscribe uncheck-all" data-type="pushsubscribe-checkbox" value="T" data-unchecked-value="F" name="20736"{{#if bordeauxPu}}{{else}}checked{{/if}}></td>
			</tr>
			<tr>
				<td class="actions">
					<b>Fine Wine Events</b>
					<p>Invitations to fine wine dinners, Private Wine Lounge tastings, special travel opportunities, and more. </p>
				</td>
				<td class="email"><input type="checkbox" id="19780" data-type="emailsubscribe-checkbox" value="T" data-unchecked-value="F" name="19780" class="uncheck-all" {{#if fineWineEventsEu}}{{else}}checked{{/if}}></td>
				<td classs="push"><!-- <input type="checkbox" class="pushsubscribe uncheck-all" data-type="pushsubscribe-checkbox" value="T" data-unchecked-value="F" name=""> <span>&#215;</span>--></td>
			</tr>
		</tbody>
	</table>
	<table class="responsive-table">
		<thead>
			<tr>
				<th>Other</th>
				<th>Email</th>
				<th>Push</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td class="actions">
					<b>Vinfolio News</b>
					<p>Messages from our team about company news and product updates.</p>
				</td>
				<td class="email"><input type="checkbox" id="19778" data-type="emailsubscribe-checkbox" value="T" data-unchecked-value="F" name="19778" class="uncheck-all" {{#if vinfolioNewsEu}}{{else}}checked{{/if}}></td>
				<td classs="push"><!-- <input type="checkbox" class="pushsubscribe uncheck-all" data-type="pushsubscribe-checkbox" value="T" data-unchecked-value="F" name="pushsubscribe6"> <span>&#215;</span>--></td>
			</tr>
		</tbody>
	</table>



		<!-- + logged out user part -->
		<div class="middle-cta">
		<p>For our Vinfolio account holders, you may also update additional communication preferences about your wines. </p>
		<b>Don’t have a Vinfolio account? </b>
		<div class="buttons">
		<a class="goldbutton" href="https://www.vinfolio.com/sca-dev-kilimanjaro/checkout.ssp?is=register&login=T&reset=T&newcust=T&fragment=login-register#login-register" >Register for an account now</a>
		<span>or</span>
		<a class="goldbutton" href="https://itunes.apple.com/us/app/vinfolio/id1306627527?mt=8" >Download our iOS mobile app</a>
		</div>
		</div>
		<!-- end logged out user part -->

		<table class="responsive-table">	
		<thead>
				<tr>
					<th>Your wine</th>
					<th>Email</th>
					<th>Push</th>
				</tr>
			</thead>
			<tbody>
			<tr>
				<td class="actions">
					<b>Personalized Recommendations</b>
					<p>Personal alerts and offers based on past purchase history, saved wishlist, and Vincellar activity.</p>
				</td>
				<td class="email"><input type="checkbox" id="20730" data-type="emailsubscribe-checkbox" value="T" data-unchecked-value="F" name="20730" class="uncheck-all" {{#if personalizedRecomEu}}{{else}}checked{{/if}}></td>
				<td classs="push"><input type="checkbox" id="20738" class="pushsubscribe uncheck-all" data-type="pushsubscribe-checkbox" value="T" data-unchecked-value="F" name="20738" {{#if personalizedRecomPu}}{{else}}checked{{/if}}></td>
			</tr>
			<tr>
				<td class="actions">
					<b>Your Cellar Activity</b>
					<p>Portfolio reviews and recommendations based on your cellar statistics and activity.</p>
				</td>
				<td class="email"><input type="checkbox" id="20731" data-type="emailsubscribe-checkbox" value="T" data-unchecked-value="F" name="20731" class="uncheck-all" {{#if yourCellarEu}}{{else}}checked{{/if}}></td>
				<td classs="push"><!-- <input type="checkbox" class="pushsubscribe uncheck-all" data-type="pushsubscribe-checkbox" value="T" data-unchecked-value="F" name="pushsubscribe8"> <span>&#215;</span>--></td>
			</tr>
			<tr>
				<td class="actions">	
					<b>Your Wines</b>
					<p>Notifications when a wine you own gets a new professional rating or note, or another Vincellar user writes a tasting note on one of your wines.</p>
				</td>
				<td class="email"><input type="checkbox" id="20732" data-type="emailsubscribe-checkbox" value="T" data-unchecked-value="F" name="20732" class="uncheck-all" {{#if yourWinesEu}}{{else}}checked{{/if}}></td>
				<td classs="push"><input type="checkbox" id="20739" class="pushsubscribe uncheck-all" data-type="pushsubscribe-checkbox" value="T" data-unchecked-value="F" name="20739" {{#if yourWinesPu}}{{else}}checked{{/if}}></td>
			</tr>
			<tr>
				<td class="actions">
					<b>Your Reminders</b>
					<p>Reminders to write a tasting note after you consume wine.</p>
				</td>
				<td class="email"><input type="checkbox" id="20733" data-type="emailsubscribe-checkbox" value="T" data-unchecked-value="F" name="20733" class="uncheck-all" {{#if yourRemindeEu}}{{else}}checked{{/if}}></td>
				<td classs="push"><input type="checkbox" id="20740" class="pushsubscribe uncheck-all" data-type="pushsubscribe-checkbox" value="T" data-unchecked-value="F" name="20740" {{#if yourRemindePu}}{{else}}checked{{/if}}></td>
			</tr>
			</tbody>
	</table>
	<div class="center">
	<label>
		<input type="checkbox" data-type="unsubscribe-checkbox" data-unchecked-value="F" name="unsubscribe" value="T" id="toggleSorry">Opt out from all Vinfolio marketing communications</label>
		<button type="submit" class="submit-email" id="toggleThankyou">{{translate 'Save'}}</button>
	</div>

</form>
</section>



</div>	
</div>

<div class='overlay'></div>
<!-- popup Thank you for updating your email preferences! -->
<div class="popup" id='thankYou'>
	<div class="popup-header">
	<label class="close" id="close">
			<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="10" height="10"
			viewBox="0 0 47.971 47.971" style="enable-background:new 0 0 47.971 47.971;" xml:space="preserve"><path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88
			   c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242
			   C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879
			   s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z" fill="#7c6e3f"/></svg>
	</label>
	</div>
	<div class="popup-body">
	<h2>Thank you for updating your email preferences!</h2>
	<svg height="34px" viewBox="0 0 512 512" width="34px" xmlns="http://www.w3.org/2000/svg"><path d="m369.164062 174.769531c7.8125 7.8125 7.8125 20.476563 0 28.285157l-134.171874 134.175781c-7.8125 7.808593-20.472657 7.808593-28.285157 0l-63.871093-63.875c-7.8125-7.808594-7.8125-20.472657 0-28.28125 7.808593-7.8125 20.472656-7.8125 28.28125 0l49.730468 49.730469 120.03125-120.035157c7.8125-7.808593 20.476563-7.808593 28.285156 0zm142.835938 81.230469c0 141.503906-114.515625 256-256 256-141.503906 0-256-114.515625-256-256 0-141.503906 114.515625-256 256-256 141.503906 0 256 114.515625 256 256zm-40 0c0-119.394531-96.621094-216-216-216-119.394531 0-216 96.621094-216 216 0 119.394531 96.621094 216 216 216 119.394531 0 216-96.621094 216-216zm0 0" fill="#7c6e3f"/></svg>
	<p>We look forward to sharing more fine wine with you.<br>Cheers!</p>
  </div>
</div>


<!-- popup We’re sorry to see you go!-->
<div class="popup" id='sorry'> 
		<div class="popup-header">
		<label class="close" id="close-sorry"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  width="10" height="10"
			viewBox="0 0 47.971 47.971" style="enable-background:new 0 0 47.971 47.971;" xml:space="preserve"><path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88
			   c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242
			   C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879
			   s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z" fill="#7c6e3f"/></svg>
	   </label>
		</div>
		<div class="popup-body">
		<h2>We’re sorry to see you go!</h2>
		<p> We hope to share more fine wine with you again in the future. In case you change your mind, you can update your email preferences <a href="https://www.vinfolio.com/sca-dev-kilimanjaro/my_account-local.ssp?ext=F&fragment=overview#/emailpreferences">here.</a></p>
	  </div>
</div>
<script>
	document.getElementById('close').onclick = TogglePopup
	document.getElementById('close-sorry').onclick = TogglePopup
	document.getElementById('toggleThankyou').onclick = TogglePopup
	//document.getElementById('toggleSorry').onclick = TogglePopupSorry

	var overlay = document.getElementsByClassName('overlay')[0];
	var thankYou = document.getElementById('thankYou');
	var sorry = document.getElementById('sorry');

	function TogglePopup(){
		if(document.getElementById('toggleSorry').checked){
			sorry.classList.toggle("visible");
			overlay.classList.toggle("visible");
		}else{
			thankYou.classList.toggle("visible");
			overlay.classList.toggle("visible");
		}
	}

</script>
{{/if}}

