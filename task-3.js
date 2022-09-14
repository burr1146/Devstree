checkEvenNumbers = (a)  => {
    var str = a.toString();
    var val = [str[0]];
    for(let i=0;i<str.length;i++){
        
        if ((str[i-1]%2==0)&&(str[i]%2===0)){
            val.push("|",str[i])
        }
        else{
            val.push(str[i]);
        }
       
    }
    return val.join("");
}



console.log(checkEvenNumbers(12346803));
