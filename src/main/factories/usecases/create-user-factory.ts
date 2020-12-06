import { DbCreateUser } from './../../../data/usecases'
import { LocalStorageUserRepository } from './../../../infra/repositories/local-storage'

export const makeDbCreateUser = (): DbCreateUser => {
  const userRepository = new LocalStorageUserRepository('@AllanGaby:users')
  return new DbCreateUser(userRepository, userRepository)  
}