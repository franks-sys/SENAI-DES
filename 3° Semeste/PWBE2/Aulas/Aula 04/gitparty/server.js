require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/uploads', express.static('uploads'));

const eventosRoutes = require('./src/routes/eventos.routes');
const usuariosRoutes = require('./src/routes/usuarios.routes');
const inscricoesRoutes = require('./src/routes/inscricoes.routes');

app.use('/eventos', eventosRoutes);
app.use('/usuarios', usuariosRoutes);
app.use('/inscricoes', inscricoesRoutes);

app.use(express.static(path.join(__dirname,'front')));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});