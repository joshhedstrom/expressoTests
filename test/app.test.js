const validateForm = require('../app/app.js');
const expect = require('chai').expect;


describe('#validateForm', () => {
    it('Null fields', () => {
        expect(validateForm('', 'Smith', 'jsmith@email.com', 'jsmith', 'asDF345#$')).to.equal('Please fill out all fields');
        expect(validateForm('John', '', 'jsmith@email.com', 'jsmith', 'asDF345#$')).to.equal('Please fill out all fields');
        expect(validateForm('John', 'Smith', '', 'jsmith', 'asDF345#$')).to.equal('Please fill out all fields');
        expect(validateForm('John', 'Smith', 'jsmith@email.com', '', 'asDF345#$')).to.equal('Please fill out all fields');
        expect(validateForm('John', 'Smith', 'jsmith@email.com', 'jsmith', '')).to.equal('Please fill out all fields');
    });
    it('Invalid passwords', () => {
        expect(validateForm('John', 'Smith', 'jsmith@email.com', 'jsmith', 'asdfg')).to.equal('Please try a stronger password');
        expect(validateForm('John', 'Smith', 'jsmith@email.com', 'jsmith', '123456')).to.equal('Please try a stronger password');
        expect(validateForm('John', 'Smith', 'jsmith@email.com', 'jsmith', '@#$%')).to.equal('Please try a stronger password');
    });
    it('All fields valid', () => {
        expect(validateForm('John', 'Smith', 'jsmith@email.com', 'jsmith', 'asDF345#$')).to.equal('Your credentials were validated! You are all signed up!');
    });
})