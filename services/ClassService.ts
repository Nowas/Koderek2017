import { ClassModel } from "./Models/ClassModel";
import { KoderekDB } from "./ClassDB";
import { IClassFilter } from "./Models/IClassFilter";
import { ClassFilter } from "./Models/ClassFilter";
import { ClassScoreEnum } from "./Models/IClassScoreModel";
import { ClassScoreModel } from "./Models/ClassScoreModel";

export class ClassService {
    protected db:KoderekDB;
    constructor(db:KoderekDB)
    {
     this.db = db;
    }
    public GetClass(classID?:string|null): ClassModel | null
    {
        return this.db.getClassByID(classID);
    }
    public GetClasses(filter?:IClassFilter): ClassModel[] | null
    {
        return this.db.getClassesWithFilter(filter||new ClassFilter());
    }
    public GetScoreForClass(classID:string):[number,number,number]
    {
        return this.db.getScoreForClass(classID);
    }

    public GetFullScoreForClass(classID:string):any
    {
        return this.db.getFullScoreForClass(classID);
    }

    public SetScore(classID:string ,score:ClassScoreEnum, comment?:string, owner?:string)
    {
        if( this.db.getClassByID(classID) )
        {
            var classScore = new ClassScoreModel(classID, score, new Date(Date.now()),comment,owner);
            this.db.setScoreForClass(classScore);
        }
    }
    AddClass(classID:string,className:string, start:Date, end:Date, teacher:string)
    {
        var classInfo:ClassModel = new ClassModel(classID,className, start, end, teacher);
        this.db.insertClass(classInfo);
    }
}