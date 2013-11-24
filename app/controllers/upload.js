var UploadController = Ember.Controller.extend( Ember.Evented, {
	code: null,
	actions: {
		trackJob: function  (data) {
			console.log("just in here");
			this.trigger('showJob');
			console.log("resp: ", data);			
		}
	},
	sendCode: function(code){
		$.ajax({
			url: 'http://localhost:3000/callback',
			type: 'POST',
			data: {
				"code": code
			}
		});
	}
});

export default UploadController;


// var SomeController = Em.Controller.extend({
//   pageDidChange: (function() {
//     return Em.run.once(this, 'updatePageParam');
//   }).observes('page')
// });

// ({
//   updatePageParam: function() {
//     return this.transitionToRoute({
//       queryParams: {
//         page: this.get('page')
//       }
//     });
//   }
// });
