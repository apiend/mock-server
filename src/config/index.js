// import path from 'path';

const NODE_ENV = process.env.NODE_ENV || 'development';

const isProd = NODE_ENV === 'production';
const isStage = NODE_ENV === 'stage';
const isDev = NODE_ENV === 'development';

// 一些配置参数
const config = {
    NODE_ENV,
    // ROOT_PATH: path.resolve(process.env.ROOT_PATH),
    env: {
        isProd,
        isStage,
        isDev
    }
    //   db: {
    //     dialect: process.env.DB_DIALECT,
    //     host: process.env.DB_HOST,
    //     port: process.env.DB_PORT,
    //     alias: process.env.DB_ALIAS,
    //     name: process.env.DB_NAME,
    //     username: process.env.DB_USERNAME,
    //     password: process.env.DB_PASSWORD
    //   }
};

export default config;