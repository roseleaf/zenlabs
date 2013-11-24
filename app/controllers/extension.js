var ExtensionController = Ember.Controller.extend({
	subdomain: '',
	//extension: null,

	createOauthClient: function(subdomain){
		console.log("mew mew mewwww! ", subdomain);

		var self = this;
		localStorage.extension = this.get('model').id;
		localStorage.subdomain = subdomain;
		$.ajax({
			type: "POST",
			url: "http://localhost:3000/api/v1/get_auth_url",
			data: { subdomain: subdomain, extension: this.get('model').id, return_url: document.location.origin + "/upload" },
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

export default ExtensionController;