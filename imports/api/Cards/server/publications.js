import { Meteor } from 'meteor/meteor';
import { Cards } from '../Cards.js';

Meteor.publish('cardsListPublication', function cardsListPublicationFunciton() {
  return Cards.find();
});

Meteor.publishComposite('cardWithTags', function() {
  //validate input
  new SimpleSchema({
    listId: {type: String}
  }).validate({ listId });

  const userId = this.userId;

 //card query obj
  return {
    find() {
      const query = {};

      const options = {
        fields: {
          limit: 10,
          fields: {
            {question:1},
            {answer:1},
            {listTags:1},
          }
         }
      };

      return Cards.find(query, options);
    },
    // tags
    children: [{
      find(card) {
        return Tags.find({ listId: list._id }, { fields: Todos.publicFields });
      }
    }]
  };
});
