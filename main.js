function main(lab1,lab2,lab3,lab4_5,lab6,lab8,quiz1) {
	sum1 = get_sum(lab1)
	sum2 = get_sum(lab2)
	sum3 = get_sum(lab3)
	sum4_5 = get_sum(lab4_5)
	sum6 = get_sum(lab6)
	sum8 = get_sum(lab8)
	let sums = [sum1, sum2, sum3, sum4_5, sum6, sum8]
	let obj = {
		lab1: [5,5,0,0,5,0,10],
		lab2: [5,5,5,5,5,5,10],
		lab3: [5,9,10,15], 
		lab4_5: [10,5,3,5,5,5,10,10,10,10,5], 
		lab6: [5,5,10,5,5,10], 
		lab8: [5,10,10,10,5],
		quiz1: 40 , 
		sums: [sum1, sum2, sum3, sum4_5, sum6, sum8], 
		total_score: ((sums[0] + sums[1] + sums[2] + sums[3] + sums[4] + sums[5]) / 7 * 0.6 + quiz1 * 0.4) / 0.4,}
return obj
}

function get_sum(lab) {
	let sum = 0;
	for (let i = 0; i < lab.length; i++) {
	sum += lab[i];}
	return sum;
}


let lab1 = [5,5,0,0,5,0,10]
let lab2 = [5,5,5,5,5,5,10]
let lab3 = [5,9,10,15]
let lab4_5 = [10,5,3,5,5,5,10,10,10,10,5]
let lab6 = [5,5,10,5,5,10]
let lab8 = [5,10,10,10,5]
let quiz1 = 40

results = main(lab1,lab2,lab3,lab4_5,lab6,lab8,quiz1)
console.log(results)