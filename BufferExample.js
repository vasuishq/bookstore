var b=new Buffer(300);
b.write("NodeJS is a light-weight platform...");
console.log("Data in buffer:"+b.toString());
console.log("5-25 position :"+b.toString('utf8',5,25));
console.log();
for(i=0;i<25;i++)

console.log(String.fromCharCode(b[i]));