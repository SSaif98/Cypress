Feature: End to End Ecomerce Validation

    application regression
    @Regression
    Scenario: Ecomerce products delivery
        Given I open Ecomerce page
        When I add items to cart
        And validate the total prices
        Then select the country submit and verify thankyou message

    @Smoke
    Scenario: Filling the form to shop
        Given I open Ecomerce page
        When I fill the form detail
        |name | gender|
        |Bob | Male  |
        Then validate the from behaviour
        And select the shop page

