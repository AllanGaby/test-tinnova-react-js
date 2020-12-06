import { DbListUsers } from './../../../data/usecases'
import { LocalStorageUserRepository } from './../../../infra/repositories/local-storage'

export const makeDbListUsers = (): DbListUsers => {
  const userRepository = new LocalStorageUserRepository('@AllanGaby:users')
  return new DbListUsers(userRepository)
}