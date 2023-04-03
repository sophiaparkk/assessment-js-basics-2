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

//CODE HERE

const summedPrice = cart.reduce(function(arr, curr){
    for (let i=0; i<cart.length; i++)
    return cart[i].price + cart[i].price + cart[i].price

})

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

//CODE HERE

const calcFinalPrice = function(cartTotal, couponValue, tax) {
    let taxedTotal = (cartTotal * tax) + cartTotal
    return taxedTotal - couponValue
}

console.log(calcFinalPrice(summedPrice, 3, .06))



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
    TEXT ANSWER HERE
    A cart page would need information from a customer such as:
    Name: String
    Address: String
    Card payment last 4: Number
    Shipping type: String

    I chose these properties as they are some basic information needed to ship items purchased online. Also only reduced card payment to the last 4 digits for simplicity of this example.
    The data types are the types that make most sense for the properties I've chosen.
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

let customer = {
    name: 'John Doe',
    address: '123 Rainbow way',
    cardpayment: 1234,
    shipping: 'Standard'
}