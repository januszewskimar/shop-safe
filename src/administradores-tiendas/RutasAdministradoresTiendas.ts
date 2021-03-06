import express = require('express');
import { Collection } from 'mongodb';
import { AdministradorTienda } from "../entidades/AdministradorTienda";
import { ControladorAdministradoresTiendas } from "./ControladorAdministradoresTiendas";
import { ExcepcionUsuarioYaExiste } from "../excepciones/ExcepcionUsuarioYaExiste";
import { ExcepcionNombreUsuarioIncorrecto } from "../excepciones/ExcepcionNombreUsuarioIncorrecto";
import { ExcepcionCorreoIncorrecto } from "../excepciones/ExcepcionCorreoIncorrecto";

var router = express.Router();
router.use(express.json());

var controlador:ControladorAdministradoresTiendas = new ControladorAdministradoresTiendas();

function getRutas(coleccion: Collection){
	controlador.setColeccion(coleccion);
	router.post('/administradores-tiendas', async function (req, res) {
		try{
			var at: AdministradorTienda = new AdministradorTienda(req.body.nombreUsuario, req.body.correo, req.body.nombre, req.body.apellidos);
			await controlador.addAdministrador(at);
			res.status(201).send(at);
		} catch (err) {
			if (err instanceof ExcepcionNombreUsuarioIncorrecto){
				res.status(400).send({"error": "Nombre de usuario incorrecto"});
			}
			else if (err instanceof ExcepcionCorreoIncorrecto){
				res.status(400).send({"error": "Correo electrónico incorrecto"});
			}
			else if (err instanceof ExcepcionUsuarioYaExiste){
				res.status(400).send({"error": "Ya existe un administrador con este nombre de usuario"});
			}
			else{
				res.status(400).send({"error": "Error no especificado"});
			}
		}
	});
	return router;
}

export { getRutas };
