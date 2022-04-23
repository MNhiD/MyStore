// enable I and another page object
const { I } = inject()
const commonPage = require('../../../page/common/index.js')
const commonXpath = require('../../../page/common/xpath.js')
const womenXpath = require('../../../page/home_page/women/xpath.js')
module.exports = {
    addWomenUnsuccess() {
        commonPage.clickValue(womenXpath.btn.btnWomen)
        I.waitForNavigation(commonXpath.time.waitForNavigation)
        commonPage.clickValue(womenXpath.lbl.lblTops)
        I.waitForNavigation(commonXpath.time.waitForNavigation)
        commonPage.clickValue(womenXpath.lbl.lblBlouses)
        I.waitForNavigation(commonXpath.time.waitForNavigation)
        commonPage.clickValue(womenXpath.blouse)
        I.waitForNavigation(commonXpath.time.waitForNavigation)
        commonPage.clickValue(womenXpath.btn.btnAdd)
        I.wait(commonXpath.time.waitForLoading)
        commonPage.clickValue(womenXpath.btn.btnCheckout)
        I.waitForNavigation(commonXpath.time.waitForNavigation)
        I.scrollTo(womenXpath.sub)
        commonPage.clickValue(womenXpath.sub)

    },

    addWomenSuccess() {
        commonPage.clickValue(womenXpath.btn.btnWomen)
        I.waitForNavigation(commonXpath.time.waitForNavigation)
        commonPage.clickValue(womenXpath.lbl.lblTops)
        I.waitForNavigation(commonXpath.time.waitForNavigation)
        commonPage.clickValue(womenXpath.lbl.lblBlouses)
        I.waitForNavigation(commonXpath.time.waitForNavigation)
        commonPage.clickValue(womenXpath.blouse)
        I.wait(commonXpath.time.waitForLoading)
        I.waitForText(womenXpath.lbl.lblQuantity, commonXpath.time.waitForText)
        commonPage.clickValue(womenXpath.plus)
        I.waitForText(womenXpath.lbl.lblSize, commonXpath.time.waitForText)
        commonPage.selectItems(womenXpath.size, womenXpath.txt.txtSize)
        I.waitForText(womenXpath.lbl.lblColor, commonXpath.time.waitForText)
        commonPage.clickValue(womenXpath.colorWhite)
        commonPage.clickValue(womenXpath.btn.btnAdd)
        I.wait(commonXpath.time.waitForLoading)
        commonPage.clickValue(womenXpath.btn.btnContinue)
    },

    buyUnsuccess() {
        I.dontSee(womenXpath.txt.txtEmpty)
    },

    buySuccess() {
        I.waitForText(womenXpath.txt.txtSuccess, commonXpath.time.waitForText)
    }
}