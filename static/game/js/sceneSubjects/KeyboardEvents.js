function KeyboardEvents() {
    document.addEventListener('keydown', onDocumentKeyDown, false);
    document.addEventListener('keyup', onDocumentKeyUp, false);

    var ku = 0,
        kd = 0,
        kl = 0,
        kr = 0;

    function onDocumentKeyDown(event) {
        event = event || window.event;
        var keycode = event.keyCode;

        switch (keycode) {
            case 37:
                //console.log("left down");
                kl = true;
                break;
            case 38: //console.log("up down" );
                ku = true;
                break;
            case 39: // console.log("right down");
                kr = true;
                break;
            case 40: //console.log("down down" );
                kd = true;
                break;
        }
    }

    function onDocumentKeyUp(event) {
        event = event || window.event;
        var keycode = event.keyCode;
        switch (keycode) {
            case 37: //console.log("left up" );
                kl = false;
                break;
            case 38: // console.log("up up"   );
                ku = false;
                break;
            case 39: //console.log("right up");
                kr = false;
                break;
            case 40: //console.log("down up" );
                kd = false;
                break;
        }
    }

    var speed = 0

    var signalsDic = {};
    this.signals = function() {
        signalsDic["keyboard.up"] = ku;
        signalsDic["keyboard.down"] = kd;
        signalsDic["keyboard.laft"] = kl;
        signalsDic["keyboard.right"] = kr;
        signalsDic["variable.speed"] = speed;
        return signalsDic
    }
    this.slots = function(allSignals) {}

    this.update = function(time) {
        if (ku) {
            speed += 0.001;
        }
        if (kd) {
            if (speed - 0.01 > 0)
                speed -= 0.01;
            else
                speed = 0;
        }
        if (speed && speed > 0 && !ku && !kd)
            speed -= 0.0001;
        if (speed > 0.16)
            speed = 0.16;
    }
}