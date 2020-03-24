const express = require('express');

const routes = express.Router();

routes.post('/users', (req, res) => {
    console.log(req.body);
    return res.json({
        evento: 'Semana OmniStack 11',
        aluno: 'Bruno Bigotto'
    });
});

module.exports = routes;