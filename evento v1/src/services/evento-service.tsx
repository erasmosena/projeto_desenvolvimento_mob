
import { SQLResultSetRowList } from 'expo-sqlite';
import {DatabaseConnection} from '../database/database-connect'
import Evento from '../models/Evento';
import Aluno from '../models/Evento';

const table = "evento"
const all_fields_update = " nome = ?, descricao=?, data_inicio=?, data_fim=? "
const id_parametro = " id = ? "
const db=DatabaseConnection.getConnection()

export default class EventoService {

     static addData(param: Evento) {

        
        return new Promise((resolve, reject) =>db.transaction(
            tx => {
                
                tx.executeSql(`insert into ${table} (nome,descricao,data_inicio, data_fim) 
                values (?,?,?,?)`, 
                [param.nome, param.descricao, param.dataInicio, param.dataFim], 
                (_, { insertId, rows }) => {
                    
                    console.log("id insert: " + insertId);
                    resolve(insertId)
                }), (sqlError: any) => {
                    console.log(sqlError);
                }}, (txError) => {
                console.log(txError);
            }));
    }


    
     static deleteById(id: number) {
        db.transaction(
            tx => {
                tx.executeSql(`delete from ${table} where id = ?;`, [id], (_, { rows }) => {
                }), (sqlError: any) => {
                    console.log(sqlError);
                }}, (txError) => {
                console.log(txError);
    
            });
    }


     static updateById(param: Evento) {
        return new Promise<Evento>((resolve, reject) =>db.transaction(tx => {
                tx.executeSql(`update ${table} set ${all_fields_update} where ${id_parametro} ;`, 
                    [param.nome, param.descricao, param.dataInicio, param.dataFim,param.id], () => {
                }), (sqlError: any) => {
                    console.log(sqlError);
                }}, (txError) => {
                console.log(txError);
    
            }));
    }

     static findById(id: number) {
        return new Promise((resolve, reject) => db.transaction(tx => {
            tx.executeSql(`select * from ${table} where ${id_parametro}`, [id], (_, { rows }) => {
                resolve(rows)
            }), (sqlError: any) => {
                console.log(sqlError);
            }}, (txError) => {
            console.log(txError);

        }));
    }

      static findAll() {
        return new Promise((resolve, reject) => db.transaction(tx => {
            tx.executeSql(`select * from ${table}`, [], (_, { rows }) => {
                resolve(toArray(rows))
            }), (sqlError: any) => {
                console.log(sqlError);
            }}, (txError) => {
            console.log(txError);
        }))


    }


}

function toArray(rows:SQLResultSetRowList):Evento[]{
 
    let lista: Evento[] = []
    let len = rows.length;
    for (var i=0; i<len; i++){
        lista.push(toEvento(rows.item(i)));
    }
    return lista
}

function toEvento(item:any):Evento{
    return {
        id: item.id,
        nome: item.nome, 
        descricao: item.descricao,
        dataInicio: item.data_inicio, 
        dataFim: item.data_fim
    }
}