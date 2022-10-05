
import { negocicacoesDoDia } from "../interface/negociacoesDoDia.js";
import { Negociacao } from "../models/negociacao.js";

export class negociacaoService {

	public obterNegociacoes(): Promise<Array<Negociacao>> {
		return fetch('http://localhost:8080/dados')
			.then(res => res.json())
			.then((dados: Array<negocicacoesDoDia>) => {
				return dados.map(dadoDeHoje => {
					return new Negociacao(new Date, dadoDeHoje.vezes, dadoDeHoje.montante);
				})
			})
	}
}