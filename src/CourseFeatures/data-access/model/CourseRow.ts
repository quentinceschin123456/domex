import { Produit } from './Produit';


export class CourseRow {
    

    public id:number| undefined;
    public produit:Produit| undefined;
    public qte:number| undefined;
    public unite:number | undefined;

    constructor(id:number,produit:Produit,qte:number){
        this.id = id;
        this.produit = produit;
        this.qte = qte;
    }
    
}