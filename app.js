import * as url from 'url';
import hbs from 'hbs';
import * as dotenv from 'dotenv';
dotenv.config();
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
import express from 'express';
const app = express()
const port = process.env.PORT;


//Handlebars
app.set('view engine','hbs');
hbs.registerPartials( __dirname + '/views/partials', function (err) {});

app.use( express.static('public') );

app.get('/', (req, res) => {
  res.render('home',{
    nombre: 'Marcos Perez',
    titulo: "Curso de nodejs"
  })
})

app.get('/generic', (req, res) => {
    // res.sendFile(__dirname + '/public/generic.html')
    res.render('generic',{
      nombre: 'Marcos Perez',
      titulo: "Curso de nodejs"
    })
})

app.get('/elements', (req, res) => {
    // res.sendFile(__dirname + '/public/elements.html')
    res.render('elements',{
      nombre: 'Marcos Perez',
      titulo: "Curso de nodejs"
    })
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`Aplicacion de ejemplo corriendo en el puerto ${port}`)
})