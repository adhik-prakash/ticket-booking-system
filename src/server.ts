import { userResolver } from "./graphql/resolvers/user.resolvers";
import { userTypeDefs } from "./graphql/typeDefs/user.typeDefs";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { sequelize } from "./config";
import { programTypeDefs } from "./graphql/typeDefs/program.typeDefs";
import { programResolver } from "./graphql/resolvers/program.resolvers";
import { MyContext } from "./helpers/myContext";
import { ticketTypeDefs } from "./graphql/typeDefs/ticket.typeDefs";
import { ticketResolver } from "./graphql/resolvers/ticket.resolvers";

const initApp = async () => {
  await sequelize.authenticate();
  console.log("Db connection succesfull");
  const server = new ApolloServer({
    typeDefs: [userTypeDefs, programTypeDefs, ticketTypeDefs],
    resolvers: [userResolver, programResolver, ticketResolver],
    introspection: true,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 8080 },
    context: MyContext,
  });
  console.log(`🚀  Server ready at: ${url}`);
};
initApp();
