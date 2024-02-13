//Program for Printing the Fabonaci Series Upto the Level Number
//developed By : Shabbir        Dated : 11.02.2024

let level , i , a = 0 , b = 1 , c = 0 ;

//Taking Level Number as Input Print
level = parseInt(prompt("Enter the Level Number :"));

//Printing the Starting Numbers 0 and 1
document.write("Fabonaci Series Upto the Given Level Number is Shown Below :<br>");
document.write(a + "<br>" +b);
document.write("<br>-----");
console.log(a);
console.log(b);

//loop for Calculating Addition and Shifting the Values of A and B
for (i = 1 ; i <= level ; i++)
{
    c = a + b;

    document.write("<br>" +c);
    console.log(c);

    a = b;
    
    b = c;
}