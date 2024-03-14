// pages/api/graphql.ts
import { ApolloServer, gql } from "apollo-server-micro";
import { prisma } from "../../../prisma/prisma";

const typeDefs = gql`
  type Query {
    dummyQuery: Boolean
  }

  type Mutation {
    saveCustomInstructions(
      userId: String!
      instructions: String!
    ): CustomInstructionsResponse
  }

  type CustomInstructionsResponse {
    success: Boolean!
  }
`;

const resolvers = {
  Query: {
    dummyQuery: () => true, // Implement a resolver for the dummyQuery field
  },
  Mutation: {
    saveCustomInstructions: async (
      _: any,
      { userId, instructions }: { userId: string; instructions: string }
    ) => {
      try {
        // Save custom instructions to the database using Prisma
        await prisma.customInstructions.create({
          data: {
            userId,
            instructions,
          },
        });
        return { success: true }; // Operation was successful
      } catch (error) {
        console.error("Failed to save custom instructions:", error);
        return { success: false }; // Operation failed
      }
    },
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

// Call the `start()` method before creating the handler
await apolloServer.start();

// Export the handler created by `createHandler()`
export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: "/api/graphql" });
