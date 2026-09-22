import * as THREE from "three";

export interface OrbitalSphereOptions {
  hue?: number;
  particleCount?: number;
  ringCount?: number;
  speed?: number;
  color?: string;
  accentColor?: string;
}

export const ORBITAL_SPHERE_DEFAULTS: Required<OrbitalSphereOptions> = {
  hue: 260,
  particleCount: 1400,
  ringCount: 4,
  speed: 1.0,
  color: "#a855f7",
  accentColor: "#38bdf8",
};

export interface OrbitalSphereRenderer {
  resize: (width: number, height: number) => void;
  render: () => void;
  dispose: () => void;
}

export function createOrbitalSphereRenderer(
  canvas: HTMLCanvasElement,
  getOptions: () => OrbitalSphereOptions
): OrbitalSphereRenderer {
  const options = { ...ORBITAL_SPHERE_DEFAULTS, ...getOptions() };

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
  camera.position.z = 7;

  let renderer: THREE.WebGLRenderer | null = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    powerPreference: "high-performance",
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

  // Container group for sphere and orbital rings
  const sphereGroup = new THREE.Group();
  scene.add(sphereGroup);

  // 1. Core Particle Sphere
  const particleCount = options.particleCount;
  const sphereGeometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  const baseColor = new THREE.Color("#c084fc");
  const accentColor = new THREE.Color("#38bdf8");

  const radius = 2.2;
  for (let i = 0; i < particleCount; i++) {
    // Fibonacci sphere distribution
    const phi = Math.acos(1 - 2 * (i + 0.5) / particleCount);
    const theta = Math.PI * (1 + Math.sqrt(5)) * i;

    const r = radius + (Math.random() - 0.5) * 0.15;
    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.sin(phi) * Math.sin(theta);
    const z = r * Math.cos(phi);

    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;

    const mix = Math.random();
    const c = baseColor.clone().lerp(accentColor, mix);
    colors[i * 3] = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;
  }

  sphereGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  sphereGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  // Canvas texture for glowing particles
  const particleCanvas = document.createElement("canvas");
  particleCanvas.width = 32;
  particleCanvas.height = 32;
  const ctx = particleCanvas.getContext("2d");
  if (ctx) {
    const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    grad.addColorStop(0, "rgba(255,255,255,1)");
    grad.addColorStop(0.4, "rgba(192,132,252,0.8)");
    grad.addColorStop(1, "rgba(192,132,252,0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 32, 32);
  }
  const particleTexture = new THREE.CanvasTexture(particleCanvas);

  const sphereMaterial = new THREE.PointsMaterial({
    size: 0.07,
    vertexColors: true,
    map: particleTexture,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  const sphereParticles = new THREE.Points(sphereGeometry, sphereMaterial);
  sphereGroup.add(sphereParticles);

  // 2. Encrypted Orbital Rings
  const ringGroups: THREE.Group[] = [];
  const ringCount = options.ringCount;
  const ringRadii = [2.8, 3.4, 4.0, 4.6];
  const ringRotations = [
    { x: 0.4, y: 0.2, speed: 0.003 },
    { x: -0.6, y: 0.8, speed: -0.002 },
    { x: 1.1, y: -0.3, speed: 0.004 },
    { x: -0.2, y: 1.4, speed: -0.0025 },
  ];

  for (let i = 0; i < ringCount; i++) {
    const ringGroup = new THREE.Group();
    const ringRadius = ringRadii[i % ringRadii.length];
    const segments = 180;
    const ringGeo = new THREE.BufferGeometry();
    const ringPos = new Float32Array(segments * 3);

    for (let j = 0; j < segments; j++) {
      const angle = (j / segments) * Math.PI * 2;
      ringPos[j * 3] = Math.cos(angle) * ringRadius;
      ringPos[j * 3 + 1] = Math.sin(angle) * ringRadius;
      ringPos[j * 3 + 2] = 0;
    }

    ringGeo.setAttribute("position", new THREE.BufferAttribute(ringPos, 3));

    const ringMat = new THREE.LineBasicMaterial({
      color: i % 2 === 0 ? 0xc084fc : 0x38bdf8,
      transparent: true,
      opacity: 0.4 - i * 0.05,
      blending: THREE.AdditiveBlending,
    });

    const ringLine = new THREE.LineLoop(ringGeo, ringMat);
    ringGroup.add(ringLine);

    // Luminous Data Nodes along ring
    const nodeCount = 5 + i * 2;
    const nodeGeo = new THREE.BufferGeometry();
    const nodePos = new Float32Array(nodeCount * 3);

    for (let k = 0; k < nodeCount; k++) {
      const a = (k / nodeCount) * Math.PI * 2;
      nodePos[k * 3] = Math.cos(a) * ringRadius;
      nodePos[k * 3 + 1] = Math.sin(a) * ringRadius;
      nodePos[k * 3 + 2] = 0;
    }

    nodeGeo.setAttribute("position", new THREE.BufferAttribute(nodePos, 3));

    const nodeMat = new THREE.PointsMaterial({
      size: 0.12,
      color: i % 2 === 0 ? 0xf472b6 : 0x38bdf8,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const nodePoints = new THREE.Points(nodeGeo, nodeMat);
    ringGroup.add(nodePoints);

    ringGroup.rotation.x = ringRotations[i].x;
    ringGroup.rotation.y = ringRotations[i].y;

    sphereGroup.add(ringGroup);
    ringGroups.push(ringGroup);
  }

  let clock = new THREE.Clock();

  const resize = (w: number, h: number) => {
    if (!renderer) return;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h, false);
  };

  const render = () => {
    if (!renderer) return;
    const elapsedTime = clock.getElapsedTime();
    const currentOpts = getOptions();
    const speedMultiplier = currentOpts.speed ?? 1.0;

    // Rotate core sphere
    sphereGroup.rotation.y = elapsedTime * 0.15 * speedMultiplier;
    sphereGroup.rotation.x = Math.sin(elapsedTime * 0.1) * 0.1;

    // Rotate individual orbital rings
    ringGroups.forEach((rg, idx) => {
      rg.rotation.z += (ringRotations[idx].speed || 0.002) * speedMultiplier;
    });

    renderer.render(scene, camera);
  };

  const dispose = () => {
    if (!renderer) return;
    sphereGeometry.dispose();
    sphereMaterial.dispose();
    particleTexture.dispose();

    ringGroups.forEach((rg) => {
      rg.traverse((child) => {
        if (child instanceof THREE.Mesh || child instanceof THREE.Line || child instanceof THREE.Points) {
          child.geometry.dispose();
          if (Array.isArray(child.material)) {
            child.material.forEach((m) => m.dispose());
          } else {
            child.material.dispose();
          }
        }
      });
    });

    renderer.dispose();
    renderer = null;
  };

  return {
    resize,
    render,
    dispose,
  };
}
