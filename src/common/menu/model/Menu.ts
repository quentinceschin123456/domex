import { ItemMenu } from './ItemMenu';

export class Menu {
    public name:string;
    public icone:string;
    public sectionList:ItemMenu[];
    
    constructor(name?:string,icone?:string,sectionList?:ItemMenu[]){
        this.name = name? name :"Menu Principale";
        this.icone = icone?icone : "menu";
        this.sectionList = sectionList ? sectionList :[]
    }
}