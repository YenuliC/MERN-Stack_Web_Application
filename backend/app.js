const express = require('express');
const app = express();
const cors  =require('cors');
const controller = require('./controller');

app.use(cors());

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());

//create the API
app.get('/users', (req, res) =>{
    controller.getUsers(users =>{
        res.send(users);
    });
});

app.get('/user', (req, res)=>{
    const id = req.query.id;
    controller.getUserById(id, user =>{
        res.send(user);
    });
});

module.exports = app;
