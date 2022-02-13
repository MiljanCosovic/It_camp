function inverseSlice(niz, a, b) {
  pom1 = [];
  pom2 = [];
  pom1 = niz.slice(0, a);
  pom2 = niz.slice(b);
  pom1 = pom1.concat(pom2);
  console.log(pom1);
}
inverseSlice([1, 2, 3, 4, 5, 6], 2, 4);
