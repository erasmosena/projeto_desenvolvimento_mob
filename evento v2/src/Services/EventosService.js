import api from "./api";

export function findAll(identificador) {

    try {
        return api.get(`/eventos/usuario/${identificador}`);
    } catch (error) {
        console.error(error);
    } { }

}
