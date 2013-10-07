import Extension from 'appkit/routes/extension';
import App from 'appkit/app';

var route;

module("Unit - ExtensionRoute", {
  setup: function(){
    route = App.__container__.lookup('route:extension');
  }
});

test("it exists", function(){
  ok(route);
  ok(route instanceof Ember.Route);
});


