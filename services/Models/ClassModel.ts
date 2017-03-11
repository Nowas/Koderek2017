import { IClassModel } from "./IClassModel";

export class ClassModel implements IClassModel
{
    constructor(
    public classID: string,
    public className: string,
    public classStartDate: Date,
    public classEndDate: Date,
    public classTeacher: string
    )
    {
    }

}