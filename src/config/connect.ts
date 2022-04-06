import { Sequelize } from "sequelize"
import * as dotenv from 'dotenv'
dotenv.config()

const database = process.env.DATABASE as string
const user = process.env.USER as string
const pass = process.env.PASS

export const sequelize = new Sequelize(
  database,
  user,
  pass,
{
  host: "localhost",
  dialect: 'postgres'
})
