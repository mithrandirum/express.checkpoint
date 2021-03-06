const express = require('express');
const app = express();
const port = 4000;
const path = require('path')


app.set('views',path.join(__dirname, 'views'))
app.set('view engine', 'pug')

const myLogger = function (req, res, next) {
var d = new Date();
var hours = d.getHours();
var day = d.getDay()
if (hours >= 9 && hours <= 17){
 if(day >= 1 && day < 5) {
   next()
 }
}else {
  res.send('sorry , service is unavailable at the moment , checkout time schedule for further information')
}
}

app.use(myLogger)

app.get('/', (req , res) => {
  res.render('home-page')
})

app.get('/services', (req , res ) => {
  res.render('our-services')
})

app.get('/contact', (req , res ) => {
  res.render('contact-us')
})



app.listen(port)