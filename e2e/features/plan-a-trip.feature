Feature: Plan a trip

  As an angler
  I want to be able to plan a fishing trip to a destination
  So I know which waters I'll be fishing on each day of my trip
@runThis
Scenario: Angler plans a day trip to a destination
  Given an angler has only one day to plan a fishing trip
  And there are some destinations to choose from
  Then they should be able to choose the waters they'd like to fish on that one day

Scenario: Angler plans a trip over consecutive days to a destination
  Given an angler has a number of consecutive days in which to plan a fishing trip
  And there are some destinations to choose from
  When they select a destination
  And the consecutive dates on which they would like to plan their trip
  Then they should be able to choose the waters they'd like to fish for each of the days they have choosen to take their trip
