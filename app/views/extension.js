var ExtensionView = Ember.View.extend({
    templateName: 'extension',
	showModal: function() {
		var modal = this.createChildView(Ember.View.create({
			templateName: 'disclaimer',
			controller: this.controller,
			dismissModal: function(){
				this.remove();
				$('#overlay').fadeOut(700);
			}
		})).appendTo('body');
		$('#overlay').fadeIn(700);
		return modal;
	}
});

export default ExtensionView;