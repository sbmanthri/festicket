const Page = require('./page');

class EventPage extends Page {
    get bookNow () { return $('span.sc-hmzhuo.hCmmB') }
}
module.exports = new EventPage();