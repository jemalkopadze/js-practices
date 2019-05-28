var f = function(number) {
    if (typeof number  === 'number'){
        return number * number * number;
    }
    else {
        throw new Error('parameter type is not a Number');
    }
 }

 console.log(f(2));