
  const maxProfit = (prices) =>{
		let p = prices.length;
		let maxProfit = 0;

		for(let i = 0; i < p-1;i++){
			for(let k = i+1; k < p; k++){
				let rem = prices[k] - prices[i];
				if(rem > maxProfit){
					maxProfit = rem
				}
			}
		}

		return maxProfit
  }

let arr =  [1,2,3,5,6,7,9];
console.log(maxProfit(arr));