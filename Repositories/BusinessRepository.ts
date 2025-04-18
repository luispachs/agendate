import { Business,PrismaClient } from "@prisma/client";
import { RepositoryInterface } from "./Repository";
import { Client } from "@/Utils/Database/Postgre/Client";

export class BusinessRepository implements RepositoryInterface<Promise<Business>>{
    #client: PrismaClient;
    constructor(){
        this.#client = Client.getClient();
    }

       async create(data: any):Promise<Business>{

            return await this.#client.business.create({data});
       };
       get (): Promise<Business>{
           throw new Error("This function must be implemented");
       };
       getById(id: number | string):Promise<Business>{
           throw new Error("This function must be implemented");
   
       };
       delete(id: number | string): Promise<Business>{
           throw new Error("This function must be implemented");
   
       };
       update (id: number | string, data: any):Promise<Business>{
           throw new Error("This function must be implemented");
   
       }; 

}