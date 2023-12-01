class Student {
  constructor(nume, prenume, dataNasterii, grupa) {
    this.nume = nume;
    this.prenume = prenume;
    this.dataNasterii = dataNasterii;
    this.grupa = grupa;
  }

  updateNume(numeNou) {
    this.nume = numeNou;
  }
  updatePrenume(numeNou) {
    this.prenume = numeNou;
  }
  updateDataNasterii(nou) {
    this.dataNasterii = nou;
  }
  updateGrupa(nou) {
    this.grupa = nou;
  }

  updateAll(a,b,c,d){
    this.updateNume(a)
    this.updatePrenume(b)
    this.updateDataNasterii(c)
    this.updateGrupa(d)
  }

  descriete() {
    console.log("Sunt student " + this.nume + " " + this.prenume);
  }
}

let Studenti = []

const nrStudenti = prompt("Introduceti nr de studenti")
for (let index = 0; index < nrStudenti; index++) {
    const nume = prompt(`Dati nume pentru student ${index+1}`)
    const prenume = prompt(`Dati prenume pentru student ${index+1}`);
    const dataNasterii = prompt(`Dati data nasterii pentru student ${index + 1}`);
    const grupa = prompt(`Dati grupa pentru student ${index + 1}`);
    let elev = new Student(nume, prenume, dataNasterii, grupa)
    Studenti.push(elev)
}

console.log(Studenti);

//modificam student
const i = prompt("Dati nr la student care doriti sal modificati:")
if (i > Studenti.length) {console.log("Nu avem asa student")}
else {
     const nume = prompt(`Dati nume nou pentru student ${i}`);
     const prenume = prompt(`Dati prenume nou pentru student ${i}`);
     const dataNasterii = prompt(`Dati data nasterii noua pentru student ${i}`);
     const grupa = prompt(`Dati grupa noua pentru student ${i}`);
     Studenti[i-1].updateAll(nume, prenume, dataNasterii, grupa)
}

console.log(Studenti);
