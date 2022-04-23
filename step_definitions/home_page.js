const { I } = inject();
const customPage = require('../page/home_page/index.js')
const customPageAdd = require('../page/add_to_cart/index.js')
const goToHomePage = require('../page/login/index.js')

When('I search something that {string} to buy', (txt) => {
    if(txt=="dont exits") {
        goToHomePage.goToHomePage()
        customPage.searchInv()
    }
    else {
        goToHomePage.goToHomePage()
        customPage.searchToBuy()
    }
})

Then ('I search {string}', (txt) => {
    if(txt=="unsuccessfully") {
        customPage.searchUnsuccess()
    }
    else {
        customPage.searchSuccess()
    }
})

Then ('I buy it', () => {
    customPageAdd.addToCart()
})

When('I click on button Contact Us and {string} value in all fields', (txt) => {
    if(txt=="dont fill") {
        goToHomePage.goToHomePage()
        customPage.contactInvalid()
    }
    else {
        goToHomePage.goToHomePage()
        customPage.contactValid()
    }
})

Then ('I sent message {string}', (txt) => {
    if(txt=="unsuccessfully") {
        customPage.contactUnsuccess()
    }
    else {
        customPage.contactSuccess()
    }
})

When ('I click on button Sign out', () => {
    customPage.signout()
})

Then ('I sign out successfully', () => {
    customPage.sigoutSuccess()
    goToHomePage.goToHomePage()
})