import { Meteor } from 'meteor/meteor';
import { Cards } from '../Cards.js';

Meteor.publish('cardsListPublication', function cardsListPublicationFunciton() {
  return Cards.find();
});
