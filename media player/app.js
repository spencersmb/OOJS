var myPlaylist = new Playlist();

var song1 = new Song("Can't You Trip Like I do", 'Crystal Method', "3:10");
var song2 = new Song('Black Hole Sun', 'SoundGarden', "5:24");

myPlaylist.add(song1);
myPlaylist.add(song2);


  var playList = document.getElementById("playlist");
  playList.innerHTML = myPlaylist.renderInElement();

//PLAY
  var playButton = document.getElementById('play');
  playButton.onclick = function(){
    myPlaylist.play();

    //rerender html
    playList.innerHTML = myPlaylist.renderInElement();
  };

//STOP
  var stopButton = document.getElementById('stop');
  stopButton.onclick = function(){
    myPlaylist.stop();

    //rerender html
    playList.innerHTML = myPlaylist.renderInElement();
  };

//NEXT
  var nextButton = document.getElementById('next');
  nextButton.onclick = function(){
    myPlaylist.next();

    //rerender html
    playList.innerHTML = myPlaylist.renderInElement();
  };
