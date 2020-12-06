import { LocalStorageUserRepository } from './user-repository'
import { mockEmptyUser, mockUser } from './../../../data/test/models'
import faker from 'faker'

interface sutTypes {
  sut: LocalStorageUserRepository
}

const userKey: string = faker.random.uuid()

const makeSut = (): sutTypes => {
  return {
    sut: new LocalStorageUserRepository(userKey)
  }
}

describe('LocalStorageUserRepository', () => {
  beforeEach(() => {
    localStorage.removeItem(userKey)
  })

  describe('CreateUser', () => {
    test('Should return a user if succeeds', async () => {
      const { sut } = makeSut()
      const user = mockUser()
      const createdUser = await sut.create(user)
      expect(createdUser).toEqual(user)
    })

    test('Should set a correct user in localstorage', async () => {
      const { sut } = makeSut()
      const user = mockUser()
      await sut.create(user)
      const userInLocalStorage = localStorage.getItem(userKey)      
      expect(userInLocalStorage).toEqual(JSON.stringify([user]))
    })
  })

  describe('ListUsers', () => {
    test('Should return a empty list if localstorage is empty', async () => {
      const { sut } = makeSut()
      const list = await sut.list(mockEmptyUser())
      expect(list).toEqual([])
    })

    test('Should return correct list is localstorage is not empty', async () => {
      const { sut } = makeSut()      
      const users = [
        mockUser(),
        mockUser()
      ]
      localStorage.setItem(userKey, JSON.stringify(users))
      const list = await sut.list(mockEmptyUser())
      expect(list).toEqual(users)      
    })
  })
})