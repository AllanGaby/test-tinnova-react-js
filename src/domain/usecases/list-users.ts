import { User } from './../models'

export interface ListUsers {
  list(filter: User): Promise<User[]>
}