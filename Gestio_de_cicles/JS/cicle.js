export class Cicle {
  constructor(nom, categoria, numAlumnes, abreviatura) {
    this.nom = nom;
    this.categoria = categoria;
    this.numAlumnes = numAlumnes;
    this.abreviatura = abreviatura;
    this.numEdicions = 0;
    this.llistatModuls = [];
    this.ultimaActualitzacio = new Date();
  }

  setNumEdicions() {
    this.numEdicions++;
    this.ultimaActualitzacio = new Date();
  }

  getModulsList() {
    return this.llistatModuls.map((modul) => modul.toString()).join("\n");
  }

  toString() {
    return `
      Nom: ${this.nom} \n
      Categoria: ${this.categoria} \n
      Num Alumnes: ${this.numAlumnes} \n
      Abreviatura: ${this.abreviatura} \n
      Última Actualització: ${this.ultimaActualitzacio} \n
      Numero d'edicions: ${this.numEdicions} \n 
      Moduls: ${this.getModulsList()}
    `;
  }

  afegirModul(modul) {
    this.llistatModuls.push(modul);
  }

  horesTotalsModul() {
    let totalHores = 0;
    this.llistatModuls.forEach((modul) => {
      totalHores += parseInt(modul.calculHores());
    });
    return totalHores;
  }

  getUltimaEdicion(){
    return this.ultimaActualitzacio;
  }
}
