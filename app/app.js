module.exports = validateForm;

function validateForm(firstName, lastName, email, userName, password) {
    let passwordTester = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
    if (!firstName || !lastName || !email || !userName || !password) {
        return 'Please fill out all fields';
    } else if (!passwordTester.test(password)) {
        return 'Please try a stronger password';
    } else {
        return 'passed';
    }

}