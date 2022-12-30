import Player from '@vimeo/player';
import Vimeo from '@vimeo/player';
var _ = require('lodash');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const KEY_ITEM = 'videoplayer-current-time';
player.setCurrentTime(
  JSON.parse(localStorage.getItem(KEY_ITEM)) === null
    ? 0
    : JSON.parse(localStorage.getItem(KEY_ITEM))
);
player.on(
  'timeupdate',
  _.throttle(data => {
    localStorage.setItem(KEY_ITEM, JSON.stringify(data.seconds));
  }, 1000)
);
