import Ember from 'ember';

export default Ember.Component.extend({

  buttonLabel: 'add',

  actions: {
    submitClicked(param) {
      this.sendAction('action', param);
    },
    cancelClicked(param) {
      this.sendAction('action', param);
    }
  }

});
