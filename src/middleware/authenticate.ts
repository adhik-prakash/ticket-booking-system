import { GraphQLError } from "graphql"
import jwt from "jsonwebtoken"

export const authenticate = async(token:string)=>{
    try{
        if(token){
            try{
            const user = jwt.verify(token,process.env.JWT_SECREY_KEY!)
            console.log(user)
            if(user){
                return {
                    user,
                    token
                }
            }
            throw new GraphQLError("User not found"),{
                extensions:{
                    code:"UNAUTHORIZED",
                    status:402
                },
            }
            }catch(error){
                throw new Error("Token is invalid or expired")
            }
        }
        else {
            throw new Error("Authorization token must be a  Bearer token")
        }
    }
        catch(error:any){
            throw new Error(error.message)
        }
    }