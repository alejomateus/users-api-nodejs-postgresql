import Sequialize from 'sequelize';
export const sequialize =new Sequialize (
    'intellibpo',
    'postgres',
    'root',
    {
        host: 'localhost',
        dialect: 'postgres',
        pool:{
            max:5,
            min:0,
            require: 30000,
            idle:10000
        },
        port: 5433,
        logging: false
    }
)
