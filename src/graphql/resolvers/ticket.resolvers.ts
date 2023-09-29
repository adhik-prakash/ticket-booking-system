import { CategoryEnum } from "../../enum/categoryEnum";
import { GraphQLError } from "graphql";
import { MyContext } from "../interface/contextInterface";
import { TicketEntry } from "../../models/ticketsenrty";
import { Program } from "../../models/program";
import { TicketInputInterface } from "../interface/ticketInterface";
import { count } from "console";

export const ticketResolver = {
  Query: {
    tickets: async (parents: any, args: any, context: MyContext) => {
      try {
        if (!context?.user) {
          throw new GraphQLError("Authorization header is missing", {
            extensions: {
              code: "UNAUTHORIZATION",
              http: {
                status: 401,
                message: "Autorization header is missing",
              },
            },
          });
        }
        const allTickets: any = await TicketEntry.findAll({
          include: {
            model: Program,
            as: "program",
          },
        });
        // console.log(allTickets.program)
        return allTickets;
      } catch (error: any) {
        throw new Error(error.message);
      }
    },
  },
  Mutation: {
    bookTicket: async (
      parents: any,
      args: { input: TicketInputInterface },
      context: MyContext
    ) => {
      try {
        if (!context.user) {
          throw new GraphQLError("Authorization header is missing", {
            extensions: {
              code: "UNAUTHORIZATION",
              status: 401,
              message: "Authorization header is missing",
            },
          });
        }
        const { programId, counts } = args.input;
        const programData = await Program.findByPk(programId);
        // console.log(programData);

        if (!programData) {
          throw new GraphQLError(
            "This program  is not found please try another program",
            {
              extensions: {
                code: "NOT FOUND",
                status: 404,
                message: "Program is not found",
              },
            }
          );
        }
        if (programData.dataValues.seats < counts) {
          throw new Error("seat is not available");
        }
        const ticketEntry = await TicketEntry.create({
          programId,
          userId:context?.user.id,
          counts,
        })
        await programData.decrement("seats",{by:counts})
        return {
          data:ticketEntry,
          message:"Yo have booked ticket"
        }
        
      } catch (error: any) {
        throw new Error (error.message)
      }
    },
  },
};
