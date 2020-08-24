import { Dream_world } from './Dream_world.model';
interface IOtherModel{
    dream_world: Dream_world;
}

export class OtherModel implements IOtherModel{
    dream_world: Dream_world;
}