// app/controllers/index.js
import Ember from 'ember';

export default Ember.Controller.extend({

	newTask: '',

	actions: {
		addTodo() {
			var _this = this;
			var todo = this.store.createRecord('todo', {
				task: _this.get('newTask'),
				completed: false
			});
			todo.save().then((response) =>{
				//this.notify.success('created new task');
				this.set('newTask', '');
			});
		}
	}
	
}); 