//d1//returns the author object that has the matching ID.
function findAuthorById(authors=[], id="") {
  return authors.find((author)=>author.id === id)
}


//d1//returns the book object that has the matching ID.
function findBookById(books=[], id="") {
  return books.find((book)=>book.id === id)
}


//d2//returns an array with two arrays inside of it. All of the inputted books are present in either the first or second array.
function partitionBooksByBorrowedStatus(books) {
  let borrowed = books.filter((book)=>book.borrows.some((borrow)=>borrow.returned === false))
  let returned = books.filter((book)=>book.borrows.every((borrow)=>borrow.returned === true))
  return [borrowed,returned]

  //return [books.filter((book)=>book.borrows.some((borrow)=>borrow.returned === false)),books.filter((book)=>book.borrows.every((borrow)=>borrow.returned === true))]
}


//d2//should return an array of ten or fewer account objects that represents the accounts given by the IDs in the provided book's borrows array. However, each account object should include the returned entry from the corresponding transaction object in the borrows array.
function getBorrowersForBook(book={}, accounts=[]) {
let {borrows} = book
let result = borrows.map((borrower)=>{
  let foundBorrower = accounts.find((account)=>{
    return account.id === borrower.id
  })
  foundBorrower.returned = borrower.returned
  return foundBorrower
  })
return result.slice(0, 10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
