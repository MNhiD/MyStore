const { I } = inject();
const customPage = require('../page/login/index.js')

Given('Verify go to My Store page and sign in {string}', (txt) => {
    customPage.goToHomePage(txt)
})

When('I enter {string} data in fields to sign in', (txt) => {
    if(txt=="invalid"){
        customPage.fillSigninInv()
    }
    else {
        customPage.fillSignin()
    }
})

Then('I sign in {string}', (txt) => {
    if(txt=="unsuccessfully") {
        customPage.signinUnsuccess()
    }
    else {
        customPage.signinSuccess()
    }
})


