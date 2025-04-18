import { PrismaClient, Role } from "@prisma/client";
import { RepositoryInterface } from "./Repository";
import { Client } from "@/Utils/Database/Postgre/Client";

export class RoleRepository implements RepositoryInterface<Promise<Role>>{
    #client: PrismaClient;
    constructor(){
        this.#client = Client.getClient();
    }

    async create(data: any):Promise<Role>{
        return await this.#client.role.create({data})
    };
    get (): Promise<Role>{
        throw new Error("This function must be implemented");
    };
    getById(id: number | string):Promise<Role>{
        throw new Error("This function must be implemented");

    };
    delete(id: number | string): Promise<Role>{
        throw new Error("This function must be implemented");

    };
    update (id: number | string, data: any):Promise<Role>{
        throw new Error("This function must be implemented");

    };

    static async DefaultRole(businessId:number):Promise<Role>{
        let client = Client.getClient();
        let data = {
            name:"OWNER",
            businessId,
        }
        return await client.role.create({data});

    }

}