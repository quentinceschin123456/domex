import { CourseRaw } from './';


export class CourseList {

    private id:number | undefined;
    private name:string | undefined;
    private listeCourseRaw:CourseRaw[] | undefined;

    constructor(id:number,name:string,liste:CourseRaw[]){
        this.id = id;
        this.name = name;
        this.listeCourseRaw = liste;
    }
}