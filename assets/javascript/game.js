$(document).ready(function(){
    var Random = Math.floor(Math.random() * 120 + 19)
    console.log(Random);
    $("#number").text(Random);

var genNumbers = [];
var combined = 0;
var win = 0;
var loss = 0;
    
$("#winCount").text(win);
$("#lossCount").text(loss);

function fourRandomNumbers(){
    for (var i = 0; i < 4; i++) {
        var num = Math.floor(Math.random() * 11 +1);
        console.log(num)
        genNumbers.push(num);
    }
    console.log(genNumbers)
}

fourRandomNumbers();

function reset(){
    Random = Math.floor(Math.random() * 120 + 19)
    $("#number").text(Random);
    genNumbers = [];
    fourRandomNumbers();
    combined = 0;
    $("#total").text(combined);
}

function winner(){
    alert("You've Won!");
        win++;
        $("#winCount").text(win);
        reset();
}

function loser(){
    alert("You've Lost!");
        loss++;
        $("#lossCount").text(loss);
        reset();
}

    $("#j1").on("click", function(){
        combined = combined + genNumbers[0];
        $("#total").text(combined);

            if (combined == Random){
                winner();
            }
            else if(combined > Random){
                loser();
            }
    })

    $("#j2").on("click", function(){
        combined = combined + genNumbers[1];
        $("#total").text(combined);

            if (combined == Random){
                winner();
            }
            else if(combined > Random){
                loser();
            }
    })

    $("#j3").on("click", function(){
        combined = combined + genNumbers[2];
        $("#total").text(combined);

            if (combined == Random){
                winner();
            }
            else if(combined > Random){
                loser();
            }
    })

    $("#j4").on("click", function(){
        combined = combined + genNumbers[3];
        $("#total").text(combined);

            if (combined == Random){
                winner();
            }
            else if(combined > Random){
                loser();
            }
    });

})