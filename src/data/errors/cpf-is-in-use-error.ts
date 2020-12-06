export class CPFIsInUseError extends Error {
  constructor () {
    super('Exist other use with same CPF')
    this.name = 'CPFIsInUseError'
  }
}
