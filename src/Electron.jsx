import { Sphere } from "@react-three/drei";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

export default function Electron({radius=1, baseAngle=0, shellNumber=1}) {
    const electronRef = useRef()
    const [angle, setAngle] = useState(baseAngle)
    
    useFrame(({clock}) => {
        const t = clock.getElapsedTime();
        setAngle(baseAngle + t*0.8)
    })

    return(
        <Sphere ref={electronRef} args={[0.1, 32, 32]} position={[radius * 2 * shellNumber * Math.cos(angle), 0, radius * 2 * shellNumber * Math.sin(angle)]}>   
            <meshStandardMaterial color={"white"}/>
        </Sphere>
    )
}
