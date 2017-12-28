import { Rooms } from '../imports/api/rooms';
import { Messages } from '../imports/api/messages';

Meteor.publish('rooms', function () {
  return Rooms.find();
})

Meteor.publish('messages', function (roomId) {
  return Messages.find({ roomId });
}) 