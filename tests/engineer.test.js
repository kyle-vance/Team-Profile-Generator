const Engineer = require('../lib/engineer.js');
describe('Employee', () => {
    const daveEmployee = new Engineer ('Dave', '1111', 'dave@jest.com', 'davetheenginner');

    it("Return name: Dave, ID: 1111, email: dave@jest.com, github: davetheenginner ", () => {
        expect(daveEmployee.name).toEqual('Dave');
        expect(daveEmployee.id).toEqual('1111');
        expect(daveEmployee.email).toEqual('dave@jest.com');
        expect(daveEmployee.github).toEqual('davetheenginner');
})
});