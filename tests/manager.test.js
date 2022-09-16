const Manager = require('../lib/manager.js');
describe('Employee', () => {
    const daveEmployee = new Manager ('Dave', '1111', 'dave@jest.com', '1-800-Dave-Town');

    it("Return name: Dave, ID: 1111, email: dave@jest.com, officeNo: 1-800-Dave-Town", () => {
        expect(daveEmployee.name).toEqual('Dave');
        expect(daveEmployee.id).toEqual('1111');
        expect(daveEmployee.email).toEqual('dave@jest.com');
        expect(daveEmployee.officeNo).toEqual('1-800-Dave-Town');
})
});