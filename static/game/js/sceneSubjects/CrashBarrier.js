function CrashBarrier(scene) {
    var loader = new THREE.ColladaLoader();
    loader.load(modelsURL + 'crash_barrier.DAE', function(collada) {
        barierka = collada.scene;
        barierka.position.set(31, 0, 2);
        barierka.scale.x = barierka.scale.y = 0.05;
        barierka.scale.z = 0.4
        barierka.rotation.x = 0.57;
        barierka.traverse(function(child) {
            if (child instanceof THREE.Mesh) {
                child.castShadow = true;
            }
        });
        material = new THREE.MeshStandardMaterial({ color: 0x808080 })
        barierka.children[0].children[0].material = material
        scene.add(barierka);
    });

    loader.load(modelsURL + 'crash_barrier.DAE', function(collada) {
        barierka2 = collada.scene;
        barierka2.position.set(-31, 0, 2);
        barierka2.scale.x = barierka2.scale.y = 0.05;
        barierka2.scale.z = 0.4
        barierka2.rotation.x = 0.57;
        barierka2.traverse(function(child) {
            if (child instanceof THREE.Mesh) {
                child.castShadow = true;
            }
        });
        const scale = new THREE.Vector3(1, 1, 1);
        scale.z *= -1;
        barierka2.scale.multiply(scale);
        material = new THREE.MeshStandardMaterial({ color: 0x808080 })
        barierka2.children[0].children[0].material = material
        scene.add(barierka2);
    });

    var boxGeometry = new THREE.BoxGeometry(0.2, 1, 5);
    var phongMaterial = new THREE.MeshStandardMaterial({ color: 0xD8D8D8 });
    phongMaterial.metalness = 1;
    var cube = [];
    for (var i = 0; i < 12; i++) {
        cube[i] = new THREE.Mesh(boxGeometry, phongMaterial);
        cube[i].position.z = -15.7 * i;
        cube[i].position.x = 31.1;
        cube[i].rotation.set(2.2, 0, 0);
        cube[i].position.y = 10 * i;
        cube[i].castShadow = true
        console.log(cube[i].position.z);
        console.log(cube[i].position.y);
        scene.add(cube[i]);
    }

    var cube2 = [];
    for (var i = 0; i < 12; i++) {
        cube2[i] = new THREE.Mesh(boxGeometry, phongMaterial);
        cube2[i].position.z = -15.7 * i;
        cube2[i].position.x = -31.1;
        cube2[i].rotation.set(2.2, 0, 0);
        cube2[i].position.y = 10 * i;
        cube2[i].castShadow = true
        scene.add(cube2[i]);
    }

    var object_speed = 0.55,
        multiply_speed_1_kanister = 9.6,
        multiply_speed_2 = 15;
    this.update = function(time) {
        for (var i = 0; i < 12; i++) {
            cube[i].position.y -= speed * multiply_speed_1_kanister * object_speed;
            cube[i].position.z += speed * multiply_speed_2 * object_speed;
            cube2[i].position.y -= speed * multiply_speed_1_kanister * object_speed;
            cube2[i].position.z += speed * multiply_speed_2 * object_speed;
        }
        for (var i = 0; i < 12; i++) {
            if (cube[i].position.z > 50)
                cube[i].position.set(31.1, 100, -157); //-172.7 110
            if (cube2[i].position.z > 50)
                cube2[i].position.set(-31.1, 100, -157);
        }
    }
}