import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const TIME_KEY = 'videoplayer-current-time';

function currentTime(data) {
  localStorage.setItem(TIME_KEY, JSON.stringify(data.seconds));
}

let time = JSON.parse(localStorage.getItem(TIME_KEY));
if (time) {
  player.setCurrentTime(time);
}

player.on('timeupdate', throttle(currentTime, 1000));
