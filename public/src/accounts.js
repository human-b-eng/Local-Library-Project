//d1//returns the account object that has the matching ID.
function findAccountById(accounts=[], id) {
  return accounts.find((account)=>account.id === id)
}

//d1//returns a sorted array of the provided account objects. The objects are sorted alphabetically by last name.
function sortAccountsByLastName(accounts=[]) {
  return accounts.sort((acctA,acctB)=>acctA.name.last.toLowerCase() > acctB.name.last.toLowerCase()? 1 : -1)
}

//d2// return a number that represents the number of times the account's ID appears in any book's borrows array.
function getTotalNumberOfBorrows(account, books) {

}


//d2// returns an array of book objects, including author information, that represents all books currently checked out by the given account. Look carefully at the object below, as it's not just the book object; the author object is nested inside of it.
function getBooksPossessedByAccount(account, books, authors) {

}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
