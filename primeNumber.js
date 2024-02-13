//Program For Checking Given Number is Prime or Not 
//Developed by : Shabbir     Dated : 11.02.2024

let prime , i , flag = 1 ;

//Taking Number as Input to Check
prime = parseInt(prompt("Enter the Number to Check :"));

//1st If-Else for Checking Number is Prime or Not
if(prime == 1)
{
    flag = 1;
}
else
{
    for(i = 2 ; i < prime ; i++)
    {
        if(prime % i == 0)
        {
            flag = 0;
            break;
        }
    }
}

//2nd If-Else for Printing the result on Webpage and Console Window
if(flag == 1)
{
    //If Condition become True this Block of Statements will be Executed
    document.write("The Given Number is Prime Number");
    console.log("The Given Number is Prime Number");
}
else
{
    //Else this Block of Statements will be Executed
    document.write("The Given Number is Not Prime Number");
    console.log("The Given Number is Not Prime Number");
}