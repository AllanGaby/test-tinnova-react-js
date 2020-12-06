import { User } from '@/domain/models'

export interface ListUsers {
  list(filter: User): Promise<User[]>
}