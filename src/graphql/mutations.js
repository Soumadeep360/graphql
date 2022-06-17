/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      email
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      email
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      email
      createdAt
      updatedAt
    }
  }
`;
export const createInstruction = /* GraphQL */ `
  mutation CreateInstruction(
    $input: CreateInstructionInput!
    $condition: ModelInstructionConditionInput
  ) {
    createInstruction(input: $input, condition: $condition) {
      email
      name
      createdAt
      updatedAt
    }
  }
`;
export const updateInstruction = /* GraphQL */ `
  mutation UpdateInstruction(
    $input: UpdateInstructionInput!
    $condition: ModelInstructionConditionInput
  ) {
    updateInstruction(input: $input, condition: $condition) {
      email
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteInstruction = /* GraphQL */ `
  mutation DeleteInstruction(
    $input: DeleteInstructionInput!
    $condition: ModelInstructionConditionInput
  ) {
    deleteInstruction(input: $input, condition: $condition) {
      email
      name
      createdAt
      updatedAt
    }
  }
`;
