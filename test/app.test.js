const validateForm = require('../app/app.js');
const expect = require('chai').expect;


describe('#validateForm', () => {
    it('should be fine for this one', () => {
        expect(validateForm('firstName', 'lastName', 'email', 'username', 'password'));
    })

    
})