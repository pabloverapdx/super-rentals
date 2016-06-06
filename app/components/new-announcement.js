import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnnouncement: false,
  actions: {
    announcementFormShow() {
      this.set('addNewAnnouncement', true);
    },
    save4() {
      var announce = {
        subject:this.get('subject'),
        body: this.get('body')
      };
      this.set('addNewAnnouncement', false);
      this.sendAction('save5', announce);
    }
  }
});
