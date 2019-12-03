import { CourseRow } from './';


export class CourseList {

    public id:number | undefined;
    public name:string | undefined;
    public listeCourseRaw:CourseRow[] | undefined;

    constructor(id:number,name:string,liste:CourseRow[]){
        this.id = id;
        this.name = name;
        this.listeCourseRaw = liste;
    }
}