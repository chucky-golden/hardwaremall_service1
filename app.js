const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const proxy = require('express-http-proxy')

require('dotenv').config({path: __dirname + '/.env'})

const PORT = process.env.PORT

const app = express()

app.use(cors())


app.use('/admin', proxy('https://admin-dqcw.onrender.com:3001'))
app.use('/vendors', proxy('https://vendors-jpnc.onrender.com:3002'))
app.use('/', proxy('https://users-40pl.onrender.com:3003'))

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(PORT, () => {
    console.log(`gateway running... on port ${PORT}`)
})
