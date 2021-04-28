import PlayerAPI from './node_modules/ibm-video-streaming-web-player-api/dist/index.es.js';

const viewer = PlayerAPI('iframeId');

viewer.addListener('playing', (playing) => {
	console.log('GEORGE playing', playing)
});