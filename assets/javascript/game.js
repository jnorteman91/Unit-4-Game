$(document).ready(function(){
    var Random = Math.floor(Math.random() * 120 + 19)
    $("#number").text(Random);

var genNumbers = []
var combined = 0;
var win = 0;
var loss = 0;
    
$("#winCount").text(win);
$("#lossCount").text(loss);

function RandomNumbers(){
    for (var i = 0; i < 4; i++) {
        var num = Math.floor(Math.random() * 11 +1);
    genNumbers.push(num);
    }
}

RandomNumbers();


})