////////////////////////////////////////////////////////////////////
//////////////////////**סידור רצפים**//////////////////////////////
////////////////////////////////////////////////////////////////////

//סופר הצלחות
var correctCards = 0;
var counter;
var picName = ["grey", "pink","red", "yellow"];
//$(init);
$(document).ready(function () {
    initCardGame();
});

function initCardGame() {

    // Hide the success message
    $('#successMessage').hide();
    $('#successMessage').css({
        left: '580px',
        top: '250px',
        width: 0,
        height: 0
    });

    // Reset the game
    correctCards = 0;
    counter = 1;

    $('#cardPile').html('');
    $('#cardSlots').html('');

    // Create the pile of shuffled cards
    var numbers = [1, 2, 3, 4];
    numbers.sort(function () { return Math.random() - .5 });
    
    var picName = ["grey", "pink","red", "yellow"];
    var cardPileBind="";
     for (var i = 0; i < numbers.length; i++) {
         cardPileBind+= "<div data='"+numbers[i]+"' id='card"+numbers[i]+"' class='cardPileClass'"
         cardPileBind+="style='background-image:url(\"pic/"+picName[numbers[i]-1]+".png\");background-size:cover;' onclick='checkMatch("+numbers[i]+")'>"+numbers[i]+"</div>"
     
    }
document.getElementById("cardPile").innerHTML= cardPileBind;
    
    // Create the card slots
    var words = ['1', '2', '3', '4'];
    var cardSlotBind="";
     for (var j = 0; j < words.length; j++) {
         cardSlotBind+= "<div data='"+(j+1)+"' id='slot"+(j+1)+"'>"+words[j]+"</div>";        
    }
    document.getElementById("cardSlots").innerHTML= cardSlotBind;

    document.getElementById("slot"+counter).className="slotActive";

    
}

function checkMatch(eventValue, event){
    if(eventValue== counter){
       
    $("#card"+eventValue).hide();
        $("#slot"+eventValue).attr({ 'style': 'background-image:url("/pic/'+picName[eventValue-1]+'.png");background-size:cover;'});
        document.getElementById("slot"+counter).className="slotCorrect";
        counter++;
        correctCards++;

    }else{
        alert("נסה שנית")
        
    }
    //צריך לשנות את הספרה 4 לפי מספר התמונות או אורך המערך שיהיה בסוף
    if(correctCards < 4){
    document.getElementById("slot"+counter).className="slotActive";
    }
    
    
        if (correctCards == 4) {
        $('#successMessage').show();
        $('#successMessage').animate({
            left: '380px',
            top: '200px',
            width: '400px',
            height: '100px',
            opacity: 1
        });
            
    }
    
}



