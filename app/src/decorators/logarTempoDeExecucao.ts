export function logarTempoDeExecucao(emSegundos: boolean = false) {

	return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {

		const metodoOriginal = descriptor.value;
		descriptor.value = function (...args: Array<any>) {
			let divisor = 1;
			let msg = "milisegundos";
			if(emSegundos){
				divisor = 1000;
				msg = "segundos";
			}
			const t1 = performance.now();
			const retorno = metodoOriginal.apply(this, args);
			const t2 = performance.now();
			console.log(`${propertyKey}, tempo de execução ${(t2 - t1) / divisor} ${msg}`)
			retorno;
		};
		return descriptor;
	};
}