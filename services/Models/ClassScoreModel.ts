import { IClassScoreModel, ClassScoreEnum } from "./IClassScoreModel";

export class ClassScoreModel implements IClassScoreModel
{
    constructor(
    public classId: string,
    public classScore: ClassScoreEnum,
    public classScoreDate: Date,
    public classScoreOwner: string | undefined
    ){}
}
