export class Modul {
  constructor(nom, num, hores, cicle) {
    this.nom = nom;
    this.num = num;
    this.hores = hores;
    this.cicle = cicle;
  }

  calculHores() {
    return this.hores;
  }

  toString() {
    return `MP${this.num}. ${this.nom} (${this.hores}h)`;
  }
}
