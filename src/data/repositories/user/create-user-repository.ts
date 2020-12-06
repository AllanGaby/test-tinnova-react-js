import { User } from './../../../domain/models'

export interface CreateUserRepository {
  create(user: User): Promise<User>
}