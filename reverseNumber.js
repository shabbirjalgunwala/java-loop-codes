//Program for Printing the Reverse Number of a Given Number
//Developed By : shabbir   Dated : 11.02.2024

let number , reverse ;

//Taking Number As Input to Reverse It 
number = parseInt(prompt("Enter the Number to Reverse It :"));

document.write("The Reverse Number = ");

//loop for Seperating the last Digit and Deleting that Digit from Number
while(number > 0)
{
    reverse = parseInt(number % 10);

    document.write(reverse);
    console.log(reverse);

    number = parseInt(number / 10 );
}