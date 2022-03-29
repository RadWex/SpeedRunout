class InputManager {
    constructor() {
        this.keys = {};
        const keyMap = new Map();

        const setKeyFromKeyCode = (keyCode, pressed) => {
            const keyName = keyMap.get(keyCode);
            if (!keyName) {
                return;
            }
            setKey(keyName, pressed);
        };

        document.addEventListener('keydown', onDocumentKeyDown, false);
        document.addEventListener('keyup', onDocumentKeyUp, false);

        function onDocumentKeyDown(event) {
            event = event || window.event;
            var keycode = event.keyCode;
            setKeyFromKeyCode(keycode, true);
        };

        function onDocumentKeyUp(event) {
            event = event || window.event;
            var keycode = event.keyCode;
            setKeyFromKeyCode(keycode, false);

        };

        const setKey = (keyName, pressed) => {
            const keyState = this.keys[keyName];
            keyState.justPressed = pressed && !keyState.down;
            keyState.down = pressed;
        };

        const addKey = (keyCode, name) => {
            this.keys[name] = { down: false, justPressed: false };
            keyMap.set(keyCode, name);
        };

        addKey(37, 'left');
        addKey(65, 'left');
        addKey(39, 'right');
        addKey(68, 'right');
        addKey(38, 'up');
        addKey(87, 'up');
        addKey(40, 'down');
        addKey(83, 'down');

        // touch for mobile section
        this.touchStartingPos = [0, 0];
        this.touchDeviateVal = [0, 0];

        const setStarting = (x, y) => {
            this.touchStartingPos = [x, y];
        };

        const setDeviate = (x, y) => {
            this.touchDeviateVal[0] = this.touchStartingPos[0] - x;
            this.touchDeviateVal[1] = this.touchStartingPos[1] - y;
        };

        document.addEventListener("touchstart", touchstart);
        document.addEventListener("touchmove", touchmove);
        document.addEventListener("touchend", touchEnd);
        document.addEventListener("touchcancel", touchEnd);

        function touchstart(e) {
            e.preventDefault();
            const x = e.touches[0].pageX;
            const y = e.touches[0].pageY;
            setStarting(x, y);
        };

        function touchmove(e) {
            e.preventDefault();
            const x = e.touches[0].pageX;
            const y = e.touches[0].pageY;
            setDeviate(x, y);
        };

        function touchEnd(e) {
            setStarting(0, 0);
            setDeviate(0, 0);
        };

    }
    update() {
        const { deltaTime } = globals;
        if (inputManager.touchDeviateVal[0] || inputManager.touchDeviateVal[1]) {
            if (speed > 0.15)
                speed = 0.15;
            if (inputManager.touchDeviateVal[1] > 100) {
                //console.log(inputManager.touchDeviateVal[1])
                speed += 0.1 * deltaTime;
            } else if (inputManager.touchDeviateVal[1] > 50)
                speed += 0.03 * deltaTime;
            else if (inputManager.touchDeviateVal[1] > 10)
                speed += 0.01 * deltaTime;
        } else {
            for (const keyState of Object.values(this.keys)) {
                if (speed > 0.15)
                    speed = 0.15;
                if (inputManager.keys.up.down) {
                    speed += 0.01 * deltaTime;
                }
                if (inputManager.keys.down.down) {
                    if (speed - 0.1 * deltaTime > 0)
                        speed -= 0.05 * deltaTime;
                    else
                        speed = 0;
                }
                if (speed && speed > 0 && !inputManager.keys.up.down && !inputManager.keys.down.down)
                    speed -= 0.005 * deltaTime;
                if (keyState.justPressed) {
                    keyState.justPressed = false;
                }
            }
        }
    }
}