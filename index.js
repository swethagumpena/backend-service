const express = require('express');
const dotenv = require('dotenv');
const { healthRouter, testRouter } = require('./src/routes');

const app = express();
dotenv.config();

const port = process.env.PORT || 3000;

app.use('/health', healthRouter);
app.use('/test', testRouter);

app.listen(3000, () => {
  console.log(`Server is up at ${port}`);
});
