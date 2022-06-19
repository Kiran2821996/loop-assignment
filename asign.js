let a = process.argv[2];
let b = process.argv[3];

// Using a loop print all odd numbers up to and including n. Don’t include 0.
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<for loop>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// for(let i=1;i<=a;i++){
//     if(i%2!=0){
//         console.log(i)
//     }
// }
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<while loop>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// let i=1
// while(i<=a){
//     if(i%2!=0){
//         console.log(i)
//     }
//     i++
// }

// Print the sum of all even numbers in a range from a to b. (Including a,b)
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<for loop>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// let sum=0;
// for(let i=a;i<=b;i++){
// if(i%2==0){
//     sum = sum+i;
// }
// }
// console.log(sum)
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< while loop>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// let sum=0;
// let i=a
// while(i<=b){
// if(i%2==0){
//     sum = sum+i;
// }
// i++
// }
// console.log(sum)

// Write a program to read the first and last digit of a number
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< for loop>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// for(let i=a;i>0;i=i){
// let n=i%10;
// console.log(n);
// }
// i=Math.floor(i/10)
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< while loop>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// let ld = a % 10;
// let fd = a;
// while (fd >= 10){
//     fd = Math.floor(fd / 10);
// }
// console.log(fd)
// console.log(ld)

// Check whether the given number is an armstrong number or not.
// let sum = 0;
// let ams = a;
// while (ams > 0) {
//    let remainder =ams % 10;
//    sum += remainder * remainder * remainder;
//    ams = Math.floor(ams / 10);
// }
// if (sum == a) {
//     console.log(`this is an Armstrong number`);
// }
// else {
//     console.log(`this is not an Armstrong number.`);
// }

// Take two numbers and find product of all numbers between them that satisfy following condition (inclusive range):
// Condition 1 - Second last digit of number is 4
// Condition 2 - Numbers should be even
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<for loop>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// let product=1;
// 	for(let i=a;i<=b;i++)
// 	{
// 	  let checking = Math.floor(i/10);
// 		if( i%2 == 0 && checking%10==4)
// 		{
// 			product=product*i;
// 		}

// 	}
// 	console.log(product)
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<while loop>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// let product=1;
// let i=a;
// while(i<=b)
// {
//   let checking = Math.floor(i/10);
// 	if( i%2 == 0 && checking%10==4)
// 	{
// 		product=product*i;
// 	}
// 	i++
// }
// console.log(product)

// Take a number and return all the even digits of the number.;
// let r=0;
// while(a>0){
//    r=(r*10)+(a%10);
//    a=Math.floor(a/10);
// }


// for (let i = r; i > 0; i = i) {
//   r = i % 10;
//   if (r % 2 == 0) {
//     console.log(r);
//   }
//   i = Math.floor(i / 10);
// }


// Check whether the given number is equal to its reverse number or not
// let rem, temp, res = 0;
// 		temp = a;
// 		while(a>0)
// 		{
// 			rem = a%10;
// 			a = Math.floor(a/10);
// 			res = res*10+rem;
// 		}
// 		if(res==temp)
// 		{
// 			console.log("the given number is equal to its reverse number");
// 		}
// 		else
// 		{
// 			console.log("the given number is not equal to its reverse numbere");
// 		}
