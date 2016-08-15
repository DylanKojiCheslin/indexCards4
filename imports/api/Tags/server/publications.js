import { Metoer} from 'meteor/meteor';
import { Tags } from '../Tags.js'

Meteor.publish("tagsListPublication", function tagsListPublicationFunction (){
    return Tags.find();
});
