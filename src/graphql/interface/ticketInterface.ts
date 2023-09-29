import { CategoryEnum } from "../../enum/categoryEnum"

export interface TicketInterface {
    id?:number
    programId:number
}

export interface TicketInputInterface {
    programId:number
    counts:number
}
