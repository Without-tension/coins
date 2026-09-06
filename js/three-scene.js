/**
 * Mutual Coins - 3D logo scene (Three.js)
 * Loads HDR environment + GLB model into #threejs-container
 */

// Import Three.js modules
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';

// Wait for DOM to be fully loaded
// document.addEventListener('DOMContentLoaded', () => {
//     initThreeJS();
// });

window.addEventListener('load', () => {
    setTimeout(initThreeJS, 2000); // РјРѕР¶РЅР° РґР°С‚Рё Р·Р°С‚СЂРёРјРєСѓ РґР»СЏ С‰Рµ РјвЂ™СЏРєС€РѕРіРѕ UX
});

function initThreeJS() {
    const container = document.getElementById('threejs-container');

    // Skip if container doesn't exist
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(0, 0.5, 1);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 0.5;
    controls.maxDistance = 10;
    controls.maxPolarAngle = Math.PI / 1.5;
    controls.enabled = false;

    let model;
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationY = 0;
    let targetRotationX = 0;
    let currentRotationY = 0;
    let currentRotationX = 0;

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    let isTouchingModel = false;

    // РџРѕРґС–СЏ РґР»СЏ РјРёС€РєРё
    document.addEventListener('mousemove', function(event) {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -((event.clientY / window.innerHeight) * 2 - 1);
    });

    // РџРѕРґС–С— РґР»СЏ СЃРµРЅСЃРѕСЂРЅРѕРіРѕ РµРєСЂР°РЅСѓ вЂ” С‚С–Р»СЊРєРё РІ РєРѕРЅС‚РµР№РЅРµСЂС–
    let isTouching = false;

    container.addEventListener('touchstart', (event) => {
        isTouching = true;

        const touch = event.touches[0];
        const rect = container.getBoundingClientRect();

        mouseX = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
        mouseY = -((touch.clientY - rect.top) / rect.height) * 2 + 1;
    }, false);

    container.addEventListener('touchmove', (event) => {
        if (!isTouching) return;

        const touch = event.touches[0];
        const rect = container.getBoundingClientRect();

        mouseX = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
        mouseY = -((touch.clientY - rect.top) / rect.height) * 2 + 1;

        event.preventDefault(); // Р·Р±РµСЂС–РіР°С”РјРѕ РїР»Р°РІРЅС–СЃС‚СЊ С‚Р° СѓРЅРёРєР°С”РјРѕ РїСЂРѕРєСЂСѓС‚РєРё
    }, { passive: false });

    // Р—Р°РІР°РЅС‚Р°Р¶РµРЅРЅСЏ HDR С– GLB
    new RGBELoader().load('assets/models/many-coins.hdr', function(texture) {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        scene.environment = texture;

        const loader = new GLTFLoader();
        loader.load(
            'assets/models/Official_3d_logo.glb',
            function(gltf) {
                model = gltf.scene;

                const box = new THREE.Box3().setFromObject(model);
                const center = box.getCenter(new THREE.Vector3());
                model.position.sub(center);

                model.scale.set(0.4, 0.4, 0.4);

                scene.add(model);
                document.getElementById('loading').style.display = 'none'; // С…РѕРІР°С”РјРѕ РєР°СЂС‚РёРЅРєСѓ, СЏРєС‰Рѕ РІСЃРµ РѕРє
            },
            undefined,
            function(error) {
                console.error('РџРѕРјРёР»РєР° Р·Р°РІР°РЅС‚Р°Р¶РµРЅРЅСЏ РјРѕРґРµР»С–:', error);
                // РќР• С…РѕРІР°С”РјРѕ Р·РѕР±СЂР°Р¶РµРЅРЅСЏ
            }
        );
    });

    // РђРЅС–РјР°С†С–СЏ
    function animate() {
        requestAnimationFrame(animate);

        if (model) {
            targetRotationY = mouseX * Math.PI;
            targetRotationX = mouseY * Math.PI * -0.1;

            currentRotationY += (targetRotationY - currentRotationY) * 0.1;
            currentRotationX += (targetRotationX - currentRotationX) * 0.1;

            model.rotation.y = currentRotationY;
            model.rotation.x = -0.13 * Math.PI + currentRotationX;
        }

        controls.update();
        renderer.render(scene, camera);
    }
    animate();

    // РђРґР°РїС‚РёРІ
    window.addEventListener('resize', function() {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });
}
