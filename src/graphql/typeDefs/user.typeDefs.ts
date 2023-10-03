export const userTypeDefs = `#graphql
type User {
    id: Int
    userName: String
    email: String
}
input RegisterInput {
    userName: String
    email: String
    password: String
    confirmPassword: String
}
type RegisterResponse {
    data: User
}
input LoginInput {
    email: String
    password: String
}
 type LoginResponse {
    email: String
    token: String
    message: String
}
 type Query {
    users: [User]
  }
type Mutation {
    register(input: RegisterInput): RegisterResponse
    login(input: LoginInput): LoginResponse
}
`;
