// get element from UI
let bookForm = document.getElementById('book-form');
let bookList = document.getElementById('book-list');

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
    static addBookList(book) {
        let bookList = document.getElementById('book-list');
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href = '#'>x</a></td>`;
        bookList.appendChild(row);
    }

    // clear text after add button click
    static clearInputText() {
        document.getElementById('title-input').value = '';
        document.getElementById('author-input').value = '';
        document.getElementById('isbn-input').value = '';
    }

    static showAlert(message, className) {
        let div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        let container = document.querySelector('.container');
        let form = document.getElementById('book-form');
        container.insertBefore(div, form);

        // set time for alert
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 2000);
    }

    // remove icon working
    static removeFromList(target) {
        if (target.hasAttribute('href')) {
            target.parentElement.parentElement.remove();
            Display.showAlert('Book removed!', 'success');
        }
    }
}

// add event listener
bookForm.addEventListener('submit', newBook);
bookList.addEventListener('click', removeBook);

// define function & alert
function newBook(event) {
    let title = document.getElementById('title-input').value;
    let author = document.getElementById('author-input').value;
    let isbn = document.getElementById('isbn-input').value;

    if (title == '' || author == '' || isbn == '') {
        Display.showAlert('Please fill all the fields!', 'fail');
    } else {
        let book = new Book(title, author, isbn);
        Display.addBookList(book);
        Display.clearInputText();
        Display.showAlert('Book added!', 'success');
    }

    event.preventDefault();
}

// remove book from table
function removeBook(event) {
    Display.removeFromList(event.target);

    event.preventDefault();
}