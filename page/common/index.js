// enable I and another page object
const { I } = inject()
module.exports = {
    fillValue(xpath, value) {
        I.waitForVisible(xpath)
        I.fillField(xpath, value)
    },

    clickValue(xpath) {
        I.waitForVisible(xpath)
        I.click(xpath)
    },

    selectItems(xpath, value) {
        I.waitForVisible(xpath)
        I.selectOption(xpath, value)
    },

    pressKey(xpath) {
        I.pressKey(xpath)
    }
}