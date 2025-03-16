import { PrismaClient, User } from "@prisma/client";
import { Repository } from "./Repository";
import { Client } from "./Client";

class UserRepository implements Repository<User>{
    #client:PrismaClient;
    constructor(){
        this.#client =Client.getClient();
    }
    async create(object: User):Promise<User>{
        return await this.#client.user.create({
            data:object
        })
    };
    async update (id:number|string,object: User) :Promise<User>{
        return await this.#client.user.update({
            where:{
                id:id as string
            },
            data:object
        })
    };
    async delete(id:number|string):Promise<User>{
       return await this.#client.user.delete({
            where:{
                id:id as string
                }
            }
        );
    }
    async findById(id:number|string) : Promise<User>{
        return await this.#client.user.findFirst({
            where:{
                id:id as string
                }
            }
        ) as User;
    }

    async findByEmail(email:string):Promise<User|null>{
        return await this.#client.user.findFirst({
            where:{
                email
            }
        }) 
    }

}

export {UserRepository}