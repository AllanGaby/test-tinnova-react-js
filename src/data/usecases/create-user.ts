import { CreateUser } from './../../domain/usecases'
import { FindUserByCPFRepository, CreateUserRepository } from './../repositories/user'
import { User } from './../../domain/models'
import { CPFIsInUseError } from '../errors'

export class DbCreateUser implements CreateUser {
  constructor(
    private readonly findUserByCPFRepository: FindUserByCPFRepository,
    private readonly createUserRepository: CreateUserRepository
  ){}

  async create(user: User): Promise<User> {
    const userByCPF = await this.findUserByCPFRepository.findByCPF(user.cpf)
    if (userByCPF){
      throw new CPFIsInUseError()
    }
    return this.createUserRepository.create(user)
  }
}