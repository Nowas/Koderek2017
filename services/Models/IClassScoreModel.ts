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
   classScoreComment?:string;
   classScoreOwner?:string;
}
