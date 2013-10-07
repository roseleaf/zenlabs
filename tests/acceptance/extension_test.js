import Extensions from 'appkit/routes/extension';
import App from 'appkit/app';

module("Acceptances - Extensions", {
  setup: function(){
    App.reset();
  }
});

test("extension renders", function(){
  expect(1);

  visit('extensions').then(function(){
    ok(exists("h1:contains('Extend your Zendesk')"));

    // var list = find("ul li");
    // equal(list.length, 3);
    // equal(list.text(), "redyellowblue");
  });
});
