import { OtherModel } from "./other.model";

interface ISpriteModel{
    other : OtherModel;
}

export class SpriteModel implements ISpriteModel{
    other : OtherModel;
}