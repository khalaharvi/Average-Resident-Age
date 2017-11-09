const express = require('express');
const app = express();
const users = require('./users');
const Port = process.env.Port || 9005;

app.get('/', (req,res) => {
  res.send("Users API");
});

app.get('/users', (req,res) => {
  res.send(users);
});

app.get('/users/:slug', (req,res) => {
  const response = `users slug ${req.params.slug}`;
  const user = users.filter(user => user.id === req.params.slug);
  res.send(user);
});


app.listen(Port, () => {
  console.log('app runing on port ', Port);
})
