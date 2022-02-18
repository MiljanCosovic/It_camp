function brise(o1, data) {
  delete o1[data];
  return o1;
}
console.log(brise((covek = { name: "Miljan", prezime: "Cosovic" }), "name"));
