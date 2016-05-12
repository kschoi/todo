import Ember from 'ember';

export default Ember.Route.extend({

	model() {
		return this.store.findAll('todo');
	},

	setupController: function(controller, model){
		controller.set('model', model);
	}
	
});
