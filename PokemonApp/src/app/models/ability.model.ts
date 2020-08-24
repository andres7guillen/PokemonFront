interface IAbilityModel{
    name:string; 
    url:string; 
    is_hidden:boolean;
    slot: number; 
}

export class AbilityModel implements IAbilityModel{
    name:string; 
    url:string; 
    is_hidden:boolean;
    slot: number; 
}