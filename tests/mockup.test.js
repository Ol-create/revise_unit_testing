const lib = require('../lib');
const db = require('../db');

describe("applyDiscount", () => {
    it("should give 10% discount when the point is than 10", () => {
        db.getCustomerSync = function (id) {
            console.log('Reading data from mock api',);

            return {id, points: 60}
        }

        const result = lib.applyDiscount({ customerId: 1, totalPrice: 20 });

        expect(result.totalPrice).toBe(18)
    })
});