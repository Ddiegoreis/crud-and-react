module.exports = {
    development: {
        client: 'pg',
        connection: {
            database: 'projetos',
            user: 'postgres',
            password: '1234',
        },
        migrations: {
            tableName: 'produto_migration',
            directory: `${__dirname}/src/database/migrations`,
        },
        // seeds: {
        //     directory: `${__dirname}/src/database/seeds`,
        // },
    },
}
