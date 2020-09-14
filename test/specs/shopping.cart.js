const EventPage = require('../pageobjects/event.page');
const LoginPage = require('../pageobjects/login.page');
const ShopPage = require('../pageobjects/shop.page');

describe('festicket test', () => {
    it('search for festive park', () => {
        // loginPage.open();
        LoginPage.search('Junction 2 Festival 2021')

        EventPage.bookNow.click();

        ShopPage.doCheckOut();
        expect(BillingPage.festivename).toBeExisting();

    });
});


