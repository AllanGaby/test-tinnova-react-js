import { User } from '../models'

export interface ListUsers {
  list(): Promise<User[]>
}