module.exports = validateForm;

function validateForm(firstName, lastName, email, userName, password) {
    let passwordTester = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
    if (!firstName || !lastName || !email || !userName || !password) {
        console.log('Please fill out all fields')
    // } else if (email) {
    //     return 'Please enter a valid email address'
    } else if (!passwordTester.test(password)) {
        console.log('Please make sure you password contains an uppercase letter, a lowercase letter, a number, and a symbol (! @ # $ % ^ & * < > , . ? + -_)')
    }

    else {
        console.log('done')
    }

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