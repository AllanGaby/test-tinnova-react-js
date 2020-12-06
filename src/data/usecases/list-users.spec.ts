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
})