import { Icons } from 'vuetify/types/services/icons';

export class ItemMenu {
    public name: String;
    public img: HTMLImageElement | undefined;
    public icone: string | undefined ;
    public link: string | undefined ;

    constructor(name:string,link:string,img?:HTMLImageElement,icone?:string){
        this.name = name;
        this.img = img;
        this.icone = icone;
        this.link = link;
    }

}