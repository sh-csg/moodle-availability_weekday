YUI.add("moodle-availability_weekday-form",function(i,a){M.availability_weekday=M.availability_weekday||{},M.availability_weekday.form=i.Object(M.core_availability.plugin),M.availability_weekday.form.initInner=function(a){this.params=a},M.availability_weekday.form.getNode=function(a){var e=i.Node.create("<span>"+this.params+"</span>"),a=a.days||[];return a.forEach(function(a){e.one("option[value="+a+"]").set("selected",!0)}),M.availability_weekday.form.addedEvents||(M.availability_weekday.form.addedEvents=!0,i.one("#fitem_id_availabilityconditionsjson").delegate("click",function(){M.core_availability.form.update()},".availability_weekday select")),e},M.availability_weekday.form.fillValue=function(a,e){var e=e.one("select[name=availability_weekday_days]"),e=e.get("options").get("_nodes"),i=[];e.forEach(function(a){a.get("selected")&&i.push(a.get("value"))}),a.days=i}},"@VERSION@",{requires:["base","node","event","moodle-core_availability-form"]});