import { User } from './../../../domain/models'

export interface ListUsersRepository {
  list(filter: User): Promise<User[]>
}