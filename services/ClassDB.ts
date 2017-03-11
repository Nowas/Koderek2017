import { ClassModel } from "./Models/ClassModel";
import { IClassModel } from "./Models/IClassModel";
import { IClassScoreModel, ClassScoreEnum } from "./Models/IClassScoreModel";
import { ClassScoreModel } from "./Models/ClassScoreModel";
import { IClassFilter } from "./Models/IClassFilter";

export class KoderekDB 
{
    classes:IClassModel[];
    scores:IClassScoreModel[];
    constructor()
    {
        this.classes = [];
        this.scores = [];
        
        this.classes.push( new ClassModel("T.1","name1",new Date("2017.03.03"), new Date("2017.03.04"),"teacher1"));
        this.classes.push( new ClassModel("T.2","name2",new Date("2017.03.04"), new Date("2017.03.05"),"teacher1"));
        this.classes.push( new ClassModel("T.3","name1",new Date("2017.03.05"), new Date("2017.03.06"),"teacher1"));
        this.classes.push( new ClassModel("T.4","name2",new Date("2017.03.06"), new Date("2017.03.07"),"teacher1"));
        this.classes.push( new ClassModel("T.5","name1",new Date("2017.03.07"), new Date("2017.03.08"),"teacher1"));

        this.scores.push( new ClassScoreModel("T.1",ClassScoreEnum.AsExpected, new Date("2017.03.11"), "comment", "user1"));
        this.scores.push( new ClassScoreModel("T.1",ClassScoreEnum.AsExpected, new Date("2017.03.11"), "comment", "user2"));
        this.scores.push( new ClassScoreModel("T.1",ClassScoreEnum.AboveExpectation, new Date("2017.03.11"), "comment", "user3"));
        this.scores.push( new ClassScoreModel("T.1",ClassScoreEnum.AboveExpectation, new Date("2017.03.11"), "comment", "user4"));
        this.scores.push( new ClassScoreModel("T.1",ClassScoreEnum.BelowExpectation, new Date("2017.03.11"), "comment", "user5"));
        
        this.scores.push( new ClassScoreModel("T.2",ClassScoreEnum.AsExpected, new Date("2017.03.11"), "comment", "user1"));
        this.scores.push( new ClassScoreModel("T.2",ClassScoreEnum.AsExpected, new Date("2017.03.11"), "comment", "user2"));
        this.scores.push( new ClassScoreModel("T.2",ClassScoreEnum.AboveExpectation, new Date("2017.03.11"), "comment", "user3"));
        this.scores.push( new ClassScoreModel("T.2",ClassScoreEnum.AboveExpectation, new Date("2017.03.11"), "comment", "user4"));
        this.scores.push( new ClassScoreModel("T.2",ClassScoreEnum.BelowExpectation, new Date("2017.03.11"), "comment", "user5"));
        
        this.scores.push(new ClassScoreModel("T.4",ClassScoreEnum.AsExpected, new Date("2017.03.11"), "comment", "user1"));
        this.scores.push(new ClassScoreModel("T.4",ClassScoreEnum.AsExpected, new Date("2017.03.11"), "comment", "user2"));
        this.scores.push(new ClassScoreModel("T.4",ClassScoreEnum.AboveExpectation, new Date("2017.03.11"), "comment", "user3"));
        this.scores.push(new ClassScoreModel("T.4",ClassScoreEnum.AboveExpectation, new Date("2017.03.11"), "comment", "user4"));
        this.scores.push(new ClassScoreModel("T.4",ClassScoreEnum.BelowExpectation, new Date("2017.03.11"), "comment", "user5"));
    }
    getClassByID(ID?:string|null):ClassModel | null
    {
        var found:ClassModel|null = null;

        if (ID == null) return null;
        this.classes.forEach(element => {
            if (element.classID == ID)
                found = element;
        });
        return found;
    }
    getClassCount(ID?:string|null)
    {

    }

    getScoreCountForClass(ID?:string|null):number
    {
        var cnt:number = 0;
        this.scores.forEach(element => {
           if( element.classId == ID )
              cnt++ 
        });
        return cnt;
    }

    setScoreForClass(score:IClassScoreModel)
    {
        this.scores.push(score);
    }

    getScoreForClass(ID:string):[number,number,number]
    {
        var r0 = 0;
        var r1 = 0;
        var r2 = 0;
        this.scores.forEach(element => {
           if( element.classId == ID )
              switch (element.classScore) {
                  case ClassScoreEnum.BelowExpectation: r0++; break;
                  case ClassScoreEnum.AsExpected:       r1++; break;
                  case ClassScoreEnum.AboveExpectation: r2++; break;
              }
        });
        return [r0,r1,r2];
    }

    getClassesWithFilter(filter:IClassFilter):ClassModel[]
    {
        var classList:ClassModel[] = [];
        this.classes.forEach(element => {
           if( 
                 ( !filter.name || element.className.indexOf(filter.name)==0
                                || element.classID.indexOf(filter.name)==0 )
           )
               classList.push(element); 
        });
        return classList;
    }

    insertClass(classInfo:ClassModel)
    {
        this.classes.push(classInfo);
    }
}
