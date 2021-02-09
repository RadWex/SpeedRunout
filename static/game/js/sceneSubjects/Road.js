function Road(scene) {
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
    speed = 0

    this.slots = function(allSignals) {
        for (var key in allSignals) {
            if (allSignals.hasOwnProperty(key)) {
                if (key == "variable.speed")
                    speed = allSignals[key];
            }
        }
    }

    this.update = function(time) {
        plane.material.map.offset.y += speed;
    }

    var signalsDic = {};
    this.signals = function() {
        return signalsDic
    }
}