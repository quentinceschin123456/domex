import { Ingredient } from './Ingredient';


export class IngredientRow {
    

    public id:number| undefined;
    public ingredient:Ingredient| undefined;
    public qte:number| undefined;
    
    constructor(ingredient:Ingredient,qte:number,id?:number){
        this.id = id;
        this.ingredient = ingredient;
        this.qte = qte
    }
}