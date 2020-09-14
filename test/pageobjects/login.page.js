const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get searchinput () { return $('input.styles__c-sc-1wid7j1-2.hkCtph')}
    get select_first () { return $('.sc-kAzzGY.jCQbqk')}

    get junctionFestival () { return $('.styles__c-sc-1nwh6zh-0.cvLvVT')}

    search (event) {
        this.open();
        this.searchinput.setValue(event);
        this.select_first.click();

    }
}

module.exports = new LoginPage();
