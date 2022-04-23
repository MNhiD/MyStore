// enable I and another page object
const { I } = inject()
const commonPage = require('../../../page/common/index.js')
const commonXpath = require('../../../page/common/xpath.js')
const tshirtXpath = require('../../../page/home_page/tshirts/xpath.js')
module.exports = {
    addTshirt() {
        commonPage.clickValue(tshirtXpath.btn.btnTshirts)
        I.waitForNavigation(commonXpath.time.waitForNavigation)
        commonPage.clickValue(tshirtXpath.tshirt)
        I.wait(commonXpath.time.waitForLoading)
        commonPage.selectItems(tshirtXpath.size, tshirtXpath.txt.txtSize)
        commonPage.clickValue(tshirtXpath.colorBlue)
        commonPage.clickValue(tshirtXpath.btn.btnAdd)
        I.wait(commonXpath.time.waitForLoading)
        commonPage.clickValue(tshirtXpath.btn.btnContinue)
    },

    addSuccess() {
        I.waitForText(tshirtXpath.txt.txtSuccess, commonXpath.time.waitForText)
    }
}