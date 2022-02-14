o1 = {
  name: "Dzemil",
  surname: "Dupljak",
};

o2 = {};

let flat = Object.entries(o1);

for (i = 0; i < Object.entries(o1).length; i++) {
  console.log(flat[i]);
  o2[flat[i][1]] = flat[i][0];
}

console.log(o1);
