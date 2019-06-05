function truncate(string, maxlength){
    if (typeof string === 'string' && typeof maxlength === 'number');{
        let add =   '...';
        if (string.length > maxlength){
            return string.substring(0, maxlength - add.length)+add;
        }
        else {
            throw new error('erorrrrrrrr!! :)');
        }
    }
}

console.log(truncate('I wanna to say next thing about this topic', 22));
