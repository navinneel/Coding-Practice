let num1 = [0,0,1,1,1,2,2,3,3,4];
const getUnion = (num1) => 
{
    const union =[];
    for (let i = 0; i < num1.length; i++) 
    {
        if (union.indexOf(num1[i]) === -1) 
        {
            union.push(num1[i]);
        }
    }
    return union;
}



console.log(getUnion(num1));