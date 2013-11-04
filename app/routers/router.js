var router = Ember.Router.map(function(){
  this.route('home', {path: 'index'});  
  this.route('getstarted');

  this.route('zendesk_client');

  this.resource('extension_edit');
  this.resource('extension_edit', { path: '/extension_edit/:extension_edit_id' });
  this.resource('extension_edit.edit', { path: '/extension_edit/:extension_edit_id/edit' });
  
  this.resource('extensions');
  this.resource('extension', { path: '/extension/:extension_id' });
  this.resource('extension.edit', { path: '/extension/:extension_id/edit' });	
  // this.resource('posts', function() {
  //   this.route('new');
  // });
});

export default router;
