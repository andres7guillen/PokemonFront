import { TypeModel } from './type.model';
interface ITypesModel{
    slot:number;
    type: TypeModel;
}

export class TypesModel implements ITypesModel{
    slot:number;
    type: TypeModel;
}