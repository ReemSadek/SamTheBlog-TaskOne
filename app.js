const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');
const aRouter = require('./routes/aRouter');

//express app
const app = express();

//connecting MongoDB
const dbURI ='mongodb+srv://Admin:Sam2021@sam.jfhur.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
.then((result)=> console.log('Connected to Database'))
.catch((err)=>console.log(err));

//listen for requests
app.listen(3000);

//MiddleWare
app.use(express.static('public'));
app.use(express.urlencoded());
app.use(morgan('dev'));

//view engine
app.set('view engine', 'ejs');

//blog routes
app.use(blogRoutes);
app.use('/trending',aRouter);

   //About page
  app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
  });

  
  // 404 page
  app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
  });

  