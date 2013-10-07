var ExtensionsController = Ember.ObjectController.extend({
  recordsLoaded: function() {
    return !this.get('content').findProperty('isLoaded', false);
  }.property('content.@each.isLoaded')
});

export default ExtensionsController;