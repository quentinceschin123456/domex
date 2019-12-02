import { CourseRow } from './';


export class CourseList {

    private id:number | undefined;
    private name:string | undefined;
    private listeCourseRaw:CourseRow[] | undefined;

    constructor(id:number,name:string,liste:CourseRow[]){
        this.id = id;
        this.name = name;
        this.listeCourseRaw = liste;
    }
}