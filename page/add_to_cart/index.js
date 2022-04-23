// enable I and another page object
const { I } = inject()
const commonPage = require('../../page/common/index.js')
const commonXpath = require('../../page/common/xpath.js')
const addToCartXpath = require('../../page/add_to_cart/xpath.js')
module.exports = {
    addToCart() {
        commonPage.clickValue(addToCartXpath.dress)       
        I.waitForNavigation(commonXpath.time.waitForNavigation)
        commonPage.selectItems(addToCartXpath.size, addToCartXpath.txt.txtSize)
        commonPage.clickValue(addToCartXpath.colorGreen)
        commonPage.clickValue(addToCartXpath.btn.btnAdd)
        I.wait(commonXpath.time.waitForLoading)
        commonPage.clickValue(addToCartXpath.btn.btnContinue)
    },

    addSuccess() {
        I.waitForText(addToCartXpath.txt.txtSuccess, commonXpath.time.waitForText)
    }
}