import * as mysql from 'mysql';
import statues from './queries/statues';
import config from '../config';

const pool = mysql.createPool(config.mysql);

export const Query = <T = any>(query: string, values?: any) => {
    return new Promise<T>((resolve, reject) => {

        const sql = mysql.format(query, values);
        // console.log(sql); DEBUG

        pool.query(query, values, (err, results) => {
            if(err) {
                reject(err);
            } else {
                resolve(results);
            }            
        });
    });
};


export default {
    statues
}