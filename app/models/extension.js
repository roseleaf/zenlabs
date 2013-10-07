
var Extension = DS.Model.extend({
    name: DS.attr('string'),
    download_url: DS.attr('string'),
    short_description: DS.attr('string'),
    notes: DS.attr('string'),
    category: DS.attr('string'),
    zd_interface: DS.attr('string'),
    author_type: DS.attr('string'),
    icon_url: DS.attr('string')
});

// probably should be mixed-in...
// Extension.reopen({
//   // certainly I'm duplicating something that exists elsewhere...
//   attributes: function(){
//     var attrs = [];
//     var model = this;
    
//     $.each(model._data, function(key, el){
//       var pair = { key: key, value: el };
//       attrs.push(pair);
//     });
//     return attrs;

//   }.property()
// });

export default Extension;