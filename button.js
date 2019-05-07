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
var test = document.getElementById('+');
test.onclick = function() {
    document.getElementById('output').innerHTML += "+"

}
var test = document.getElementById('=');
test.onclick = function() {
   var x = eval(document.getElementById('output').innerHTML);
   document.getElementById('output').innerHTML = x;
   console.log(x);

}