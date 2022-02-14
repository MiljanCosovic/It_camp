var niz = [22, 11, 24, 2, 1, 421, 23];
for (i = 0; i < niz.length; i++) {
  for (j = i + 1; j > 0; j--) {
    if (niz[j] < niz[j - 1]) {
      [niz[j], niz[j - 1]] = [niz[j - 1], niz[j]];
    }
  }
}
console.log(niz);
