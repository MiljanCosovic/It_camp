macka = {
  umor: 10,
  glad: 9,
  usamljenost: 5,
  sreca: 15,
  igra: function () {
    this.umor += 5;
    this.glad += 8;
    this.usamljenost -= 3;
    this.sreca += 10;
    return console.log(
      "Kada se macka igra ovako izgledaju property:",
      "Umor:",
      this.umor,
      "; Glad:",
      this.glad,
      "; Usamljenost:",
      this.usamljenost,
      "; Sreca:",
      this.sreca
    );
  },
  jelo: function () {
    this.umor -= 3;
    this.glad -= 5;
    this.sreca += 8;
    return console.log(
      "Kada macka jede ovako izgledaju property:",
      "Umor:",
      this.umor,
      "; Glad:",
      this.glad,
      "; Usamljenost:",
      this.usamljenost,
      "; Sreca:",
      this.sreca
    );
  },
  spavanje: function () {
    this.umor -= 8;
    this.glad += 4;
    this.sreca += 3;
    return console.log(
      "Kada macka spava ovako izgledaju property:",
      "Umor:",
      this.umor,
      "; Glad:",
      this.glad,
      "; Usamljenost:",
      this.usamljenost,
      "; Sreca:",
      this.sreca
    );
  },
};

console.log(
  "Umor:",
  macka.umor,
  "; Glad:",
  macka.glad,
  "; Usamljenost:",
  macka.usamljenost,
  "; Sreca:",
  macka.sreca
);
macka.igra();
macka.jelo();
macka.spavanje();
