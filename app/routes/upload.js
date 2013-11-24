import UploadController from 'appkit/controllers/upload';
var UploadRoute = Ember.Route.extend({
	code: null,
	controller: UploadController.create(),
	//due to http://tools.ietf.org/html/rfc6749#section-3.1.2 along with ruby's implementation
	//of its URI module (which naively calls any "#" a uri's "fragment"), ember-type urls are not acceptable 
	//for oauth2. I do think https://github.com/nov/rack-oauth2/blob/master/lib/rack/oauth2/util.rb#L37
	//could be mddified to support ember-like routing but this hack is just for now:
	activate: function(){
		var loc = document.location.href,
		start = loc.indexOf("?code"),
		end = loc.indexOf("#") - start,
		frag = loc.substr(start, end);
		console.log("fragments ", frag);
		document.location.href = document.location.href.replace(frag, '') + frag;		
	},	
	templateName: 'upload',
	renderTemplate:  function( controller, context, queryParams ) {
		console.log("yeah no ", controller, context, queryParams);
		this.code = queryParams['code'];
		//controller.set('code', this.code);
		this.render();
		$.ajax({
			url: 'http://localhost:3000/api/v1/zendesk_client/callback',
			type: 'GET',
			data: {
				"code": this.code,
				"subdomain": localStorage.subdomain,
				"extension": localStorage.extension
			}
		}).done(function(data){
			controller.send('trackJob', data);
		});
		//controller.sendCode(this.code);
	}



});

export default UploadRoute;