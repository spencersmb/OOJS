//inherited prototype object

var Media = (function() {
  'use strict';

  function Media(title, duration) {
    // enforces new
    if (!(this instanceof Media)) {
      return new Media();
    }

    this.title = title;
    this.duration = duration;
    this.isPlaying = false;
  }

  Media.prototype.play = function() {
    this.isPlaying = true;
  };

  Media.prototype.stop = function() {
    this.isPlaying = false;
  };

  return Media;
}());
