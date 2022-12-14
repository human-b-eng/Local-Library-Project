//returns a number that represents the number of book objects inside of the array.
function getTotalBooksCount(books = []) {
  return books.length;
}

//returns a number that represents the number of account objects inside of the array.
function getTotalAccountsCount(accounts = []) {
  return accounts.length;
}

//returns a number that represents the number of books that are currently checked out of the library. This number can be found by looking at the first transaction object in the borrows array of each book. If the transaction says the book has not been returned (i.e. returned: false), the book is currently being borrowed.
function getBooksBorrowedCount(books = []) {
  const borrowed = books.filter((book) =>
    book.borrows.some((borrow) => borrow.returned === false)
  );
  return borrowed.length;
}


//sorts an array by "count" (descending) and returns only as many elements as the "slice" parameter
function sortAndSlice(array,slice){
  const sorted = array.sort((objA,objB)=>{
    return objB.count - objA.count
  })
  return sorted.slice(0,slice)
}

//returns an array containing five objects or fewer that represents the most common occurring genres, ordered from most common to least.
function getMostCommonGenres(books) {
  const result = books.reduce((genres, book) => {
    const bookGenre = genres.find((genre) => genre.name === book.genre);
    !bookGenre ? genres.push({ name: book.genre, count: 1 }) : bookGenre.count++;
    return genres;
  }, []);
  return sortAndSlice(result,5)
}


//returns an array containing five objects or fewer that represents the most popular books in the library. Popularity is represented by the number of times a book has been borrowed.
function getMostPopularBooks(books = []) {
  const booksMap = books.map((book)=>{
    return {name:book.title,count:book.borrows.length}
  })
  return sortAndSlice(booksMap,5)
}

//returns an array containing five objects or fewer that represents the most popular authors whose books have been checked out the most. Popularity is represented by finding all of the books written by the author and then adding up the number of times those books have been borrowed.
function getMostPopularAuthors(books = [], authors = []) {
  const authorMap = authors.map(author=>{
    let authorName = `${author.name.first} ${author.name.last}`
    const bookFilter = books.filter(book => book.authorId === author.id)
    const borrowCount = bookFilter.reduce((borrowTotal,book)=>{
      return borrowTotal + book.borrows.length     
    },0)
    return {name:authorName,count:borrowCount}
  })
  return sortAndSlice(authorMap,5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
