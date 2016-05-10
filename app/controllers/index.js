// app/controllers/index.js
import Ember from 'ember';

export default Ember.Controller.extend({

  headerMessage: 'Coming Soon',
  responseMessage: '',
  emailAddress: '',

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),

  actions: {

    saveInvitation() {
      const task = this.get('emailAddress');

      const newInvitation = this.store.createRecord('todo', { task: task });
      newInvitation.save();

      this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
      this.set('emailAddress', '');
    }
  }
}); 