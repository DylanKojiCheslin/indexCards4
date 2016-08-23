import { Meteor } from 'meteor/meteor';
import { Cards } from '../../api/Cards/Cards.js';
import { Tags } from '../../api/Tags/Tags.js';

Meteor.startup(() => {
  const _exampleDocsShouldBeCreated = Meteor.settings.private.StartupPopulateDB;
  const _theCardsDbIsEmpty = Cards.find().count() === 0;
  const _theTagsDbIsEmpty = Tags.find().count() === 0;
  const _defaultExampleCards = Meteor.settings.private.StartupData.CardsArray;
  const _defaultExampleTags = Meteor.settings.private.StartupData.TagsArray;

  if (_theTagsDbIsEmpty && _exampleDocsShouldBeCreated && _defaultExampleTags) {
    _defaultExampleTags.forEach((tag) => {
      Tags.insert(tag);
      }
    );
  }

  if (_theCardsDbIsEmpty && _exampleDocsShouldBeCreated && _defaultExampleCards) {
    _defaultExampleCards.forEach((card) => {
      Cards.insert(card);
      }
    );
  }
});
