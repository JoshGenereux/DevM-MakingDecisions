var lovesCode = true;
if(lovesCode){
    console.log("I love to code!")
} else {
    console.log("coding has its challenges.")
}

// For problems 2-3 use the following lines of code:
var amysAge = 29
var brittanisAge = 34
var amysBirthYear = 1991
var brittanisBirthYear = 1986

////////// PROBLEM 2 //////////


let name;
if(amysAge > brittanisAge){
    name = "Amy"
    console.log(`${name} is older.`)
} else if(brittanisAge > amysAge){
    name = "Brittani"
    console.log(`${name} is older.`);
} else {
    console.log("Brittani and Amy are the same age.")
}

////////// PROBLEM 3 //////////



if(amysBirthYear === brittanisBirthYear){
    console.log("Amy and Brittani were born in the same year")
} else {
    console.log("Amy and Brittani were not born in the same year")
}

////////// PROBLEM 4 //////////


let temperature = 55
let rain = true

//CODE HERE

if(rain){
    if(temperature > 80){
        console.log("Wear a t-shirt and take an umbrella")
    } else if(temperature > 60 && temperature <= 80){
        console.log("Wear a rain jacket")
    } else if(temperature <= 60){
        console.log("Wear a jacket and bring an umbrella")
    }
} else {
    if(temperature > 80) {
        console.log("Wear a t-shirt and shorts.")
    } else if(temperature > 60 && temperature <= 80){
        console.log("Wear a t-shirt and jeans.")
    } else if(temperature <60){
        console.log("Wear a hoodie and jeans.")
    }
}

////////// PROBLEM 5 //////////


for(let i = 0; i < 10; i++){
    console.log("hello")
}

////////// PROBLEM 6 //////////


for(let i = 1; i <= 10; i++){
    console.log(i)
}

////////// PROBLEM 7 //////////


//CODE HERE

for(let i = 10; i >=0; i--){
    console.log(i);
}

////////// PROBLEM 8 //////////

let score = 0
let passingScore = 7

//CODE HERE

while(score < passingScore){
    console.log("Your score is not high enough")
    score++;
}

////////// INTERMEDIATE PROBLEMS //////////

////////// PROBLEM 9 //////////


//CODE HERE

let changeMyMind = true;

if(changeMyMind){
    changeMyMind = false;
} else {
    changeMyMind = true;
}

////////// PROBLEM 10 //////////

//CODE HERE

console.log(!changeMyMind);

////////// ADVANCED PROBLEMS //////////

////////// PROBLEM 11 //////////

//CODE HERE

let z = 5

while(z > 0){
    for(let i = z; i > 0; i--){
        console.log(i);
    }
    z--;
}