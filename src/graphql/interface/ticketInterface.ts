export interface TicketInterface {
  id?: number;
  programId: number;
}

export interface TicketInputInterface {
  programId: number;
  counts: number;
}
