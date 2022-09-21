const Manager = require('../lib/manager.js');
describe('Employee', () => {
    const daveManager = new Manager ('Dave', '1111', 'dave@jest.com', '1-800-Dave-Town');

    it("Return name: Dave, ID: 1111, email: dave@jest.com, officeNo: 1-800-Dave-Town", () => {
        expect(daveManager.name).toEqual('Dave');
        expect(daveManager.id).toEqual('1111');
        expect(daveManager.email).toEqual('dave@jest.com');
        expect(daveManager.officeNo).toEqual('1-800-Dave-Town');
})
});