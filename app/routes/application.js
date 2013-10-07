import App from 'appkit/app';

var ApplicationRoute = Ember.Route.extend({
  model: function() {
	return this.store.find('extension');
  }
});

export default ApplicationRoute;