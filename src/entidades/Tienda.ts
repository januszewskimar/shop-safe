import { AdministradorTienda } from "./AdministradorTienda";
import { Opinion } from "./Opinion";
import { ValidacionDatos } from "../ValidacionDatos";
import { ExcepcionTelefonoIncorrecto } from "../excepciones/ExcepcionTelefonoIncorrecto";

export class Tienda{
	private nombre: string;
	private direccion: string;
	private telefono: string;
	private administrador: AdministradorTienda;
	
	constructor (nombre: string, direccion: string, telefono: string, administrador: AdministradorTienda){
		this.nombre = nombre;
		this.direccion = direccion;
		this.setTelefono(telefono);
		this.administrador = administrador;
	}
	
	setTelefono(telefono: string) {
		if (!ValidacionDatos.esCorrectoTelefono(telefono)){
			throw new ExcepcionTelefonoIncorrecto();
		}
		
		this.telefono = telefono;
	}
	
	getNombre(){
		return this.nombre;
	}
	
	getDireccion(){
		return this.direccion;
	}
	
	getTelefono(){
		return this.telefono;
	}
	
	getAdministrador(){
		return this.administrador;
	}
}
