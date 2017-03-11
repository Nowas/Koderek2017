import { ClassModel } from "./Models/ClassModel";
import { IClassModel } from "./Models/IClassModel";
import { IClassScoreModel, ClassScoreEnum } from "./Models/IClassScoreModel";
import { ClassScoreModel } from "./Models/ClassScoreModel";

export class KoderekDB 
{
    classes:IClassModel[];
    scores:IClassScoreModel[];
    constructor()
    {
        this.classes = [];
        this.scores = [];
        
        this.classes.push( new ClassModel("id1","name1",new Date("2017.03.03"), new Date("2017.03.04"),"teacher1"));
        this.classes.push( new ClassModel("id2","name1",new Date("2017.03.04"), new Date("2017.03.05"),"teacher1"));
        this.classes.push( new ClassModel("id3","name1",new Date("2017.03.05"), new Date("2017.03.06"),"teacher1"));
        this.classes.push( new ClassModel("id4","name1",new Date("2017.03.06"), new Date("2017.03.07"),"teacher1"));
        this.classes.push( new ClassModel("id5","name1",new Date("2017.03.07"), new Date("2017.03.08"),"teacher1"));

        this.scores.push( new ClassScoreModel("id1",ClassScoreEnum.AsExpected, new Date("2017.03.11"), "user1"));
        this.scores.push( new ClassScoreModel("id1",ClassScoreEnum.AsExpected, new Date("2017.03.11"), "user2"));
        this.scores.push( new ClassScoreModel("id1",ClassScoreEnum.AboveExpectation, new Date("2017.03.11"), "user3"));
        this.scores.push( new ClassScoreModel("id1",ClassScoreEnum.AboveExpectation, new Date("2017.03.11"), "user4"));
        this.scores.push( new ClassScoreModel("id1",ClassScoreEnum.BelowExpectation, new Date("2017.03.11"), "user5"));
        
        this.scores.push( new ClassScoreModel("id2",ClassScoreEnum.AsExpected, new Date("2017.03.11"), "user1"));
        this.scores.push( new ClassScoreModel("id2",ClassScoreEnum.AsExpected, new Date("2017.03.11"), "user2"));
        this.scores.push( new ClassScoreModel("id2",ClassScoreEnum.AboveExpectation, new Date("2017.03.11"), "user3"));
        this.scores.push( new ClassScoreModel("id2",ClassScoreEnum.AboveExpectation, new Date("2017.03.11"), "user4"));
        this.scores.push( new ClassScoreModel("id2",ClassScoreEnum.BelowExpectation, new Date("2017.03.11"), "user5"));
        
        this.scores.push(new ClassScoreModel("id4",ClassScoreEnum.AsExpected, new Date("2017.03.11"), "user1"));
        this.scores.push(new ClassScoreModel("id4",ClassScoreEnum.AsExpected, new Date("2017.03.11"), "user2"));
        this.scores.push(new ClassScoreModel("id4",ClassScoreEnum.AboveExpectation, new Date("2017.03.11"), "user3"));
        this.scores.push(new ClassScoreModel("id4",ClassScoreEnum.AboveExpectation, new Date("2017.03.11"), "user4"));
        this.scores.push(new ClassScoreModel("id4",ClassScoreEnum.BelowExpectation, new Date("2017.03.11"), "user5"));
    }
    getClassByID(ID?:string|null): ClassModel | null
    {
        if (ID == null) return null;
        for (var i = 0; i < 5; i++)
            if (this.classes[i].classID == ID)
                return this.classes[i];
        return null;
    }
    getClassCount(ID?:string|null)
    {

    }
    getScoreCountForClass(ID?:string|null)
    {

    }
}