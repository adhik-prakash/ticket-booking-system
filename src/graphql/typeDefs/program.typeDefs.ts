export const programTypeDefs = `#graphql
scalar Date
type Program {
    id:Int
    programName:String
    scheduledDate:Date
    totalTickets:Int
    availableTickets:Int
}
type ProgramResponse {
    data:Program
    message:String
}
input CreateProgramInput {
    programName:String
}
type Query {
    programs:[Program]
}
type Mutation {
    createProgram(input:CreateProgramInput):ProgramResponse
}

`