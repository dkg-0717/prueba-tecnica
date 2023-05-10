import { Primo } from '../src/utils/isPrimo'

describe('Prueba en component <NumerosPrimos />', () => {
  test('Testear función de números primos', () => {

    const number = 3
    const primo = new Primo()

    const isPrimo = primo.isPrimo(number)

    expect(isPrimo).toBe(true)
  })
})