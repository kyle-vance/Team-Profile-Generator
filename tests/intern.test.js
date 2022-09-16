const Intern = require('../lib/intern.js');
describe('Employee', () => {
    const daveEmployee = new Intern ('Dave', '1111', 'dave@jest.com', 'Davetown');

    it("Return name: Dave, ID: 1111, email: dave@jest.com, school: Davetown", () => {
        expect(daveEmployee.name).toEqual('Dave');
        expect(daveEmployee.id).toEqual('1111');
        expect(daveEmployee.email).toEqual('dave@jest.com');
        expect(daveEmployee.school).toEqual('Davetown');
})
});