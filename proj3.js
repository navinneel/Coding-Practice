const lengthEnd =(num) =>{
    let len = 0;

    let x = num.trim();
 
    for (let i = 0; i < x.length; i++) 
    {
        if (x[i] == ' ')
         {
            len = 0;
        }
        else 
        {
            len++;
        }
    }
 
    return len;
}

let data =  "Welcome to Digikull";
console.log(lengthEnd(data));