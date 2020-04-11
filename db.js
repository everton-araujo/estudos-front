const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./database.db')

db.serialize(function () {
    // Criar tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS ideas(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            title TEXT,
            category TEXT,
            description TEXT,
            link TEXT
        );
    `)

    // Deletar dado na tabela
    // db.run(`DELETE FROM ideas WHERE id = ?`, [4], function (err) {
    //     if (err) return console.log(err)

    //     console.log('DELETADO', this)
    // })

    // Consultar dados na tabela
    // db.all(`SELECT * FROM ideas`, function (err, rows) {
    //     if (err) return console.log(err)

    //     console.log(rows)
    // })

})

module.exports = db