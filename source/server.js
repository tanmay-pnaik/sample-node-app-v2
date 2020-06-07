const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    var msg;
    var app_msg = process.env.APP_MSG;
    if (app_msg == "") {
        msg = 'Hello, ' + req.hostname + '. Time is ' + Date() + '.\nYou have no message for me.\n';
    } else {
        msg = 'Hello, ' + req.hostname + '. Time is ' + Date() + '.\nI will deliver your message: ' + app_msg + '\n';
    }
    res.send(msg);
})

app.listen(port, () => console.log(`Sample node app listening at port ${port}`))
