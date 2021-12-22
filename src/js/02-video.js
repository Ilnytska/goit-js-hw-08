import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';
function onPlay({ seconds }) {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(seconds));
}
const currentTime = localStorage.getItem(LOCALSTORAGE_KEY);
const parseTime = JSON.parse(currentTime);
player
    .setCurrentTime(parseTime)
    .then(function (value) {
        value = parseTime;
  })
.catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:  
            break;
    }
});
player.on('timeupdate', throttle(onPlay, 1000));