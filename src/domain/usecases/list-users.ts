import { User } from './../models'

export interface ListUsers {
  list(filter: User | undefined): Promise<User[]>
}