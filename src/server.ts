import express from "express"
import bodyParser from "body-parser"
import Route from "./routes/routes"
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3001 

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.use(Route)

app.listen(PORT, () => {
    console.log("running and " + PORT)
})
