const express = require('express');
const path = require('path');
const bodyParser = require ('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, (err) => {
	if (err) console.log(err);
	console.log('Server connected on port: ', PORT);
});