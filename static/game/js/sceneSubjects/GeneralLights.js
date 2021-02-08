function GeneralLights(scene) {

    const light = new THREE.PointLight(0xFFFFFF);
    light.position.z = 15;
    scene.add(light);

    this.update = function(time) {}
}