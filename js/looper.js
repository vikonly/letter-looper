/*global console, prompt*/
var display = "";

while (display.length < 1) {
    display = prompt("Enter a letter");
}
var i;
var k;

for (i = 0; i < 10; i = i + 1) {
    for (k = 0; k <= i; k = k + 1) {
        document.write(display);
    }
    document.write("<br>");
}
