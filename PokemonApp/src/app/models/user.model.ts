interface IUser{
    email:string,
    PassWord:string
}

export class User implements IUser{
    email:string;
    PassWord:string;
    name:string;
}