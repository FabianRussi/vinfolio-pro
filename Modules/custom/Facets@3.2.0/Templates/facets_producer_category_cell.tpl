{{!
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
}}

<!--
<div class="facets-browse-category-producers-subcat">
	Search Favorites Only 
	<select name="">
		<option value="">Search a Region</option>
		<option value="Australia">Australia</option>
		<option value="Burgundy">Burgundy</option>
		<option value="Rhone">Rhone</option>
		<option value="Spain">California</option>
	</select>
</div>
-->

<div class="facets-browse-category-producers-subcat">
	<a href="">A</a>
	<a href="">B</a>
	<a href="">C</a>	
	<a href="">D</a>
	<a href="">E</a>
	<a href="">F</a>	
	<a href="">G</a>	
	<a href="">H</a>	
	<a href="">I</a>	
	<a href="">J</a>	
	<a href="">K</a>	
	<a href="">L</a>	
	<a href="">M</a>	
	<a href="">N</a>	
	<a href="">O</a>	
	<a href="">P</a>	
	<a href="">Q</a>	
	<a href="">R</a>	
	<a href="">S</a>	
	<a href="">T</a>	
	<a href="">U</a>	
	<a href="">V</a>	
	<a href="">W</a>	
	<a href="">X</a>	
	<a href="">Y</a>	
	<a href="">Z</a>	
	<a href="">All</a>	
</div>

{{#each producerSubCat}}
<div class="facets-producer-category-cell">
	<div class="facets-category-cell-title">
		<a href="{{fullurl}}" class="facets-category-cell-anchor">
			{{name}}
		</a>
	</div>
</div>
{{/each}}


{{!----
The context variables for this template are not currently documented. Use the {{log this}} helper to view the context variables in the Console of your browser's developer tools.

----}}
