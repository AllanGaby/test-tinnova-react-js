import { User } from './../models'

export interface CreateUser {
  create(user: User): Promise<User>
}