# indexCards4
index cards study app in meteor 1.4.1

##to run locally:
meteor --settings exampleSettings.json

##some behavior is configurable in the settings file.

see exampleSettings.json

private.StartupPopulateDB:
bool controls if the project should create some example defaults

private.StartupData.CardsArray:
an array of card objects to be used as defaults

##new features:
new features in mongoDB 3.2 used in this project left outer joins  
https://docs.mongodb.com/manual/reference/operator/aggregation/lookup/
