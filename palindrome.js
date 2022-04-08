

const palindrome = (str) =>
{
    let x = JSON.stringify(str)
    resv = ''
    for(let i = x.length -1; i >=0; i--)
    {
        resv = resv + x[i]
    }
    return (x === resv) ? true:false;
}

console.log(palindrome(789));