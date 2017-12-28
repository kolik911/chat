import { Meteor } from 'meteor/meteor';
import { Messages } from '../messages';
import { Rooms } from '../rooms';
Meteor.methods({
  addMessage(message, id) {
    if (!Meteor.userId()) throw new Meteor.Error('not authorizated');
    Messages.insert({
      message,
      createdAt: new Date(),
      roomId: id
    });
  },

  addRoom(room) {
    Rooms.insert({
      room,
      createdAt: new Date()
    })
  }
})