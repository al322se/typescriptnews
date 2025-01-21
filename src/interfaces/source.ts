/* eslint-disable @typescript-eslint/no-empty-object-type */
export  interface ISourceResponse extends IRespose{
 sources:ISource[];
}
export interface ISource{
    id:string;
    name:string;
}
export interface IRespose{

}