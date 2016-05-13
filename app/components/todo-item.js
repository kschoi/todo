import Ember from 'ember';

export default Ember.Component.extend({
	/*
	completed: function(key, value) {
		var todo = this.get('model');
		if(value === undefined) {
			return todo.get('completed');
		} else {
			todo.set('completed', value);
			todo.save().then((response) =>{
				//this.notify.info('task ' + todo.get('task') + ' completed');
			});
			return value;
		}
	}.property('model.completed'),
	*/
	completedChanged: Ember.observer('item.completed', function(){
		let item = this.get('item');
		item.save();
	}),
	actions: {
		deleteTodo(todo) {
			todo.destroyRecord();
			//this.notify.alert('removed task');
		},
		editTodo(todo) {
			todo.set('isEditing', true);
		},
		updateTodo(todo) {
			todo.save().then((response) =>{
				//this.notify.info('todo item updated');
				todo.set('isEditing', false);
			});
		},
		cancel(todo) {
			todo.set('isEditing', false);
			todo.rollbackAttributes();
		}
	}
});
