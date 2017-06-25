////////////////////////////////////////////////////////////////////
//////////////////////**סידור רצפים**//////////////////////////////
////////////////////////////////////////////////////////////////////

//סופר הצלחות
var correctCards;
var counter;

function init() {

   
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
    
//    $('#cardPile').html('');
//    $('#cardSlots').html('');

    // Create the pile of shuffled cards
    var numbers = [1, 2, 3, 4];
    numbers.sort(function () { return Math.random() - 0.5});
    
    var picName = ["grey", "pink", "red", "yellow"];
    

       
    
    for (var i = 0; i < numbers.length; i++) {
       $('<div>' + numbers[i] + '</div>')
           .data(numbers[i])
           .attr({ 
                'id': 'card' + numbers[i],'class':'cardPileClass', 
                'style': 'background-image:url("/pic/' + picName[numbers[i]-1] + '.png");background-size:cover;'
                 })
           .appendTo('#cardPile');   
    }
    
     $(".cardPileClass").click(checkMatch(this.data));

}

$(init);


function checkMatch(eventValue, event){
    if(eventValue== counter){
       
    $("#card"+eventValue).hide();
        $("#slot"+eventValue).attr({ 'style': 'background-image:url("/pic/grey.png");background-size:cover;'});
        counter++;
        correctCards++;
    }else{
        alert("נסה שנית")
        
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





