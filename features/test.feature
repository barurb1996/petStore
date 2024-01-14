@pet-store

# This pet store does not represent true logic of an application.
# I should not be able to set or update manually the id of the records (pets) that I create.
# This should be done by the backend side.

Feature: Pet store API testing

  Scenario: Successful pet creation
    Given I set the pet ID to 555
    Given I set the pet name to "Kitty kitty"
    When I try to create a new pet
    Then I should receive a 200 status code
    Then Created pet data is correct

  Scenario: I can retrieve created pet
    Given I set the pet ID to 555
    Given I set the pet name to "Kitty kitty"
    When I try to create a new pet
    Then I should receive a 200 status code
    Then Created pet data is correct
    Then I try to retrieve an existing pet
    Then I should receive a 200 status code

  Scenario: I can delete created pet
    Given I set the pet ID to 555
    Given I set the pet name to "Kitty kitty"
    When I try to create a new pet
    Then I should receive a 200 status code
    Then Created pet data is correct
    Given I set the pet ID to 455
    Then I try to update an existing pet
    Then I should receive a 200 status code
    Then Created pet data is correct
    Then I try to delete an existing pet
    Then I should receive a 200 status code

  Scenario: I can update created pet
    Given I set the pet ID to 555
    Given I set the pet name to "Kitty kitty"
    When I try to create a new pet
    Then I should receive a 200 status code
    Then Created pet data is correct
    Given I set the pet ID to 455
    Then I try to update an existing pet
    Then I should receive a 200 status code
    Then Created pet data is correct

  # This scenario cannot be executed properly. Delete works fine on a second try.
  Scenario: I cannot delete non existing pet
    Given I set the pet ID to 1231233
    Then I try to delete an existing pet
    Then I should receive a 404 status code

  Scenario: I cannot retrieve non existing pet
    Given I set the pet ID to 1231233
    Then I try to retrieve an existing pet
    Then I should receive a 404 status code

  Scenario: Unsuccessful pet creation
    Given I set the pet ID to wrong ID "not_an_integer"
    Given I set the pet category name to "cat"
    When I try to create a new pet
    Then I should receive a 500 status code

