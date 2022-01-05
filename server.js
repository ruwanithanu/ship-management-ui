const dotenv = require('dotenv');
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');
// import path from 'path';
 
dotenv.config();

const app = express();
const port = process.env.SERVER_PORT || 8080; // default port to listen

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

app.get('/hello', (_, res) => {
  res.status(200).send({ message: "Hello World!" });
});

const getHeaders = (domain = 'CDH') => {
  return {
    'Content-Type': 'application/json',
    'cp-site-domain': domain
  }
};

const http = axios.create({
  baseURL: process.env.SHIP_MANAGEMENT_API_URL,
  timeout: process.env.REQUEST_TIMEOUT
});

app.get('/api/vessels/:orgId', async (req, res) => {
  const { orgId } = req.params;
  const { data } = await http.get(`/Vessels?organizationId=${orgId}`, {
    headers: getHeaders()
  });

  res.status(200).send(data);
});

app.get('/api/documents/:aeCode', async (req, res) => {
  const { aeCode } = req.params;
  const { data } = await http.get(`/Vessels/Vessel%20Documents/${aeCode}/Documents/files`, {
    headers: getHeaders()
  });

  res.status(200).send(data);
});

app.get('/api/financial/vessel/:aeCode/:vessel', async (req, res) => {
  const { aeCode, vessel } = req.params;
  const { data } = await http.get(`/Vessels/Client%20Financial%20Reports/${aeCode}/${vessel}/files`, {
    headers: getHeaders()
  });

  res.status(200).send(data);
});

app.get('/api/financial/fleet/:orgId', async (req, res) => {
  const { orgId } = req.params;
  const { data } = await http.get(`/Vessels/Client%20Financial%20Reports/ZZZ${orgId}/ZZ_REPORTS%20MULTIPLE%20SHIPS/files`, {
    headers: getHeaders()
  });

  res.status(200).send(data);
});

app.get('/api/reports/:aeCode/:category', async (req, res) => {
  const { category, aeCode } = req.params;
  const { data } = await http.get(`/Vessels/Vessel%20Documents/${aeCode}/${category}/files`, {
    headers: getHeaders()
  });

  res.status(200).send(data);
});

app.get('/api/leadership', async (req, res) => {
  const { data } = await http.get(`/Resources/leadership`, {
    headers: getHeaders()
  });

  res.status(200).send(data);
});

app.get('/api/papers/:category', async (req, res) => {
  const { category } = req.params;
  const { data } = await http.get(`/Resources/${category}/files`, {
    headers: getHeaders()
  });

  res.status(200).send(data);
});

app.get('/api/download-url/:driveName/:fileId', async (req, res) => {
  const { driveName, fileId } = req.params;
  const { data } = await http.get(`/Files/${driveName}/${fileId}`, {
    headers: getHeaders()
  });

  res.status(200).send(data);
});

app.get('/api/preview-url/:driveName/:fileId', async (req, res) => {
  const { driveName, fileId } = req.params;
  const { data } = await http.get(`/Files/${driveName}/${fileId}`, {
    headers: getHeaders()
  });

  res.status(200).send(data);
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${ port }`);
});
