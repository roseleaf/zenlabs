import DownloadModalView from 'appkit/views/download_modal_view';

var ExtensionView = Ember.View.extend({
    templateName: 'extension',
	showModal: function() {
		var modal = this.createChildView(DownloadModalView.create({
			extension: this.controller.get('content')
		})).appendTo('body');
		$('#overlay').fadeIn(700);
		return modal;
	}
});

export default ExtensionView;