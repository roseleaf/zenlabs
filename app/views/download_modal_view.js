import ZendeskClientController from 'appkit/controllers/zendesk_client_controller';
var DownloadModalView = Ember.View.extend({
	templateName: 'disclaimer',
	layoutName: 'modal_layout',
	controller: ZendeskClientController.create(),
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
	},
	createOauthClient: function(subdomain){
		var self = this;
		$.ajax({
			type: "POST",
			url: "http://localhost:3000/api/v1/set_account",
			data: { subdomain: subdomain, extension: this.extension._data.id, return_url: document.location.origin + "/upload" },
		}).done(function(data, status){
			console.log("ok", data.auth_url, status );
			self.showAuthURL(data.auth_url);
		})
		.fail(function(data, status){
			window.alert("Sorry, there was a problem fetching your account. Please try again later.", data, status);
		});
	},
	showAuthURL: function(url){
		var source   = "<h2>Step 2</h2><p>Click the link below to authorize Zenlabs: <a href='" + url + "'>" + url + "</a></p>";
		$('.modal-body').html(source);
		//	template = Ember.Handlebars.compile(source);
		// this.set('templateName', template);
		// this.rerender();
	}
});
export default DownloadModalView;
