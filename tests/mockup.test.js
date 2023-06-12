const lib = require('../lib');
const db = require('../db');
const mail = require('../mail')

describe("applyDiscount", () => {
    it("should give 10% discount when the point is than 10", () => {
        db.getCustomerSync = function (id) {
            console.log('Reading data from mock api',);

            return {id, points: 60}
        }

        const result = { customerId: 1, totalPrice: 20 };

        lib.applyDiscount(result);

        expect(result.totalPrice).toBe(18)
    })
});


describe("notifyCustomer", () => {
    it("should send message to costumer", () => {
        const order = {customerId: 1, email: 'oluola96@gmail.com'}

        db.getCustomerSync = jest.fn().mockReturnValue({email: 'a'})
        mail.send = jest.fn()

        lib.notifyCustomer(order)
     
        expect(mail.send).toHaveBeenCalled()
        expect(mail.send.mock.calls[0][0]).toBe('a')
        expect(mail.send.mock.calls[0][1]).toMatch(/order/)
    })
});