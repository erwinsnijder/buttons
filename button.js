var test = document.getElementById('1');
test.onclick = function() {
    document.getElementById('output').innerHTML += "1"
}
var test = document.getElementById('2');
test.onclick = function() {
    document.getElementById('output').innerHTML += "2"
}
var test = document.getElementById('3');
test.onclick = function() {
    document.getElementById('output').innerHTML += "3"
}
var test = document.getElementById('4');
test.onclick = function() {
    document.getElementById('output').innerHTML += "4"
}
var test = document.getElementById('5');
test.onclick = function() {
    document.getElementById('output').innerHTML += "5"
}
var test = document.getElementById('6');
test.onclick = function() {
    document.getElementById('output').innerHTML += "6"
}
var test = document.getElementById('7');
test.onclick = function() {
    document.getElementById('output').innerHTML += "7"
}
var test = document.getElementById('8');
test.onclick = function() {
    document.getElementById('output').innerHTML += "8"
}
var test = document.getElementById('9');
test.onclick = function() {
    document.getElementById('output').innerHTML += "9"
}
var test = document.getElementById('0');
test.onclick = function() {
    document.getElementById('output').innerHTML += "0"
}
var test = document.getElementById('+');
test.onclick = function() {
    document.getElementById('output').innerHTML += "+"

}
var test = document.getElementById('-');
test.onclick = function() {
    document.getElementById('output').innerHTML += "-"

}
var test = document.getElementById('ce');
test.onclick = function() {
    document.getElementById('output').innerHTML = " "

}
var test = document.getElementById('=');
test.onclick = function() {
   var x = eval(document.getElementById('output').innerHTML);
   document.getElementById('output').innerHTML = x;
   console.log(x);

}