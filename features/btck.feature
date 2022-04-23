Feature: Final course exercise
  In order to achieve my goals
  I want to login, buy something, then contact and logout successfully
  Scenario: Sign in, buy something, contact and sign out successfully
    Given Verify go to My Store page and sign in "unsuccessfully"
    When I enter "invalid" data in fields to sign in 
    Then I sign in "unsuccessfully"
    Given Verify go to My Store page and sign in "successfully"
    When I enter "valid" data in fields to sign in 
    Then I sign in "successfully"
    When I search something that "dont exits" to buy
    Then I search "unsuccessfully"
    When I search something that "exits" to buy 
    Then I search "successfully"
    Then I buy it
    When I add item invalid in "Women" page
    Then I add "unsuccessfully"
    When I add item in "Women" page 
    Then I add "successfully"
    When I add item in "Dresses" page
    When I add item in "T-shirts" page
    Then I check out
    When I put the searched item out of the cart
    Then I put successfully
    Then I check out and buy successfully
    When I click on button Contact Us and "dont fill" value in all fields
    Then I sent message "unsuccessfully"
    When I click on button Contact Us and "fill" value in all fields
    Then I sent message "successfully"
    When I click on button Sign out
    Then I sign out successfully