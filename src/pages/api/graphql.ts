import { ApolloServer, gql } from "apollo-server-micro";
import { prisma } from "../../../prisma/prisma";

const typeDefs = gql`
  type Query {
    getCustomInstructions(userId: String!): CustomInstructions
  }

  type Mutation {
    saveCustomInstructions(
      userId: String!
      instructions: String!
    ): CustomInstructionsResponse
  }

  type CustomInstructions {
    userId: String!
    instructions: String!
  }

  type CustomInstructionsResponse {
    success: Boolean!
  }
`;

const resolvers = {
  Query: {
    getCustomInstructions: async (_: any, { userId }: { userId: string }) => {
      try {
        const customInstruction = await prisma.customInstructions.findUnique({
          where: {
            userId,
          },
        });
        return customInstruction;
      } catch (error) {
        console.error("Failed to fetch custom instructions:", error);
        throw new Error("Failed to fetch custom instructions");
      }
    },
  },
  Mutation: {
    saveCustomInstructions: async (
      _: any,
      { userId, instructions }: { userId: string; instructions: string }
    ) => {
      try {
        const existingInstruction = await prisma.customInstructions.findUnique({
          where: {
            userId,
          },
        });

        if (existingInstruction) {
          await prisma.customInstructions.update({
            where: {
              userId,
            },
            data: {
              instructions,
            },
          });
        } else {
          await prisma.customInstructions.create({
            data: {
              userId,
              instructions,
            },
          });
        }

        return { success: true };
      } catch (error) {
        console.error("Failed to save custom instructions:", error);
        return { success: false };
      }
    },
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

await apolloServer.start();

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: "/api/graphql" });
