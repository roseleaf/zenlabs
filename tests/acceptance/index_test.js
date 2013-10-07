import Index from 'appkit/routes/index';
import App from 'appkit/app';

module("Acceptances - Index", {
  setup: function(){
    App.reset();
  }
});

test("index renders with navigation", function(){
  expect(2);

  visit('/').then(function(){
    ok(exists("h1:contains('Zenlabs. Extend your Zendesk.')"));

    var list = find("ul#navbar > li");
    equal(list.length, 3);
    // equal(list.text(), "redyellowblue");
  });
});
