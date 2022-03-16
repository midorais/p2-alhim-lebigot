const express = require('express');

const app = express();

app.use((req, res)=>{
	res.json({ message:'votre requete à été reçu <3'});
});

module.exports = app;