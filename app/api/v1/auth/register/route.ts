import { NextRequest } from "next/server";
import { BusinessRepository } from "@/Repositories/BusinessRepository";
import { UserRepository } from "@/Repositories/UserRepository";
import { RoleRepository } from "@/Repositories/RoleRepository";
import { PermissionRepository } from "@/Repositories/PermissionsRepository";
import { RegisterSchema } from "@/Utils/Schema/RegisterSchema";
import {Password} from "@/Utils/Security/Password";
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
        let Business = await businessRepository.create(businessData);
        let role = await RoleRepository.DefaultRole(Number(Business.id));
        let permission = await PermissionRepository.DefaultPermission(Number(role.id));

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
        let user = await userRepository.create(ownerData);
       
        response.status = 200;
        response.message = "Negocio creado correctamente";

        response.data = {
            user,
            role,
            Business
        }
      
        return Response.json(response,{status:200})

    }catch(e){
        console.log(e)
        return Response.json({status:500,message:"Error inesperado a ocurrido"},{status:500})
    }
}

export {POST}