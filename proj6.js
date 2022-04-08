
 function maxArray(arr)
 {
     size = arr.length
     var maxint = Math.pow(2, 53)
     var max_so_far = -maxint - 1
     var max_ending_here = 0
       
     for (var i = 0; i < size; i++)
     {
         max_ending_here = max_ending_here + arr[i]
         if (max_so_far < max_ending_here)
             max_so_far = max_ending_here
  
         if (max_ending_here < 0)
             max_ending_here = 0
     }
     return max_so_far
 }
   

 var arr = [ -2, -3, 4, -1, -2, 1, 5, -3 ]
 console.log("Maximum contiguous sum is",maxArray(arr));