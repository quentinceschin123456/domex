
export class Produit {

    public id: number;
    public name: string;
    public imgLink: string;

    constructor(id:number,name:string,imgLink:string) {
        this.name = name;
        this.id = id;
        this.imgLink = imgLink;
    }
}
