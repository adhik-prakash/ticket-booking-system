export const ticketTypeDefs = `#graphql
type TicketEntry {
    id: Int
    programId: Int
    counts: Int
    userId: Int
}

type TicketWithProgram{
    id: Int
    program: Program
    counts: Int
    userId: Int
}

type TicketResponse{
    data:[TicketWithProgram]
}

type BookingResponse {
    data: TicketEntry
    message: String
    program: Program
}
type Booking {
    id: Int
    ticket: TicketEntry
}
input TicketInput {
    programId: Int
    counts: Int
}
type Query {
    tickets: TicketResponse

}
type Mutation {
    bookTicket(input: TicketInput): BookingResponse
}
`;
