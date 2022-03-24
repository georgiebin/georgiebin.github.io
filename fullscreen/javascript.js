var fullScreenBtn = document.getElementById('fullScreenBtn');
var container = document.getElementById('Container');

document.addEventListener("fullscreenchange",changeHandler);
document.addEventListener("webkitfullscreenchange",changeHandler);
document.addEventListener("mozfullscreenchange",changeHandler);
document.addEventListener("MSFullscreenChange", changeHandler, false);

// trigger fullscreen change on our custom button click
fullScreenBtn.addEventListener('click',onFullScreenBtnClick);

// check if the current state is fullscreen or not
function isFullScreen () {
  return document.fullScreen ||
    document.webkitIsFullScreen ||
    document.mozfullScreen ||
	document.msFullscreenElement;
}

// change everything on other change events too
function changeHandler () {
  container.className = isFullScreen() ? 'fullscreen' : '';
}

// fullscreen button event handler
function onFullScreenBtnClick () {
  // if we are in fullscreen, then exit
  if (isFullScreen()) {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.mozExitFullScreen) {
      document.mozExitFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    // if we are in non-fullscreen mode, open it
  } else {
    if (container.requestFullscreen) {
      container.requestFullscreen();
    } else if (container.webkitRequestFullscreen) {
      container.webkitRequestFullscreen();
    } else if (container.mozRequestFullScreen) {
      container.mozRequestFullScreen();
    } else if (container.msRequestFullscreen) {
      container.msRequestFullscreen();
    }
  }
}