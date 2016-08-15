import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Mongo } from 'meteor/mongo';
import { Cards } from '../../api/Cards/Cards.js';
import './cardsList.html';

Template.cardsList.onCreated(function cardsListOnCreated() {
  this.subscribe('cardsListPublication');
});

Template.cardsList.helpers({
  theCards(){
     return Cards.find();
  },
});
