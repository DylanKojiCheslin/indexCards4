import { Meteor } from 'meteor/meteor';
import { Cards } from '../../api/Cards/Cards.js';

Meteor.startup(() => {
  const _exampleDocsShouldBeCreated = Meteor.settings.private.StartupPopulateDB;
  const _theCardsDbIsEmpty = Cards.find().count() === 0;
  const _defaultExampleCards = Meteor.settings.private.StartupData.CardsArray;
  if (_theCardsDbIsEmpty && _exampleDocsShouldBeCreated && _defaultExampleCards) {
    _defaultExampleCards.forEach((card) => {
      Cards.insert(card);
      }
    );
  }
});
