function PlayerCar(scene, camera) {
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

    const radius = 2;
    var loader = new THREE.ColladaLoader();

    loader.load('car.dae', function(collada) {
        model = collada.scene;
        model.position.set(0, 0, 5);
        model.scale.x = model.scale.y = model.scale.z = 0.07;
        model.rotation.x = 0.6;
        scene.add(model);
    });

    var spx = 0
    this.update = function(time) {
        if (ku) {
            spx += 0.001;
        }
        if (kd) {
            if (spx - 0.01 > 0)
                spx -= 0.01;
            else
                spx = 0;
        }
        if (spx && spx > 0 && !ku && !kd) spx -= 0.0001;
        if (spx > 0.16)
            spx = 0.16;

        if (ku)
            model.rotation.x = 0.62;
        else
            model.rotation.x = 0.6;
        if (kd)
            model.rotation.x = 0.58;
        else if (!ku)
            model.rotation.x = 0.6;
        if (kl && model.position.x > -27) {
            model.position.x -= spx * 5;
            camera.position.x -= spx * 5;
        }
        if (kr && model.position.x < 27) {
            model.position.x += spx * 5;
            camera.position.x += spx * 5;
        }
    }
}