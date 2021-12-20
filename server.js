const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
// import path from 'path';

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT || 3080; // default port to listen

app.use(bodyParser.json());
app.use(express.static(process.cwd() + "/ui/build/"));

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
  res.sendFile(process.cwd() + "/ui/build/index.html");
});

// start the Express server
app.listen( port, () => {
  console.log( `server started at http://localhost:${ port }` );
});