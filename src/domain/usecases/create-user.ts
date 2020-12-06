import { User } from '@/domain/models'

export interface CreateUser {
  create(user: User): Promise<User>
}