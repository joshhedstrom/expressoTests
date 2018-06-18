const path = require('path')
const validateForm = require('./app/app.js')
module.exports = function(app) {
    app.get("/", (req, res)=>{
        res.sendFile(path.join(__dirname, "./app/public/index.html"));
    })

    app.post('/submit', (req, res) => {
        console.log(req.body)
        let result = validateForm(req.body.firstname, req.body.lastname, req.body.email, req.body.username, req.body.password);
        res.send(result);
    })
}