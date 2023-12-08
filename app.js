const express = require('express')
const cors = require('cors')
// const bodyParser = require('body-parser');
const proxy = require('express-http-proxy')
const multer = require('multer');

require('dotenv').config({path: __dirname + '/.env'})

const PORT = process.env.PORT

const app = express()

app.use(cors())


app.use('/admin', proxy('https://admin-dqcw.onrender.com'))
app.use('/vendors', proxy('https://vendors-jpnc.onrender.com'))
app.use('/', proxy('https://users-40pl.onrender.com'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

const upload = multer();
app.use(upload.array());


app.listen(PORT, () => {
    console.log(`gateway running... on port ${PORT}`)
})
