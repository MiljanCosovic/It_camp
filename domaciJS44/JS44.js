var library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
  {
    author: "Ivo Andric",
    title: "Na Drini cuprija",
    readingStatus: true,
  },
];

for (i = 0; i < library.length; i++) {
  console.log(library[i].author, library[i].title);
  if (library[i].readingStatus) {
    console.log("Procitao");
  } else {
    console.log("Nije procitao");
  }
}
