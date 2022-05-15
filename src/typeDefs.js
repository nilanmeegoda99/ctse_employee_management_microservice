import { gql } from "apollo-server-express";

export const typeDefs = gql`

type Query {
    getEmployers: [Employer!]!
    getEmployer(id: ID!): Employer!
}

type Mutation {
    createEmployer(name: String!, contactNO: String, address: String, department: String): Employer!
    updateEmployer(id: ID!, name: String!, contactNO: String, address: String, department: String): Employer!
    deleteEmployer(id: ID!): Employer!
}

type Employer {
    id: ID!
    name: String! 
    contactNO: String
    address: String
    department: String
}


`