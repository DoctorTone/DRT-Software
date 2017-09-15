/**
 * Created by DrTone on 15/09/2017.
 */


class Logo extends BaseApp {
    constructor() {
        super();
    }

    init(container) {
        super.init(container);
        this.rotating = false;
        this.wireframe = false;
        this.rotateObject = undefined;
        this.rotateSpeed = 0.05*Math.PI;
        this.moveSpeed = 0.1;
        this.rotatingUp = false;
        this.rotatingDown = false;
        this.zoomingIn = false;
        this.zoomingOut = false;
        this.labelsVisible = false;
    }

    createScene() {
        //Create scene
        super.createScene();

        //Ground
        let planeGeom = new THREE.PlaneBufferGeometry(5000, 5000, 16, 16);
        let planeMat = new THREE.MeshLambertMaterial( {color: 0x999999} );
        let plane = new THREE.Mesh(planeGeom, planeMat);
        plane.rotation.x = -Math.PI/2;
        plane.position.y = -0.3;
        this.addToScene(plane);

        //Load in model
        let modelConfig = {
            SCALE_X : 30,
            SCALE_Y : 30,
            SCALE_Z : 30,
            POS_X : 0,
            POS_Y : 0,
            POS_Z : 0
        };
        let mtlLoader = new THREE.MTLLoader();
        mtlLoader.setPath("./models/");
        mtlLoader.load("DRT-Text.mtl", materials => {
            materials.preload();

            let objLoader = new THREE.OBJLoader();
            objLoader.setMaterials(materials);
            objLoader.setPath("./models/");
            objLoader.load("DRT-Text.obj", object => {
                object.rotation.x = -Math.PI/6;
                this.addToScene(object);
            })
        });
    }
}

$(document).ready( () => {
    //Init
    let container = document.getElementById("WebGL-output");

    let app = new Logo();
    app.init(container);
    //app.createGUI();
    app.createScene();


    app.run();
});

