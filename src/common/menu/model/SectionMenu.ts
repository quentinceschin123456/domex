import { ItemMenu } from './ItemMenu';
import { Icons } from 'vuetify/types/services/icons';

export class SectionMenu extends ItemMenu{
    public items:ItemMenu[] ;
    
    constructor(name:string,link:string,img?:HTMLImageElement,icone?:string,items?:ItemMenu[]){
       super( name,link,img,icone);
        this.items = items? items :[] ;
    }



}