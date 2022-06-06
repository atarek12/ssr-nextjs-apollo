import { gql } from "@apollo/client";

export const USERS_DOC = gql`
  query getUsers {
    users {
      data {
        id
        name
      }
    }
  }
`;
