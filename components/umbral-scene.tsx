"use client"

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'

export default function UmbralScene() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!containerRef.current) return

        const w = window.innerWidth
        const h = window.innerHeight

        // Scene setup
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000)
        camera.position.set(-7, -5, 11)
        camera.lookAt(0, 0, 0)

        const renderer = new THREE.WebGLRenderer({ antialias: true })
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        renderer.setSize(w, h)
        renderer.shadowMap.enabled = true
        renderer.shadowMap.type = THREE.PCFSoftShadowMap
        renderer.setClearColor(0xffffff, 1)
        containerRef.current.appendChild(renderer.domElement)

        // OrbitControls
        const controls = new OrbitControls(camera, renderer.domElement)
        controls.enableDamping = true
        controls.enableZoom = false
        controls.minPolarAngle = Math.PI / 3
        controls.maxPolarAngle = Math.PI / 2.2

        // Shader materials
        const vertexShader = `
      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vPosition;
      void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `

        const fragmentShader = `
      uniform float uTime;
      uniform float uCircleSpacing;
      uniform float uLineWidth;
      uniform float uSpeed;
      uniform float uFadeEdge;
      uniform vec3 uCameraPosition;
      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vPosition;

      void main() {
        vec2 center = vec2(0.5, 0.5);
        vec2 uv = vUv;
        float dist = distance(uv, center);

        float animatedDist = dist - uTime * uSpeed;

        float circle = mod(animatedDist, uCircleSpacing);

        float distFromEdge = min(circle, uCircleSpacing - circle);

        float aaWidth = length(vec2(dFdx(animatedDist), dFdy(animatedDist))) * 2.0;
        float lineAlpha = 1.0 - smoothstep(uLineWidth - aaWidth, uLineWidth + aaWidth, distFromEdge);

        vec3 baseColor = mix(vec3(1.0), vec3(0.0), lineAlpha);

        vec3 normal = normalize(vNormal);
        vec3 viewDir = normalize(uCameraPosition - vPosition);

        vec3 lightDir = normalize(vec3(5.0, 10.0, 5.0));
        float NdotL = max(dot(normal, lightDir), 0.0);

        vec3 diffuse = baseColor * (0.5 + 0.5 * NdotL);

        vec3 reflectDir = reflect(-lightDir, normal);
        float spec = pow(max(dot(viewDir, reflectDir), 0.0), 64.0);
        vec3 specular = vec3(1.0) * spec * 0.8;

        float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 2.0);
        vec3 fresnelColor = vec3(1.0) * fresnel * 0.3;

        vec3 finalColor = diffuse + specular + fresnelColor;

        float edgeFade = smoothstep(0.5 - uFadeEdge, 0.5, dist);
        float alpha = 1.0 - edgeFade;

        gl_FragColor = vec4(finalColor, alpha);
      }
    `

        // Floor with shader material
        const floorGeometry = new THREE.CircleGeometry(20, 200)
        const floorMaterial = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms: {
                uTime: { value: 0.0 },
                uCircleSpacing: { value: 0.06 },
                uLineWidth: { value: 0.02 },
                uSpeed: { value: 0.01 },
                uFadeEdge: { value: 0.2 },
                uCameraPosition: { value: new THREE.Vector3() },
            },
            side: THREE.DoubleSide,
            transparent: true,
        })
        const floor = new THREE.Mesh(floorGeometry, floorMaterial)
        floor.rotation.x = -Math.PI / 2
        floor.position.y = -1
        floor.receiveShadow = true
        scene.add(floor)

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
        scene.add(ambientLight)

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2)
        directionalLight.position.set(5, 10, 5)
        directionalLight.castShadow = true
        directionalLight.shadow.camera.left = -10
        directionalLight.shadow.camera.right = 10
        directionalLight.shadow.camera.top = 10
        directionalLight.shadow.camera.bottom = -10
        directionalLight.shadow.mapSize.width = 2048
        directionalLight.shadow.mapSize.height = 2048
        scene.add(directionalLight)

        // Load 3D model
        const loader = new OBJLoader()
        loader.load(
            'https://cdn.jsdelivr.net/gh/danielyl123/person/person.obj',
            (object) => {
                object.traverse((child) => {
                    if ((child as THREE.Mesh).isMesh) {
                        const mesh = child as THREE.Mesh
                        mesh.material = new THREE.MeshStandardMaterial({
                            color: 0x888888,
                            roughness: 0.7,
                            metalness: 0.3,
                        })
                        mesh.castShadow = true
                        mesh.receiveShadow = true
                    }
                })

                const box = new THREE.Box3().setFromObject(object)
                const center = new THREE.Vector3()
                box.getCenter(center)
                const size = new THREE.Vector3()
                box.getSize(size)

                object.traverse((child) => {
                    if ((child as THREE.Mesh).isMesh && (child as THREE.Mesh).geometry) {
                        const mesh = child as THREE.Mesh
                        mesh.geometry.translate(-center.x, -center.y, -center.z)
                    }
                })

                const maxDim = Math.max(size.x, size.y, size.z)
                const scale = 4 / maxDim
                object.scale.set(scale, scale, scale)

                object.position.set(0, 1, 0)
                object.rotation.y = Math.PI / 3
                object.updateMatrixWorld(true)

                scene.add(object)

                controls.target.set(0, 0, 0)
                controls.update()
            },
            (xhr) => {
                console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
            },
            (error) => {
                console.error('Error loading model:', error)
            }
        )

        // Animation
        let time = 0
        function animate() {
            requestAnimationFrame(animate)

            time += 0.016
            floorMaterial.uniforms.uTime.value = time

            const cameraWorldPos = new THREE.Vector3()
            camera.getWorldPosition(cameraWorldPos)
            floorMaterial.uniforms.uCameraPosition.value.copy(cameraWorldPos)

            renderer.render(scene, camera)
            controls.update()
        }
        animate()

        // Handle resize
        const handleResize = () => {
            const width = window.innerWidth
            const height = window.innerHeight
            renderer.setSize(width, height)
            camera.aspect = width / height
            camera.updateProjectionMatrix()
        }
        window.addEventListener('resize', handleResize)

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize)
            if (containerRef.current && renderer.domElement) {
                containerRef.current.removeChild(renderer.domElement)
            }
            renderer.dispose()
        }
    }, [])

    return <div ref={containerRef} className="fixed inset-0" />
}
