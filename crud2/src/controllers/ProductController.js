const knex = require('../database')

module.exports = {
    async index(req, res) {
        const results = await knex('t_Produto').orderBy('cProduto')

        return res.json(results)
    },
    async create(req, res) {
        const { nome } = req.body

        await knex('t_Produto').insert({
            nome,
        })

        res.send()
    },
    async update(req, res) {
        const { cProduto, nome } = req.body

        await knex('t_Produto')
            .update({
                nome,
            })
            .where({ cProduto })

        res.send()
    },
    async delete(req, res) {
        const { cProduto } = req.params

        await knex('t_Produto').where({ cProduto }).del()

        return res.send()
    },
}
