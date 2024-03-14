import { gql } from "@apollo/client";

export const GET_USER_PROFILE = gql`
  query GetUserProfile {
    userProfile {
      name
      email
      image
    }
  }
`;

export const SAVE_CUSTOM_INSTRUCTIONS = gql`
  mutation SaveCustomInstructions($userId: String!, $instructions: String!) {
    saveCustomInstructions(userId: $userId, instructions: $instructions) {
      success
    }
  }
`;
