const fs = require("node:fs");

console.log(1);
const text = fs.readFileSync('./file.txt', 'utf-8')
console.log(text);

console.log(2);

fs.readFile('./file.txt', 'utf-8' ,function(error,data){ //error first call back
    if(error){
        console.log(error);
    } else {
        console.log(data);
    }
})

console.log(3);

fs.writeFileSync('./hello.txt',"\t\t\t\t\t  \n I am here",{flag:"a"})

fs.writeFile('./greet.txt', " ,new file2", {flag:"a"}, function(error, data){
    if(error){
        console.log(error)
    } else {
        console.log(data)
    }
})


// fs.unlink('./xyz.txt', function(error){
//     if(error){
//         console.log(error);
//     } else {
//         console.log("file deleted !!");
//     }
// })

fs.rename('./xyz.txt', './abc.txt', function(error){
    if(error){
        console.log(error);
    } else {
        console.log("file renamed !!");
    }
})
