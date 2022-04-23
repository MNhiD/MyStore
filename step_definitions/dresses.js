const { I } = inject();
const customPage = require('../page/home_page/dresses/index.js')
const goToHomePage = require('../page/login/index.js')

When ('I add item in Dresses page', () => {
    goToHomePage.goToHomePage()
    customPage.addDress()
})