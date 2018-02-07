var mySound ='assets/doorbell.mp3'
var mySoundx = 'assets/marbles-daniel_simon.mp3'

function preload() {  
  mySound = loadSound('assets/doorbell.mp3');
  mySoundx = loadSound('assets/marbles-daniel_simon.mp3');
}
  
function setup() {
  createCanvas(100, 100);
  mySound.setVolume(0.1);
  mySound.play();
  mySoundx.setVolume(0.1);
  mySoundx.play();
}


  function keyPressed() {
    print(key);
    if (key == 'D') {
      mySound.play();
      background(240);
    } else if (key == 'M') {
      print(mySoundx.play);
      mySoundx.play();
      background(255);

    }
  }
