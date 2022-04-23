const { I } = inject()
const customPage = require('../page/check_out/index.js')

Then ('I check out', () => {
    customPage.checkOut()
}),

When ('I put the searched item out of the cart', () => {
    customPage.remove()
}),

Then ('I put successfully', () => {
    customPage.removeSuccess()
}),

Then('I check out and buy successfully', () => {
    customPage.checkOutAndBuy()
    customPage.buySuccess()
})