/*    JavaScript 6th Edition
 *    Chapter 2
 *    Chapter case

 *    Fan Trick Fine Art Photography
 *    Variables and functions
 *    Author: Cedric L Mulumba
 *    Date:  10/02/16 

 *    Filename: ft.js
 */

  
 
 // global variables
var photographerCost = 0;
var totalCost = 0,
     localVar = 0;
 var memoryBook = false;
var reproductionRights = false;


/* Step 2 Insert the CAlStaff Function page 115*/
// calculates all costs based on staff and adds to total cost

function calcStaff() {
	
/*step 3*/	
	var num = document.getElementById("photognum");
    var hrs = document.getElementById("photoghrs");
/*step 2 page 130*/	
	var distance = document.getElementById("distance");
/*step 4*/
	totalCost -= photographerCost;
/*step 5*/	
/*step 3 page 130*/
	photographerCost = num.value * 100 * hrs.value + distance.value * num.value;
/*Step 6*/	
    totalCost += photographerCost;
/*Step 7*/	
    document.getElementById("estimate").innerHTML = "$" + totalCost;
	
}

/*step 2 page 120*/
// adds/subtracts cost of memory book from total cost
function toggleMembook() {
// step 3
	(document.getElementById("membook").checked === false) ?
                         totalCost -= 250 : totalCost += 250;
// step 4						 
	 document.getElementById("estimate").innerHTML = "$" + totalCost;
}

//step 5 page 121
// adds/subtracts cost of reproduction rights from total cost
function toggleRights() {
// step 6	
	(document.getElementById("reprodrights").checked === false) ?
totalCost -= 1250 : totalCost += 1250;
// step 7 
     document.getElementById("estimate").innerHTML = "$" + totalCost;
}



 /* step 9 chap 2 lab*/
// sets all form field values to defaults

 function resetForm() {
 document.getElementById("photognum").value = 1;
 document.getElementById("photoghrs").value = 2;
 document.getElementById("membook").checked = memoryBook;
document.getElementById("reprodrights").checked = reproductionRights;
 document.getElementById("distance").value = 0;
 /*Step 8 page 116*/
 calcStaff();
 createEventListeners();

 } // end reset form
 // resets form when page is reloaded
 
 
 // creates event listeners step 9 page 116
function createEventListeners() {
// step 10	
	document.getElementById("photognum").
    addEventListener("change", calcStaff, false);
    document.getElementById("photoghrs").
    addEventListener("change", calcStaff, false);
// step 8 page 121	
	document.getElementById("membook").
    addEventListener("change", toggleMembook, false);
    document.getElementById("reprodrights").
    addEventListener("change", toggleRights, false);
// step 4 page 130	
	document.getElementById("distance").
    addEventListener("change", calcStaff, false);
}
 
 
 
 
 
 /*step 2 page 82 add eventListener*/
 // resets form when page is reloaded
document.addEventListener("load", resetForm, false);
 
 console.log("In the resetFormform localVar = " + localVar);
 console.log("In the resetForm photographerCost = " + photographerCost);
  console.log("In the resetForm photographerCost = " + totalCost);
 
  

// resets form when page is reloaded


document.addEventListener("DOMContentLoaded", resetForm, false);