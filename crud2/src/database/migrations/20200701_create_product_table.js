exports.up = (knex) =>
    knex.schema.createTable('t_Produto', (table) => {
        table.increments('cProduto')
        table.text('nome').unique().notNullable()
    })

exports.down = (knex) => knex.schema.dropTable('t_Produto')
