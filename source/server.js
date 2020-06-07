const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    var msg;
    var app_msg = process.env.APP_MSG;
    var name= process.env.USER_NAME;
    var user_password= process.env.USER_PASSWORD;
    if (app_msg == undefined) {
        msg = 'Hello, ' + req.hostname + '. Time is ' + Date() + '.\nYou have no message for me.\n';
    } else {
        msg = 'Hello, ' + req.hostname + '. Time is ' + Date() + '.\nI will deliver your message: ' + app_msg + '\n';
    }
    if (name != undefined && user_password != undefined){
        msg = msg + '\nYour user name is :- ' + name + ' and password is :- ' + user_password + '\n';
    }
    res.send(msg);
})

app.listen(port, () => console.log(`Sample node app listening at port ${port}`))
