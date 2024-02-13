//Program for Calculating the Factorial of a Given Number
//Developed By : Shabbir     Dated - 11.02.2024

let no , fact = 1 , i ;

//Taking Number as Input From User
no=parseInt(prompt("Enter the Number for Factorial"));

//Loop for Calculating Factorial
for(i = no ; i >= 1 ; i--)
{
    fact = fact * i;
}

//Printing the Values Of Fact on Webpage And Console Window
document.write("The Factorial Of Given Number = " +fact );
console.log("Factorial = " +fact);