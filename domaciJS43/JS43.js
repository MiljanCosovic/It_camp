class Covo {
  constructor(Ime, Prezime, Godina_rodjenja, JMBG, Posao) {
    this.ime = Ime;
    this.prezime = Prezime;
    this.godina = Godina_rodjenja;
    this.maticni = JMBG;
    this.posao = Posao;
  }
  rad() {
    console.log("Radi u " + this.posao);
  }
}

covek1 = new Covo("Miljan", "Cosovic", 2000, 1509000783939, "Ne radi nista");
covek2 = new Covo("Pedja", "Lomcarevic", 2000, 2406000783939, "Rasier");
covek3 = new Covo("Samil", "Plojovic", 2001, 1006000723434, "Avio apartmani");
covek4 = new Covo("Miljan", "Cosovic", 2000, 1509000783939, "Cosmo");

var niz = [];
niz.push(covek1, covek2, covek3, covek4);

for (i = 0; i < niz.length; i++) {
  console.log(niz[i].ime, niz[i].prezime, niz[i].godina, niz[i].maticni);
  niz[i].rad();
}
