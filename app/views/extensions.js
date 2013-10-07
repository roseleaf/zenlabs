var ExtensionsView = Ember.View.extend({
    templateName: 'extensions',
	didInsertElement: function(){
		this.displayFilter();
	},

	displayFilter: function(){
		var view = this;
		var $container = $('#widgetgrid'),
			$item = $('.item');
		$('#filters a').click(function(){
			$('.active').removeClass();
			$(this).addClass('active');
			$('#appscontainer h1').text($(this).text().capitalize() + " Extensions");
			var selector = $(this).attr('data-filter');
			$container.isotope({ filter: selector, layoutMode: 'fitRows' }, function( $items ) {
				var len = $items.length;
				if ( len < 5 ){
					$('.leftarrow, .rightarrow, .controls').css('visibility', 'hidden');
				} else{
					$('.leftarrow, .rightarrow, .controls').css('visibility', 'visible');
				}
			});
			return false;
		});
	}.observes('controller.recordsLoaded')    
});

export default ExtensionsView;