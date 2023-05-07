import * as url from 'url';
import hbs from 'hbs'
import express from 'express'
import * as dotenv from 'dotenv'

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
dotenv.config()
const app = express();

// handlebars
app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

// servir contenido estatico
app.use(express.static('public'))

app.get('/',(req, res)=>{
  res.render('home',{
    nombre:'Luis Mata',
    titulo:'Curso de Node'
  })
})

app.get('/generic',(req, res)=>{
    res.render('home',{
      nombre:'Luis Mata',
      titulo:'Curso de Node'
    })
})

app.get('/elements',(req, res)=>{
  res.render('elements',{
    nombre:'Luis Mata',
    titulo:'Curso de Node'
  })
})

app.get('*',(req,res)=>{
    res.sendFile(__dirname + '/public/404.html')
})

const port = process.env.PORT;

app.listen(port,()=>{
    console.log(`Runing in PORT: ${port}`)
})
