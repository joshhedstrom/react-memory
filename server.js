const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
};

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, './client/build/index.html'))
})

app.listen(PORT, ()=> {
	console.log(`App listening on http://localhost:${PORT}`)
});