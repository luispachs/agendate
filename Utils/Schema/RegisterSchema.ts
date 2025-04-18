import {z} from 'zod';



export const RegisterSchema = z.object({
    businessName:z.string()
    .min(3,"El nombre del negocio debe contener manimo de 3 caracteres")
    .max(100,"El nombre del negocio debe contener maximo de 100 caracteres"),
    businessAddress:z.string(),
    businessPhone:z.string()
    .min(9,"El telefono no es valido")
    .max(15,"El telefono no es valido"),
    ownerName: z.string()
    .min(3,"El nombre del propietario debe contener manimo de 3 caracteres")
    .max(100,"El nombre del propietario debe contener maximo de 100 caracteres"),
    ownerLastname: z.string()
    .min(3,"El apellido del propietario debe contener manimo de 3 caracteres")
    .max(100,"El apellido del propietario debe contener maximo de 100 caracteres"),
    ownerEmail: z.string().email("El correo no es valido"),
    ownerPhone: z.string()
    .min(9,"El telefono no es valido")
    .max(15,"El telefono no es valido"),
    ownerPassword: z.string()
    .regex(new RegExp("^[a-zA-Z0-9]+[\$\#\-\_\%]+[a-z-A-Z0-9\$\#\-\_\%]{1,}"),"Contraseña no valida")
    .min(8,"La contraseña debe contener minimo 8 caracteres"),
    repeatOwnerPassword: z.string()
    .regex(new RegExp("^[a-zA-Z0-9]+[\$\#\-\_\%]+[a-z-A-Z0-9\$\#\-\_\%]{1,}"),"Contraseña no valida")
    .min(8,"La contraseña debe contener minimo 8 caracteres"),
});