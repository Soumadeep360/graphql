/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($email: String!) {
    getTodo(email: $email) {
      id
      name
      email
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $email: String
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listTodos(
      email: $email
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        email
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getInstruction = /* GraphQL */ `
  query GetInstruction($name: String!) {
    getInstruction(name: $name) {
      id
      phoneNumber
      name
      createdAt
      updatedAt
    }
  }
`;
export const listInstructions = /* GraphQL */ `
  query ListInstructions(
    $name: String
    $filter: ModelInstructionFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listInstructions(
      name: $name
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        phoneNumber
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
