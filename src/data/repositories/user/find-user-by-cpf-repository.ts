import { User } from '@/domain/models'

export interface FindUserByCPFRepository {
  findByCPF(cpf: string): Promise<User>
}