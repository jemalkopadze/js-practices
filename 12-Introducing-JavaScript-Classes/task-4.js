const MyString = class{
    constructor (){

        this.reverse = function(reverse){
            reverse = reverse.split("")
            reverse = reverse.reverse()
            reverse = reverse.join("")
            return reverse;
        }

        this.ucFirst = function(fistuppercase){
            return fistuppercase.charAt(0).toUpperCase() + fistuppercase.slice(1);
        }

    }
    ucWords(sent){
        sent = sent.split(" ")
        sent = sent.map((word)=>{
            return this.ucFirst(word)
        })
        return sent.join(" ")
    }
}


let str = new MyString();


console.log(str.reverse('abcde')); // print 'edcba'
console.log(str.ucFirst('abcde')); // print 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); // print 'Abcde Abcde Abcde'