//Program for Checking the Given Number is Armstrong Number or Not
//Developed by : Shabbir     Dated : 11.02.2024

let number , sum = 0 , r  , temp ;

//Taking Number as Input to Check
number = parseInt(prompt("Enter the Number to Check :"));

//Giving Copy of Number to temp Variable
temp = number ;

//Loop for Checking the Number is Armstrong or Not
while(number > 0)
{
    r = parseInt(number % 10 );

    sum = sum + (r * r * r);

    number = parseInt(number / 10);

}

if(sum == temp)
{
    //If Condition become True this Block of Statements will be Executed
    document.write("The Given Number is an Armstrong Number");
    console.log("The Given Number is an Armstrong Number");
}
else
{
   //Else this Block of Statements will be Executed
    document.write("The Given Number is not an Armstrong Number");
    console.log("The Given Number is not an Armstrong Number");
}