import { Meteor } from 'meteor/meteor';
import '../imports/api/rooms.js';
import '../imports/api/methods/methods.js';

Meteor.startup(() => {
  Meteor.call('addRoom', 'Kyiv');
  Meteor.call('addRoom', 'Lviv');
  Meteor.call('addRoom', 'Sambir');
});
