import { PrismaClient, User } from "@prisma/client";
import { RepositoryInterface } from "./Repository";
import { Client } from "@/Utils/Database/Postgre/Client";

export class UserRepository implements RepositoryInterface<Promise<User>>{
    #client: PrismaClient;
    constructor(){
        this.#client = Client.getClient();
    }

    async create(data: any):Promise<User>{
        return await this.#client.user.create({data})
    };
    get (): Promise<User>{
        throw new Error("This function must be implemented");
    };
    getById(id: number | string):Promise<User>{
        throw new Error("This function must be implemented");

    };
    delete(id: number | string): Promise<User>{
        throw new Error("This function must be implemented");

    };
    update (id: number | string, data: any):Promise<User>{
        throw new Error("This function must be implemented");

    };

}