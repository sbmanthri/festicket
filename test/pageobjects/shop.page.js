const Page = require('./page');

class ShopPage extends Page {

    get basket () { return $('span.sc-hmzhuo.hCmmB') }

    get checkout () { return $('button.sc-kPVwWT.gUsBDp.sc-kvZOFW grAMYp.sc-chPdSV htztIG')}

    doCheckOut () {
        this.basket.click();
        this.checkout.click();
    }

}

module.exports = new ShopPage();