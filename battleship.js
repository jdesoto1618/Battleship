var game = true;
var counter = 0;
var torpedoes = 1;
var ship1Full = []
var ship1Accept =           [0,1,2,3,4,5,10,11,12,13,14,15,20,21,22,23,24,25,30,31,32,33,34,35,40,41,42,43,44,45,50,51,52,53,54,55,60,61,62,63,64,  65,70,71,72,73,74,75,80,81,82,83,84,85,90,91,92,93,94,95]
  var ship2Accept = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69]
  var ship3Accept = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79]
  var ship4Accept = [0,1,2,3,4,5,6,7,8,10,11,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,30,31,32,33,34,35,36,37,38,40,41,42,43,44,45,46,47,48,50,51,52,53,54,55,56,57,58,60,61,62,63,64,65,66,67,68,70,71,72,73,74,75,76,77,78,80,81,82,83,84,85,86,87,88,90,91,92,93,94,95,96,97,98]
// This creates 5 random points on the board. Will include a loop (or something of the sort) to ensure that there are no duplicates.
var ship1 = ship1Accept[(Math.floor(Math.random()*ship1Accept.length))]
var ship2 = ship2Accept[(Math.floor(Math.random()*ship2Accept.length))]
var ship3 = ship3Accept[(Math.floor(Math.random()*ship3Accept.length))]
var ship4 = ship4Accept[(Math.floor(Math.random()*ship4Accept.length))]
var ship5 = (Math.floor(Math.random()*100))
console.log(ship1) //This just shows what the ships are (for Garrett since he's a cheater)
console.log(ship2)
console.log(ship3)
console.log(ship4)
console.log(ship5)

function winLose()  {
  if (torpedoes <=25 && ($('.torpedohit').length === 15)) {
    $("p").text("Congrats you win!!")
    game = false; //Game is over and we want to break out of the if loop that this function is called in later
  } else if (torpedoes > 25 && ($('.torpedohit').length < 15)) {
    $("p").text("I'm sorry you lose!!")
    $(".shipHere1 .shipHere2 .shipHere3 .shipHere4 .shipHere5" ).addClass("torpedohit") //Shows the location of all ships if the player loses
    game = false; //Game is over and we want to break out of the if loop that this function is called in later
  }
}
function ship1Setup() {
   $("#col" + ship1).addClass("shipHere1"),$("#col" + (ship1+1)).addClass("shipHere1"),$("#col" + (ship1+2)).addClass("shipHere1"),$("#col" + (ship1+3)).addClass("shipHere1"),$("#col" + (ship1+4)).addClass("shipHere1");
}
function ship2Setup() {
    ship2 = ship2Accept[(Math.floor(Math.random()*ship2Accept.length))]
    $("#col" + ship2).addClass("shipHere2");$("#col" + (ship2+10)).addClass("shipHere2");$("#col" + (ship2+20)).addClass("shipHere2");$("#col" + (ship2+30)).addClass("shipHere2");
}
function ship3Setup() {
    ship3 = ship3Accept[(Math.floor(Math.random()*ship3Accept.length))]
    $("#col" + ship3).addClass("shipHere3");$("#col" + (ship3+10)).addClass("shipHere3");$("#col" + (ship3+20)).addClass("shipHere3");
}
function ship4Setup() {
  ship4 = ship4Accept[(Math.floor(Math.random()*ship4Accept.length))]
  $("#col" + ship4).addClass("shipHere4");$("#col" + (ship4+1)).addClass("shipHere4")
}
function ship5Setup() {
  ship5 = (Math.floor(Math.random()*100))
  $("#col" + ship5).addClass("shipHere5");
}

function checkShip2() {
    while ($(".shipHere2").hasClass("shipHere1 shipHere3 shipHere4 shipHere5 ship1Surround")) {
      $("td").removeClass("shipHere2");
      ship2Setup();
    }
  }
function checkShip3() {
    while ($(".shipHere3").hasClass("shipHere1 shipHere2"))  {
      $("td").removeClass("shipHere3");
      ship3Setup();
    }
  }
function checkShip4() {
    while ($(".shipHere4").hasClass("shipHere1 shipHere2 shipHere3"))  {
      $("td").removeClass("shipHere4");
      ship4Setup();
    }
  }
function checkShip5() {
    while ($(".shipHere5").hasClass("shipHere1 shipHere2 shipHere3 shipHere4"))  {
      $("td").removeClass("shipHere5");
      ship5Setup();
    }
  }

