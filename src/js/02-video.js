import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

function handleVideoTimeUpdate (e) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(e.seconds))
}

player.on('timeupdate', throttle(handleVideoTimeUpdate, 1000));

player.setCurrentTime( localStorage.getItem("videoplayer-current-time"))