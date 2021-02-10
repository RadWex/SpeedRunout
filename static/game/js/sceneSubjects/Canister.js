function Canister(scene) {
    var loader = new THREE.ColladaLoader();

    loader.load(modelsURL + "canister.DAE", function(collada) {
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

    ile_karnistrow = 0;
    this.colision = function() {
        if ((kanister.position.x - model.position.x < 6 &&
                model.position.x - kanister.position.x < 6) &&
            kanister.position.z - model.position.z < 2 &&
            kanister.position.y - model.position.y < 2) {
            rand_position = Math.floor(Math.random() * 6) + 1;
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
            ile_karnistrow += 1;
            score += 10;
        }
    }

    var object_speed = 0.55
    var multiply_speed_1_kanister = 9.6,
        multiply_speed_2 = 15;
    this.update = function(time) {
        kanister.position.y -= speed * multiply_speed_1_kanister * object_speed;
        kanister.position.z += speed * multiply_speed_2 * object_speed;
        if (kanister.position.z > 50) {
            rand_position = Math.floor(Math.random() * 6) + 1;
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
        }
        score += speed / 5;
        actual_score.innerHTML = Math.round(score).toString().padStart(6, "0");
        this.colision();
    }
}