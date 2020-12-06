import { DbCreateUser } from './create-user'
import { FindUserByCPFRepositorySPy, CreateUserRepositorySpy } from '../test/repositories'
import { mockUser } from '../test/models'

interface sutTypes {
  sut: DbCreateUser
  findUserByCPFRepositorySPy: FindUserByCPFRepositorySPy
  createUserRepositorySpy: CreateUserRepositorySpy
}

const makeSut = (): sutTypes => {
  const findUserByCPFRepositorySPy = new FindUserByCPFRepositorySPy()
  const createUserRepositorySpy = new CreateUserRepositorySpy()
  const sut = new DbCreateUser(findUserByCPFRepositorySPy, createUserRepositorySpy)
  return {
    sut,
    findUserByCPFRepositorySPy,
    createUserRepositorySpy
  }
}

describe('DbCreateUser', () => {
  test('Should call FindUserByCPFRepository with correct value', async () => {
    const { sut, findUserByCPFRepositorySPy } = makeSut()
    const user = mockUser()
    await sut.create(user)
    expect(findUserByCPFRepositorySPy.cpf).toEqual(user.cpf)
  })
})