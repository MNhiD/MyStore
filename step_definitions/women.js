const { I } = inject();
const customPage = require('../page/home_page/women/index.js')
const goToHomePage = require('../page/login/index.js')

When ('I add item invalid in {string} page', (txt) => {
    goToHomePage.goToHomePage()
    customPage.addWomenUnsuccess(txt) 
})

Then ('I add {string}', (txt) => {
    if(txt=="unsuccessfully"){
        customPage.buyUnsuccess()
    }
    else {
        customPage.buySuccess()
    }
})