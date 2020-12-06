import { User } from '@/domain/models'
import faker from 'faker'

export const mockUser = (): User => ({
  name: faker.name.findName(),
  cpf: faker.random.uuid(),
  email: faker.internet.email(),
  phone: faker.phone.phoneNumberFormat()
})

export const mockEmptyUser = (): User => ({
  name: '',
  cpf: '',
  email: '',
  phone: ''
})