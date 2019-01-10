/* JavaScript 6th Edition
   Chapter 3
   Chapter case
   Tipton Turbines
   Variables and functions
   Author: Cedric L Mulumba
   Date:10/03/16
   Filename: tt.js
 */
 
 
 
 // step 6 & 7 page 153
 
 // global variables
var daysOfWeek = ["Sunday", "Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday"];
var opponents =
 ["Lightning", "Combines", "Combines", "Combines",
 "Lightning", "Lightning", "Lightning", "Lightning",
 "Barn Raisers", "Barn Raisers", "Barn Raisers",
 "Sodbusters", "Sodbusters", "Sodbusters",
 "Sodbusters", "(off)", "River Riders",
 "River Riders", "River Riders", "Big Dippers",
 "Big Dippers", "Big Dippers", "(off)",
 "Sodbusters", "Sodbusters", "Sodbusters",
 "Combines", "Combines", "Combines", "(off)",
 "(off)"];
 
 // step 8
 
 var gameLocation = ["away", "away", "away", "away", "home",
                     "home","home", "home", "home", "home", "home", "away",
                     "away", "away", "away", "", "away", "away", "away",
                     "away", "away", "away", "", "home", "home", "home",
                     "home", "home", "home", "", ""];
	
// step 2 page 167	
					 1 // function to place daysOfWeek values in header row cells
 function addColumnHeaders() {
	 
	 // step 3
       var i = 0;
	   
	 // step 4
      while (i < 7) {
	// step 5	  
		  document.getElementsByTagName("th")[i].innerHTML = 
		  daysOfWeek[i];
	//step 6	  
	      i++;
	  }// end loop
	   
 }// end addColumnHeaders
 
 
 /*
 // step 7
 // runs addColumnHeaders() function when page loads
window.addEventListener("load", addColumnHeaders, false);
 */
 
 
 // step 2 page 170
 // function to place day of month value in first p element
 // within each table data cell that has an id
 function addCalendarDates() {

 //step 3
              var i = 1;
              var paragraphs = "";
 //step 4
                  do {
					  //step 5
                       var tableCell = document.getElementById("08-" + i);
					   //step 6
					   paragraphs = tableCell.getElementsByTagName("p");
					   //step 7
					   paragraphs[0].innerHTML = i;
					   //step 8
					   i++;
					   }
					   // step9
					   while (i <= 31);
 }				   


// step 2 page 176
// function to place opponents and gameLocation values  in
// second p element within each table data cell that has an id
 function addGameInfo() {
// step 3
var paragraphs = "";
//step 4
for (var i = 0; i < 31; i++) {
	
	//step 5
	var date = i + 1;
//step 6
   var tableCell = document.getElementById("08-" + date);
//step 7
   paragraphs = tableCell.getElementsByTagName("p");
   
   //step 2 page 178
 /*  if (gameLocation[i] === "away") {
// step 3
paragraphs[1].innerHTML = "@ ";
 }//end if
 
 //step 6 page 183
if (gameLocation[i] === "home") {
paragraphs[1].innerHTML = "vs ";
}//end if*/

// step 3 page 187
/*if (gameLocation[i] === "away") {
paragraphs[1].innerHTML = "@ ";
}
// step 4 page 187

else {
	//step 3 page 189
if (gameLocation[i] === "home") {
 paragraphs[1].innerHTML = "vs ";
 }
}
*/

//step 3 page 196
switch (gameLocation[i]) {
	
	//step 4
	case "away":
paragraphs[1].innerHTML = "@ ";
break;
//step 5
case "home":
paragraphs[1].innerHTML = "vs ";
break;

}

//step 8
//step 4 page 178
   paragraphs[1].innerHTML += opponents[i];
}//end loop

 } //end function




		
//step 10
// function to populate calendar
 function setUpPage() {
 addColumnHeaders();
 addCalendarDates();
 //step 9 page 177
 addGameInfo()
 }
 //step 11

 // runs setUpPage() function when page loads
 // step 3 page 192
if (window.addEventListener) {
window.addEventListener("load", setUpPage, false);
}
 // step 5 page 192
 else if (window.attachEvent) {
window.attachEvent("onload", setUpPage);
 }
 
 
 
 