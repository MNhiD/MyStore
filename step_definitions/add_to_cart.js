const { I } = inject();
const customPageWomen = require('../page/home_page/women/index.js')
const customPageDresses = require('../page/home_page/dresses/index.js')
const customPageTshirts = require('../page/home_page/tshirts/index.js')
const goToHomePage = require('../page/login/index.js')

When ('I add item in {string} page', (txt) => {
    if(txt=="Women"){
        goToHomePage.goToHomePage()
        customPageWomen.addWomenSuccess()
        customPageWomen.buySuccess()
    }
    else if(txt=="Dresses"){
        goToHomePage.goToHomePage()
        customPageDresses.addDress()
        customPageDresses.addSuccess()       
    }
    else {
        goToHomePage.goToHomePage()
        customPageTshirts.addTshirt()
        customPageTshirts.addSuccess()
    }
})