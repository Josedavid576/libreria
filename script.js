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