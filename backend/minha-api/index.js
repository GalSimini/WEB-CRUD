const express = require('express');
const cors = require('cors');
const usersRoutes = require('./Routes/usersRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/usuarios', usersRoutes);

app.listen(3001, () => {
    console.log('Rodando na porta 3001');
});