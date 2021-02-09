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
        model.position.set(0, 0, 4);
        model.scale.x = model.scale.y = model.scale.z = 0.07;
        model.rotation.x = 0.6;
        model.castShadow = true; //default is false
        scene.add(model);
    });

    this.update = function(time) {
        ku = inputManager.keys.up.down;
        kd = inputManager.keys.down.down;
        kl = inputManager.keys.left.down;
        kr = inputManager.keys.right.down;
        if (ku)
            model.rotation.x = 0.62;
        else
            model.rotation.x = 0.6;
        if (kd)
            model.rotation.x = 0.58;
        else if (!ku)
            model.rotation.x = 0.6;
        if (kl && model.position.x > -27) {
            model.position.x -= speed * 5;
            camera.position.x -= speed * 5;
            model.rotation.y += speed * 0.5;
            if (model.rotation.y > 0.15)
                model.rotation.y = 0.15;
        }
        if (kr && model.position.x < 27) {
            model.position.x += speed * 5;
            camera.position.x += speed * 5;
            model.rotation.y -= speed * 0.5;
            if (model.rotation.y < -0.15)
                model.rotation.y = -0.15;
        }
        if (model.rotation.y > 0 && !kr && !kl) {
            model.rotation.y -= speed * 0.5;
        }
        if (model.rotation.y < 0 && !kl && !kr) {
            model.rotation.y += speed * 0.5;
        }
        if (!kl && !kr) {
            model.rotation.y = 0;
        }
    }

}