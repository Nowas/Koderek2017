export enum ClassScoreEnum
{
    BelowExpectation = 1, 
    AsExpected, 
    AboveExpectation 
}

export interface IClassScoreModel
{
   classId:string;
   classScore:ClassScoreEnum;
   classScoreDate:Date;
   classScoreOwner?:string;
}
