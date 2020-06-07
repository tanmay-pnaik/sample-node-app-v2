const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    var msg, APP_MSG;
    if (APP_MSG == "") {
        msg = 'Hello, ' + req.hostname + '. Time is ' + Date() + '.\nYou have no message for me.\n';
    } else {
        msg = 'Hello, ' + req.hostname + '. Time is ' + Date() + '.\nI will deliver your message: ' + APP_MSG + '\n';
    }
    res.send(msg);
})

app.listen(port, () => console.log(`Sample node app listening at port ${port}`))
