var Showdown = window.showdown,
	showdown = new Showdown.converter();
Ember.Handlebars.registerBoundHelper( 'markdown', function(input){
	console.log("the string: ", input);
	console.log("the madehtml: ", new Ember.Handlebars.SafeString(showdown.makeHtml(input)));
	return new Ember.Handlebars.SafeString(showdown.makeHtml(input));
});