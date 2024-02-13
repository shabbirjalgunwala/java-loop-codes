//Program for Calculating the Sum of All Digits Given in Number
//Developed by : Shabbir     Dated : 11.02.2024

let number , sum = 0 , r  ;

//Taking Number as Input to Check
number = parseInt(prompt("Enter the Number to Check :"));

//Loop for Calculating the Sum of all Digits
while(number > 0)
{
    r = parseInt(number % 10 );

    sum = sum + r;

    number = parseInt(number / 10);

}

document.write("The Sum of All Digits = " + sum);
console.log("The Sum of All Digits = " + sum);