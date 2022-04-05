import { Request, Response } from "express";
import { Pokemon } from "../models/Pokemons_";

export default class Bootstrap {
    async list(req: Request, res: Response) {
        try {
            const list = await Pokemon.findAll()
            res.json(list)        

        } catch (err) {
            res.sendStatus(403)
        }
        
    }

    async create(req: Request, res: Response) {
        const { name, image } = req.body;

        try {
            const create = await Pokemon.create({
                name,
                image
            })
    
            return res.json(create)
        
        } catch (err) {
            res.sendStatus(403)
        }
        
    }
}
