import { Sequelize } from "sequelize"
import { config } from 'dotenv'

config()

const URL = process.env.DATABASE_URL as string
export const sequelize = new Sequelize(URL, { ssl: true })
