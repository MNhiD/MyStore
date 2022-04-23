// enable I and another page object
const { I } = inject()
const commonPage = require('../../page/common/index.js')
const commonXpath = require('../../page/common/xpath.js')
const xpath = require('../../page/login/xpath.js')
const checkOutXpath = require('../../page/check_out/xpath.js')
module.exports = {
    checkOut() {
        commonPage.clickValue(checkOutXpath.btn.btnCheckout)
        I.waitForText(checkOutXpath.txt.txtCheckout, commonXpath.time.waitForText)      
    },

    checkOutAndBuy() {
        I.scrollTo(checkOutXpath.btn.btnCheckout1)
        commonPage.clickValue(checkOutXpath.btn.btnCheckout1)
        I.waitForNavigation(commonXpath.time.waitForNavigation)
        commonPage.clickValue(checkOutXpath.btn.btnCheckout2)
        I.waitForText(checkOutXpath.txt.txtService, commonXpath.time.waitForText)
        commonPage.clickValue(checkOutXpath.tickService)
        commonPage.clickValue(checkOutXpath.btn.btnCheckout3)
        I.waitForNavigation(commonXpath.time.waitForNavigation)
        commonPage.clickValue(checkOutXpath.pay)
        I.waitForNavigation(commonXpath.time.waitForNavigation)
        commonPage.clickValue(checkOutXpath.btn.btnConfirm)
        I.waitForNavigation(commonXpath.time.waitForNavigation)
    },

    remove() {
        I.scrollTo(checkOutXpath.remove)
        commonPage.clickValue(checkOutXpath.remove)
    },

    removeSuccess() {
        I.dontSee(checkOutXpath.txt.txtRemoveSuccess)
    },

    buySuccess() {
        I.waitForText(checkOutXpath.txt.txtComplete, commonXpath.time.waitForText)
        I.amOnPage(xpath.url)
        I.waitForText(checkOutXpath.txt.txtCart, commonXpath.time.waitForText)
    }
}