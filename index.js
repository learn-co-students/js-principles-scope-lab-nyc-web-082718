// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName() {
  return customerName =  customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
  return bestCustomer;
}

function overwriteBestCustomer(name) {
  bestCustomer = name;
  return bestCustomer;
}

const leastFavoriteCustomer = 'mark';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'jane';
  return leastFavoriteCustomer;
}
