import { PrismaClient, Permission } from "@prisma/client";
import { RepositoryInterface } from "./Repository";
import { Client } from "@/Utils/Database/Postgre/Client";

export class PermissionRepository implements RepositoryInterface<Promise<Permission>>{
    #client: PrismaClient;
    constructor(){
        this.#client = Client.getClient();
    }

    async create(data: any):Promise<Permission>{
        return await this.#client.permission.create({data})
    };
    get (): Promise<Permission>{
        throw new Error("This function must be implemented");
    };
    getById(id: number | string):Promise<Permission>{
        throw new Error("This function must be implemented");

    };
    delete(id: number | string): Promise<Permission>{
        throw new Error("This function must be implemented");

    };
    update (id: number | string, data: any):Promise<Permission>{
        throw new Error("This function must be implemented");

    };

    /**
     * @description This method will create a default permission for default role "owner" to every business created
     * @param {number} roleId
     * @returns {Promise<Permission>}
     */
    static async  DefaultPermission(roleId:number):Promise<Permission>{
        let client = Client.getClient();

        let data = {
            roleId,
            canCreateService:true,
            canUpdateService:true,
            canDeleteService:true,
            canReadService:true,
            canGenerateReport:true,
            canCreateUser:true,
            canUpdateUser:true,
            canDeleteUser:true,
            canCreateRole:true,
            canEditRole:true,
            canDeleteRole:true,
            canCreateReservation:true,
            canUpdateReservation:true,
            canDeleteReservation:true,
            canReadReservation:true,
            canCreateShop:true,
            canUpdateShop:true,
            canDeleteShop:true
        }

        return await client.permission.create({data});
    }

    static getDefaultPermission(roleId:number):any{
        return   {
            roleId,
            canCreateService:true,
            canUpdateService:true,
            canDeleteService:true,
            canReadService:true,
            canGenerateReport:true,
            canCreateUser:true,
            canUpdateUser:true,
            canDeleteUser:true,
            canCreateRole:true,
            canEditRole:true,
            canDeleteRole:true,
            canCreateReservation:true,
            canUpdateReservation:true,
            canDeleteReservation:true,
            canReadReservation:true,
            canCreateShop:true,
            canUpdateShop:true,
            canDeleteShop:true
        }
    }

}