//song object
//contains a title, an artist, and a duration
//also a bool to check if its playing or not

//needs two methods on it to play and stop
//to change the bool

//need a method to output the song to html


//song constructor function
function Song(title, artist, duration){
  this.title = title;
  this.artist = artist;
  this.duration = duration;
  this.isPlaying = false;
}

Song.prototype.play = function(){
  this.isPlaying = true;
};

Song.prototype.stop = function(){
  this.isPlaying = false;
};

Song.prototype.toHTML = function(){
  var renderToHtml = '';
  renderToHtml += "<li";
  if(this.isPlaying){
    renderToHtml += " class='current' ";
  }

  renderToHtml += '>';
  renderToHtml += this.title + ' - ' + this.artist;
  renderToHtml += '<span class="duration">' + this.duration + '</span>';
  renderToHtml += '</li>';

  return renderToHtml;

};
