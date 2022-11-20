import api from "./api";

export function findAll(identificador) {

    try {
        return api.get(`/eventos/usuario/${identificador}`);
    } catch (error) {
        console.error(error);
    } { }

}


export function adicionar(evento){
    try {
        return api.post(`/eventos`, evento);
    } catch (error) {
        console.error(error);
    } { }
}
