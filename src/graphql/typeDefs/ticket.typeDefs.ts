export const ticketTypeDefs = `#graphql
type TicketEntry {
    id: Int
    programId: Int
    counts: Int
    userId: Int
}
type Program {
    id: Int
    # category: CategoryEnum
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
    tickets: [TicketEntry]
}
type Mutation {
    bookTicket(input: TicketInput): BookingResponse
}
`;
