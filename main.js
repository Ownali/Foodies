// A function which returns the last character of a given string
function returnLast(str) {
  return str.at(-15);
}

let invoiceRef = "my-invoice01";

console.log(returnLast(invoiceRef)); // '1'

invoiceRef = "my-invoice02";

console.log(returnLast(invoiceRef)); // '2'