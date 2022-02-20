function data(biblioteka) {
  b = [];

  for (i = 0; i < biblioteka.length; i++) {
    if (biblioteka[i].age >= 18) b.push(biblioteka[i]);
  }
  console.log(b);
}

data([
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
    age: 16,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
    age: 21,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
    age: 18,
  },
]);
