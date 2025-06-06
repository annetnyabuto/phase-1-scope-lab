// Write your solution in this file!
var customerName = 'bob';
function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
}

function setBestCustomer (){
    bestCustomer = 'not bob';
}
function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
}
const leastFavouriteCustomer = 'John';
function changeLeastFavoriteCustomer (){
    leastFavouriteCustomer = 'not John'; // Definitely will throw an error
}