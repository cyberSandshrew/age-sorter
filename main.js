//Programming Challenge
            //On Your Own:    ch. 5
            //Description:
			//Create a html web page that allows the coach of a town’s soccer league to 
			//enter the ages of all the children who have registered for soccer this year. 
			//Children between the ages of 4 and 15 are allowed to sign up for soccer but 
			//there can be a lot of variation in the number of children who sign up each year and their ages. 
			//Eventually the children will be placed into one of three leagues: Junior, Intermediate, and Senior. 
			//The Junior League is for children ages 4–7, the Junior League is for children ages 8–11, 
			//and the Senior League is for children ages 12–15. 
			//The coach wants to know how many children will be in each group. 
			//Your program should allow the coach to enter the ages of as many children as desired and should keep track of how many are in 
			//each group. The final display should tell the coach how many children signed up and how many will be in each group. 
			//Save your page as soccer.html and be sure to include an appropriate page title.
                        
            //Created by: Jerry French  
						//csc240
            //Created on: 3/30/2022,
			
			//print total
 
 let jun = 0;
 let inter = 0;
 let sen = 0;
 let Tot = 0;
 
 function league(){
	var Age = parseInt(document.getElementById("age").value);
	
	if( Age > 15 || Age < 4 )
	{
		alert("Age Must Be Between 4 And 15");
	}
   else if(Age >=4 && Age <= 7)
   {
		jun = jun + 1;
		document.getElementById("junior").innerHTML = jun;
		
		Tot = Tot + 1
		document.getElementById("total").innerHTML = Tot;
   
   }
   else if(Age >=8 && Age <= 11)
   {
		inter = inter + 1;
		document.getElementById("intermediate").innerHTML = inter;
		
		Tot = Tot + 1
		document.getElementById("total").innerHTML = Tot;
   
   }
	else if(Age >=12 && Age <= 15)
   {
		sen = sen + 1;
		document.getElementById("senior").innerHTML = sen;
		
		Tot = Tot + 1
		document.getElementById("total").innerHTML = Tot;
   
   }
}