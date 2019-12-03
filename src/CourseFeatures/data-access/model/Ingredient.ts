import { Produit } from './Produit';

export class Ingredient extends Produit  {

    constructor(name:string) {
        super(0,name,"url");
        this.name = name;
    }

}
