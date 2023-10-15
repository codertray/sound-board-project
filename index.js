$("a.btn").on("click", function() {
  $("a.btn").toggleClass("pressed");
  setTimeout(function() {
    $("a.btn").toggleClass("pressed");
  }, 200);
});

$("div.btn").on("click", function() {
  var button = this.id;
  soundBoard(button);
});

var currentSound = null; // Initialize currentSound outside the function

function soundBoard(button) {
  if(currentSound){
    if($(currentSound)[0].currentTime > 0){
      $(currentSound)[0].pause();
      $(currentSound)[0].currentTime= 0;
      $("div.btn").removeClass("pressed");
    }
    else{
      console.log("clear");
    }
  }

  switch (button) {
    case "dialup":
      currentSound = "audio#dialUpSound"
      $("audio#dialUpSound")[0].play(); // [0] accesses the DOM element for play()
      $("#dialup").toggleClass("pressed");
      setTimeout(function() {
        $("#dialup").removeClass("pressed");
      }, 19000);
      break;

    case "vcr":
      currentSound = "audio#vcrSound";
      $("audio#vcrSound")[0].play();
      $("#vcr").toggleClass("pressed");
      setTimeout(function() {
        $("#vcr").removeClass("pressed");
      }, 9000);
      break;

    case "camera":
      currentSound = "audio#cameraSound";
      $("audio#cameraSound")[0].play();
      $("#camera").toggleClass("pressed");
      setTimeout(function() {
        $("#camera").removeClass("pressed");
      }, 10000);
      break;

    case "rotary":
      currentSound = "audio#rotarySound";
      $("audio#rotarySound")[0].play();
      $("#rotary").toggleClass("pressed");
      setTimeout(function() {
        $("#rotary").removeClass("pressed");
      }, 12000);
      break;

    case "typewriter":
      currentSound = "audiotypewriterSound";
      $("audio#typewriterSound")[0].play();
      $("#typewriter").toggleClass("pressed");
      setTimeout(function() {
        $("#typewriter").removeClass("pressed");
      }, 7000);
      break;

    case "polaroid":
      currentSound = "audio#polaroidSound";
      $("audio#polaroidSound")[0].play();
      $("#polaroid").toggleClass("pressed");
      setTimeout(function() {
        $("#polaroid").removeClass("pressed");
      }, 7000);
      break;
  }
}

