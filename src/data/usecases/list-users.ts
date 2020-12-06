import { ListUsers } from '@/domain/usecases'
import { ListUsersRepository } from '@/data/repositories/user'
import { User } from '@/domain/models'

export class DbListUsers implements ListUsers {
  constructor(private readonly listUsersRepository: ListUsersRepository) {}

  async list(filter: User): Promise<User[]> {
    return await this.listUsersRepository.list(filter)
  }
}