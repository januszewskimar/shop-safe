import 'mocha';
import  {Tienda} from '../Tienda';
import  {ExcepcionTelefonoIncorrecto} from '../../excepciones/ExcepcionTelefonoIncorrecto'; 
import {expect} from 'chai';

describe('Tienda', function(){
	describe('Carga', function(){
		it ('Debería cargar',function(){
			expect(Tienda, 'Cargado');
		})
	})
	
	describe('Número de teléfono', function(){
		it('Lanza una excepción si contiene una letra', function(){
			expect(() => {new Tienda('Shop', 'Calle ABC 3, 4A', '+23fa2313', 'juan')}).to.throw(ExcepcionTelefonoIncorrecto);
		})
		
		it('Lanza una excepción si contiene un espacio', function(){
			expect(() => {new Tienda('Shop', 'Calle ABC 3, 4A', '+23231 3', 'camilo')}).to.throw(ExcepcionTelefonoIncorrecto);
		})
		
		it('Lanza una excepción si contiene un punto', function(){
			expect(() => {new Tienda('Shop', 'Calle ABC 3, 4A', '+2323.13', 'sofia')}).to.throw(ExcepcionTelefonoIncorrecto);
		})
		
		it('Lanza una excepción si contiene un carácter especial no permitido', function(){
			expect(() => {new Tienda('Shop', 'Calle ABC 3, 4A', '+232_13', 'carmen')}).to.throw(ExcepcionTelefonoIncorrecto);
		})
	})
	

	describe('Guarda correctamente', function(){
		it('Crea correctamente un usuario con datos correctos', function(){
			let tienda = new Tienda('Shop', 'Calle ABC 3, 4A', '123456789', 'ana');
			
			expect(tienda.getNombre()).to.equal('Shop');
			expect(tienda.getDireccion()).to.equal('Calle ABC 3, 4A');
			expect(tienda.getTelefono()).to.equal('123456789');
			expect(tienda.getAdministrador()).to.equal("ana");
		})
	})	
})
