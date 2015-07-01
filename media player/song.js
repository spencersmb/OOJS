//song object
//contains a title, an artist, and a duration
//also a bool to check if its playing or not

//needs two methods on it to play and stop
//to change the bool

//need a method to output the song to html


//song constructor function
// function Song(title, artist, duration) {
//   Media.call(this, title, duration);
//   this.artist = artist;
// }

//inits the prototype chain
// Song.prototype = Object.create(Media.prototype);

//DELETED THESE SINCE THEY ARE ADDED VIA THE MEDIA OBJCET
// Song.prototype.play = function(){
//   this.isPlaying = true;
// };
//
// Song.prototype.stop = function(){
//   this.isPlaying = false;
// };

var Song = (function() {
  'use strict';

  function Song(title, artist, duration) {
    // enforces new
    if (!(this instanceof Song)) {
      return new Song();
    }

    Media.call(this, title, duration);

    this.artist = artist;
  }

  Song.prototype = Object.create(Media.prototype);

  Song.prototype.toHTML = function() {

    var renderToHtml = '';
    renderToHtml += "<li";
    if (this.isPlaying) {
      renderToHtml += " class='current' ";
    }

    renderToHtml += '>';
    renderToHtml += this.title + ' - ' + this.artist;
    renderToHtml += '<span class="duration">' + this.duration + '</span>';
    renderToHtml += '</li>';

    return renderToHtml;
  };

  return Song;
}());