function ship1Surround()  {
  $("#col" + (ship1+10)).addClass("ship1Surround")
  $("#col" + (ship1-10)).addClass("ship1Surround")
  $("#col" + (ship1-1)).addClass("ship1Surround")
  $("#col" + (ship1-11)).addClass("ship1Surround")
  $("#col" + (ship1+9)).addClass("ship1Surround")
  $("#col" + ((ship1+1)+10)).addClass("ship1Surround")
  $("#col" + ((ship1+1)-10)).addClass("ship1Surround")
  $("#col" + ((ship1+2)+10)).addClass("ship1Surround")
  $("#col" + ((ship1+2)-10)).addClass("ship1Surround")
  $("#col" + ((ship1+3)+10)).addClass("ship1Surround")
  $("#col" + ((ship1+3)-10)).addClass("ship1Surround")
  $("#col" + ((ship1+4)+10)).addClass("ship1Surround")
  $("#col" + ((ship1+4)-10)).addClass("ship1Surround")
  $("#col" + ((ship1+4)+1)).addClass("ship1Surround")
  $("#col" + ((ship1+4)+11)).addClass("ship1Surround")
  $("#col" + ((ship1+4)-9)).addClass("ship1Surround")
}
function ship2Surround()  {
  $("#col" + (ship2-10)).addClass("ship2Surround")
  $("#col" + (ship2-1)).addClass("ship2Surround")
  $("#col" + (ship2+1)).addClass("ship2Surround")
  $("#col" + (ship2-11)).addClass("ship2Surround")
  $("#col" + (ship2-9)).addClass("ship2Surround")
  $("#col" + ((ship2+10)+1)).addClass("ship2Surround")
  $("#col" + ((ship2+10)-1)).addClass("ship2Surround")
  $("#col" + ((ship2+20)+1)).addClass("ship2Surround")
  $("#col" + ((ship2+20)-1)).addClass("ship2Surround")
  $("#col" + ((ship2+30)+1)).addClass("ship2Surround")
  $("#col" + ((ship2+30)-1)).addClass("ship2Surround")
  $("#col" + ((ship2+30)+10)).addClass("ship2Surround")
  $("#col" + ((ship2+30)+11)).addClass("ship2Surround")
  $("#col" + ((ship2+30)+9)).addClass("ship2Surround")
}
function ship3Surround()  {
  $("#col" + (ship3-10)).addClass("ship3Surround")
  $("#col" + (ship3-1)).addClass("ship3Surround")
  $("#col" + (ship3+1)).addClass("ship3Surround")
  $("#col" + (ship3-11)).addClass("ship3Surround")
  $("#col" + (ship3-9)).addClass("ship3Surround")
  $("#col" + ((ship3+10)+1)).addClass("ship3Surround")
  $("#col" + ((ship3+10)-1)).addClass("ship3Surround")
  $("#col" + ((ship3+20)+1)).addClass("ship3Surround")
  $("#col" + ((ship3+20)-1)).addClass("ship3Surround")
  $("#col" + ((ship3+20)+10)).addClass("ship3Surround")
  $("#col" + ((ship3+20)+11)).addClass("ship3Surround")
  $("#col" + ((ship3+20)+9)).addClass("ship3Surround")
}
function ship4Surround()  {
  $("#col" + (ship4+10)).addClass("ship4Surround")
  $("#col" + (ship4-10)).addClass("ship4Surround")
  $("#col" + (ship4-1)).addClass("ship4Surround")
  $("#col" + (ship4-11)).addClass("ship4Surround")
  $("#col" + (ship4+9)).addClass("ship4Surround")
  $("#col" + ((ship4+1)+10)).addClass("ship4Surround")
  $("#col" + ((ship4+1)-10)).addClass("ship4Surround")
  $("#col" + ((ship4+1)+1)).addClass("ship4Surround")
  $("#col" + ((ship4+1)+11)).addClass("ship4Surround")
  $("#col" + ((ship4+1)-9)).addClass("ship4Surround")
}
function ship5Surround()  {
  $("#col" + (ship5+10)).addClass("ship5Surround")
  $("#col" + (ship5-10)).addClass("ship5Surround")
  $("#col" + (ship5-1)).addClass("ship5Surround")
  $("#col" + (ship5+1)).addClass("ship5Surround")
  $("#col" + (ship5-11)).addClass("ship5Surround")
  $("#col" + (ship5+11)).addClass("ship5Surround")
  $("#col" + (ship5+9)).addClass("ship5Surround")
  $("#col" + (ship5-9)).addClass("ship5Surround")
}


$(document).ready(function() {
  var table = $('<table></table>').addClass("board"); //selects the table element in our html
  for(i=0; i<10; i++){ //inside the table, generate the first
    var row = $('<tr>').addClass("row" + i);
    table.append(row); //Updates the rows
    for(j=0; j<10; j++){
      var col = $('<td></td>').attr('id',("col"+ counter++));
      row.append(col); //keeps all of the columns in rows
    } //ends second for loop
} //ends first for loop
$('#boardDiv').append(table); //Creates the table

  // This creates a horizontal ship of 5 consecutive blocks by adding 1 more to each class
  ship1Setup();
  ship1Surround();
  //Four-block ship, but made vertical by adding 10 more to each consecutive block
  ship2Setup();
  checkShip2();
  ship2Surround();
  //Three-block vertical ship
  ship3Setup();
  checkShip3();
  ship3Surround();
  //Two-block horizontal ship
  ship4Setup();
  checkShip4();
  ship4Surround();
  //Single-block ship
  ship5Setup();
  checkShip5();
  ship5Surround();

  $("td").click(function(){
    if (game) { //Put this here so that the game stops when it's over. The game variable becomes false in winLose function, which is called last in this code block
      if($(this).hasClass("torpedoShot"))  { //This will return false when the game is ran, since no squares have been clicked at that point. Once squares have been clicked, the next line prevents a second click on the same square by "turning off" the click function.
        $(this).click(false);
      } else if ($(this).hasClass("torpedoShot")==false) { //Add color to the clicked square. Also add to the overall torpedo count
          $(this).addClass("torpedoShot")
          $(".torpedoesUsed").text(("Torpedoes Left: " + (25-torpedoes++)))
      } // this is the if/then statement to prevent double clicks
      if($(this).hasClass("shipHere1 shipHere2 shipHere3 shipHere4 shipHere5")) {
        $(this).addClass("torpedohit")
        $(this).click(false); //This might not be needed
      }
      winLose();
    }
  }) //Is the counter for torpedoes Used
}); // Ending to document. ready
