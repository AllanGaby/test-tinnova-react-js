import { DbListUsers } from './list-users'
import { ListUsersRepositorySpy } from '../test/repositories'
import { mockUser } from '../test/models'

interface sutTypes {
  sut: DbListUsers
  listUsersRepositorySpy: ListUsersRepositorySpy
}

const makeSut = (): sutTypes => {
  const listUsersRepositorySpy = new ListUsersRepositorySpy()
  const sut = new DbListUsers(listUsersRepositorySpy)
  return {
    sut,
    listUsersRepositorySpy
  }
}

describe('DbListUsers', () => {
  test('Should call ListUsersRepository with correct values', async () => {
    const { sut, listUsersRepositorySpy } = makeSut()
    const filter = mockUser()
    await sut.list(filter)
    expect(listUsersRepositorySpy.params).toEqual(filter)
  })

  test('Should return same value to ListUserRepository return', async () => {
    const { sut, listUsersRepositorySpy } = makeSut()
    const users = await sut.list(mockUser())
    expect(listUsersRepositorySpy.users).toEqual(users)
  })
})