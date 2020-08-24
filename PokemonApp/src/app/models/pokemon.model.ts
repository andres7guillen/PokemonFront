import { AbilityModel } from './ability.model';
import { SpriteModel } from './sprite.model';
import { TypesModel } from './types.model';
import { MoveModel } from './move.model';
import { MovesModel } from './moves.model';

interface IPokemonModel{
    base_experience:number; 
    height: number;
    id: number; 
    name: string; 
    weight: number; 
    abilities:AbilityModel[];        
    sprites:SpriteModel; 
    types:TypesModel[]; 
    moves:MovesModel[];
}

export class PokemonModel implements IPokemonModel{
    base_experience:number; 
    height: number;
    id: number; 
    name: string; 
    weight: number; 
    abilities:AbilityModel[];      
    sprites:SpriteModel;
    types:TypesModel[] = [];
    moves:MovesModel[];
}