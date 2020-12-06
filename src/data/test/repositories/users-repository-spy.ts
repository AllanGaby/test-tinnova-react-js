import { ListUsersRepository } from '../../repositories/user'
import { User } from '../../../domain/models'
import { mockUser } from '../models'

export class ListUsersRepositorySpy implements ListUsersRepository {
  params!: User
  users: User[] = [
    mockUser(),
    mockUser(),
    mockUser()
  ]

  async list(params: User): Promise<User[]> {
    this.params = params
    return this.users
  }
}