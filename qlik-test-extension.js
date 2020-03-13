define([
  'jquery'
],
  function ($) {
    'use strict';

    return {

      //Paint resp.Rendering logic
      paint: function ($element, layout) {
        $element.empty();

        var $style = document.createElement('link');
        $style.html = `<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">`

        var $div = $(document.createElement('div'));
        $div.html(`
            <h2>CSP Test extension</h2>
            <p>This extension will fetch data from an external domains to test the CSP configuration. If the
            correct CSP profile is set, the images and styling below should work. If not check errors in the
            developer console.</p>

            <p>Load an image (Google logo) from www.google.se<br>
            CSP: <code>www.google.se img-src directive</code></p>
            <img src="https://www.google.se/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"/>
            
            <p>Load a video and an image from www.w3schools.com<br>
            CSP: <code>www.w3schools.com img-src media-src</code></p>
            <video width="320" height="240" controls>
              <source src="https://www.w3schools.com/html/movie.mp4" type="video/mp4">
              <source src="https://www.w3schools.com/html/movie.ogg" type="video/ogg">
              Your browser does not support the video tag.
            </video>
            <img src="https://www.w3schools.com/w3images/lights.jpg"/>
          `);
        $element.append($style);
        $element.append($div);

      }
    };
  });
