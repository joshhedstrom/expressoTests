const path = require('path')
module.exports = function(app) {
    app.get("/", (req, res)=>{
        res.sendFile(path.join(__dirname, "./app/public/index.html"));
    })

    app.post('/submit', (req, res) => {
        console.log(req.body)
    })
}