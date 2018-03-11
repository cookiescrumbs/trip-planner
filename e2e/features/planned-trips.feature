Feature: Planned trips

  As an angler
  I'd like to view all my planned trips
  So I can navigate to an individual trip

Background:
  Given an angler has planned trips
  When they visit the app

Scenario: Viewing trips
  Then should be able to view a list of past and future trips

Scenario: Navigating to a trip
  Then I should be able to navigate to a trip


