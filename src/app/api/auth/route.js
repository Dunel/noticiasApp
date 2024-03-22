import {sequelize} from '@/db/db'

export async function GET(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
    return new Response("hola mundo")
}