 export interface Repository<T> {
    create: (object:T)=>Promise<T>;
    update: (id:number|string,object:T)=>Promise<T>;
    delete: (id:number|string) => Promise<T>;
    findById: (id:number|string) => Promise<T>
}
