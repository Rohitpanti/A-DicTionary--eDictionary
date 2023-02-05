
const express = require('express')
const path= require('path')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'./public/index.html'));
})

app.get('/searchword', (req, res) => {
  let url=`https://api.dictionaryapi.dev/api/v2/entries/en/${req.query.word}`

  let optoins ={
    method :'GET',
  };
  fetch(url, optoins)
  .then((res) => {
    return res.json();
    // console.log(res.json());
  })
  .then((json) => {
    res.json(json);
  })
  .catch((err) => {
    console.error("Error Occoured : "+err);
  })
})


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})