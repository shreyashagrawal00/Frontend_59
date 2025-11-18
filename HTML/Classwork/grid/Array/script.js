//push and pop ---
// const arr=[1,2,3,4,5];
// arr.push(67);
// const lastValue=arr.pop();
// console.log(arr);
// console.log(lastValue);

//shift and unshift ---
// const arr=[1,2,3,4,5];
// const lastValue=arr.shift(0);
// console.log(arr);
// console.log(lastValue);

//merge two array ---
// const arr = [1,2,4,5];
// const arr2 = [6,6,7,8];
// const newArr=[];
// for(let i=0;i<arr.length;i++){
//     newArr.push(arr[i]);
// }
// for(let i=0;i<arr2.length;i++){
//     newArr.push(arr2[i]);
// }

//method 
// const newArr=arr.concat(arr2);
// console.log(newArr);

//index of array ---
// const arr=[1,2,5,7,4,5,10];
// const index5=arr.indexOf(5);
// const lastindex5= arr.lastIndexOf(5);
// console.log(index5,lastindex5);

// function calc(calculationFn,num1,num2){
//     console.log(calculationFn(num1,num2));
// }
// function sum(num1,num2){
//     return num1+num2;
// }
// function sub(num1,num2){
//     return num1-num2;
// }
// calc(sum,2,4);

// Arrays Methods---
//Find number ---
// const arr=[1,2,3,4,5,66,7,99];
// const divisible=function(num){
//     return num%33===0;
// }
// const ans=arr.find(divisible);
// console.log(ans);


// const arr=[1,2,3,4,5,66,7,99];
// const ans=arr.find((num)=> {
//     return num%33===0;
// });
// console.log(ans);

//Find index of number ---
// const arr=[1,2,3,4,5,66,7,99];
// const ans=arr.findIndex((num)=> {
//     return num%33===0;
// });
// console.log(ans);

//Filter---(make array of all nos divisible by 33)
// const arr=[1,2,3,4,5,66,7,99];
// const ans=arr.filter((num)=> {
//     return num%33===0;
// });
// console.log(ans);

//(double all nos in an array)---
// const arr=[1,2,3,4,5,66,7,99];
// const ans=arr.map((num)=> {
//     return num*2;
// });
// console.log(ans);

// const arr=[1,2,3,4,5,66,7,99];
// const ans=arr.map((num,index)=> {
//     return num*index;
// });
// console.log(ans);

