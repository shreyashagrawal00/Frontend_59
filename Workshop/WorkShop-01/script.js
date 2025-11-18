// var name="Adi";
// var name="shreyash";
// console.log(name);

// let name="Adi";
// let name="shreyash";
// console.log(name);

// const isOdd=(num)=>{if(num%2==0){return true} else{return false}};
// console.log(isOdd(5));

// const isOdd=(num)=>num%2===1;
// console.log(isOdd(6)); 

// const greet=(name)=>{return"Hello"+name+"!"};
// console.log(greet("gauri"));

// const add=(a,b)=>a+b;
// console.log(add(4,5));

// const isEven=(num)=>num%2==0;
// console.log(isEven(5));

// const numbers=[1,2,3,6,4,8];
// const squares=numbers.map(num=>num*num);
// console.log(squares);

// const name="shreyash";
// const age=19;
// console.log("Hello,my name is "+name+" and I am "+ age+" years old");
// console.log(`Hello,my name is ${name} and I am ${age} years old, i was born in the year ${2025-age}`);

// const user="shreyash";
// const points=10;
// console.log(`Hey ${user} you have ${points} points!`);

// const person={
//     firstName:"shreyash",
//     lastName:"Agarwal",
//     age:21,
//     introduce: function(){
//         console.log(`Hye my name is ${this.firstName} ${this.lastName}
// and I am ${this.age} years old` );
//     }
// }
// Dot Notation ----
// console.log(person.firstName);
// console.log(person.lastName);
// person.introduce();
//Bracket Notation ----
// const hisAge="age";
// console.log(person[hisAge]);
// console.log(person[lastName]);
// person.introduce();

// const person={
//     firstName:"shreyash",
//     lastName:"Agarwal",
//     age:21,
    
// };
// person.birthYear =2025-person.age;
// person.birth=function(){
//     console.log(`Hey my birthyear is ${this.birthYear}`);
// }
// console.log(person);

// const fruits =["apple","banana","banana","mango"];
// // const firstFruit=fruits[0];
// // const secondFruit=fruits[3];
// // const [firstFruit,secondFruit]=fruits; //apple,banana
// const [firstFruit, ,secondFruit]=fruits; //apple,kiwi

// const fruits =["apple","banana","kiwi","mango"];
// const [firstFruit, , , thirdFruit]=fruits;
// console.log([firstFruit, , , thirdFruit]);

//Rest parameters
// const arr=[1,2,3,4,5,6,7,8,9];
// const[first,second,...rest]=arr; 
// console.log(second);  
// console.log(rest);  
// console.log(arr);                              

// const arr=[1,2,3,4,5,6,7,8,9];
// const arr2=[10,11,12,13];
// // const result =arr.concat(arr2);
// const result = [...arr, ...arr2];
// console.log(result);

// const name="shreyash";
// const age=19;
// const person ={
//     name: name,
//     age: age,
// };

//Asynchronous Javascript 
// console.log(720);
// console.log(930);
// console.log(40);
// setTimeout(() => console.log("hello"),3000);
// console.log(50);

// let count=1;
// const timer=setInterval(()=>{
//     console.log("Hello " + count);
//     count++;
//     if(count>5) clearInterval(timer)},1000);

let count = 10;
const timer = setInterval(()=> {
    console.log(count);
    count--;
    if(count<0) clearInterval(timer);
},1000);
setTimeout(()=> console.log("Bomb"),12000);