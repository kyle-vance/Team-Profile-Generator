const Engineer = require('../lib/engineer.js');
describe('Engineer', () => {
    const daveEngineer = new Engineer ('Dave', '1111', 'dave@jest.com', 'davetheenginner');

    it("Return name: Dave, ID: 1111, email: dave@jest.com, github: davetheenginner ", () => {
        expect(daveEngineer.name).toEqual('Dave');
        expect(daveEngineer.id).toEqual('1111');
        expect(daveEngineer.email).toEqual('dave@jest.com');
        expect(daveEngineer.github).toEqual('davetheenginner');
})
});