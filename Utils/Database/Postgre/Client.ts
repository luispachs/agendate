import { PrismaClient } from "@prisma/client";

class Client {
    static #client:any= {};

    static getClient(){
        if(Object.hasOwn(this.#client,this.name)){
            return this.#client[this.name];
        }

        const client = new PrismaClient();

        this.#client[this.name] = client;

        return client;
    }

}

export {Client};


