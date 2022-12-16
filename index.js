var customerName = 'bob';
const leastFavoriteCustomer = 'definitely bob';

function upperCaseCustomerName() {
    //customerName = customerName.toUpperCase();
    return toUpperCase(customerName);
}

function setBestCustomer() {
    window.bestCustomer = 'not bob';
}

function overwriteBestCustomer(customerName) {
    bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'just kidding, it\'s absolutely not bob';
}