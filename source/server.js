const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => res.send('Hello, ' + req.hostname + '. Time is ' + Date() + '.\n' ))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

