var DownloadModalView = Ember.View.extend({
	templateName: 'disclaimer',
	layoutName: 'modal_layout',
	// controller: ZendeskClientController.create(),
	subdomain: '',
	extension: null,
	dismissModal: function(){
		this.remove();
		$('#overlay').fadeOut(700);
	},
	showAuthForm: function(){
		this.set('templateName', 'authform');
		this.rerender();
		console.log("mewth", this.extension);

		var parent = this.get('parentView');
		console.log("meow?", parent.$('.agree.btn'), document.location.origin);
		$('.agree.btn', parent).attr("disabled", "disabled").css({"backgroundColor": "#ccc", "backgroundImage": "none"});
	}	
	// ,
	// showAuthForm: function(){
	// 	this.set('templateName', 'authform');
	// 	this.rerender();
	// 	console.log("mewth", this.extension);

	// 	var parent = this.get('parentView');
	// 	console.log("meow?", parent.$('.agree.btn'), document.location.origin);
	// 	$('.agree.btn', parent).attr("disabled", "disabled").css({"backgroundColor": "#ccc", "backgroundImage": "none"});
	// },
	// showAuthURL: function(url){
	// 	var source   = "<h2>Step 2</h2><p>Click the link below to authorize Zenlabs: <a href='" + url + "'>" + url + "</a></p>";
	// 	$('.modal-body').html(source);
	// 	//	template = Ember.Handlebars.compile(source);
	// 	// this.set('templateName', template);
	// 	// this.rerender();
	// }
});
export default DownloadModalView;
