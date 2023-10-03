export const programTypeDefs = `#graphql
scalar Date
type Program {
    id: Int
    programName: String
    seats: Int
    available_seats:Int
}
type ProgramResponse {
    data: Program
    message: String
}
input CreateProgramInput {
    programName: String
}
input UpdateProgramInput {
    programName: String
}
input DeleteProgramInput {
    programName: String
}
type Query {
    programs: [Program]
}
type Mutation {
    createProgram(input: CreateProgramInput): ProgramResponse
    updateProgram(input: UpdateProgramInput): ProgramResponse
    deleteProgram(input: DeleteProgramInput): ProgramResponse
}

`;
