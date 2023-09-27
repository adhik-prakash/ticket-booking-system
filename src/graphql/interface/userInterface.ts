
export interface UserInterface {
    id?:number
    userName?:string
    email?:string
} 

export interface RegisterInputInterface {
    userName:string
    email:string
    password:string
    confirmPassword:string
}
 export interface LoginInputInterface {
    id:string
    email:string
    password:string

 }