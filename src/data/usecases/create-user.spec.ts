import { DbCreateUser } from './create-user'
import { FindUserByCPFRepositorySPy, CreateUserRepositorySpy } from '../test/repositories'
import { mockUser } from '../test/models'
import { CPFIsInUseError } from '../errors'

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

  test('Should return CPFIsInUseError if FindUserByCPFRepository return a user', async() => {
    const { sut, findUserByCPFRepositorySPy } = makeSut()
    findUserByCPFRepositorySPy.user = mockUser()
    const promise = sut.create(mockUser())
    await expect(promise).rejects.toThrow(new CPFIsInUseError())    
  })

  test('Should call CreateUserRepository with correct value', async () => {
    const { sut, createUserRepositorySpy } = makeSut()
    const user = mockUser()
    await sut.create(user)
    expect(createUserRepositorySpy.params).toEqual(user)    
  })

  test('Should return a user returned by CreateUserRepository', async () => {
    const { sut, createUserRepositorySpy } = makeSut()
    const user = await sut.create(mockUser())
    expect(user).toEqual(createUserRepositorySpy.params)
  })
})