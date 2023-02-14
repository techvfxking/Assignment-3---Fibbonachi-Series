let seriesCount = 0
try{
   seriesCount = parseInt(prompt("Enter a number"));
}
catch(error)
{
    document.write("Error - Please enter only number value");
}
let firstTerm = 0, secondTerm = 1, nextTerm;
document.write("Fibonacci Series: <br>");

for (let i = 1; i <= seriesCount; i++) {
    document.write(firstTerm + "  ");
    nextTerm = firstTerm + secondTerm;
    firstTerm = secondTerm;
    secondTerm = nextTerm;
}