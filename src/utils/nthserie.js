export class NTH {

  serie = []
  serieIsValid = true;
  constructor(serie) {
    this.serie = serie
  }

  getNumber() {
    const [n1, n2] = this.serie
    return n2 - n1
  }

  isValid(serie, i, number) {
    if (serie[i + 1] && serie[i] + number === serie[i + 1]) {
      return true
    }
    return false
  }

  getFormula(number) {
    return `${number}n+${this.serie[0] - number}`
  }

  findNthNumber() {
    let serieIsValid = true
    const number = this.getNumber()
    const formula = this.getFormula(number)

    for (let i = 0; i < this.serie.length; i++) {
      if (this.isValid(this.serie, i, number) || i == this.serie.length - 1) {
        // console.log(this.serie[i] + ' ' + '--- is valid ---')
        if (i === this.serie.length - 1) {
          return formula
        }
      } else {
        serieIsValid = false
        // console.log(this.serie[i] + ' ' + '--- is invalid ---')
        i = this.serie.length;
        return serieIsValid
      }
    }

  }

  // const serieIsValid = findNthNumber(serie, number)

  // console.log(serieIsValid)

}