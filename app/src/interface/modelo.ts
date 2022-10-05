import { Comparavel } from "./comparavel";
import { Imprimivel } from "./imprimiveis";

export interface Modelo<T> extends Imprimivel, Comparavel<T>{
}