function SceneManager(canvas) {

    const clock = new THREE.Clock();

    const screenDimensions = {
        width: window.innerWidth,
        height: window.innerHeight
    }

    const scene = buildScene();
    const renderer = buildRender(screenDimensions);
    const camera = buildCamera(screenDimensions);
    const sceneSubjects = createSceneSubjects(scene);

    function buildScene() {
        const scene = new THREE.Scene();
        //scene.background = new THREE.Color(0xffff00);

        return scene;
    }

    function buildRender({ width, height }) {
        const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
        const DPR = (window.devicePixelRatio) ? window.devicePixelRatio : 1;
        renderer.setPixelRatio(DPR);
        renderer.setSize(width, height);
        renderer.setClearColor(0x008000);

        renderer.gammaInput = true;
        renderer.gammaOutput = true;

        return renderer;
    }

    function buildCamera({ width, height }) {
        const aspectRatio = width / height;
        const fieldOfView = 50;
        const nearPlane = 0.1;
        const farPlane = 10000;
        const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);
        camera.position.z = 50;
        return camera;
    }

    function createSceneSubjects(scene) {
        const sceneSubjects = [
            new KeyboardEvents(),
            new GeneralLights(scene),
            new PlayerCar(scene, camera),
            new Road(scene)
        ];

        return sceneSubjects;
    }

    function extendObj(obj1, obj2) {
        for (var key in obj2) {
            if (obj2.hasOwnProperty(key)) {
                obj1[key] = obj2[key];
            }
        }
        return obj1;
    }

    var allSignals = {}
    this.update = function() {
        const elapsedTime = clock.getElapsedTime();

        for (let i = 0; i < sceneSubjects.length; i++) {
            extendObj(allSignals, sceneSubjects[i].signals());
        }
        for (let i = 0; i < sceneSubjects.length; i++) {
            sceneSubjects[i].slots(allSignals);
            sceneSubjects[i].update(elapsedTime);
        }

        renderer.render(scene, camera);
    }

    this.onWindowResize = function() {
        const { width, height } = canvas;

        screenDimensions.width = width;
        screenDimensions.height = height;

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);
    }
}