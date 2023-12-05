const express = require ('express')
const app = express()
const router = require('./config/router')
require('./config/mongoose')
require('dotenv').config()
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded ({extended: true}) );

app.use(router);

app.listen(process.env.PORT , () => {
    console.log("listening on port 3001");

})




