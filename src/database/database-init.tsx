import { DatabaseConnection } from './database-connect'

var db = null
export default class DatabaseInit {

    constructor() {
        db = DatabaseConnection.getConnection()
        
        try {
            //db.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () =>
            //console.log('Foreign keys turned on')
            //);
        } catch (error) {
            console.error(error)
        }
        
    
        this.InitDb()
    }
    private InitDb() {
        var sql = [
      

            `create table if not exists evento (
                id INTEGER primary key autoincrement,
                nome text, 
                descricao text, 
                data_inicio date, 
                data_fim date
                );`,
            //  `delete from  evento;`,
             `insert into evento(nome,descricao,data_inicio, data_fim) 
             values('Formatura','Formatura do curso de ADS - Estacio','01/01/2023 19:00','01/01/2023 22:00');`
        ];

        db.transaction(
            tx => {
                for (var i = 0; i < sql.length; i++) {
                    console.log("execute sql : " + sql[i]);
                    tx.executeSql(sql[i]);
                }
            }, (error) => {
                console.log("error call back : " + JSON.stringify(error));
                console.log(error);
            }, () => {
                console.log("transaction complete call back ");
            }
        );
    }

}