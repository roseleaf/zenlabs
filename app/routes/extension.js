var ExtensionRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('extension', params.extension_id);
  }
});

export default ExtensionRoute;