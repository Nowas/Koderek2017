import { ClassModel } from "./Models/ClassModel";
import { KoderekDB } from "./ClassDB";

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
}