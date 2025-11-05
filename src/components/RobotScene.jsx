import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function RobotScene({ triggerAction }) {
  const mountRef = useRef(null);
  const mixerRef = useRef(null);
  const actionsRef = useRef({});
  const [currentAction, setCurrentAction] = useState("Idle");

  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 1.5, 4);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // === Lighting ===
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 2);
    hemiLight.position.set(0, 20, 0);
    scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 2);
    dirLight.position.set(3, 10, 10);
    scene.add(dirLight);

    const loader = new GLTFLoader();
    const clock = new THREE.Clock();

    loader.load(
      "/models/RobotExpressive.glb",
      (gltf) => {
        const model = gltf.scene;
        model.position.set(0, 0, 0);
        model.scale.set(0.7, 0.7, 0.7);
        scene.add(model);

        const mixer = new THREE.AnimationMixer(model);
        mixerRef.current = mixer;

        gltf.animations.forEach((clip) => {
          const action = mixer.clipAction(clip);
          actionsRef.current[clip.name] = action;

          if (["Wave", "Jump", "Death", "Angry", "Surprised", "Sad"].includes(clip.name)) {
            action.loop = THREE.LoopOnce;
            action.clampWhenFinished = true;
          }
        });

        mixer.addEventListener("finished", (e) => {
          if (e.action.getClip().loop === THREE.LoopOnce) playAction("Idle");
        });

        playAction("Idle");
      },
      undefined,
      (err) => console.error("Error loading model:", err)
    );

    const animate = () => {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();
      if (mixerRef.current) mixerRef.current.update(delta);
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  // === Action Control ===
  const playAction = (name) => {
    if (!actionsRef.current[name]) return;
    const prev = actionsRef.current[currentAction];
    const next = actionsRef.current[name];
    if (prev && prev !== next) prev.fadeOut(0.3);
    next.reset().fadeIn(0.3).play();
    setCurrentAction(name);
  };

  // External trigger (scroll, button, etc.)
  useEffect(() => {
    if (triggerAction) playAction(triggerAction);
  }, [triggerAction]);

  return (
    <div
      ref={mountRef}
      className="absolute right-0 top-0 w-full h-full lg:w-1/2"
      onMouseEnter={() => playAction("Angry")}
      onMouseLeave={() => playAction("Idle")}
      style={{ pointerEvents: "auto", zIndex: 5 }}
    />
  );
}
