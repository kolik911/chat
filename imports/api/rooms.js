import { Mongo } from 'meteor/mongo';

export const Rooms = new Mongo.Collection('rooms');

Rooms.allow({
  'insert': function(UserId, doc) {
    return true;
  }
})