import { Model, Optional, DataTypes } from "sequelize";
import { sequelize } from '../config/connect'

interface PokeAttributes {
    id: number;
    name: string;
    image: string;
}

interface UserCreationAttributes extends Optional<PokeAttributes, "id"> { }

interface PokeInstance extends Model<PokeAttributes, UserCreationAttributes>,
    PokeAttributes { }

export const Pokemon = sequelize.define<PokeInstance>("Pokemon", {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(128),
        allowNull: true
    },
    image: {
        type: DataTypes.STRING(128),
        allowNull: true
    }
});

(async () => {
    try { 
        await Pokemon.sync() 
    } 
    catch (err) { console.error(err) }
})()