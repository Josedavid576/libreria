const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function() {
    this.read = !this.read;
};

function addBookToLibrary(book) {
    myLibrary.push(book);
    displayBooks();
}

function displayBooks() {
    const libraryDiv = document.getElementById('library');
    libraryDiv.innerHTML = '';
    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.innerHTML = `
        <h3>${book.title}</h3>
        <p>Autor: ${book.author}</p>
        <p>Páginas: ${book.pages}</p>
        <p>Leído: ${book.read ? 'Sí' : 'No'}</p>
        <button onclick="removeBook(${index})">Eliminar</button>
        <button onclick="toggleRead(${index})">Cambiar Estado de Lectura</button>
    `;

    libraryDiv.appendChild(bookCard);
});
}

function removeBook(index) {
myLibrary.splice(index, 1);
displayBooks();
}

function toggleRead(index) {
myLibrary[index].toggleRead();
displayBooks();
}
document.getElementById('newBookBtn').addEventListener('click', () => {
    document.getElementById('bookFormContainer').classList.toggle('hidden');
});

document.getElementById('bookForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    const newBook = new Book(title, author, pages, read);
    addBookToLibrary(newBook);

    document.getElementById('bookForm').reset();
    document.getElementById('bookFormContainer').classList.add('hidden');
});
addBookToLibrary(new Book('Don Quijote de la Mancha', 'Miguel de Cervantes', 1072, false));
addBookToLibrary(new Book('Moby Dick', 'Herman Melville', 585, true));
addBookToLibrary(new Book('Orgullo y Prejuicio', 'Jane Austen', 279, true));
addBookToLibrary(new Book('Cien Años de Soledad', 'Gabriel García Márquez', 417, false));
addBookToLibrary(new Book('1984', 'George Orwell', 328, true));