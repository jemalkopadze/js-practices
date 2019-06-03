function upperCaseFirst(string) {
    if (typeof string === 'string') {
        let firstLetter = string.charAt().toUpperCase();
        let substring = string.substring(1);
        return firstLetter + substring;
    } else {
        throw new error('it is not string');
    }
}

let x = upperCaseFirst('pitter');
let y = upperCaseFirst('');
console.log(x);
