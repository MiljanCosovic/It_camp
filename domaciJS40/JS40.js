function tek(s) {
  pomarr = s.split(" ");
  rez = [];
  for (let i = 0; i < pomarr.length; i++) {
    if (pomarr[i] !== pomarr[i + 1]) {
      rez.push(pomarr[i]);
    }
  }
  return rez.join(" ");
}
console.log(
  tek(
    "alfa beta beta gama gama gama delta alpha beta beta gama gama gama delta"
  )
);








