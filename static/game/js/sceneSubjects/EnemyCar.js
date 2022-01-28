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


    this.colision = function() {
        if ((model2.position.x - model.position.x < 5.6 && model.position.x - model2.position.x < 5.6) && model2.position.z - model.position.z < 8 && model2.position.y - model.position.y < 8) {
            //end_game();
            rand_position = Math.floor(Math.random() * 6) + 1;
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
            model.position.set(0, 0, 5);
            camera.position.x = 0;
            postTo('', Math.round(score).toString().padStart(6, "0"));
            var best_score = document.getElementById("best_score");
            if (best_score != null) {
                if (score > best_score)
                    best_score.innerHTML(Math.round(score).toString());
            }
            ile_karnistrow = 0;
            score = 0;
            speed = 0;
        }
    }

    var object_speed_car = 1;
    var multiply_speed_1_kanister = 9.6,
        multiply_speed_2 = 15;
    this.update = function(time) {
        if (ile_karnistrow < 3)
            object_speed_car = 1;
        else if (ile_karnistrow == 3)
            object_speed_car = 1.2;
        else if (ile_karnistrow == 5)
            object_speed_car = 1.4;
        else if (ile_karnistrow == 7)
            object_speed_car = 1.6;
        else if (ile_karnistrow == 9)
            object_speed_car = 1.8;
        else if (ile_karnistrow == 12)
            object_speed_car = 2;

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
        this.colision()
    }

}