var UploadView = Ember.View.extend(Ember.Evented, {
	templateName: 'upload',
	showJob: function() {
		console.log("and now in here");
		$('.loading.job').slideDown('slow', function(){
			console.log("slid down!");
			$('.beaker').css('opacity', '0.4');
		});		
	},
	didInsertElement: function() {
		//console.log("i exist");
		this.get('controller').on('showJob', this.showJob());
	}
});
export default UploadView;
 //