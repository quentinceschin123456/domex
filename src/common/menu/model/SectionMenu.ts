import { ItemMenu } from './ItemMenu';
import { Icons } from 'vuetify/types/services/icons';

export class SectionMenu extends ItemMenu{
    public items:ItemMenu[] ;
    
    constructor(name:string,img?:HTMLImageElement,icone?:string){
       super( name,img,icone);
        this.items = []
    }



}