import App from 'appkit/app';

var ExtensionsRoute = Ember.Route.extend({
  model: function() {
	//return this.modelFor('extension');
	return this.store.all('extension');
  },
	renderTemplate: function(){
		this.render('sidenav', {into: 'application', outlet: 'sideFilter'});		
		this.render();
		this.render('gridview', {into: 'extensions', outlet: 'widgetindex'});
		this.render('extensionfiller', {into: 'extensions'});
	}  
});

export default ExtensionsRoute;