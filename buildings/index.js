const express = require('express');
const app = express();
const buildings = require('./buildings');
const Port = process.env.Port || 8005;

app.get('/', (req,res) => {
  res.send("Building API");
});

app.get('/buildings', (req,res) => {
  res.send(buildings);
});

app.get('/buildings/:slug', (req,res) => {
  const response = `building slug ${req.params.slug}`;
  const building = buildings.filter(building => building.id === parseInt(req.params.slug));
  res.send(building);
});


app.listen(Port, () => {
  console.log('app runing on port ', Port);
})
