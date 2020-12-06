import { CreateUser } from '@/domain/usecases'
import { FindUserByCPFRepository, CreateUserRepository } from '@/data/repositories/user'
import { User } from '@/domain/models'

export class DbCreateUser implements CreateUser {
  constructor(
    private readonly findUserByCPFRepository: FindUserByCPFRepository,
    private readonly createUserRepository: CreateUserRepository
  ){}

  async create(user: User): Promise<User> {
    await this.findUserByCPFRepository.findByCPF(user.cpf)
    return user
  }
}