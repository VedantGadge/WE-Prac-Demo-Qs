const readline = require('readline');
const { add, subtract, multiply, divide, mod } = require('./operations');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})


rl.question('Enter first number a : ',(a)=>{
    rl.question('Enter second number b : ',(b)=>{
        function askOperation() { //this fn keeps asking the user until we exit(Ctrl+c)
        console.log('Enter 1 for addition')
        console.log('Enter 2 for subtraction')
        console.log('Enter 3 for multiply')
        console.log('Enter 4 for division')
        console.log('Enter 5 for mod')
        console.log('Enter 6 for exit')
        rl.question('Enter choice : ',(c)=>{
           const numA = parseFloat(a)
           const numB = parseFloat(b)
           const choice = parseInt(c)
            switch(choice){
                case 1:
                    console.log(`Addition of ${a} and ${b} is ${add(numA,numB)}`)
                    break;
                case 2:
                    console.log(`Subtraction of ${a} and ${b} is ${subtract(numA,numB)}`)
                    break;
                case 3:
                    console.log(`Multiplication of ${a} and ${b} is ${multiply(numA,numB)}`)
                        break;
                case 4:
                    console.log(`Disivision of ${a} and ${b} is ${divide(numA,numB)}`)
                        break;
                case 5:
                    console.log(`Mod of ${a} and ${b} is ${mod(numA,numB)}`)
                        break;
                case 6:
                
                default:
                    console.log("Please enter a valid choice!!")
            }
            askOperation();
        }) 
    }
    askOperation();
    })
})

