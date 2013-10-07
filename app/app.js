import Resolver from 'resolver';
import router from 'appkit/routers/router';
import ApplicationAdapter from 'appkit/adapters/application';

import MarkdownHelper from 'appkit/helpers/markdown';

var App = Ember.Application.create({
	LOG_ACTIVE_GENERATION: true,
	LOG_VIEW_LOOKUPS: true,
	modulePrefix: 'appkit', // TODO: loaded via config
	Resolver: Resolver,
	Router: Ember.Router.extend({
	router: router
	}),
	Store: DS.Store.extend({
		adapter: ApplicationAdapter
	}) 
});


export default App;
