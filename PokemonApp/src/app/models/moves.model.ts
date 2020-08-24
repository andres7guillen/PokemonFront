import { MoveModel } from './move.model';
interface IMovesModel{
    move:MoveModel;
}

export class MovesModel implements IMovesModel{
    move:MoveModel;
}