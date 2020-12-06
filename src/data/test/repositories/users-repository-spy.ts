import { ListUsersRepository, CreateUserRepository, FindUserByCPFRepository } from '../../repositories/user'
import { User } from './../../../domain/models'
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

export class CreateUserRepositorySpy implements CreateUserRepository {
  params!: User

  async create(param: User): Promise<User> {
    this.params = param
    return this.params
  }
}

export class FindUserByCPFRepositorySPy implements FindUserByCPFRepository {
  cpf!: string
  user!: User

  async findByCPF(cpf: string): Promise<User> {
    this.cpf = cpf
    return this.user
  }
}