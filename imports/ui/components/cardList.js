import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Mongo } from 'meteor/mongo';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Tracker } from 'meteor/tracker';
import { Cards } from '../../api/Cards/Cards.js';
import './cardList.html';

Template.cardList.onCreated(function cardListOnCreated() {
  this.subscribe('cardListPublication');
});

Template.cardList.helpers({
  theCards(){
     return Cards.find();
  },
});
