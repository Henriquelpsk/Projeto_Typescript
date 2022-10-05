export function logarTempoDeExecucao(emSegundos = false) {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            let divisor = 1;
            let msg = "milisegundos";
            if (emSegundos) {
                divisor = 1000;
                msg = "segundos";
            }
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execução ${(t2 - t1) / divisor} ${msg}`);
            retorno;
        };
        return descriptor;
    };
}
//# sourceMappingURL=logarTempoDeExecucao.js.map