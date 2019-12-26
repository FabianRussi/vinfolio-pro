{{!
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
}}

<nav class="header-menu-secondary-nav">

	<div class="header-menu-search">
		<button class="header-menu-search-link" data-action="show-sitesearch" title="{{translate 'Search'}}">
			<i class="header-menu-search-icon"></i>
		</button>
	</div>

	<ul class="header-menu-level1">

		{{#each categories}}
			{{#if text}}
				<li {{#if categories}}data-toggle="categories-menu"{{/if}} {{#if is_producers_top_menu}} id="header-producers-top-menu" {{/if}}>
					{{#if external_url}}
						<a class="{{class}}" href="{{external_url}}">
					{{else}}
						<a class="{{class}}" {{objectToAtrributes this}}>
					{{/if}}
					{{translate text}}
					</a>
					{{#if categories}}
					<ul class="header-menu-level-container">
						<li>
							<ul class="header-menu-level2">
								{{#each categories}}
								<li>
									{{#if external_url}}
										<a class="{{class}}" href="{{external_url}}">{{translate text}}</a>
									{{else}}
										<a class="{{class}}" {{objectToAtrributes this}}>{{translate text}}</a>
									{{/if}}

									{{#if categories}}
									<ul class="header-menu-level3">
										{{#each categories}}
										
										{{#if external_url}}
											<li>
												<a class="{{class}}" href="{{external_url}}">{{translate text}}</a>
											</li>

										{{else}}
											<li>
												<a class="{{class}}" {{objectToAtrributes this}}>{{translate text}}</a>
											</li>
										{{/if}}
										{{/each}}
									</ul>
									{{/if}}
								</li>
								{{/each}}
							</ul>
						</li>
					</ul>
					{{/if}}
				</li>
			{{/if}}
		{{/each}}
<div class="header-menu-vincellar header-menu-vincellar-desktop">
	<a href="https://www.vinfolio.com/app/site/hosting/scriptlet.nl?script=911&deploy=1&compid=4558614" class="vincellar-site header-menu-vincellar-button" target="_blank">VINCELLAR</a>
</div>
	</ul>
</nav>



<script>
$("#about-us-nav-1").parent("li").addClass("aboutmenu");
$("#knowledge-nav-1").parent("li").addClass("knowledgemenu");
</script>

{{!----
Use the following context variables when customizing this template: 
	
	categories (Array)
	showExtendedMenu (Boolean)
	showLanguages (Boolean)
	showCurrencies (Boolean)

----}}
