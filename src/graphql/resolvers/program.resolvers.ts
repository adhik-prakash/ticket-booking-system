import { GraphQLError } from "graphql";
import { Program } from "../../models/program";
import { ProgramInputInterface } from "../interface/programInterface";
import { MyContext } from "../interface/contextInterface";
export const programResolver = {
  Query: {
    programs: async (parent: ParentNode, args: any, context: MyContext) => {
      try {
        if (!context?.user) {
          throw new GraphQLError("Authorization header missing", {
            extensions: {
              code: "UNAUTHORIZATION",
              http: {
                status: 401,
                message: "Authorization header is missing",
              },
            },
          });
        }
        const allPrograms = await Program.findAll();
        return allPrograms;
      } catch (error: any) {
        throw new Error(error.message);
      }
    },
  },
  Mutation: {
    createProgram: async (
      parent: ParentNode,
      args: { input: ProgramInputInterface },
      context: MyContext
    ) => {
      try {
        if (!context.user) {
          throw new GraphQLError("Authorization header is missing", {
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
          userId: context.user.id,
        });

        return {
          data: newProgram,
          message: "Added new title for program",
        };
      } catch (error: any) {
        throw new Error(error.message);
      }
    },
    updateProgram: async (
      parent: ParentNode,
      args: { input: ProgramInputInterface },
      context: MyContext
    ) => {
      try {
        if (!context?.user) {
          throw new GraphQLError("Authorization header is missing", {
            extensions: {
              code: "UNAUTHORIZATION",
              status: 401,
              message: "Authorization header is missing",
            },
          });
        }
        const { id, programName } = args.input;
        const newDate = { id, programName };
        const updateProgram = await Program.update(newDate, { where: { id } });
        if (!updateProgram) {
          throw new GraphQLError("Program not found", {
            extensions: {
              code: "NOT FOUND",
              http: {
                status: 404,
                message: "Program is not found to update",
              },
            },
          });
        }

        return {
          newDate,
          message: "pragram has been updated sucessfully",
        };
      } catch (error: any) {
        throw new Error(error.message);
      }
    },

    deleteProgram: async (
      parent: ParentNode,
      args: { input: ProgramInputInterface },
      context: MyContext
    ) => {
      try {
        if (!context?.user) {
          throw new GraphQLError("Authorization header is missing", {
            extensions: {
              code: "UNAUTHORIZATION",
              http: {
                status: 401,
                message: "Authorization header is missing",
              },
            },
          });
        }
        const { id } = args.input;
        const deleteProgram = await Program.findOne({ where: { id } });

        if (!deleteProgram) {
          throw new GraphQLError("Program not found", {
            extensions: {
              code: "NOT FOUND",
              http: {
                status: 404,
                message: "Program not found to delete",
              },
            },
          });
        }
        await deleteProgram.destroy();

        return {
          data: deleteProgram,
          message: `program with programId ${id} is deleted sucessfully`,
        };
      } catch (error: any) {
        throw new Error(error.message);
      }
    },
  },
};
