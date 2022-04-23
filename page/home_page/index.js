// enable I and another page object
const { I } = inject()
const commonPage = require('../../page/common/index.js')
const commonXpath = require('../../page/common/xpath.js')
const homePageXpath = require('../../page/home_page/xpath.js')
const faker = require('faker')
module.exports = {
    searchToBuy() {
        commonPage.clickValue(homePageXpath.search)
        commonPage.fillValue(homePageXpath.search, homePageXpath.txt.txtSearch)
        commonPage.pressKey(commonXpath.enterKey)
    },

    searchInv() {
        let searchFail = faker.random.word() + " " + faker.music.genre()
        commonPage.clickValue(homePageXpath.search)
        commonPage.fillValue(homePageXpath.search, searchFail)
        commonPage.pressKey(commonXpath.enterKey)
    },

    searchSuccess() {
        I.waitForText(homePageXpath.txt.txtResultPass, commonXpath.time.waitForText)
    },

    searchUnsuccess() {
        I.waitForText(homePageXpath.txt.txtResultFail, commonXpath.time.waitForText)
    },

    contactInvalid() {
        commonPage.clickValue(homePageXpath.btn.btnContact)
        I.waitForNavigation(commonXpath.time.waitForNavigation)
        I.scrollTo(homePageXpath.btn.btnSend)
        commonPage.clickValue(homePageXpath.btn.btnSend)
    },

    contactValid() {
        commonPage.clickValue(homePageXpath.btn.btnContact)
        I.waitForNavigation(commonXpath.time.waitForNavigation)      
        commonPage.selectItems(homePageXpath.cb.cbSubjectHeading, homePageXpath.txt.txtSub)
        commonPage.selectItems(homePageXpath.cb.cbOrder, homePageXpath.txt.txtOrder)
        commonPage.selectItems(homePageXpath.cb.cbProduct, homePageXpath.txt.txtProduct)
        I.attachFile(homePageXpath.inputFile, homePageXpath.file)
        commonPage.fillValue(homePageXpath.message, homePageXpath.txt.txtMess)  
        I.scrollTo(homePageXpath.btn.btnSend) 
        commonPage.clickValue(homePageXpath.btn.btnSend)
    },

    contactUnsuccess() {
        I.waitForText(homePageXpath.txt.txtContactUnsuccess, commonXpath.time.waitForText)
    },

    contactSuccess() {
        I.waitForText(homePageXpath.txt.txtContactSuccess, commonXpath.time.waitForText)
    },

    signout() {
        commonPage.clickValue(homePageXpath.btn.btnSignout)
    },

    sigoutSuccess() {
        I.dontSee(homePageXpath.txt.txtSignout)
    }
}