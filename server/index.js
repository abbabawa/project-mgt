const express = require('express');
const colors = require('colors');
require('dotenv').config()


const {graphqlHTTP} = require('express-graphql')

const schema = require('./schema/schema');
const connectDB = require('./config/db.js')
const port = process.env.PORT || 5000;

const app = express();

//Connect to database
connectDB()

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: process.env.NODE_ENV === 'development' ? true : false
}))

app.listen(port, ()=>{
    console.log('listening on port '+port);
})