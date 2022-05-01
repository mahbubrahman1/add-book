// get element from UI
let bookForm = document.getElementById('book-form');

// input book class
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// display book in table class
class Display {
    constructor() {

    }
    addBookList(book) {
        let bookList = document.getElementById('book-list');
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href = '#'>x</a></td>`;
        bookList.appendChild(row);
    }
    clearInputText() {
        document.getElementById('title-input').value = '';
        document.getElementById('author-input').value = '';
        document.getElementById('isbn-input').value = '';
    }
}

// add event listener
bookForm.addEventListener('submit', newBook);

// define function
function newBook(event) {
    let title = document.getElementById('title-input').value;
    let author = document.getElementById('author-input').value;
    let isbn = document.getElementById('isbn-input').value;
    let book = new Book(title, author, isbn);
    let display = new Display();
    display.addBookList(book);
    display.clearInputText();

    event.preventDefault();
}