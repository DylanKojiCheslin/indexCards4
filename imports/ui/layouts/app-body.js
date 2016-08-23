import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ActiveRoute } from 'meteor/zimme:active-route';
import { FlowRouter } from 'meteor/kadira:flow-router';
import './app-body.html';
import '../components/cardsList.js';

Template.App_body.onCreated(function appBodyOnCreated() {
  this.subscribe('compositePublication');
});

Template.App_body.events({
  "click #js-go-to-tags-button"(){
     FlowRouter.go('Tags.list');
  },
  "click #js-go-to-cards-button"(){
     FlowRouter.go('Cards.list');
  }
});
