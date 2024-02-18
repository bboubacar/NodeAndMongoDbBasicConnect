var express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tasks = require('./models/tasks');

var app = express();

// server: initial greeting
console.log('\nServer initialization...\n');

mongoose.set('strictQuery', false);

// Check if it's not on production then use dotenv
if(process.env.NODE_ENV !== 'production'){
    dotenv.config();
}


//connection params
const CONNECTION_STRING= process.env.CONNECTION_STRING;
const PORT = process.env.PORT || 5000;

const task = new Tasks(
    {
        id: 1,
        title: 'Cooking'
    }
);

app.get('/', (request, response) => {
    response.status(200).json(task)
})

// Initialize database connexion
const start = async() => {
    try {
        await mongoose.connect(CONNECTION_STRING);

        app.listen(PORT, () => {
            console.log("success connect...", PORT);
        })
    }catch(error) {
        console.log("Error login", error.message);
    }
    
}

start();