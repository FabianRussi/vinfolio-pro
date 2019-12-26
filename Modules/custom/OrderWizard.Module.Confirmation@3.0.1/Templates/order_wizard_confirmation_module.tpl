{{!
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
}}
<img src='https://beacon.krxd.net/event.gif?event_id=MxLHHEDw&event_type=purchase' width=0 height=0 />
<section class="order-summary-thankyou">
	<div class="align-center thankyou-img">
		{{#if isGuestAndCustomerCenter}}
			<a href="#" data-touchpoint="customercenter" data-hashtag="#/purchases/view/salesorder/{{orderId}}"><img src="/site/cms-images/thankyou-order.jpg"  alt="Thank you for shopping with us!" /></a>
		{{else}}
			#{{confirmationNumber}}
		{{/if}}
	</div>
	<div class="order-summary-thankyoutitle align-center"> <h4>{{translate 'MAKE THE MOST OF YOUR EXPERIENCE'}} </h4></div>
	<div class="row order-summary-thankyou-containerv1 align-center">
		<div class="col-sm-4">
			<p>{{translate 'Stay on top of your entire collection with Vincellar, your comprehensive, cloud-based collection management tool.'}}
			</p><a href="http://vinfolio.com/do/vincellar/home" target="_blank">{{translate 'GET THE APP'}}</a>
		</div>
		<div class="col-sm-4">
			<p>{{translate 'Update your collector profile for more personalized email offers.'}}
			</p><a href="#" data-touchpoint="customercenter" data-hashtag="#/collectorprofile"> {{translate 'UPDATE PROFILE'}} </a>
		</div>
			<div class="col-sm-4">
			<p>{{translate 'Sell your wine with us, one bottle at a time (or more).'}}
			</p><a href="#" data-touchpoint="home" data-hashtag="#/sell-your-wine">{{translate 'SELL WINE NOW'}}</a>
		</div>
	</div>
	<div class="order-summary-thankyoutitle align-center"> <h4>{{translate 'LEARN MORE ABOUT US'}} </h4></div>
	<div class="row align-center order-summary-thankyou-containerv2">
		<div class="col-sm-4">
			<a href="#" data-touchpoint="home" data-hashtag="#/our-team">{{translate 'Meet our team of fine wine experts'}}</a>
		</div>
		<div class="col-sm-4">
			<a href="#" data-touchpoint="home" data-hashtag="#/about-us">{{translate 'Join us in our vision and mission'}}</a>
		</div>
		<div class="col-sm-4">
			<a href="#" data-touchpoint="home" data-hashtag="#/sourcing">{{translate 'Understand how we source fine wine'}}</a>
		</div>
	</div>
</section>

<script>

console.log('window._talkable_data: ', JSON.parse(JSON.stringify(window._talkable_data)));
window._talkableq.push(['register_purchase',  JSON.parse(JSON.stringify(window._talkable_data))]);

jQuery(document).ready(function(){
	jQuery("#wizard-step-content-right").hide();
	jQuery("#wizard-step-content").css('width', '100% !important');
});
</script>
<style>
#wizard-step-content {width: 100%!important}
.checkout-layout-content {padding-bottom: 0px !important;}
</style>

<!--
<script>
analytics.track("Order Completed",
{"email":"{{userEmail}}", // Replace with customer email
 "products":{{productArray}},
 "total": {{subTotal}}
});
</script> -->

<!-- Tag for Activity Group: sales, Activity Name: VINFOLIO_Sales_Floodlight, Activity ID: 7349125 -->
<!-- Expected URL: https://www.vinfolio.com/do/store/confirm -->

<!--
Activity ID: 7349125
Activity Name: VINFOLIO_Sales_Floodlight
Activity Group Name: sales
-->

<!--
Start of DoubleClick Floodlight Tag: Please do not remove
Activity name of this tag: VINFOLIO_Sales_Floodlight
URL of the webpage where the tag is expected to be placed: https://www.vinfolio.com/do/store/confirm
This tag must be placed between the <body> and </body> tags, as close as possible to the opening tag.
Creation Date: 06/29/2018
-->
<iframe src="https://8577661.fls.doubleclick.net/activityi;src=8577661;type=sales0;cat=vinfo0;qty=1;cost={{subTotal}};u1={{confirmationNumber}};dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord={{confirmationNumber}}?" width="1" height="1" frameborder="0" style="display:none"></iframe>
<!-- End of DoubleClick Floodlight Tag: Please do not remove -->

<script>
var source_url = ["https://tags.srv.stackadapt.com/conv?cid=O1ouSIPmpf7kZPMLMnG6Uw"];

var prodArray = "{{productArray}}";
addDataToUrl("product", prodArray, source_url);

addDataToUrl("order", "{{tranid}}", source_url);
addDataToUrl("cost", "{{subTotal}}", source_url);
createPixel(source_url);

function createPixel(source_url) {

var image_pixel_element = document.createElement('img');

image_pixel_element.setAttribute("width", 1);

image_pixel_element.setAttribute("height", 1);

image_pixel_element.setAttribute("src", source_url.join('&'));

}
//debugger;
function addDataToUrl(data_key, data_value, source_url) {

source_url.push("sa_conv_data_"+data_key+"="+data_value);
}

</script>


<!--JustUno Conversion Tracking code start-->
<script data-cfasync="false">
window.juapp=window.juapp||function(){(window.juapp.q=window.juapp.q||[]).push(arguments)}
/*Replace the [order ...] portions below with the actual order information.You can omit any of the attributes that you don't have values for other then the order id and order total.*/
juapp( 'order', '{{orderId}}', {total:"{{model.confirmation.summary.total}}",subtotal: "{{model.confirmation.summary.subtotal}}",tax: "{{model.confirmation.summary.taxtotal}}",shipping: "{{model.confirmation.summary.shippingcost}}",currency:'USD'});
</script>
{{#each model.confirmation.lines}}
<script data-cfasync="false">
/*You will need to repeat this line of code for each item in the order.Replace the [item ...] portions below with the actual item information in order.You can omit any of the attributes that you don't have values for other then the item id and quantity.*/
juapp( 'orderItem', '{{item.internalid}}', {name:'{{item._name}}',quantity:"{{quantity}}",price:"{{rate}}", color:'',size:'{{item.custcol_vf_bottlesize}}'});
/* end of repeat section */
</script>
{{/each}}
<!--JustUno Conversion Tracking code end here-->








{{!----
Use the following context variables when customizing this template:

	continueURL (String)
	isGuestAndCustomerCenter (Boolean)
	additionalConfirmationMessage (String)
	touchPoint (Boolean)
	confirmationNumber (String)
	orderId (Number)
	pdfUrl (String)
	model (Object)
	model.addresses (Array)
	model.addresses.0 (Object)
	model.addresses.0.zip (String)
	model.addresses.0.country (String)
	model.addresses.0.addr2 (String)
	model.addresses.0.addr1 (String)
	model.addresses.0.city (String)
	model.addresses.0.addr3 (String)
	model.addresses.0.isvalid (String)
	model.addresses.0.internalid (String)
	model.addresses.0.phone (String)
	model.addresses.0.defaultbilling (String)
	model.addresses.0.defaultshipping (String)
	model.addresses.0.isresidential (String)
	model.addresses.0.state (String)
	model.addresses.0.fullname (String)
	model.addresses.0.company (undefined)
	model.shipmethods (Array)
	model.lines (Array)
	model.paymentmethods (Array)
	model.paymentmethods.0 (Object)
	model.paymentmethods.0.type (String)
	model.paymentmethods.0.primary (Boolean)
	model.paymentmethods.0.creditcard (Object)
	model.paymentmethods.0.creditcard.internalid (String)
	model.paymentmethods.0.creditcard.ccnumber (String)
	model.paymentmethods.0.creditcard.ccname (String)
	model.paymentmethods.0.creditcard.ccexpiredate (String)
	model.paymentmethods.0.creditcard.ccsecuritycode (String)
	model.paymentmethods.0.creditcard.expmonth (String)
	model.paymentmethods.0.creditcard.expyear (String)
	model.paymentmethods.0.creditcard.paymentmethod (Object)
	model.paymentmethods.0.creditcard.paymentmethod.internalid (String)
	model.paymentmethods.0.creditcard.paymentmethod.name (String)
	model.paymentmethods.0.creditcard.paymentmethod.creditcard (Boolean)
	model.paymentmethods.0.creditcard.paymentmethod.ispaypal (Boolean)
	model.paymentmethods.0.creditcard.paymentmethod.isexternal (Boolean)
	model.paymentmethods.0.creditcard.paymentmethod.key (String)
	model.internalid (undefined)
	model.confirmation (Object)
	model.confirmation.internalid (Number)
	model.confirmation.tranid (String)
	model.confirmation.summary (Object)
	model.confirmation.summary.subtotal (Number)
	model.confirmation.summary.subtotal_formatted (String)
	model.confirmation.summary.taxtotal (Number)
	model.confirmation.summary.taxtotal_formatted (String)
	model.confirmation.summary.shippingcost (Number)
	model.confirmation.summary.shippingcost_formatted (String)
	model.confirmation.summary.handlingcost (Number)
	model.confirmation.summary.handlingcost_formatted (String)
	model.confirmation.summary.discounttotal (Number)
	model.confirmation.summary.discounttotal_formatted (String)
	model.confirmation.summary.giftcertapplied (Number)
	model.confirmation.summary.giftcertapplied_formatted (String)
	model.confirmation.summary.total (Number)
	model.confirmation.summary.total_formatted (String)
	model.confirmation.promocodes (Array)
	model.confirmation.paymentmethods (Array)
	model.confirmation.lines (Array)
	model.confirmation.lines.0 (Object)
	model.confirmation.lines.0.item (Object)
	model.confirmation.lines.0.item.internalid (Number)
	model.confirmation.lines.0.item.type (String)
	model.confirmation.lines.0.quantity (Number)
	model.confirmation.lines.0.options (Array)
	model.confirmation.lines.0.options.0 (Object)
	model.confirmation.lines.0.options.0.cartOptionId (String)
	model.confirmation.lines.0.options.0.itemOptionId (String)
	model.confirmation.lines.0.options.0.label (String)
	model.confirmation.lines.0.options.0.type (String)
	model.confirmation.lines.0.options.0.value (Object)
	model.confirmation.lines.0.options.0.value.internalid (String)
	model.confirmation.lines.0.location (String)
	model.confirmation.lines.0.fulfillmentChoice (String)
	model.confirmation.statuscode (String)
	model.confirmation.confirmationnumber (String)
	model.confirmation.reasoncode (undefined)
	model.confirmation.addresses (Array)
	model.confirmation.shipmethods (Array)
	model.multishipmethods (Array)
	model.lines_sort (Array)
	model.lines_sort.0 (String)
	model.latest_addition (undefined)
	model.promocodes (Array)
	model.ismultishipto (Boolean)
	model.billaddress (String)
	model.shipaddress (String)
	model.isPaypalComplete (Boolean)
	model.touchpoints (Object)
	model.touchpoints.logout (String)
	model.touchpoints.customercenter (String)
	model.touchpoints.serversync (String)
	model.touchpoints.viewcart (String)
	model.touchpoints.login (String)
	model.touchpoints.welcome (String)
	model.touchpoints.checkout (String)
	model.touchpoints.continueshopping (String)
	model.touchpoints.home (String)
	model.touchpoints.register (String)
	model.touchpoints.storelocator (String)
	model.agreetermcondition (Boolean)
	model.summary (Object)
	model.summary.discounttotal_formatted (String)
	model.summary.taxonshipping_formatted (String)
	model.summary.taxondiscount_formatted (String)
	model.summary.itemcount (Number)
	model.summary.taxonhandling_formatted (String)
	model.summary.total (Number)
	model.summary.tax2total (Number)
	model.summary.discountedsubtotal (Number)
	model.summary.taxtotal (Number)
	model.summary.discounttotal (Number)
	model.summary.discountedsubtotal_formatted (String)
	model.summary.taxondiscount (Number)
	model.summary.handlingcost_formatted (String)
	model.summary.taxonshipping (Number)
	model.summary.taxtotal_formatted (String)
	model.summary.totalcombinedtaxes_formatted (String)
	model.summary.handlingcost (Number)
	model.summary.totalcombinedtaxes (Number)
	model.summary.giftcertapplied_formatted (String)
	model.summary.shippingcost_formatted (String)
	model.summary.discountrate (Number)
	model.summary.taxonhandling (Number)
	model.summary.tax2total_formatted (String)
	model.summary.discountrate_formatted (String)
	model.summary.estimatedshipping (Number)
	model.summary.subtotal (Number)
	model.summary.shippingcost (Number)
	model.summary.estimatedshipping_formatted (String)
	model.summary.total_formatted (String)
	model.summary.giftcertapplied (Number)
	model.summary.subtotal_formatted (String)
	model.options (Object)
	model.purchasenumber (String)
	model.sameAs (Boolean)

----}}
