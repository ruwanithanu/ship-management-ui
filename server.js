const dotenv = require('dotenv');
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');
 
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

const dummyUserInfo = {
  userInfo:
  {
    nbf: 1640246429,
    exp: 1640332829,
    iss: "https://identity-provider-dev.azurewebsites.net",
    aud: "login.api",
    client_id: "spaclient",
    sub: "{\n  \"id\": 102,\n  \"organizationIds\": [\n    3\n  ],\n  \"vesselIds\": [\n    1\n  ],\n  \"roleId\": 2,\n  \"email\": \"villamora@angloeastern.com\",\n  \"roleName\": \"Client Admin\",\n  \"fullName\": \"Apol Villamora\",\n  \"requiresTwoFactor\": false,\n  \"secondFactorAuthConfig\": null\n}",
    auth_time: 1640246429,
    idp: "local",
    name: "villamora@angloeastern.com",
    OrganizationIds: "5",
    VesselIds: "1",
    RoleId: "2",
    UserId: "102",
    Roles: "Client Admin",
    FullName: "Apol Villamora",
    scope: [
      "openid",
      "login.api"
    ],
    amr: [
      "pwd"
    ]
  }
};

app.get('/', async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token) {
    try {
      const headers = {
        ...getHeaders(),
        Authorization: `BEARER ${token}`
      };
      const { data: { userInfo }} = await http.get(`/Auth/UserInfo`, {
        headers
      });
      res.cookie('userInfo', JSON.stringify(userInfo), {
        maxAge: 86400000, //1 day
        httpOnly: false
      })
    } catch (e) {
      res.status(500).send({
        message: e.message
      });
    }
  } else {
    res.cookie('userInfo', JSON.stringify(dummyUserInfo.userInfo), {
      maxAge: 86400000, //1 day
      httpOnly: false
    });
  }

  next();
});

app.use(express.static(process.cwd() + '/ui/build/'));

app.get('/api/vessels/:orgId?', async (req, res) => {
  const url = req.params.orgId ? `/Vessels?organizationId=${req.params.orgId}` : '/Vessels';
  const { data } = await http.get(url, {
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
  const { data } = await http.get(`/Files/preview/${driveName}/${fileId}`, {
    headers: getHeaders()
  });

  res.status(200).send(data);
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${ port }`);
});
