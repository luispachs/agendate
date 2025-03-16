import NextAuth, { CredentialsSignin } from "next-auth";
import Auth0 from "next-auth/providers/auth0";
import Credentials from "next-auth/providers/credentials";
import { UserRepository } from "@/Utils/Database/Postgre/UserRepository";
import { User } from "@prisma/client";
class InvalidLogError extends CredentialsSignin{
    code: string ="Invalid Credentials";
}
const defaultMessage ="Invalid email or Password";
const userRepository = new UserRepository();
export const {handlers, signIn, signOut, auth} = NextAuth(
    {
        providers : [
            Auth0,
            Credentials(
                {
                    credentials:{
                        email:{label:"Email",type:"email",default:true,value:""},
                        password:{label:"Password",type:"password",default:true,value:""}
                    },
                    
                    authorize:async (credentials)=>{
                        let exception = new InvalidLogError(defaultMessage);
                        const email = credentials.email as string;
                        const password = credentials.password as string;
                        if(email == "" || password ==""){
                            throw exception;
                        }

                        if(email == null || password ==null){
                            throw exception;
                        }

                        let user = userRepository.findByEmail(email);
                        if(user == null){
                            throw exception;
                        }

                        return user;
                    }
                },
 
            )
        ],
        callbacks: {
            jwt({ token, user }:{token:any,user:any}) {
              if (user) { // User is available during sign-in
                token.id = user.id
              }
              return token
            },
            session({ session, token }:{session:any,token:any}) {
              session.user.id = token.id
              return session
            },
          },
        pages:{
            signIn:"/login",
            
        }
    }
    );