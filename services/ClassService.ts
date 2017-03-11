import { ClassModel } from "./Models/ClassModel";
import { KoderekDB } from "./ClassDB";
import { IClassFilter } from "./Models/IClassFilter";
import { ClassFilter } from "./Models/ClassFilter";

export class ClassService {
    protected db:KoderekDB;
    constructor()
    {
     this.db = new KoderekDB();
    }
    public GetClass(classID?:string|null): ClassModel | null
    {
        return this.db.getClassByID(classID);
    }
    public GetClasses(filter?:IClassFilter): ClassModel[] | null
    {
        return this.db.getClassesWithFilter(filter||new ClassFilter());
    }
}