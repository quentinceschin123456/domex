import { Produit } from './Produit';
import { UniteEnum } from '@/common/model/UniteEnum';


export class CourseRow {
    

    public id:number| undefined;
    public produit:Produit| undefined;
    public qte:number| undefined;
    public unite:UniteEnum | undefined;

    constructor(id:number,produit:Produit,qte:number,unite:UniteEnum){
        this.id = id;
        this.produit = produit;
        this.qte = qte;
        this.unite = unite;
    }
    
}