/* The script is placed inside an immediately invoked function expression
   which helps protect the scope of variables */

//PART ONE: GENERATE A RANDOM ROOM RATE. Write a function called genRand() that has no paremeters that will return a room rate between 100 and 400. HINT: You should hit a number within this range within 10 tries.
  
//generates 100-400 
function genRand()
{
var randNum = (Math.random() * 300) + 100;
    
return Math.floor(randNum);
}

  // PART TWO: CALCULATE AND RETURN THE EXPIRY DETAILS FOR THE OFFER. Write a function called offerExpires that has one parameter a Date object. The function should return a string in the format "OFFER EXPIRES NEXT "WeekDay" (Date Month Year)". The date should be one week from today's date
function offerExpire(date)
{
    var day;
    switch(date.getDay())
    {
        case 0: day = "Sunday"; break;
        case 1: day = "Monday"; break;
        case 2: day = "Tuesday"; break;
        case 3: day = "Wednesday"; break;
        case 4: day = "Thursday"; break;
        case 5: day = "Friday"; break;
        case 6: day = "Saturday"; break;
    }
    
    return "OFFER EXPIRES NEXT " + day + " (" + date.getDate() + " " + date.getMonth() + " " + date.getFullYear() + ")";
}
  
//PART THREE: CALL THE FUNCTIONS AND WRITE INFO TO WEBPAGE

//Call getRand() function to get random room rate and write it to the special rate section on the webpage


document.getElementById("specialRate").innerHTML = genRand();

//create a new Date object
var date = new Date();

//Call the function passing the date object to it and write it to the offer ends section on the webpage

document.getElementById("offerEnds").innerHTML = offerExpire(date);


