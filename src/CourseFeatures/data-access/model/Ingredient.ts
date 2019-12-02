import { Produit } from './Produit';

export class Ingredient extends Produit  {

    constructor(name:string) {
        super();
        this.name = name;
    }

}
