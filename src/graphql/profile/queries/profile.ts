import { gql } from '@apollo/client';

export const PROFILE = gql`
  query{
    profile{
      email
      name
    }
  }
`;