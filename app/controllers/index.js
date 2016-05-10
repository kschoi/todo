// app/controllers/index.js
import Ember from 'ember';

export default Ember.Controller.extend({

  headerMessage: 'To Do',
  responseMessage: '',
  task: '',

  actions: {

    saveInvitation() {
      const task = this.get('task');

      const newInvitation = this.store.createRecord('todo', { task: task });
      newInvitation.save();

      this.set('responseMessage', `We've just saved your email address: ${this.get('task')}`);
    }
  }
}); 