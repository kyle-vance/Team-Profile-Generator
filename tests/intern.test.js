const Intern = require('../lib/intern.js');
describe('Intern', () => {
    const daveIntern = new Intern ('Dave', '1111', 'dave@jest.com', 'Davetown');

    it("Return name: Dave, ID: 1111, email: dave@jest.com, school: Davetown", () => {
        expect(daveIntern.name).toEqual('Dave');
        expect(daveIntern.id).toEqual('1111');
        expect(daveIntern.email).toEqual('dave@jest.com');
        expect(daveIntern.school).toEqual('Davetown');
})
});