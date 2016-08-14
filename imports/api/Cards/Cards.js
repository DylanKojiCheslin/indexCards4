import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
export const Cards = new Mongo.Collection('cards');

Cards.schema = new SimpleSchema({
  question: {
    type: String,
    label: "question"
  },
  answer: {
    type: String,
    label: "answer"
  },
});

Cards.attachSchema(Cards.schema);
