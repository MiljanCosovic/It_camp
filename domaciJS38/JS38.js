function niz() {
  var data = [3, 0, 2, 44, 0, 123, 0, 32, 63];
  for (let i = 0; i < data.length; i++) {
    if (data[i] === 0) {
      nula = data.splice(i, 1);
      data.push(0);
    }
  }

  console.log(data);
}
niz();
