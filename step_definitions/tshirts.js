const { I } = inject();
const customPage = require('../page/home_page/tshirts/index.js')
const goToHomePage = require('../page/login/index.js')

When ('I add item in T-shirts page', () => {
    goToHomePage.goToHomePage()
    customPage.addTshirt()
})