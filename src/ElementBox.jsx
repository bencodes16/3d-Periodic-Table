import React, { useRef, useState} from 'react'
import { useLoader, useFrame} from '@react-three/fiber'
import { MeshTransmissionMaterial, useTexture} from '@react-three/drei'
import { TextureLoader } from 'three'
import * as THREE from 'three'



const ElementBox = ({position = [0, 0, 0], texturePath, columns=18, rows=10, symbol, onClick, searchTerm, name}) => {
    //const texture = useLoader(TextureLoader, texturePath)
    const meshref = useRef()
    const [hovered, setHovered] = useState(false)

    

    const baseTexture = useTexture("/textures/atlas2.png")

    const texture = baseTexture.clone()
    texture.needsUpdate = true
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping

    const atlasIndex = [position[0]/ 5, position[2] / 5]


    texture.repeat.set(1/columns, 1/rows)
    texture.offset.set(
        atlasIndex[0] / columns,
        1 - (atlasIndex[1] + 1) / rows
    )

    let color = new THREE.Color(1, 1, 1)
    if (["H", "C", "N", "O", "P", "S", "Se"].includes(symbol)){
        color = new THREE.Color("#006188")
    }
    else if (position[0] == 0){
        color = new THREE.Color("#86000C")
    }
    else if (position[0] == 5){
        color = new THREE.Color("#93450D")
    }
    else if (["Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn" ].includes(symbol)) {
        color = new THREE.Color("#98900F") 
    }
    else if (["Al", "Ga", "In", "Sn", "Tl", "Pb", "Bi", "Uut", "Fl", "Uup", "Lv"].includes(symbol)){
        color = new THREE.Color("#026519")
    }
    else if (["B", "Si", "Ge", "As", "Sb", "Te", "Po"].includes(symbol)){
        color = new THREE.Color("#2F746F")
    }
    else if(position[2] == 40){
        color = new THREE.Color("#647c14")
    }
    else if(position[2] == 45){
        color = new THREE.Color("#2f6d2c")
    }
    else if (position[0] == 80){
        color = new THREE.Color("#3C3D69")
    }
    else if (position[0] == 85){
        color = new THREE.Color("#291C50")
    }
    
    const isMatch = name.toLowerCase().startsWith(searchTerm) && searchTerm.length > 0

    useFrame(() => {
        if (meshref.current){
            const targetY =  hovered ? 1: 0
            const currentY = meshref.current.position.y
            const newY = currentY + (targetY - currentY) * 0.1
            meshref.current.position.y = newY

            if (isMatch){
                const targetY2 = 2
                const newY2 = currentY + (targetY2 - currentY) * 0.1
                meshref.current.position.y = newY2
        }
    }
        
    })

    return (
        
        <mesh ref={meshref} position={position} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)} onClick={onClick}>
            <boxGeometry args={[5, 2.5, 5]}/>
            <meshStandardMaterial attach="material-2" map={texture}/>
            <meshBasicMaterial attach="material-1" color={color}/>
            <meshBasicMaterial attach="material-0" color={color}/>
            <meshBasicMaterial attach="material-3" color={color}/>
            <meshBasicMaterial attach="material-4" color={color}/>
            <meshBasicMaterial attach="material-5" color={color}/>
        </mesh>
    )
}

export default ElementBox