require('dotenv').config();
const express = require('express')
const cors = require('cors')
const session = require('express-session')
const massive = require('massive')

const yeetCTRL = require('./controller')

const app = express();
const {
    SERVER_PORT,
    SESSION_SECRET,
    CONNECTION_STRING
} = process.env

app.use(express.json());
app.use(cors());
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET
}))

massive(CONNECTION_STRING).then(dbInstance=> {
    app.set('db', dbInstance);
    console.log('database connected')
})
.catch((error)=>{
    console.log('error')
})





app.listen(SERVER_PORT, ()=> console.log('Server is on yass'))