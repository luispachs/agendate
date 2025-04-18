export interface RepositoryInterface<T> {
    create:(data:any)=>T;
    get:()=>T;
    getById:(id:number|string)=>T;
    delete:(id:number|string)=>T;
    update:(id:number|string,data:any)=>T
}