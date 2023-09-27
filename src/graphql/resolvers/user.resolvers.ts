import { GraphQLError } from "graphql";
import { User } from "../../models/user";
import {
  LoginInputInterface,
  RegisterInputInterface,
} from "../interface/userInterface";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const userResolver = {
  Query: {
    users: async () => {
      return await User.findAll();
    },
  },
  Mutation: {
    register: async (parents: any, args: { input: RegisterInputInterface }) => {
      const { userName, email, password, confirmPassword } = args.input;
      try {
        const checkMail = await User.findOne({ where: { email: email } });
        if (checkMail)
          throw new GraphQLError("the error message", {
            extensions: {
              code: "EMAIL_ALREADY_EXISTS",
              http: {
                status: 409,
                message: "email already exits",
              },
            },
          });
        const hashedPassword = await bcrypt.hash(password, 12);

        const newuser = await User.create({
          userName,
          email,
          password: hashedPassword,
        });

        return {
          data: newuser,
          message: "User registered succesfully",
        };
      } catch (error: any) {
        throw new Error(error.message);
      }
    },
    login: async (parents: any, args: { input: LoginInputInterface }) => {
      const { email, password } = args.input;
      try {
        const userLogin = await User.findOne({ where: { email: email } });
        if (!userLogin) {
          throw new Error("This user is not registered yet");
        }
        const isValidPassword = await bcrypt.compare(
          password!.toString(),
          userLogin?.dataValues?.password
        );
        // console.log(userLogin.dataValues);
        if (!isValidPassword) {
          throw new Error("Password you entered is incorrect");
        }
        const payload = {
          email: email,
          password: password,
          id: userLogin?.dataValues?.id,
        };
        const token = jwt.sign(payload, process.env.JWT_SECRET_KEY!, {
          expiresIn: "1d",
        });
// console.log(payload)
        return {
          ...userLogin.dataValues,
          token,
          message: "user login successfull",
        };
      } catch (error: any) {
        throw new Error(error.message);
      }
    },
  },
};
