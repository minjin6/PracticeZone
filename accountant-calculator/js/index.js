//Gathering all the individual prices to add and make subtotal
let prices = [];
var sum = 0, counter = 0;

function subtotal() {
	var args = arguments;
    for(var i=0; i<args.length; i++){
        console.log(args[i]);
    }
}


// Generate Grand Total
function addVAT(subtotal) {
	const VAT = subtotal * 0.2;
	var total = subtotal + VAT;
	var finalPrice = total.toFixed(2);
	return finalPrice; 
}