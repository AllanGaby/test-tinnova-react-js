import { ListUsersRepository, CreateUserRepository, FindUserByCPFRepository } from './../../../data/repositories/user'
import { User } from './../../../domain/models';

export class LocalStorageUserRepository implements ListUsersRepository, CreateUserRepository, FindUserByCPFRepository {
  constructor(
    private readonly userKey: string
  ) {}

  private getUsersInLocalStorage(): User[] {
    const usersInLocalStorage = localStorage.getItem(this.userKey)
    if (!usersInLocalStorage){
      return []
    }
    return JSON.parse(usersInLocalStorage)
  }

  private setUsersInLocalStorage(users: User[]): void {
    localStorage.setItem(this.userKey, JSON.stringify(users))
  }

  async list(filter: User): Promise<User[]> {
    const usersInLocalStorage = this.getUsersInLocalStorage()
    return usersInLocalStorage.filter((user: User) => 
      (((!filter.name) || (filter.name === user.name)) &&
       ((!filter.cpf) || (filter.name === user.cpf)) &&
       ((!filter.email) || (filter.name === user.email)) &&
       ((!filter.phone) || (filter.name === user.phone))))    
  }
  
  async create(user: User): Promise<User> {
    const usersInLocalStorage = this.getUsersInLocalStorage()
    usersInLocalStorage.push(user)
    this.setUsersInLocalStorage(usersInLocalStorage)
    return user
  }

  async findByCPF(cpf: string): Promise<User | undefined> {
    const usersInLocalStorage = this.getUsersInLocalStorage()
    return usersInLocalStorage.find((user: User) => user.cpf === cpf)
  }
}