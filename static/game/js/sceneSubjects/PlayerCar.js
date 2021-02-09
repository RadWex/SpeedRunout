function PlayerCar(scene, camera) {
    var loader = new THREE.ColladaLoader();

    loader.load(modelsURL + "car.DAE", function(collada) {
        model = collada.scene;
        model.traverse(function(child) {
            if (child instanceof THREE.Mesh) {
                child.castShadow = true;
            }
        });
        material = new THREE.MeshStandardMaterial({ color: 0xff0000 })
        material.metalness = 1
        model.children[1].children[0].material = material
        model.position.set(0, 0, 5);
        model.scale.x = model.scale.y = model.scale.z = 0.07;
        model.rotation.x = 0.6;
        model.castShadow = true; //default is false
        scene.add(model);
    });

    this.update = function(time) {
        if (inputManager.keys.up.down)
            model.rotation.x = 0.62;
        else
            model.rotation.x = 0.6;
        if (inputManager.keys.down.down)
            model.rotation.x = 0.58;
        else if (!inputManager.keys.up.down)
            model.rotation.x = 0.6;
        if (inputManager.keys.left.down && model.position.x > -27) {
            model.position.x -= speed * 5;
            camera.position.x -= speed * 5;
        }
        if (inputManager.keys.right.down && model.position.x < 27) {
            model.position.x += speed * 5;
            camera.position.x += speed * 5;
        }
    }

}