class Book {
  #isbn;

  constructor(isbn, title, author, yearPublished) {
    this.#isbn = isbn;
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
  }

  get isbn() {
    return this.#isbn;
  }
}

class Library {
  #books;

  constructor() {
    this.#books = [];
  }

  addBook(book) {
    if (book instanceof Book) {
      this.#books.push(book);
    } else {
      throw new Error("Only Book instances can be added to the library.");
    }
  }

  removeBook(isbn) {
    this.#books = this.#books.filter(book => book.isbn !== isbn);
  }

  listBooks() {
    return this.#books;
  }
}

// Create a new library
const library = new Library();

// Create some book instances
const book1 = new Book("1234567890", "Book Title 1", "Author 1", 2020);
const book2 = new Book("2345678901", "Book Title 2", "Author 2", 2021);
const book3 = new Book("3456789012", "Book Title 3", "Author 3", 2022);

// Add books to the library
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

// List all books in the library
console.log(library.listBooks());

// Remove a book from the library
library.removeBook("2345678901");

// List all books in the library again
console.log(library.listBooks());