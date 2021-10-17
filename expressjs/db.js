const fs = require('fs');



const dbFunc = ()=>{
    return new Promise ((resolve,reject)=>{
        fs.readFile('./db.json',(err,data)=>{
            const students = JSON.parse(data);           
            resolve(students);
        });
    });
}

module.exports.dbFunc=dbFunc;

