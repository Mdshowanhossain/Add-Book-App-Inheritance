class Book {
    constructor(title, author, description) {
        this.title = title;
        this.author = author;
        this.description = description;
    }
}
class TableData {

    clearInput() {
        document.getElementById("title").value = ''
        document.getElementById("author").value = ''
        document.getElementById("description").value = ''
    }
    deleteData(target) {
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }

    receiveBookData(newBook) {
        const seeListItem = document.getElementById("book-list");
        const itemRow = document.createElement("tr");
        itemRow.innerHTML = `
        <td>${newBook.title}</td>
        <td>${newBook.author}</td>
        <td>${newBook.description}</td>
        <td><button class="delete">Delete</button></td>
        `
        seeListItem.appendChild(itemRow)
    }

    showAlert() {
        const seeListItem = document.getElementById("classs");
        const itemRow = document.createElement("p");
        itemRow.innerHTML = `
        <p class="alert">This filled is required</p>
        `
        seeListItem.appendChild(itemRow)

    } showSuccess() {
        const seeListItem = document.getElementById("classs");
        const itemRow = document.createElement("p");
        itemRow.innerHTML = `
        <p class="success">Thank You for Add a Book</p>
        `
        seeListItem.appendChild(itemRow)
    }
}

document.getElementById("submitBtn").addEventListener("click", function (e) {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const descBox = document.getElementById("description").value;
    const newBook = new Book(title, author, descBox);
    const tableData = new TableData();
    if (title === '' && author === '' && descBox === '') {
        tableData.showAlert();
    }
    else {
        tableData.receiveBookData(newBook)
        tableData.showSuccess();
        tableData.clearInput()
    }
    e.preventDefault();
})
document.getElementById("book-list").addEventListener("click", function (e) {
    const tableData = new TableData();
    tableData.deleteData(e.target)
})
