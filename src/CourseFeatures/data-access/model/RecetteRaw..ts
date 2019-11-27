import { Ingredient } from './Ingredient';


export class RecetteRaw {
    

    private id:number| undefined;
    private ingredient:Ingredient| undefined;
    private qte:number| undefined;
    
    constructor(ingredient:Ingredient,qte:number,id?:number){
        this.id = id;
        this.ingredient = ingredient;
        this.qte = qte
    }
}