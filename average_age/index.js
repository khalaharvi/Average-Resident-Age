const express = require('express');
const app = express();
const Port = process.env.Port || 8080;
const request = require('request-promise');

app.get('/', (req,res) => {
  res.send("Average user age API");
});

app.get('/average/resident/age/building/:slug', (req,res) => {
  const building_url = `http://buildings:8005/buildings/${req.params.slug}`;
  request({uri: building_url, json: true})
  .then((result) => {
    const userData = result[0].users.map((user) => {
      const user_url = `http://users:9005/users/${user}`;
      console.log('user url', user_url);
      return request({uri: user_url, json: true});
    });
    return Promise.all(userData);
  })
  .then((users) => {
    const flattend_users = users.reduce((a, b) => a.concat(b), []);
    const ages = flattend_users.map((user) => user.age);
    const aggrigated_resident_age = ages.reduce((aggrigate, currentvalue) => {
      return aggrigate + currentvalue;
    });
    const average_age = Math.round(aggrigated_resident_age / flattend_users.length);
    res.send(`The Average Age of residents in building ${req.params.slug} is ${average_age} years old`);
  });
});



app.listen(Port, () => {
  console.log('app runing on port ', Port);
})
