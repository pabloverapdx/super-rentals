import Ember from 'ember';

export default Ember.Route.extend({
   model() {
     return this.store.findAll('announcement');
   },
   actions: {
     save6(announce) {
       var newAnnouncement = this.store.createRecord('announcement', announce);
       newAnnouncement.save();
       this.transitionTo('announcement');
     }
   }
});
