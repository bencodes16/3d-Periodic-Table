import React, {useState} from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { PerspectiveCamera, OrbitControls, MeshTransmissionMaterial} from '@react-three/drei'
import ElementBox from './ElementBox.jsx'
import {elements} from "./index.js"
import Nucleus from "./Nucleus.jsx"


function App() {
  const [selectedElement, setSelectedElement] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  
  //const { x, y, z } = useControls('Camera Position', {
  //  x: { value: 10, min: -50, max: 100, step: 1 },
  //  y: { value: 10, min: -50, max: 100, step: 1 },
  //  z: { value: 10, min: -50, max: 100, step: 1 },
  //})

  //const { targetX, targetY, targetZ } = useControls('Orbit Target', {
  //  targetX: { value: 33, min: -50, max: 50 },
  //  targetY: { value: 2, min: -50, max: 50 },
  //  targetZ: { value: 14, min: -50, max: 50 },
  //})
  return (
    <div className=' relative h-screen w-full'>

      <div className='absolute top-4 left-4 bg-black/80 text-white p-4 rounded z-50'>
        <h1 className='headtext'>3d Periodic Table</h1>
        <div className='flex flex-wrap px-2 py-1'>
          <h2 className='text-lg font-CalSans px-2 py-1'>Search for an element</h2>
          <input className="px-2 py-1 bg-grey-400 text-white rounded hover:bg-grey-500 hover:cursor-pointer" type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value.toLowerCase())} placeholder="Enter element name"/>
          <button className="px-3 py-1 mx-3 bg-grey-400 text-white rounded hover:bg-grey-500 hover:cursor-pointer" onClick={() => setSearchTerm('')}>Clear</button>
        </div>
      </div>
      
      <Canvas className='w-full h-full'>
        <color attach="background" args={["#000000"]} />
        <PerspectiveCamera makeDefault position={[41, 76, 54]}/>
        <OrbitControls enablePan={false} enableZoom={true} maxDistance={200} minAzimuthAngle={-Infinity} maxAzimuthAngle={Infinity} minPolarAngle={-Math.PI} maxPolarAngle={Math.PI} target={[41, -5, 24]}/>
        <ambientLight intensity={0.5}/>
        <directionalLight position={[2, 2, 5]}/>
        {elements.map((element, index) => (
          <ElementBox 
            key={index} 
            position={element.position} 
            symbol={element.Symbol} 
            name={element.Name} 
            atomicNumber={element['Atomic Number']} 
            atomicMass={element['Atomic Mass']} 
            phase={element.Phase}
            searchTerm = {searchTerm}
            onClick={() => setSelectedElement(element)
            } 
            />
        ))}
      </Canvas>


      {selectedElement && (
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-grey-300/90 text-white p-4 rounded shadow-lg z-50'>
          <p className='text-3xl font-CalSans'>{selectedElement.Name}</p>
          <p className="text-xl font-CalSans">Symbol: {selectedElement.Symbol}</p>
          <p className="text-xl font-CalSans">Atomic Number: {selectedElement['Atomic Number']}</p>
          <p className="text-xl font-CalSans">Atomic Mass: {selectedElement['Atomic Mass']}</p>
          <p className="text-xl font-CalSans">Phase: {selectedElement.Phase}</p>
          <button className='mt-2 px-3 py-1 bg-grey-400 text-white rounded hover:bg-grey-500 hover:cursor-pointer' onClick={() => setSelectedElement(null)}>Close</button>
          <Canvas className='w-full h-full mt-2 rounded '>
            <color attach="background" args={["#000000"]} />
            <PerspectiveCamera makeDefault position={[10, 1, 5]}/>
            <ambientLight intensity={1.5}/>
            <directionalLight position={[2, 2, 5]}/>
            <Nucleus atomicMass={Math.round(selectedElement["Atomic Mass"])} atomicNumber={selectedElement["Atomic Number"]}/>
            <OrbitControls/>
            </Canvas>
        </div>
      )}
    </div>


  )
}

export default App
