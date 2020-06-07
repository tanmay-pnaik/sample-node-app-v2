const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    var msg;
    if (!app_msg) {
        msg = 'Hello, ' + req.hostname + '. Time is ' + Date() + '.\n';
    }
    msg = 'Hello, ' + req.hostname + '. Time is ' + Date() + '.\nI will deliver your message: ' + app_msg + '\n';
    res.send(msg);
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
