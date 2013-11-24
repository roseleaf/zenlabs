Ember.Handlebars.registerBoundHelper('trimString', function(input) {
    var trimmed = input.substring(0,50);
    return new Ember.Handlebars.SafeString(trimmed + "...");
});