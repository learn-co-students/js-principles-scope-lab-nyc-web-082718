// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName() {
  return customerName =  customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
  return bestCustomer;
}

function overwriteBestCustomer(customer) {
  bestCustomer = customer;
  return bestCustomer;
}

const leastFavoriteCustomer = '';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'something else';
  return leastFavoriteCustomer;
}
