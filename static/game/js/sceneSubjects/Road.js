function Road(scene) {
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

    const Texture = new THREE.TextureLoader().load((texturesURL + "road1.jpg"));
    Texture.wrapS = THREE.RepeatWrapping;
    Texture.wrapT = THREE.RepeatWrapping;
    Texture.anisotropy = 8;
    Texture.repeat.set(2, 100);
    const Material = new THREE.MeshBasicMaterial({ map: Texture, side: THREE.DoubleSide });
    const Geometry = new THREE.PlaneGeometry(60, 1000, 1, 1);
    const plane = new THREE.Mesh(Geometry, Material);
    plane.rotation.set(-1, 0, 0);
    plane.material.map.offset.y = 1.5;
    scene.add(plane);
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
        plane.material.map.offset.y += spx;
    }
}