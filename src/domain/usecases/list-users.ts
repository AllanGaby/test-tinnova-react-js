import { User } from '@/domain/models'

export interface ListUsers {
  list(): Promise<User[]>
}