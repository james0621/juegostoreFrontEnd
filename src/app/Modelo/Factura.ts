import { Cliente } from './Cliente';
import { Juego } from './Juego';

export class Factura{
	id:number;
	cliente:Cliente;
	juego:Juego;
	fechaVencimiento:Date;
}
