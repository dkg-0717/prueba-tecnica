export class Primo {

  numbers = [];

  constructor() { }

  generateNumbers(hasta) {
    for (let x = 0; x < hasta; x++) {
      if (x !== 0 && this.isPrimo(x)) {
        this.numbers.push(x)
      }
    }
    return this.numbers;
  }

  isPrimo(numero) {
    for (var i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return numero !== 1;
  }

  getMultiplo() {
    return this.numbers.filter(n => n % 3 == 0)
  }

}