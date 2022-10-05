import { Imprimivel } from "../interface/imprimiveis";


export function imprimir(...objetos: Imprimivel[]) {
	for (let objeto of objetos){
		console.log(objeto.paraTexto());
	}
}