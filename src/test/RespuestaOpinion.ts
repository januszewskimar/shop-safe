import 'mocha';
import {expect} from 'chai';
import  {Opinion} from '../Opinion'; 
import  {RespuestaOpinion} from '../RespuestaOpinion'; 
import  {AdministradorTienda} from '../AdministradorTienda';
import  {Tienda} from '../Tienda';
import  {Usuario} from '../Usuario'; 

describe('RespuestaOpinion', function(){
	describe('Carga', function(){
		it ('Debería cargar',function(){
			expect(RespuestaOpinion, 'Cargado');
		})
	})

	describe('Guarda correctamente', function(){
		it('Crea correctamente una respuesta a una opinión con datos correctos', function(){
			let admin = new AdministradorTienda("anagar", "anagar@correo.es", "Ana", "García");
			let tienda = new Tienda("Tienda1", "Calle A 1A", "123456789", admin);
			admin.setTienda(tienda);
			let usuario = new Usuario("maralv", "maralv@correo.es", "Marcos", "Álvarez");
			let fechaOpinion = new Date(Date.now());
			let opinion = new Opinion(tienda, fechaOpinion, usuario, 'Buena tienda', 4 , 'Todo correcto');
			let fechaRespuestaOpinion = new Date(Date.now());
			let respuestaOpinion = new RespuestaOpinion(opinion, fechaRespuestaOpinion, "Gracias por su valoración");
			
			expect(respuestaOpinion.getOpinion()).to.equal(opinion);
			expect(respuestaOpinion.getFecha()).to.equal(fechaRespuestaOpinion);
			expect(respuestaOpinion.getContenido()).to.equal("Gracias por su valoración");
		})
	})	
})