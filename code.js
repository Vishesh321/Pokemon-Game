setScreen("start");
playSound("assets/37-Battle!-Arceus.mp3");
//vars for dialga 
var dialgapower = 1000;
//vars for giaratina
var giratinapower = 1000;
var giratinarandom;
//pokemon move vars for dialga below
var roaroftime = 150;
var meteormash = 100;
var dracometeor = 150;
var earthquake = 150;
//pokemon move vars for giratina below
var shadowforce = 150;
var outrage = 100;
var dracometeor = 150;
var hyperbeam = 150;
onEvent("playbtn", "click", function( ) {
  setScreen("homescreen");
});
onEvent("fight", "click", function( ) {
  setScreen("movescreen");
});
onEvent("backbutton", "click", function( ) {
  setScreen("homescreen");
});
//pokemon moves for dialga below
onEvent("roaroftime", "click", function(event) {
  if (randomNumber(1, 100) >= 5) {
    setText("information", "Dialga used Roar of Time");
    giratinapower = giratinapower - roaroftime;
    setTimeout(function() {
      setScreen("roaroftimescreen");
      for (var i = 0; i < 4; i++) {
        setTimeout(function() {
          setScreen("movescreen");
          setText("giratinahealthbox", ("Giaratina -> \n" + giratinapower) + " / 1000");
          setText("information", ("The attack delt " + roaroftime) + " damage. ");
        }, 1500);
      }
    }, 2000);
  } else {
    setTimeout(function() {
      setText("information", "But it missed");
    }, 1500);
  }
