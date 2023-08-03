const sqlite3 = require("sqlite3").verbose();
let sql;

// connect to database
const db = new sqlite3.Database("./contact.db", sqlite3.OPEN_READWRITE, (err) =>{
    if (err) return console.error(err.message);
});

// Creating a table 

// sql = 'CREATE TABLE contact(id INTEGER PRIMARY KEY,first_name,last_name,phone_number_1,label_1,phone_number_2,lable_2,email,birthdate DATE,note,image,is_favorite BOOLEAN)';
// db.run(sql);
