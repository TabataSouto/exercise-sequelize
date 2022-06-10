const bodyParser = require('body-parser');
const routerPatients = require('./routes/routerPatients')

const express = require('express');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/patients', routerPatients);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});