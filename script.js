class Book {
    constructor(title, author, description) {
        this.title = title;
        this.author = author;
        this.description = description;
    }
}

class TableData {
    constructor(newBook) {
    }
    receiveBookData(newBook) {
        const seeListItem = document.getElementById("book-list");
        const itemRow = document.createElement("tr");
        itemRow.innerHTML = `
        <td>${newBook.title}</td>
        <td>${newBook.author}</td>
        <td>${newBook.descBox}</td>
        <td></td>
        `
        seeListItem.appendChild(itemRow)
    }
}

document.getElementById("submitBtn").addEventListener("click", function (e) {
    const title = document.getElementById("title").value;
    // console.log(title)
    const author = document.getElementById("author").value;
    // console.log(author)
    const descBox = document.getElementById("description").value;
    // console.log(descBox)
    const newBook = new Book(title, author, descBox);
    console.log(newBook)
    const tableData = new TableData();
    tableData.receiveBookData(newBook)
    e.preventDefault();
})







// DUMMY TEXT

// document.getElementById("submitBtn").addEventListener("click", function (e) {

//     const titleBox = document.getElementById("title");
//     const titleBoxValue = titleBox.value;

//     console.log(titleBoxValue)

//     const author = document.getElementById("author");
//     const authorBoxValue = author.value;

//     console.log(authorBoxValue)


//     const descBox = document.getElementById("description");
//     const descBoxValue = descBox.value;

//     console.log(descBoxValue)

//     e.preventDefault();
// })
