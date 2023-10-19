require("dotenv").config( );
const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");


require("./config/database.cjs");

const app = express( );


app.use(logger('dev'));

app.use(express.json( ));


app.use(express.static(path.join(__dirname, 'dist')));


app.use(require("./config/checkToken.cjs"));



app.get('/api/test', (req, res) => {
  res.send('You just hit a API route');
});

  const userRouter = require("./routes/api/users.cjs");

  app.use('/api/users', userRouter);


app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });



  const PORT = process.env.PORT || 3001;

  app.listen(PORT, ( ) => {
    console.log(`Express app running on port: ${PORT}`);
  });