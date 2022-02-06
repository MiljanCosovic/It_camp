function najmanji(niz) {
  min1 = niz[0];
  min2 = niz[0];
  for (el of niz) {
    if (min1 > el) {
      min1 = el;
    } else if (min2 > el && min1 < el) {
      min2 = el;
    }
  }
  console.log(min1);
  console.log(min2);
}
najmanji([5, 4, 51,1,2111,23,2333,12,3]);
