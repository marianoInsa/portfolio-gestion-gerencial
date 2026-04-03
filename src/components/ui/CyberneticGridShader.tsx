'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const MOBILE_USER_AGENT_REGEX = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

function isWebGLSupported() {
  try {
    const canvas = document.createElement('canvas');
    return Boolean(canvas.getContext('webgl2') || canvas.getContext('webgl'));
  } catch {
    return false;
  }
}

function shouldUseLowPowerMode() {
  const navigatorWithHints = navigator as Navigator & { deviceMemory?: number };
  const isMobile = MOBILE_USER_AGENT_REGEX.test(navigator.userAgent);
  const lowMemory =
    typeof navigatorWithHints.deviceMemory === 'number' && navigatorWithHints.deviceMemory <= 4;
  const lowCpu = typeof navigator.hardwareConcurrency === 'number' && navigator.hardwareConcurrency <= 4;
  return isMobile || lowMemory || lowCpu;
}

export default function CyberneticGridShader() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !isWebGLSupported()) {
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const lowPowerMode = shouldUseLowPowerMode();

    const maxDpr = prefersReducedMotion ? 1 : lowPowerMode ? 1.25 : 2;
    const targetFps = lowPowerMode ? 30 : 60;
    const frameInterval = 1 / targetFps;

    const renderer = new THREE.WebGLRenderer({ antialias: !lowPowerMode, alpha: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, maxDpr));
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';
    renderer.domElement.style.opacity = lowPowerMode ? '0.5' : '0.62';
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const timer = new THREE.Timer();

    const vertexShader = `
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      precision highp float;
      uniform vec2 iResolution;
      uniform float iTime;
      uniform vec2 iMouse;

      float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898, 78.233)))
                     * 43758.5453123);
      }

      void main() {
        vec2 uv = (gl_FragCoord.xy - 0.5 * iResolution.xy) / iResolution.y;
        vec2 mouse = (iMouse - 0.5 * iResolution.xy) / iResolution.y;

        float t = iTime * 0.2;
        float mouseDist = length(uv - mouse);

        float warp = sin(mouseDist * 20.0 - t * 4.0) * 0.1;
        warp *= smoothstep(0.4, 0.0, mouseDist);
        uv += warp;

        vec2 gridUv = abs(fract(uv * 10.0) - 0.5);
        float line = pow(1.0 - min(gridUv.x, gridUv.y), 50.0);

        vec3 gridColor = vec3(0.1, 0.5, 1.0);
        vec3 color = gridColor * line * (0.5 + sin(t * 2.0) * 0.2);

        float energy = sin(uv.x * 20.0 + t * 5.0) * sin(uv.y * 20.0 + t * 3.0);
        energy = smoothstep(0.8, 1.0, energy);
        color += vec3(1.0, 0.2, 0.8) * energy * line;

        float glow = smoothstep(0.1, 0.0, mouseDist);
        color += vec3(1.0) * glow * 0.5;

        color += random(uv + t * 0.1) * 0.05;

        gl_FragColor = vec4(color, 1.0);
      }
    `;

    const uniforms = {
      iTime: { value: 0 },
      iResolution: { value: new THREE.Vector2() },
      iMouse: {
        value: new THREE.Vector2(0, 0),
      },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      transparent: true,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const renderFrame = (timeMs?: number) => {
      if (typeof timeMs === 'number') {
        timer.update(timeMs);
      } else {
        timer.update();
      }

      uniforms.iTime.value = timer.getElapsed();
      renderer.render(scene, camera);
    };

    let hasReceivedPointerInput = false;

    const updateMouse = (clientX: number, clientY: number) => {
      const rect = container.getBoundingClientRect();
      const localX = THREE.MathUtils.clamp(clientX - rect.left, 0, rect.width);
      const localY = THREE.MathUtils.clamp(clientY - rect.top, 0, rect.height);
      uniforms.iMouse.value.set(localX, rect.height - localY);
      hasReceivedPointerInput = true;
    };

    const onResize = () => {
      const rect = container.getBoundingClientRect();
      const width = Math.max(1, Math.floor(rect.width));
      const height = Math.max(1, Math.floor(rect.height));
      renderer.setSize(width, height, false);
      uniforms.iResolution.value.set(width, height);

      if (!hasReceivedPointerInput) {
        uniforms.iMouse.value.set(width * 0.5, height * 0.5);
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      updateMouse(event.clientX, event.clientY);
    };

    const onPointerDown = (event: PointerEvent) => {
      updateMouse(event.clientX, event.clientY);
    };

    const onTouchStart = (event: TouchEvent) => {
      const touch = event.touches[0] ?? event.changedTouches[0];
      if (!touch) {
        return;
      }

      updateMouse(touch.clientX, touch.clientY);
    };

    const onTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0] ?? event.changedTouches[0];
      if (!touch) {
        return;
      }

      updateMouse(touch.clientX, touch.clientY);
    };

    let rafId = 0;
    let lastFrameTime = 0;
    let running = true;

    const animate = (timeMs: number) => {
      if (!running) {
        return;
      }

      const seconds = timeMs * 0.001;
      if (seconds - lastFrameTime >= frameInterval) {
        lastFrameTime = seconds;
        renderFrame(timeMs);
      }

      rafId = window.requestAnimationFrame(animate);
    };

    const onVisibilityChange = () => {
      running = document.visibilityState === 'visible';
      if (running && !prefersReducedMotion) {
        lastFrameTime = 0;
        rafId = window.requestAnimationFrame(animate);
      } else {
        window.cancelAnimationFrame(rafId);
      }
    };

    const resizeObserver = new ResizeObserver(onResize);
    resizeObserver.observe(container);

    window.addEventListener('resize', onResize);
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerdown', onPointerDown, { passive: true });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    document.addEventListener('visibilitychange', onVisibilityChange);

    onResize();

    if (prefersReducedMotion) {
      renderFrame(performance.now());
    } else {
      rafId = window.requestAnimationFrame(animate);
    }

    return () => {
      running = false;
      window.cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      window.removeEventListener('resize', onResize);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('visibilitychange', onVisibilityChange);

      const canvas = renderer.domElement;
      if (canvas.parentNode) {
        canvas.parentNode.removeChild(canvas);
      }

      material.dispose();
      geometry.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="global-shader-bg global-shader-fallback"
      aria-hidden="true"
      data-shader-container
    />
  );
}
