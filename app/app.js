module.exports = validateForm;

function validateForm(firstName, lastName, email, userName, password) {
    let passwordTester = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
    let emailTester = new RegExp('/\S+@\S+/')
    if (!firstName || !lastName || !email || !userName || !password) {
        return 'Please fill out all fields'
    } else if (emailTester.test(email)) {
        return 'Please enter a valid email address'
    } else if (!passwordTester.test(password)) {
        return 'Please try a stronger password'
    } else {
        return 'passed';
    }

}