import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Mongo } from 'meteor/mongo';
import { Tags } from '../../api/Tags/Tags.js';
import './tagsList.html';

Template.tagsList.onCreated(function tagsListOnCreated() {
  this.subscribe('tagsListPublication');
});

Template.tagsList.helpers({
  theTags(){
     return Tags.find();
  },
});
