var ApplicationAdapter = DS.RESTAdapter.extend({
	// host: 'http://zenlabsbeta.herokuapp.com',
	host: 'http://localhost:3000',
	namespace: 'api/v1'
  // pathForType: function(type) {
  //   var decamelized = Ember.String.decamelize(type);
  //   return Ember.String.pluralize(decamelized);
  // }
});

export default ApplicationAdapter;
