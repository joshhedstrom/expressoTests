module.exports = validateForm;

   function validateForm (firstName, lastName, email, userName, password) {
        if (firstName || lastname || email || userName || password === null) {
                return 'Please Fill out all fields'
        }

        if (email) {}

    }

// const expect = require('chai').expect;

// const multiply = function(x, y) {
// }
// describe('#multiply', () => {
//     it('should multiply correctly when given two numbers', () => {
//         expect(multiply(2, 3)).to.equal(6);
//     })

//     it('should rturn flase when not given two numbers', () => {
//         expect(multiply('a', 3))
//     })
// })