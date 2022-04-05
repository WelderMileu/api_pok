import { Router } from "express"
import Bootstrap from '../controllers/bootstrap'

const bootstrap = new Bootstrap()
const Route = Router()

Route.get("/findAll", bootstrap.list)
Route.post("/create", bootstrap.create)

export default Route
