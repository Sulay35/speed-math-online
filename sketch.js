//TODO
// - Use proportion to get more addition than divisions 


let display = document.querySelector("#calcul_display")

let awnsers = [
    document.querySelector("#a1"),
    document.querySelector("#a2"),
    document.querySelector("#a3"),
    document.querySelector("#a4")
]

let min = 5
let max = 10

let gameover = false;

let result = 0;

function newSet() {
    let a = randInt(min, max)
    let b = randInt(min, max)
    let resultSet = [];

    if (Math.random() <= 0.8) { // Addition
        ope = 0
        result = a + b;
        display.textContent = a + " + " + b + " = ? ";
    } else { // Multiplication 
        ope = 1;
        result = a * b;
        display.textContent = a + " * " + b + " = ? ";
    }


    resultSet = [
        result,
        result + Math.floor(Math.random() * 5),
        result + 10,
        result + Math.floor(Math.random() * (-2)),
    ]

    resultSet = mix(resultSet);

    for (let i = 0; i < awnsers.length; i++) {
        awnsers[i].textContent = resultSet[i];
    }


    console.log(result);

}

let score = 0;
for (let i = 0; i < awnsers.length; i++) {
    awnsers[i].addEventListener("click", () => {
        response = awnsers[i].textContent;
        if(respond(response)){
            score++;
            document.querySelector("#score").textContent = score;
            console.log("score : ", score);
            newSet()
        }else{
            gameover = true;
            awnsers[i].style.backgroundColor = "#F00";
            //awnsers[i].style.backgroundColor = "";
        }
    })
}





function respond(response) {
    if (response != result) {
        return false;
    } else {
        return true
    }
}

newSet();

// Generate a random number in [a,b[
function randInt(a, b) {
    return Math.floor(Math.random() * min + (max - min))
}

function mix(arr) {
    let mixedArr = [];
    let tmp = [...arr] // Deep clone 

    for (i = 0; i < arr.length; i++) {
        let rdmIndex = Math.floor(Math.random() * tmp.length);
        mixedArr.push(tmp[rdmIndex]);

        tmp.splice(rdmIndex, 1)
    }
    return mixedArr;

}