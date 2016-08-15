import { Meteor } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Template } from 'meteor/templating';
import { ActiveRoute } from 'meteor/zimme:active-route';
import { FlowRouter } from 'meteor/kadira:flow-router';
import './app-body.html';
import '../components/cardsList.js';

Template.App_body.events({
  "click #js-go-to-tags-button"(){
     FlowRouter.go('Tags.list');
  },
  "click #js-go-to-cards-button"(){
     FlowRouter.go('Cards.list');
  }
});
