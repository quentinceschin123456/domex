import { Ingredient } from './Ingredient';
import { UniteEnum } from '@/common/model/UniteEnum';


export class IngredientRow {
    

    public id:number| undefined;
    public ingredient:Ingredient| undefined;
    public qte:number| undefined;
    public unite:UniteEnum| undefined;

    
    constructor(ingredient:Ingredient,qte:number,unite:UniteEnum,id?:number){
        this.id = id;
        this.ingredient = ingredient;
        this.qte = qte;
        this.unite = unite;
    }
}