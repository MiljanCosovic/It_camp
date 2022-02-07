function find(niz) {
  max = niz[0];
  for (el of niz) {
    if (Math.abs(max) <= Math.abs(el)) {
      max = el;
    }
  }
  console.log("Broj sa najvise cifara je: " + max);
}

find([2, 44, 1, 4, -33,221]);
