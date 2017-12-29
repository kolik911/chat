import { Meteor } from 'meteor/meteor';
import '../imports/api/rooms.js';
import '../imports/api/methods/methods.js';
import { Rooms } from '../imports/api/rooms';

Meteor.startup(() => {
<<<<<<< HEAD
  
=======
 
>>>>>>> ca6fb380f204d0be1ef9443c9677d1c5486f0fcb
  if (Rooms.find().count() === 0) {
    Meteor.call('addRoom', 'Sambir');
    Meteor.call('addRoom', 'Kyiv');
    Meteor.call('addRoom', 'Lviv');
    Meteor.call('addRoom', 'Harkiv');
  }

});
