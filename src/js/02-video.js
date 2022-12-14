import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeEl = document.querySelector('#vimeo-player');
const player = new Player(iframeEl);
const VIMEO_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(onPlay, 1000));
timeVimeo();

function onPlay({ seconds, duration }) {
  // console.log(data);
  localStorage.setItem(VIMEO_KEY, seconds);
  if (seconds === duration) {
    localStorage.removeItem(VIMEO_KEY);
  }
}
function timeVimeo() {
  if (localStorage.getItem(VIMEO_KEY)) {
    player.setCurrentTime(localStorage.getItem(VIMEO_KEY));
  }
}
