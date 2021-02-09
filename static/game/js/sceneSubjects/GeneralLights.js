function GeneralLights(scene) {

    const light = new THREE.DirectionalLight(0xffffff, 2, 100);
    light.position.z = 15;
    light.position.x = 7;
    light.position.y = 7;
    //light.rotation.set(-1, 0, 0);
    light.castShadow = true;
    scene.add(light);

    light.shadow.mapSize.width = 2048; // default
    light.shadow.mapSize.height = 2048; // default
    light.shadow.camera.near = 0.5; // default
    light.shadow.camera.far = 500; // default
    const d = 100;

    light.shadow.camera.left = -d;
    light.shadow.camera.right = d;
    light.shadow.camera.top = d;
    light.shadow.camera.bottom = -d;

    const ambient = new THREE.AmbientLight(0x404040, 2); // soft white light
    scene.add(ambient);

    const spot = new THREE.PointLight(0xffe4b2, .2, 100);
    spot.rotation.set(-1, 0, 0)
    spot.position.z = -50;
    spot.position.x = 15;
    spot.position.y = 80;
    scene.add(spot);
    this.update = function(time) {}

}