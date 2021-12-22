const dotenv = require('dotenv');
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');
// import path from 'path';

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT || 3080; // default port to listen

app.use(cors());
app.use(function(_, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});
app.use(bodyParser.json());
app.use(express.static(process.cwd() + '/ui/build/'));

// define a route handler for the default home page
app.get('/', (_, res) => {
  res.sendFile(process.cwd() + '/ui/build/index.html');
});

const http = axios.create({
  baseURL: process.env.SHIP_MANAGEMENT_API_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: process.env.REQUEST_TIMEOUT
});

app.get('/vessels', async (_, res) => {
  const { data } = await http.get(`/Vessels?organizationId=${process.env.ORG_ID}`, {
    headers: {
      'cp-site-domain': 'CDH'
    }
  });

  res.status(200).send(data);
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${ port }`);
});