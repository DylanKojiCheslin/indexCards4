import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Tags = new Mongo.Collection('tags');

Tags.schema = new SimpleSchema({
  text: {
    type: String,
    label: "text"
  },
});

Tags.attachSchema(Tags.schema);
