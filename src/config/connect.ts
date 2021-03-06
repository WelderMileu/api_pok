import { Sequelize } from "sequelize"
import { config } from 'dotenv'

config()

const URL = process.env.DATABASE_URL as string
export const sequelize = new Sequelize(URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
})
