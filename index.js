require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const PORT = 4000;

// middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

mongoose
  .connect(process.env.MONGO_CONN_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log('Connected successfully to Mongoose');
  })
  .catch((err) => console.error(err.message));

//routes
const apiRoutes = require('./serverApi/apiRoutes');

app.use('/', apiRoutes);

app.listen(PORT, console.log(`Server is running on port ${PORT}`));
