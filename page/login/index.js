// enable I and another page object
const { I } = inject()
const commonPage = require('../../page/common/index.js')
const commonXpath = require('../../page/common/xpath.js')
const xpath = require('../../page/login/xpath.js')
module.exports = {
    goToHomePage() {
        I.amOnPage(xpath.url)
    },

    fillSignin() {
        I.waitForText(xpath.titleSigin, commonXpath.time.waitForText)
        commonPage.clickValue(xpath.btnSignin)
        I.waitForText(xpath.lblSignin, commonXpath.time.waitForText)
        commonPage.fillValue(xpath.fieldEmail, xpath.txt.txtEmail)
        commonPage.fillValue(xpath.fieldPasswd, xpath.txt.txtPasswd)
        commonPage.clickValue(xpath.signinBtn)
    },

    fillSigninInv() {
        I.waitForText(xpath.titleSigin, commonXpath.time.waitForText)
        commonPage.clickValue(xpath.btnSignin)
        I.waitForText(xpath.lblSignin, commonXpath.time.waitForText)
        commonPage.fillValue(xpath.fieldEmail, xpath.txt.txtInvdEmail)
        commonPage.fillValue(xpath.fieldPasswd, xpath.txt.txtInvPasswd)
        commonPage.clickValue(xpath.signinBtn)
    },

    signinSuccess() {
        I.waitForText(xpath.txt.txtResult, commonXpath.time.waitForText)
    },

    signinUnsuccess() {
        I.waitForText(xpath.txt.txtFail, commonXpath.time.waitForText)
    }
}