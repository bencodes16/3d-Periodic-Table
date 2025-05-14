import {Sphere} from "@react-three/drei";
import { useMemo, useRef, useState, useEffect} from "react";
import { Vector3, SphereGeometry } from "three";
import { useFrame } from "@react-three/fiber";
import Electron from "./Electron.jsx";

function findShell(electronNum){
    let total = 0
    let shellNum = 0
    while (total < electronNum){
        shellNum += 1
        total += 2 * shellNum ** 2
    }
    return shellNum
}

function maxinShell(n){
    return 2 * n ** 2
}

function numInShell(atomicNumber, electronNum){
    let shellNum =  findShell(electronNum) 
    let total = 0
    for (let i = 1; i < shellNum; i++){
        total += maxinShell(i)
    }
    let inShell = electronNum - total
    return {
        shellElectronCount: Math.min((atomicNumber-total), maxinShell(shellNum)),
        positionInShell : electronNum - total  
    }                                                                   
    
}

console.log(numInShell(1, 1))

export default function Nucleus({atomicNumber, atomicMass, radius=1}) {
    const groupRef = useRef()
    radius = atomicMass > 20 ? 1 : atomicMass > 10 ? (0.01 * atomicMass) + 0.4 : (0.01 * atomicMass) + 0.3;
    const particles = useMemo(() => {
        const arr = [];
        for (let i = 0; i<atomicMass; i++) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            const r = radius * (0.4 + Math.random() * 0.6);
            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);
            arr.push(new Vector3(x, y, z));
        }
        return arr;
    }, [atomicMass, radius])

    useFrame(({clock}) => {
        const t = clock.getElapsedTime()
        if (groupRef.current){
            groupRef.current.position.x = Math.sin(t * 2) * 0.05;
            groupRef.current.position.y = Math.cos(t * 3) * 0.05;
        }
    })

    const angles = [1, 2, 3, 4, 5, 6, 7, 8];

    return(
        <>
        <group ref={groupRef}>
            {particles.map((pos, i) => (
                <Sphere key={i} args={[0.2, 32, 32]} position={pos.toArray()}>
                    <meshStandardMaterial color={i < atomicNumber ? "red" : "blue"}/>
                </Sphere>
            ))}
        </group>
        {[...Array(atomicNumber)].map((_, i) => {
            const {shellElectronCount, positionInShell} = numInShell(atomicNumber, i+1)
            return (
                <Electron key={i} radius={radius} baseAngle={(positionInShell) * (Math.PI * 2) / shellElectronCount} shellNumber={findShell(i+1)}/>
            )
        })}


        </>
    )
}
