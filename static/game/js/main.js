const globals = {
    time: 0,
    deltaTime: 0
};

var speed = 0;
var score = 0.0;
var actual_score = document.getElementById("score")
actual_score.innerHTML = "000000"
const canvas = document.getElementById("canvas");

const sceneManager = new SceneManager(canvas);
const inputManager = new InputManager();

bindEventListeners();

var csrfcookie = function() {
    var cookieValue = null,
        name = 'csrftoken';
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
};

function postTo(url, query) {
    var request = (XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject());
    request.open('POST', url, true);
    request.setRequestHeader('X-CSRFToken', csrfcookie());
    request.send(query);
}

function bindEventListeners() {
    window.onresize = resizeCanvas;
    resizeCanvas();
}

function resizeCanvas() {
    canvas.style.width = '100%';
    canvas.style.height = '100%';

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    sceneManager.onWindowResize();
}

let then = 0;

function render(now) {
    globals.time = now * 0.001;
    globals.deltaTime = Math.min(globals.time - then, 1 / 20);
    then = globals.time;
    requestAnimationFrame(render);
    sceneManager.update();
    inputManager.update();
    sceneManager.render();
}
requestAnimationFrame(render);