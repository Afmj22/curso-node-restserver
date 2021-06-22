const { response, request } = require('express')

const usuariosGet = (req = request, res = response) => {
    //http://localhost:8080/api/usuarios?q=hola&nombre=andres&key=123456789
    const { q, nombre = 'No name', key } = req.query;
    res.json({
        msg: 'Get Api - Controlador',
        q,
        nombre,
        key
    });
}

const usuariosPut = (req, res = response) => {
    //get the id from the url: http://localhost:8080/api/usuarios/10
    const { id } = req.params;
    res.status(400).json({
        msg: 'put Api - controlador',
        id: id
    });
}

const usuariosPost = (req, res = response) => {
    const body = req.body;
    const { nombre, edad } = req.body;
    res.status(201).json({
        msg: 'post Api - controlador',
        body: body,
        nombre: nombre
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({ msg: 'delete Api - controlador' });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}