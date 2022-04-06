import { Sequelize } from "sequelize"
import { config } from 'dotenv'

config()

export const sequelize = new Sequelize(
  process.env.DB_DATABASE as string,
  process.env.DB_USER as string,
  process.env.DB_PASS,
{
  host: process.env.DB_HOST,
  dialect: 'postgres'
})
