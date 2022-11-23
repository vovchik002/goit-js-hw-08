import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const LOCALSTORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(event) {
localStorage.setItem(LOCALSTORAGE_KEY, event.seconds);
};

const lastCurrentTime = localStorage.getItem(LOCALSTORAGE_KEY)
if (lastCurrentTime) {
player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY));
}