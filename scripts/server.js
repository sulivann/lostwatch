/* eslint-disable */
const express = require('express');
const path = require('path');
const app = express();
const paths = require('../config/paths');
const preAuth = require('http-auth');
const basic = preAuth.basic(
  { realm: 'Restricted Access! Please login to proceed' },
  function(username, password, callback) {
    callback(username === 'sulimami' && password === 'vorschau9');
  }
);

app.use(preAuth.connect(basic));
app.use(express.static(paths.appBuild));

app.get('/*', function(req, res) {
  res.sendFile(path.join(paths.appBuild, 'index.html'));
});

app.listen(process.env.PORT || 9000);
