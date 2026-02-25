require('dotenv').config();

const express = require("express");
const cors = require("cors");

const app = express();
const carroRoutes = require("./routes/carro.routes");
const clienteRoutes = require("./routes/cliente.routes");

app.use(carroRoutes);
app.use(clienteRoutes);
app.use(express.json());
app.use(cors());


app.listen(process.env.PORT_APP, () => {
    console.log("Online na porta " + process.env.PORT_APP);
});