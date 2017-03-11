import { IClassFilter } from "./IClassFilter";

export class ClassFilter implements IClassFilter {
    constructor(
    public name?:string,
    public dateEndFrom?:Date,
    public dateEndTo?:Date,
    public dateStartFrom?:Date,
    public dateStartTo?:Date
    ){}
}