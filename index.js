const express = require('express');
const dotenv = require('dotenv');
const appRoot = require('app-root-path');
const path = require('path');
const cors = require('cors');
const { healthRouter, testRouter, contentRouter } = require('./src/routes');

const app = express();
app.use(express.json());
app.use(cors());

if (process.env.NODE_APP_ENV === 'local') {
  // const pathRoot = `${appRoot}/`;
  // console.log("HEYYYYY", appRoot.path+`${process.env.NODE_APP_ENV}.env`);
  dotenv.config({
    path: path.resolve(appRoot.path, `${process.env.NODE_APP_ENV}.env`),
  });
} else dotenv.config();

const port = process.env.PORT || 3000;

app.use('/health', healthRouter);
app.use('/test', testRouter);
app.use('/content', contentRouter);

app.listen(port, () => {
  console.log(`Server is up at ${port}`);
});
