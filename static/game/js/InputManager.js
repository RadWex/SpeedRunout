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
    }
    update() {
        const { deltaTime } = globals;
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