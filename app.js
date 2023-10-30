const express = require('express');
const mongoose = require('mongoose');
const compression = require('compression');
const db = require('./environement/environement')

const app = express();
app.use(express.json());
app.use(compression());

// app.use({req, res, next} => {
//     res.setHeader('Allow_Control-Headers', 'Authorization');
//     next();
// })

const apiRoutes = require('./routes/api');
const userRoutes = require('./routes/user');
const pokemonRoutes = require('./routes/pokemon');
app.use('/api/', apiRoutes)
app.use('/api/users', userRoutes)
app.use('/api/pokemons/', pokemonRoutes)


const DB = db.DB


mongoose.connect(DB)
.then(() => {
    console.log('Connected to MongoDB with Sucess!')
})
.catch((err)=>{console.log('MongoDB ERROR',err)})



module.exports = app ;