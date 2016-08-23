import { Meteor} from 'meteor/meteor';
import { Cards } from '../../Cards/Cards.js'
import { Tags } from '../../Tags/Tags.js'

Meteor.publish("compositePublication", function compositePublicationFunction (){
  const cardsWithTags = Cards.aggregate(
    [
      {
        $unwind: "$listTags"
      },
      {
        $lookup:
        {
          from: "Tags",
          localField: "listTags",
          foreignField: "text",
          as: "tags_docs"
        }
      },
      {
        $match: { "tags_docs": { $ne: [] } }
      }
    ],
    {
      explain: true
    }
  );
  return cardsWithTags;
});
