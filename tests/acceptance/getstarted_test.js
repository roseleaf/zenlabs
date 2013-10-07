import Getsarted from 'appkit/routes/getstarted';
import App from 'appkit/app';

module("Acceptances - Getsarted", {
  setup: function(){
    App.reset();
  }
});

test("getstarted renders with sub-navigation", function(){
  expect(3);

  visit('/getstarted').then(function(){
    ok(exists('h1:contains("Private Apps for New Zendesk")'));

    var list = find("ul#directionsType > li");
    equal(list.length, 3);

    click('a[data-tab="publicapps"]').then(function(){
      ok(exists('h1:contains("Public Apps for New Zendesk")'));    
    });   
  });
});
