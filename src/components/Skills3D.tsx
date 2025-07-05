
import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls, Float, Sphere, Box, Torus } from '@react-three/drei';
import * as THREE from 'three';

const SkillSphere = ({ position, text, color }: { position: [number, number, number], text: string, color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.7} />
        <Text
          position={[0, 0, 1.1]}
          fontSize={0.3}
          color="white"
          anchorX="center"
          anchorY="middle"
          font="/fonts/inter-bold.woff"
        >
          {text}
        </Text>
      </mesh>
    </Float>
  );
};

const NetworkLines = () => {
  const linesRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  const positions = [
    [-3, 2, 0], [3, 2, 0], [-3, -2, 0], [3, -2, 0],
    [0, 3, -2], [0, -3, -2], [0, 0, 3]
  ];

  return (
    <group ref={linesRef}>
      {positions.map((pos, i) => (
        <Box key={i} position={pos as [number, number, number]} args={[0.1, 0.1, 2]}>
          <meshBasicMaterial color="#00d4ff" opacity={0.3} transparent />
        </Box>
      ))}
    </group>
  );
};

const Skills3D = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-full h-96 tech-card rounded-2xl animate-pulse" />;

  const skills = [
    { text: "React", position: [-3, 2, 0] as [number, number, number], color: "#61dafb" },
    { text: "Python", position: [3, 2, 0] as [number, number, number], color: "#3776ab" },
    { text: "Node.js", position: [-3, -2, 0] as [number, number, number], color: "#339933" },
    { text: "MongoDB", position: [3, -2, 0] as [number, number, number], color: "#47a248" },
    { text: "AI/ML", position: [0, 3, -2] as [number, number, number], color: "#ff6b6b" },
    { text: "DevOps", position: [0, -3, -2] as [number, number, number], color: "#4ecdc4" },
    { text: "Security", position: [0, 0, 3] as [number, number, number], color: "#ffa726" }
  ];

  return (
    <div className="w-full h-96 tech-card rounded-2xl overflow-hidden">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00d4ff" />
        
        <NetworkLines />
        
        {skills.map((skill, index) => (
          <SkillSphere
            key={index}
            position={skill.position}
            text={skill.text}
            color={skill.color}
          />
        ))}
        
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default Skills3D;
