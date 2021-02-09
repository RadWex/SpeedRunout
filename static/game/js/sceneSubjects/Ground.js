function Ground(scene) {
    const Texture = new THREE.TextureLoader().load((texturesURL + "ground.jpg"));
    Texture.wrapS = THREE.RepeatWrapping;
    Texture.wrapT = THREE.RepeatWrapping;
    Texture.anisotropy = 8;
    Texture.repeat.set(20, 20);
    const Material = new THREE.MeshStandardMaterial({ map: Texture, side: THREE.DoubleSide });
    const Geometry = new THREE.PlaneGeometry(400, 400, 1, 1);
    const plane = new THREE.Mesh(Geometry, Material);
    plane.rotation.set(-1, 0, 0);
    plane.position.set(0, 0, -0.1);
    //plane.material.map.offset.y = 1.5;
    plane.receiveShadow = true;
    scene.add(plane);

    this.update = function(time) {
        plane.material.map.offset.y += speed / 2;
    }
}