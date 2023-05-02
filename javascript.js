
var gapStudentsThatPursueCollege = "90 percent"; 
var averageGapCount = 50000;
//prints the value stored in averageGapCount in a string through the console
console.log ("According to the Gap Year Association, on average " + averageGapCount + " students take a gap year after graduating high school.")

var gofundmeGoal = 3400;
var gofundmeAmount = 1549;
var gofundmeDifference = (gofundmeGoal - gofundmeAmount);
//function that takes the gofundme total and compares it to the gofundme goal and prints out corresponding messages 
if (gofundmeAmount<gofundmeGoal){
    console.log ("We need " + gofundmeDifference + " more dollars to reach our goal in helping Tamara learn more about sustainable development!");
} else if (gofundmeAmount>gofundmeGoal){
    console.log("We have exceeded our fundraising goal, thank you so much for your support!");
} else{
    console.log("We have hit our goal! Thank you SO much.");
}

//accepts and returns data --> logic operator 
//string variable 
// use dom for hmtl

var form="complete"
var userForm="noncomplete"

var payment="10"
var userPayment="5"
//this function finds the difference between the amount due and the amount provided by the user
function placeingOrder(userPayment, payment){
    let due=(payment - userPayment)
    return due
}
//this code catches the returned data from the function above and displays it in a string below
var amountDue = placeingOrder(5, 10); 
console.log("The remaining balance to place this order is " + amountDue + " dollars.");

if(userForm==form && amountDue==0){
    console.log("Thank you so much for placing an order. All revenue will be used to fund baker's participation in EF Gap Year's service learning program.");
} else if (userForm!=form && amountDue==0){
     console.log("Sorry, your request was unsuccessful. You have not completed an order form and therefore cannot move forward. To receive baked goods an order form must be completed, I look forward to receiving your dessert request in the near future!");
} else if (userForm==form && amountDue>0){
     console.log("Sorry, your request was unsuccessful. You have not submitted a full payment to receive your baked good(s). Please submit the required payment to have your order completed, I look forward to providing my services to you in the near future!");
} else {
    console.log("Sorry, none of the required content was provided to fulfill your order.")
}
//defined variables for the decision structure, and function above  
var form="complete"
var userForm="complete"

var payment="10"
var userPayment="5"

//accessing DOM

// reassigning variable names to message and creating a function to get content to appear on the html page through DOM
var message;
function homeheader(){
         if (gofundmeAmount<gofundmeGoal){
        return "We need " + gofundmeDifference + " more dollars to reach our goal in helping Tamara learn more about sustainable development!";
    } else if (gofundmeAmount>gofundmeGoal){
        return "We have exceeded our fundraising goal, thank you so much for your support!";
    } else{
        return "We have hit our goal! Thank you SO much.";
    }
}

var headerContent = homeheader();
var doc = document; 
var htmlheader= document.getElementById('gofundmeHeader')
htmlheader.innerHTML = homeheader();

/*
var paragraph = document.getElementById("my-paragraph");

// Calculate a result
var result = 2 + 2;

// Update the content of the paragraph with the result
paragraph.innerHTML = "The result is " + result;
*/

