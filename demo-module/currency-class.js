class Currency {

    constructor(number) {
        this.number = number;
    }

    static round(amount) {
        return Math.round(amount * 100) / 100;
    };

    USToRMB(us) {
        return Currency.round(us * this.number);
    };

    RMBToUS (rmb) {
        return Currency.round(rmb / this.number);
    };
}

module.exports = Currency;
