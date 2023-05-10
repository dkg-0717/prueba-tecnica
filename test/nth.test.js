import { NTH } from '../src/utils/nthserie'

describe('Prueba en component <NthComponent />', () => {
  test('Testear función serie de números', () => {

    const serie = [2, 4, 6, 8, 10]
    const nth = new NTH(serie)

    const result = nth.findNthNumber()

    expect(result).toEqual(expect.any(String))

  })
})