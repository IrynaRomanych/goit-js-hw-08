// import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
let throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const LOCAL_KEY = `videoplayer-current-time`;

const player = new Player(iframe);

const onPlay = function (data) {
  player
    .getCurrentTime()
    .then(function (seconds) {
      localStorage.setItem(LOCAL_KEY, seconds);
    })
    .catch(function (error) {});
};
player.on(`timeupdate`, throttle(onPlay, 1000));

const currentTime = localStorage.getItem(LOCAL_KEY);

player
  .setCurrentTime(currentTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
