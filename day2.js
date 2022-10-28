/**
 * @param {Book} book
 * @param {Number} discount
 * @param {Number} tax
 * @param {Number} stock
 * @param {Number} order
 */

 function transaction(book, discount, tax, stock, order){
    let result = 0;
    for(let loopIndex = 0;  loopIndex < order; loopIndex++){
        if(book && book.price && (loopIndex < stock)){
            const title = book.title;
            const price = book.price;
            const totalDiscount = price * (discount/100);
            const priceAfterDiscount = price - totalDiscount;
            const totalTax = priceAfterDiscount * (tax/100);
            const priceAfterTax = priceAfterDiscount + totalTax;
            result += priceAfterTax;
    
            console.group();
            console.log('Book title = ',title,'*',loopIndex+1);
            console.log('Original Price', price);
            console.log('Discount Amount', totalDiscount);
            console.log('Price After Discount', priceAfterDiscount);
            console.log('Tax Amount', totalTax);
            console.log('Price After Tax', priceAfterTax);
            console.log();
            console.groupEnd();
        }else{
            console.log('Run out of stock :(');
            break;
        }
        
    }
    console.log('Your Total Price Is = ', result)
    console.log();
}

transaction({title: "The Great Gatsby", price:5000, publicity: true}, 50, 10, 5, 10);