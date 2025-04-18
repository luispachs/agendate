import { NextRequest } from "next/server";
import { BusinessRepository } from "@/Repositories/BusinessRepository";
import { UserRepository } from "@/Repositories/UserRepository";
import { RoleRepository } from "@/Repositories/RoleRepository";
import { PermissionRepository } from "@/Repositories/PermissionsRepository";
import { RegisterSchema } from "@/Utils/Schema/RegisterSchema";
import {Password} from "@/Utils/Security/Password";
import { Client } from "@/Utils/Database/Postgre/Client";
import { Business, Permission, Role, User } from "@prisma/client";



async function  POST (req:NextRequest){
    let  data = await req.json()
    try{
        let parseData = RegisterSchema.safeParse(data);
       
        if(!parseData.success){
            return Response.json({
                status:400,
                message:"Datos no validos",
                data:parseData.error
            },{status:400})
        }

        if(parseData.data.ownerPassword !== data.repeatOwnerPassword){
            return Response.json({
                status:400,
                message:"Las contraseñas no coinciden"
            },{status:400})
        }
        let response:ResponseStatus = {
            status:null,
            message:null,
        }


        let businessRepository = new BusinessRepository();
        let businessData = {
            name:parseData.data!.businessName,
            address:parseData.data!.businessAddress,
            phone:parseData.data!.businessPhone
        }



        let client = Client.getClient();

        await client.$transaction(
                async (tx)=>{
                    

                    let Business = await tx.business.create({data:businessData});
                    let roleData = RoleRepository.getDefaultRole(Number(Business.id))
                    let role = await tx.role.create({data:roleData});
                    let permissionData =PermissionRepository.getDefaultPermission(Number(role.id))
                    await tx.permission.create({data:permissionData});
            
                    let ownerData = {
                        name:parseData.data!.ownerName,
                        lastname:parseData.data!.ownerLastname,
                        email:parseData.data!.ownerEmail,
                        password:Password.hash(parseData.data!.ownerPassword),
                        isOwner:true,
                        businessId:Number(Business.id),
                        phone:parseData.data!.ownerPhone,
                        roleId:Number(role.id),
                    }
            
                    let userRepository = new UserRepository();
                    let user = await tx.user.create({data:ownerData});
                }
            )
    
       
        response.status = 200;
        response.message = "Negocio creado correctamente";   

        return Response.json(response,{status:200})

    }catch(e:any){
        if(e.code = "P2002"){
            if(e.message.includes("phone")) return Response.json({status:500,message:"El campo telefono del propietario Y/O telefono de negocio ya se encuentra registrado"},{status:400})
            
            if(e.message.includes("email")) return Response.json({status:500,message:"El campo email ya se encuentra registrado"},{status:400})
        }
        return Response.json({status:500,message:"Error inesperado a ocurrido"},{status:500})
    }
}

export {POST}