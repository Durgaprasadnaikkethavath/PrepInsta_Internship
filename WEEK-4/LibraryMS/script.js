//adding books

document
  .getElementById("bookForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const genre = document.getElementById("genre").value;
    const errorMessage = document.getElementById("errorMessage");

    if (title && author && pages && genre) {
      errorMessage.textContent = "";
      AddBookToLibrary(title, author, pages, genre);
    } else {
      errorMessage.textContent = "All fields are required!";
    }
  });

function AddBookToLibrary(title, author, pages, genre) {
  console.log("Book added:", { title, author, pages, genre });
}

// Searching for Books

const books = [
  { title: "Book1", author: "Author1", pages: 100, genre: "Genre1" },
  { title: "Book2", author: "Author2", pages: 200, genre: "Genre2" },
  // Add more books here
];

document.getElementById("searchInput").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(query)
  );
  displayBooks(filteredBooks);
});

function displayBooks(books) {
  const bookList = document.getElementById("bookList");
  bookList.innerHTML = "";

  if (books.length === 0) {
    document.getElementById("noResultsMessage").textContent = "No books found.";
  } else {
    document.getElementById("noResultsMessage").textContent = "";
    books.forEach((book) => {
      const li = document.createElement("li");
      li.textContent = `${book.title} by ${book.author}, ${book.pages} pages, Genre: ${book.genre}`;
      bookList.appendChild(li);
    });
  }
}

// Displaying Books
function renderBooks(books) {
  const bookList = document.getElementById("bookList");
  bookList.innerHTML = "";

  books.forEach((book) => {
    const li = document.createElement("li");
    li.textContent = `${book.title} by ${book.author}, ${book.pages} pages, Genre: ${book.genre}`;
    bookList.appendChild(li);
  });
}

// Example of adding books to display on page load
renderBooks(books);

//Enhancing User Interaction
function displayBooks(books) {
  const bookList = document.getElementById("bookList");
  bookList.innerHTML = "";

  if (books.length === 0) {
    document.getElementById("noResultsMessage").textContent = "No books found.";
  } else {
    document.getElementById("noResultsMessage").textContent = "";
    books.forEach((book) => {
      const li = document.createElement("li");
      li.textContent = `${book.title} by ${book.author}, ${book.pages} pages, Genre: ${book.genre}`;
      bookList.appendChild(li);
    });
  }
}
