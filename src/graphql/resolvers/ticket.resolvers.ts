import { GraphQLError } from "graphql";
import { MyContext } from "../interface/contextInterface";
import { TicketEntry } from "../../models/ticketsenrty";
import { Program } from "../../models/program";
import { TicketInputInterface } from "../interface/ticketInterface";

export const ticketResolver = {
  Query: {
    tickets: async (parent: ParentNode, args: any, context: MyContext) => {
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
          include: [
            {
              model: Program,
              as: "program",
            },
          ],
        });

        return {
          data: allTickets,
        };
      } catch (error: any) {
        throw new Error(error.message);
      }
    },
  },
  Mutation: {
    bookTicket: async (
      parent: ParentNode,
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
        const existingTicketEntry = await TicketEntry.findOne({
          where: {
            programId,
            userId: context.user.id,
          },
        });
        const programData = await Program.findByPk(programId);

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
        if (programData.dataValues.available_seats < counts) {
          throw new GraphQLError(
            "Seats are Housefull please try another Program",
            {
              extensions: {
                code: "NOT FOUND",
                status: 404,
                message: "Seats are Housefull please try another Program",
              },
            }
          );
        }
        if (existingTicketEntry) {
          let newCounts = existingTicketEntry.dataValues.counts + counts;
          await existingTicketEntry.update({
            counts: newCounts,
          });
          await programData.decrement("available_seats", {
            by: counts,
          });

          return {
            data: existingTicketEntry,
            message: "You have updated your ticket count Sucessfully",
          };
        }
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
        const ticketEntry = await TicketEntry.create({
          programId,
          userId: context?.user.id,
          counts,
        });
        await programData.decrement("available_seats", { by: counts });

        return {
          data: ticketEntry,
          message: `You have succesfully added another count on your ticket`,
        };
      } catch (error: any) {
        throw new Error(error.message);
      }
    },
  },
};
