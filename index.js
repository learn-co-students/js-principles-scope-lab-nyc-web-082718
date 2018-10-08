// Write your solution in this file!
var customerName = "bob"

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not ' + customerName.toLowerCase()
}

function overwriteBestCustomer() {
 bestCustomer = 'maybe ' + customerName.toLowerCase()
}

function changeLeastFavoriteCustomer() {
  const leastFavoriteCustomer = "somebody"
  leastFavoriteCustomer = 'new'
}
