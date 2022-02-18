function ima(prop) {
  covek = {
    name: "Miljan",
    surname: "Ljanmi",
    location: "Novi Pazar",
    nickname: "Ljanmi",
  };
  if (prop in covek) {
    console.log("Objekat ima property");
  } else {
    console.log("Objekat nema propery");
  }
}
ima("location");
ima("lastname");
