import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';
function onPlay({ seconds }) {
    localStorage.setItem(LOCALSTORAGE_KEY, seconds);
}
const currentTime = localStorage.getItem(LOCALSTORAGE_KEY);

player.setCurrentTime(currentTime).then(function (value) {value = currentTime;
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