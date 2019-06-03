function checksmap(source, example) {
    if (typeof source === 'string' && typeof example === 'string'); {
        let sourceUpperCase = source.toUpperCase()
        let exampleUpperCase = example.toUpperCase();
        if (source.includes(example)) {
            return true;
        }
        else {
            return false;
        }
    }
}
console.log(checksmap('pitterXXX@gmail.com', 'xxx'));
