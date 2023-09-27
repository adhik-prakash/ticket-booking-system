import { GraphQLError } from "graphql";
import { Program } from "../../models/program";
import { ProgramInputInterface } from "../interface/programInterface";
import { MyContext } from "../interface/contextInterface";
export const programResolver = {
  Query: {
    programs: async (parents: any, args: any, context: MyContext) => {
      try {
        if (!context.user) {
          throw new Error("Authorization header missing");
        }
        const allPrograms = await Program.findAll();
        return allPrograms;
      } catch (error) {
        throw new Error("Cannot fetch all programs");
      }
    },
  },
  Mutation: {
    createProgram: async (
      parents: any,
      args: { input: ProgramInputInterface },
      context: MyContext
    ) => {
      try {
        if (!context?.user) {
          throw new GraphQLError("the error message:", {
            extensions: {
              code: "UNAUTHORIZATION",
              http: {
                status: 401,
                message: "Authorization header is missing",
              },
            },
          });
        }
        const { programName } = args.input;
        const newProgram = await Program.create({
          programName,
          userId:context.user.id
        });
        console.log(newProgram);
        return {
          data: newProgram,
          message: "Added new title for program",
        };
      } catch (error: any) {
        throw new Error(error.message);
      }
    },
  },
};
