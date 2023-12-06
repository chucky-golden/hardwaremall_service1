const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const proxy = require('express-http-proxy')

const app = express()

app.use(cors())


app.use('/admin', proxy('http://localhost:3001'))
app.use('/vendors', proxy('http://localhost:3002'))
app.use('/', proxy('http://localhost:3003'))

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(3000, () => {
    console.log('gateway running...')
})