///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

const summedPrice = cart.reduce((acc, curr) => acc + curr.price, 0)
console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

function calcFinalPrice(cartTotal, couponValue, tax) {
    cartTotal = (cartTotal * (1 + tax)) - couponValue
    return cartTotal
}

console.log(calcFinalPrice(50, 10, .06))

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
TEXT ANSWER
I would create a customer address object. Since this restaurant handles online orders it will need the customer address for delivery orders. I'd chose the properties 
of name, street info, city, state, and zip code. Separating the parts of a customer delivery address into these properties could help estimate the number of customers in
certain delivery regions, for example. The restaurant could also save this info for later use and make online ordering faster.

I would make all values strings except for zip code since all other values contain letters.

name: string
streetInfo: string
city: string
state: string
zip: number

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

const customerAddress = {
    name: "Luna Bresson",
    streetInfo: "1234 Dog Way",
    city: "East Lansing",
    state: "MI",
    zip: 48824
}

console.log(customerAddress)