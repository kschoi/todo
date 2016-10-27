import Ember from 'ember';

export default Ember.Route.extend({

	beforeModel: function() {
		return this.get("session").fetch().catch(function() {});
	},

	model() {
		return this.store.findAll('todo');
	},

	setupController: function(controller, model){
		controller.set('model', model);
	},

	actions: {
		signIn: function(provider) {
			this.get("session").open("firebase", {
				provider: provider
			}).then(function(data) {
				console.log(data.currentUser);
			});
		},
		signOut: function() {
			this.get("session").close();
		},
		accessDenied() {
			this.transitionTo('/');
		}
	}
	
});
