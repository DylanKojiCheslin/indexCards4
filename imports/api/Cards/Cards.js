import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { attachSchema } from 'meteor/aldeed:collection2';
const Cards = new Mongo.Collection('cards');

Cards.schema = new SimpleSchema({
  question: {type: String},
  answer: {type: String},
});

Cards.attachSchema(Cards.schema);

// export Cards;
