import Getstarted from 'appkit/routes/getstarted';
import App from 'appkit/app';

var route;

module("Unit - GetstartedRoute", {
  setup: function(){
    route = App.__container__.lookup('route:getstarted');
  }
});

test("it exists", function(){
  ok(route);
  ok(route instanceof Ember.Route);
});


