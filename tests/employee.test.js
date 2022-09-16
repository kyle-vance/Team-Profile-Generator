const Employee = require('../lib/employee.js');
describe('Employee', () => {
    const daveEmployee = new Employee ('Dave', '1111', 'dave@jest.com', 'Employee');

    it("Return name: Dave, ID: 1111, email: dave@jest.com, role: Employee", () => {
        expect(daveEmployee.name).toEqual('Dave');
        expect(daveEmployee.id).toEqual('1111');
        expect(daveEmployee.email).toEqual('dave@jest.com');
        expect(daveEmployee.role).toEqual('Employee');
})
});
