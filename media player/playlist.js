//an array for all the songs to be placed into
//a list object that you can add a song in an array
//keep track of current song index

//play a song
//next song
//stop song

//renderInElment - to output the entire list and current songs

function Playlist(){
  this.songs = [];
  this.currentSongIndex = 0;
}

Playlist.prototype.add = function(song){
  this.songs.push(song);
};

Playlist.prototype.play = function(){

  var currentSong = this.songs[this.currentSongIndex];

  currentSong.play();

};

Playlist.prototype.stop = function(){

  var currentSong = this.songs[this.currentSongIndex];

  currentSong.stop();

};

Playlist.prototype.next = function(){

  //stop current song - calls stop on the song using the song prototype stop()
  this.stop();

  //add +1 to go to next song in array
  this.currentSongIndex ++;

  //if its the last song repeat the array
  if(this.currentSongIndex === this.songs.length){
    this.currentSongIndex = 0;
  }

  //play current song - calls play on the song using the song prototype play()
  this.play();

};

Playlist.prototype.renderInElement = function(){
  var list = '';
  for(var i=0; i < this.songs.length; i++){
    list+= this.songs[i].toHTML();
  }

  //var currentSong = this.songs[this.currentSongIndex];
  return list;
};


