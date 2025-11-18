let count = 10;
const timer = setInterval(()=> {
    console.log(count);
    count--;
    if(count<0) clearInterval(timer);
},1000);
setTimeout(()=> console.log("Bomb"),12000);