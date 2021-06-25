const express = require('express')
var cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        this.ConnectDB();
        this.middlewares();
        this.routes();
    }

    async ConnectDB() {
        await dbConnection();
    }

    middlewares() {
        //cors
        this.app.use(cors());
        //read an parse body
        this.app.use(express.json());
        //public directory
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }
}

module.exports = Server;