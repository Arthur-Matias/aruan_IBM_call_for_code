const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const mongoose = require('mongoose');


const app = express();

mongoose.connect('mongodb+srv://aruan:aruan123@aruan.d2wj5.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors())
app.use(express.json());
app.use(routes);


app.listen(3333);