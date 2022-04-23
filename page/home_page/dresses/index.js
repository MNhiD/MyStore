// enable I and another page object
const { I } = inject()
const commonPage = require('../../../page/common/index.js')
const commonXpath = require('../../../page/common/xpath.js')
const dressXpath = require('../../../page/home_page/dresses/xpath.js')
module.exports = {
    addDress() {
        commonPage.clickValue(dressXpath.btn.btnDresses)
        I.waitForNavigation(commonXpath.time.waitForNavigation)
        commonPage.clickValue(dressXpath.eveningDress)
        I.waitForNavigation(commonXpath.time.waitForNavigation)
        commonPage.clickValue(dressXpath.dress)
        I.wait(commonXpath.time.waitForLoading)
        commonPage.selectItems(dressXpath.size, dressXpath.txt.txtSize)
        commonPage.clickValue(dressXpath.colorPink)
        commonPage.clickValue(dressXpath.btn.btnAdd)
        I.wait(commonXpath.time.waitForLoading)
        commonPage.clickValue(dressXpath.btn.btnContinue)
    },

    addSuccess() {
        I.waitForText(dressXpath.txt.txtSuccess, commonXpath.time.waitForText)
    }
}