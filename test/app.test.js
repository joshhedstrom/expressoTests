const validateForm = require('../app/app.js');
const expect = require('chai').expect;


describe('#validateForm', () => {
    it('Should pass test', () => {
        expect(validateForm('firstName', 'lastName', 'email@email.com', 'username', 'asDF345#$')).to.equal('passed');
    })

    
})