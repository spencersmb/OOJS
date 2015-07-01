var Movie = (function() {
  'use strict';

  function Movie(title, year, duration) {
    // enforces new
    if (!(this instanceof Movie)) {
      return new Movie();
    }

    Media.call(this, title, duration);
    this.year = year;
  }

  Movie.prototype = Object.create(Media.prototype);

  Movie.prototype.toHTML = function() {
    var renderToHtml = '';
    renderToHtml += "<li";
    if (this.isPlaying) {
      renderToHtml += " class='current' ";
    }

    renderToHtml += '>';
    renderToHtml += this.title + ' - ' + this.year;
    renderToHtml += '<span class="duration">' + this.duration + '</span>';
    renderToHtml += '</li>';

    return renderToHtml;
  };

  return Movie;
}());
