define('profile_collectorprofile.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return " <label class=\"profile-information-label\"><input type=\"checkbox\" name=\"custentity_cp_burgundy\" value=\""
    + alias2(alias1((depth0 != null ? compilerNameLookup(depth0,"id") : depth0), depth0))
    + "\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isChecked") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias2(alias1((depth0 != null ? compilerNameLookup(depth0,"name") : depth0), depth0))
    + "</label><br class=\"clear\"> ";
},"2":function(container,depth0,helpers,partials,data) {
    return "checked";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return " <label class=\"profile-information-label\"><input type=\"checkbox\" name=\"custentity_collector_profile_france\" value=\""
    + alias2(alias1((depth0 != null ? compilerNameLookup(depth0,"id") : depth0), depth0))
    + "\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isChecked") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias2(alias1((depth0 != null ? compilerNameLookup(depth0,"name") : depth0), depth0))
    + "</label><br class=\"clear\"> ";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return " <label class=\"profile-information-label\"><input type=\"checkbox\" name=\"custentity_cp_other_france\" value=\""
    + alias2(alias1((depth0 != null ? compilerNameLookup(depth0,"id") : depth0), depth0))
    + "\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isChecked") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias2(alias1((depth0 != null ? compilerNameLookup(depth0,"name") : depth0), depth0))
    + "</label><br class=\"clear\"> ";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return " <label class=\"profile-information-label\"><input type=\"checkbox\" name=\"custentity_collector_profile_italy\" value=\""
    + alias2(alias1((depth0 != null ? compilerNameLookup(depth0,"id") : depth0), depth0))
    + "\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isChecked") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias2(alias1((depth0 != null ? compilerNameLookup(depth0,"name") : depth0), depth0))
    + "</label><br class=\"clear\"> ";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return " <label class=\"profile-information-label\"><input type=\"checkbox\" name=\"custentity_c_profile_other\" value=\""
    + alias2(alias1((depth0 != null ? compilerNameLookup(depth0,"id") : depth0), depth0))
    + "\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isChecked") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias2(alias1((depth0 != null ? compilerNameLookup(depth0,"name") : depth0), depth0))
    + "</label><br class=\"clear\"> ";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return " <label class=\"profile-information-label\"><input type=\"checkbox\" name=\"custentity_c_profile_newworld\" value=\""
    + alias2(alias1((depth0 != null ? compilerNameLookup(depth0,"id") : depth0), depth0))
    + "\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isChecked") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias2(alias1((depth0 != null ? compilerNameLookup(depth0,"name") : depth0), depth0))
    + "</label><br class=\"clear\"> ";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return " <label class=\"profile-information-label\"><input type=\"checkbox\" name=\"custentity_cp_other_new_world\" value=\""
    + alias2(alias1((depth0 != null ? compilerNameLookup(depth0,"id") : depth0), depth0))
    + "\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isChecked") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias2(alias1((depth0 != null ? compilerNameLookup(depth0,"name") : depth0), depth0))
    + "</label><br class=\"clear\"> ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return " <section class=\"profile-emailpreferences\"><h2 class=\"profile-emailpreferences-title\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"pageHeader") || (depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"pageHeader","hash":{},"data":data}) : helper)))
    + "</h2><div class=\"profile-collector-info profile-information-row\"><p>"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Complete your collector profile to help us locate wine that best matches your tastes",{"name":"translate","hash":{},"data":data}))
    + "<p></div><div class=\"profile-emailpreferences-alert-placeholder\" data-type=\"alert-placeholder\"></div><form class=\"profile-collector-form\"><fieldset><div class=\"profile-collector-france profile-information-row\"><label class=\"profile-information-label\"><strong>"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"BURGUNDY",{"name":"translate","hash":{},"data":data}))
    + "</strong></label><p> "
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"burgundyList") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </p></div><div class=\"profile-collector-france profile-information-row\"><label class=\"profile-information-label\"><strong>"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"BORDEAUX",{"name":"translate","hash":{},"data":data}))
    + "</strong></label><p> "
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"franceList") : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </p></div><div class=\"profile-collector-france profile-information-row\"><label class=\"profile-information-label\"><strong>"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"OTHER FRANCE",{"name":"translate","hash":{},"data":data}))
    + "</strong></label><p> "
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"otherfranceList") : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </p></div><div class=\"profile-collector-italy profile-information-row\"><label class=\"profile-information-label\"><strong>"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"ITALY",{"name":"translate","hash":{},"data":data}))
    + "</strong></label><p> "
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"italyList") : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </p></div><div class=\"profile-collector-other profile-information-row\"><label class=\"profile-information-label\"><strong>"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"OTHER OLD WORLD",{"name":"translate","hash":{},"data":data}))
    + "</strong></label><p> "
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"otherList") : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </p></div><div class=\"profile-collector-newworld profile-information-row\"><label class=\"profile-information-label\"><strong>"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"CALIFORNIA",{"name":"translate","hash":{},"data":data}))
    + "</strong></label><p> "
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"newworldList") : depth0),{"name":"each","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </p></div><div class=\"profile-collector-newworld profile-information-row\"><label class=\"profile-information-label\"><strong>"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"OTHER NEW WORLD",{"name":"translate","hash":{},"data":data}))
    + "</strong></label><p> "
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"othernewworldList") : depth0),{"name":"each","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </p></div></fieldset><div class=\"profile-emailpreferences-controls-submit\"><button type=\"submit\" class=\"profile-emailpreferences-submit\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Update",{"name":"translate","hash":{},"data":data}))
    + "</button></div></form></section>  ";
},"useData":true}); template.Name = 'profile_collectorprofile'; return template;});