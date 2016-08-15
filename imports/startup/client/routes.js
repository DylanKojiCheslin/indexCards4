import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../../ui/layouts/app-body.js';
import '../../ui/components/tagsList.js'

FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', {});
  },
});

FlowRouter.route('/tags', {
  name: 'Tags.list',
  action() {
    BlazeLayout.render('tagsList', {});
  },
});

FlowRouter.route('/cards', {
  name: 'Cards.list',
  action() {
    BlazeLayout.render('cardsList', {});
  },
});
