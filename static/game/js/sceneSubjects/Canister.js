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

    var loader = new THREE.ColladaLoader();

    loader.load(modelsURL + "kanister.dae", function(collada) {
        kanister = collada.scene;
        rand_position = Math.floor(Math.random() * 6) + 1;;
        switch (rand_position) {
            case 1:
                kanister.position.set(-5.5, 97, -150);
                break;
            case 2:
                kanister.position.set(-15, 97, -150);
                break;
            case 3:
                kanister.position.set(-24.5, 97, -150);
                break;
            case 4:
                kanister.position.set(5.5, 97, -150);
                break;
            case 5:
                kanister.position.set(15, 97, -150);
                break;
            case 6:
                kanister.position.set(24.5, 97, -150);
                break;
        }
        kanister.scale.x = kanister.scale.y = kanister.scale.z = 0.04;
        kanister.rotation.set(0.6, 0, 0);
        scene.add(kanister);
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

        if (ku) {
            kanister.position.y -= spx * multiply_speed_1_kanister * object_speed;
            kanister.position.z += spx * multiply_speed_2 * object_speed;
        }
        if (kd) {
            kanister.position.y -= spx * multiply_speed_1_kanister * object_speed;
            kanister.position.z += spx * multiply_speed_2 * object_speed;
        } else if (!ku)
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