import { Meteor } from 'meteor/meteor';
import { Cards } from '../Cards.js';

Meteor.publish('cardListPublication', function cardListPublicationFunciton() {
  return Cards.find({}, {});
});
