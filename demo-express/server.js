const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hello express');
});

app.listen(8080, () => {
   console.log('express web app on 127.0.0.1:8080');
});
