import { ISource } from "./source";

export interface INewsResponse{
    articles:Article[]; 
}
export interface Article{
    urlToImage:string;
    author:string;
    source:ISource;
    publishedAt:string;
    title:string;
    description:string;
    url:string;
}