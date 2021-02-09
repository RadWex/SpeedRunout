function EnemyCar(scene, camera) {
    var loader = new THREE.ColladaLoader();

    loader.load(modelsURL + "car.DAE", function(collada) {
        model2 = collada.scene;
        model2.traverse(function(child) {
            if (child instanceof THREE.Mesh) {
                child.castShadow = true;
            }
        });
        rand_position = Math.floor(Math.random() * 6) + 1;;
        switch (rand_position) {
            case 1:
                model2.position.set(-5.5, 99, -150);
                break;
            case 2:
                model2.position.set(-15, 99, -150);
                break;
            case 3:
                model2.position.set(-24.5, 99, -150);
                break;
            case 4:
                model2.position.set(5.5, 99, -150);
                break;
            case 5:
                model2.position.set(15, 99, -150);
                break;
            case 6:
                model2.position.set(24.5, 99, -150);
                break;
        }
        color = new THREE.Color(0xffffff);
        color.setHex(Math.random() * 0xffffff);
        material = new THREE.MeshStandardMaterial({ color: color })
        material.metalness = 1
        model2.children[1].children[0].material = material

        model2.scale.x = model2.scale.y = model2.scale.z = 0.07;
        model2.rotation.x = 0.6;
        model2.rotation.y = 3.15;
        model2.castShadow = true;
        scene.add(model2);
    });

    var object_speed = 0.55,
        object_speed_car = 1;
    var multiply_speed_1_kanister = 9.6,
        multiply_speed_2 = 15;
    this.update = function(time) {
        ku = inputManager.keys.up.down;
        kd = inputManager.keys.down.down;
        kl = inputManager.keys.left.down;
        kr = inputManager.keys.right.down;
        if (ku) {
            model2.position.y -= speed * multiply_speed_1_kanister * object_speed;
            model2.position.z += speed * multiply_speed_2 * object_speed;
        }
        if (kd) {
            model2.position.y -= speed * multiply_speed_1_kanister * object_speed;
            model2.position.z += speed * multiply_speed_2 * object_speed;
        }
        if (model2.position.z > 50) {
            rand_position = Math.floor(Math.random() * 6) + 1;
            model2.children[1].children[0].material.color.setHex(Math.random() * 0xffffff);
            switch (rand_position) {
                case 1:
                    model2.position.set(-5.5, 99, -150);
                    break;
                case 2:
                    model2.position.set(-15, 99, -150);
                    break;
                case 3:
                    model2.position.set(-24.5, 99, -150);
                    break;
                case 4:
                    model2.position.set(5.5, 99, -150);
                    break;
                case 5:
                    model2.position.set(15, 99, -150);
                    break;
                case 6:
                    model2.position.set(24.5, 99, -150);
                    break;
            }

        }
        if (speed < 0.05) {
            model2.position.y -= 0.05 * multiply_speed_1_kanister * object_speed_car;
            model2.position.z += 0.05 * multiply_speed_2 * object_speed_car;
        } else {
            model2.position.y -= speed * multiply_speed_1_kanister * object_speed_car;
            model2.position.z += speed * multiply_speed_2 * object_speed_car;
        }
    }

}