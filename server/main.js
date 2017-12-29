import { Meteor } from 'meteor/meteor';
import '../imports/api/rooms.js';
import '../imports/api/methods/methods.js';
import { Rooms } from '../imports/api/rooms';

Meteor.startup(() => {
 
  if (Rooms.find().count() === 0) {
    Meteor.call('addRoom', 'Sambir');
    Meteor.call('addRoom', 'Kyiv');
    Meteor.call('addRoom', 'Lviv');
    Meteor.call('addRoom', 'Harkiv');
  }

});
