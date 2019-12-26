
{{!
    © 2018!.Custom template for the popup Actions in the site
}}
<div class="pop_up_header">
    <h1>ONE OR MORE OF THE ITEMS IN YOUR CART ARE NO LONGER AVAILABLE</h1>
</div>
{{#each jsonData}}
    <div class="popup_item_cell">
        <div class="popup_item_url">
            <img src="{{imageUrl}}" alt="">
        </div>
            <div class="pop_up_item_name" id='{{internalId}}'>{{itemName}}</div>
    </div>
{{/each}}
<div class="popup-mgs-rem-button">
        <button class="remove-items" data-action="remove-items">{{translate 'Remove Item(s) and Continue Purchase'}}</button>
</div>
<div class="popup-mgs-view-button">
    <a href="#" data-touchpoint="viewcart" data-hashtag="#cart">View Cart</a>
</div>


