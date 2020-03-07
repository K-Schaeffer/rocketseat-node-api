// Importing express and mongoose
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Initializating app / Using express / Using cors
const app = express();
app.use(express.json()); // Allowing to send info. by JSON
app.use(cors());

// Initializating database
mongoose.connect(
    'mongodb://localhost:27017/rocketseat-node-api',
    { useNewUrlParser: true, useUnifiedTopology: true });
require('./src/models/Product');

// Using routes
app.use('/api', require('./src/routes'));

app.listen(3001);