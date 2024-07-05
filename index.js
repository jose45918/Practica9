const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

let alumno = {
  nombre: "Jose",
  grupo: "TI02SM-2022",
  cuatrimestre: 3
};

app.get('/', (req, res) => {
  res.render('index', { alumno });
});

app.get('/formulario', (req, res) => {
  res.render('formulario', { alumno });
});

app.post('/datosAlumno', (req, res) => {
  alumno = {
    nombre: req.body.nombre,
    grupo: req.body.grupo,
    cuatrimestre: parseInt(req.body.cuatrimestre)
  };
  res.redirect('/datosNuevo');
});

app.get('/datosNuevo', (req, res) => {
  res.render('datosNuevo', { alumno });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});