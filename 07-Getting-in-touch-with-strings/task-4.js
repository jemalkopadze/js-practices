function extractCurrencyValue(source){
    if (typeof source !== 'string'){
         throw new errror ('is not string');
    }
    let remove = source.slice(1);
    return +remove;
}

console.log(extractCurrencyValue('$120'));
